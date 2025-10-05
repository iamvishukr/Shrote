"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editing, setEditing] = useState(false);
  const [statusMap, setStatusMap] = useState({}); 

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "users"));
      const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(list);

     
      const map = {};
      list.forEach((u) => {
        map[u.uId] = u.status ?? false; 
      });
      setStatusMap(map);
    } catch (err) {
      console.log("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !phone || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCred.user.uid;

      await setDoc(doc(db, "users", uid), {
        name,
        email,
        phone,
        uId: uid,
        userType,
        status: false, 
      });

      setSuccess("User created successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setUserType("user");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong");
    }
  };

  const handleStatusChange = (uid, value) => {
    setStatusMap((prev) => ({ ...prev, [uid]: value }));
  };

  const saveStatus = async () => {
    try {
      for (const uid in statusMap) {
        await setDoc(
          doc(db, "users", uid),
          { status: statusMap[uid] },
          { merge: true }
        );
      }
      setEditing(false);
      fetchUsers();
    } catch (err) {
      console.log(err);
      setError("Error saving status");
    }
  };

  return (
    <div className="flex min-h-screen gap-6 p-6 bg-gray-200">
      
      <div className="w-1/2 bg-gray-400 rounded-xl shadow-md p-4 overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User List</h2>
          <div className="flex gap-2">
            {!editing && (
              <button
                className="bg-slate-500 text-white px-3 py-1 rounded"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
            {editing && (
              <button
                className="bg-slate-500 text-white px-3 py-1 rounded"
                onClick={saveStatus}
              >
                Save
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <p>Loading users...</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-400">
                <th className="text-slate-600 p-2">Name</th>
                <th className="text-slate-600 p-2">Email</th>
                <th className="text-slate-600 p-2">Phone</th>
                <th className="text-slate-600 p-2">User Type</th>
                <th className="text-slate-600 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.uId}>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone}</td>
                  <td className="p-2 capitalize">{user.userType}</td>
                  <td className="p-2">
                    {editing ? (
                      <select
                        value={statusMap[user.uId] ? "active" : "inactive"}
                        onChange={(e) =>
                          handleStatusChange(
                            user.uId,
                            e.target.value === "active"
                          )
                        }
                        className="border px-2 text-gray-600 py-1 rounded"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded ${
                          user.status
                            ? " text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

     
      <div className="w-1/2 bg-gray-400 rounded-xl max-h-[80vh] shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create New User</h2>
        {error && <p className="text-red-700 mb-2">{error}</p>}
        {success && <p className="text-gray-900 mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 text-gray-600 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border text-gray-600 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 text-gray-600 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border text-gray-600 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="border p-2 text-gray-600 rounded"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button
            type="submit"
            className="bg-slate-500 text-white px-4 py-2 rounded"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
