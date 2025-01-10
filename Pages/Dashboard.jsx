import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { FiBarChart, FiUsers, FiCalendar, FiMenu, FiLogOut, FiSearch, FiPlus, FiEdit, FiTrash2, FiX } from "react-icons/fi";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebaseConfig";
import { useMediaQuery } from 'react-responsive';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f8fafc'
  },
  sidebar: {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'width 0.3s ease-in-out',
    width: '256px',
    position: 'relative'
  },
  sidebarCollapsed: {
    width: '80px'
  },
  sidebarHeader: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  menuButton: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f3f4f6',
    cursor: 'pointer',
    border: 'none'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.75rem 1rem',
    marginBottom: '0.5rem',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s'
  },
  navItemActive: {
    backgroundColor: '#eef2ff',
    color: '#4f46e5'
  },
  navItemIcon: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '1rem'
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
    overflowY: 'auto'
  },
  pageTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '2rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: '500'
  },
  primaryButton: {
    background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.1)'
  },
  deleteButton: {
    backgroundColor: '#fee2e2',
    color: '#dc2626'
  },
  editButton: {
    backgroundColor: '#fef3c7',
    color: '#b45309',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #e5e7eb',
    outline: 'none',
    transition: 'all 0.2s'
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    borderRadius: '0.75rem',
    border: '1px solid #e5e7eb',
    outline: 'none',
    transition: 'all 0.2s',
    marginBottom: '1.5rem'
  },
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '30%',
    transform: 'translateY(-50%)',
    color: '#9ca3af'
  },
  modal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '28rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1.5rem'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem'
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937'
  },
  closeButton: {
    padding: '0.5rem',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '1.5rem'
  }
};

const MobileStyles = {
  container: {
    flexDirection: 'column',
  },
  sidebar: {
    width: '100%',
    height: 'auto',
  },
  sidebarCollapsed: {
    width: '100%',
  },
  mainContent: {
    padding: '1rem',
  },
  grid: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  modalContent: {
    width: '90%',
    maxWidth: '90%',
    padding: '1rem',
  },
};

const SmallScreenStyles = {
  pageTitle: {
    fontSize: '1.5rem',
  },
  card: {
    padding: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
  },
  input: {
    padding: '0.5rem 0.75rem',
  },
  searchInput: {
    padding: '0.5rem 0.75rem 0.5rem 2.5rem',
  },
};

const db = getFirestore(app);
const auth = getAuth(app);

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    JSON.parse(localStorage.getItem('isLogin') || 'false')
  );
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [isAddingSchedule, setIsAddingSchedule] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    contactNo: "",
    projectBrief: "",
  });

  const [newSchedule, setNewSchedule] = useState({
    date: "",
    time: "",
    email: "",
  });

  const [overviewCounts, setOverviewCounts] = useState({
    total: 0,
    contacts: 0,
    schedules: 0,
  });

  const sidebarItems = [
    { name: "Overview", icon: FiBarChart, tab: "overview", color: "#2563eb" },
    { name: "Contacts", icon: FiUsers, tab: "contacts", color: "#059669" },
    { name: "Schedules", icon: FiCalendar, tab: "schedules", color: "#7c3aed" },
  ];

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallScreen = useMediaQuery({ maxWidth: 480 });

  const responsiveStyles = {
    ...(isMobile ? MobileStyles : {}),
    ...(isSmallScreen ? SmallScreenStyles : {}),
  };

  const finalStyles = {
    ...styles,
    ...responsiveStyles,
  };


  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          const contactsSnapshot = await getDocs(collection(db, "contacts"));
          const contactData = contactsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactData);

          const schedulesSnapshot = await getDocs(collection(db, "schedules"));
          const scheduleData = schedulesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setSchedules(scheduleData);

          setOverviewCounts({
            total: contactData.length + scheduleData.length,
            contacts: contactData.length,
            schedules: scheduleData.length,
          });
        } catch (error) {
          console.error("Error fetching data: ", error);
          toast.error("Error fetching data");
        }
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userId, password);
      setIsLoggedIn(true);
      localStorage.setItem('isLogin', true);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login error: ", error);
      toast.error("Invalid credentials");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem('isLogin', false);
      setIsLoggedIn(false);
      setUserId("");
      setPassword("");
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Logout error: ", error);
      toast.error("Error logging out");
    }
  };

  const handleAddContact = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), newContact);
      setContacts([...contacts, { id: docRef.id, ...newContact }]);
      setIsAddingContact(false);
      setNewContact({ name: "", email: "", contactNo: "", projectBrief: "" });
      toast.success("Contact added successfully!");
    } catch (error) {
      console.error("Error adding contact: ", error);
      toast.error("Error adding contact");
    }
  };

  const handleAddSchedule = async () => {
    try {
      const docRef = await addDoc(collection(db, "schedules"), newSchedule);
      setSchedules([...schedules, { id: docRef.id, ...newSchedule }]);
      setIsAddingSchedule(false);
      setNewSchedule({ date: "", time: "", email: "" });
      toast.success("Schedule added successfully!");
    } catch (error) {
      console.error("Error adding schedule: ", error);
      toast.error("Error adding schedule");
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      setContacts(contacts.filter((contact) => contact.id !== id));
      toast.success("Contact deleted successfully!");
    } catch (error) {
      console.error("Error deleting contact: ", error);
      toast.error("Error deleting contact");
    }
  };

  const handleDeleteSchedule = async (id) => {
    try {
      await deleteDoc(doc(db, "schedules", id));
      setSchedules(schedules.filter((schedule) => schedule.id !== id));
      toast.success("Schedule deleted successfully!");
    } catch (error) {
      console.error("Error deleting schedule: ", error);
      toast.error("Error deleting schedule");
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSchedules = schedules.filter(
    (schedule) =>
      schedule.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.date.includes(searchTerm)
  );

  if (!isLoggedIn) {
    return (
      <div style={finalStyles.modal}>
        <div style={finalStyles.modalContent}>
          <h2 style={{...finalStyles.modalTitle, textAlign: 'center', marginBottom: '1.5rem'}}>
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <div style={finalStyles.formGroup}>
              <label style={finalStyles.label}>User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                style={finalStyles.input}
              />
            </div>
            <div style={finalStyles.formGroup}>
              <label style={finalStyles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={finalStyles.input}
              />
            </div>
            <button
              type="submit"
              style={{...finalStyles.button, ...finalStyles.primaryButton, width: '100%'}}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div style={{...styles.container, ...(isMobile ? responsiveStyles.container : {})}}>
        <div style={{...styles.sidebar, ...(isMobile ? responsiveStyles.sidebar : {}), ...(sidebarOpen ? {} : styles.sidebarCollapsed), ...(isMobile && !sidebarOpen ? responsiveStyles.sidebarCollapsed : {}), position: 'relative', paddingTop: isSmallScreen ? '3rem' : '0'}}>
          <div style={styles.sidebarHeader}>
            <h1 style={{...styles.logo, opacity: sidebarOpen ? 1 : 0}}>Admin</h1>
            {/* <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={styles.menuButton}
            >
              <FiMenu />
            </button> */}
          </div>
          <nav style={{padding: '0 1rem'}}>
            {sidebarItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                style={{
                  ...styles.navItem,
                  ...(activeTab === item.tab ? styles.navItemActive : {})
                }}
              >
                <item.icon style={{...styles.navItemIcon, color: item.color}} />
                <span style={{
                  opacity: sidebarOpen ? 1 : 0,
                  transition: 'opacity 0.2s'
                }}>
                  {item.name}
                </span>
              </button>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            style={{
              ...styles.button,
              ...styles.deleteButton,
              ...(isSmallScreen
                ? {
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.5rem',
                    minWidth: 'auto',
                  }
                : {
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1rem',
                    right: '1rem',
                  }),
              ...(isSmallScreen ? responsiveStyles.button : {}),
            }}
          >
            <FiLogOut style={{ marginRight: isSmallScreen ? '0' : '0.5rem' }} />
            {!isSmallScreen && <span style={{ opacity: sidebarOpen ? 1 : 0 }}>Logout</span>}
          </button>
        </div>

        <main style={{...styles.mainContent, ...(isMobile ? responsiveStyles.mainContent : {})}}>
          {activeTab === "overview" && (
            <div>
              <h2 style={{...styles.pageTitle, ...(isSmallScreen ? responsiveStyles.pageTitle : {})}}>Overview</h2>
              <div style={{...styles.grid, ...(isMobile ? responsiveStyles.grid : {})}}>
                <div style={{...styles.card, background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', ...(isSmallScreen ? responsiveStyles.card : {})}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#1e40af'}}>Total</h3>
                  <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginTop: '0.5rem'}}>
                    {overviewCounts.total}
                  </p>
                </div>
                <div style={{...styles.card, background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', ...(isSmallScreen ? responsiveStyles.card : {})}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#065f46'}}>Contacts</h3>
                  <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', marginTop: '0.5rem'}}>
                    {overviewCounts.contacts}
                  </p>
                </div>
                <div style={{...styles.card, background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', ...(isSmallScreen ? responsiveStyles.card : {})}}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#5b21b6'}}>Schedules</h3>
                  <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3aed', marginTop: '0.5rem'}}>
                    {overviewCounts.schedules}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contacts" && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                <h2 style={{...styles.pageTitle, ...(isSmallScreen ? responsiveStyles.pageTitle : {})}}>Contacts</h2>
                <button
                  onClick={() => setIsAddingContact(true)}
                  style={{...styles.button, ...styles.primaryButton, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  <FiPlus style={{marginRight: '0.5rem'}} /> Add Contact
                </button>
              </div>
              <div style={styles.searchContainer}>
                <FiSearch style={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{...styles.searchInput, ...(isSmallScreen ? responsiveStyles.searchInput : {})}}
                />
              </div>
              <div style={{...styles.grid, ...(isMobile ? responsiveStyles.grid : {})}}>
                {filteredContacts.map((contact) => (
                  <div key={contact.id} style={{...styles.card, ...(isSmallScreen ? responsiveStyles.card : {})}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem'}}>
                      {contact.name}
                    </h3>
                    <p style={{color: '#4b5563', marginBottom: '0.5rem'}}>
                      <strong>Email:</strong> {contact.email}
                    </p>
                    <p style={{color: '#4b5563', marginBottom: '0.5rem'}}>
                      <strong>Contact:</strong> {contact.contactNo}
                    </p>
                    <p style={{color: '#4b5563', marginBottom: '1rem'}}>
                      <strong>Message:</strong> {contact.projectBrief}
                    </p>
                    <div style={{display: 'flex', gap: '0.75rem'}}>
                      <button style={{...styles.button, ...styles.editButton, flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}>
                        <FiEdit style={{marginRight: '0.5rem'}} /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        style={{...styles.button, ...styles.deleteButton, flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}
                      >
                        <FiTrash2 style={{marginRight: '0.5rem'}} /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "schedules" && (
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                <h2 style={{...styles.pageTitle, ...(isSmallScreen ? responsiveStyles.pageTitle : {})}}>Schedules</h2>
                <button
                  onClick={() => setIsAddingSchedule(true)}
                  style={{...styles.button, ...styles.primaryButton, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  <FiPlus style={{marginRight: '0.5rem'}} /> Add Schedule
                </button>
              </div>
              <div style={styles.searchContainer}>
                <FiSearch style={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search schedules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{...styles.searchInput, ...(isSmallScreen ? responsiveStyles.searchInput : {})}}
                />
              </div>
              <div style={{...styles.grid, ...(isMobile ? responsiveStyles.grid : {})}}>
                {filteredSchedules.map((schedule) => (
                  <div key={schedule.id} style={{...styles.card, ...(isSmallScreen ? responsiveStyles.card : {})}}>
                    <p style={{color: '#4b5563', marginBottom: '0.5rem'}}>
                      <strong>Date:</strong> {schedule.date}
                    </p>
                    <p style={{color: '#4b5563', marginBottom: '0.5rem'}}>
                      <strong>Time:</strong> {schedule.time}
                    </p>
                    <p style={{color: '#4b5563', marginBottom: '1rem'}}>
                      <strong>Email:</strong> {schedule.email}
                    </p>
                    <button
                      onClick={() => handleDeleteSchedule(schedule.id)}
                      style={{...styles.button, ...styles.deleteButton, width: '100%', ...(isSmallScreen ? responsiveStyles.button : {})}}
                    >
                      <FiTrash2 style={{marginRight: '0.5rem'}} /> Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add Contact Modal */}
      {isAddingContact && (
        <div style={finalStyles.modal}>
          <div style={{...styles.modalContent, ...(isMobile ? responsiveStyles.modalContent : {})}}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Add New Contact</h2>
              <button
                onClick={() => setIsAddingContact(false)}
                style={styles.closeButton}
              >
                <FiX />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddContact();
            }}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact No.</label>
                <input
                  type="text"
                  value={newContact.contactNo}
                  onChange={(e) => setNewContact({ ...newContact, contactNo: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Project Brief</label>
                <textarea
                  value={newContact.projectBrief}
                  onChange={(e) => setNewContact({ ...newContact, projectBrief: e.target.value })}
                  style={{...styles.input, minHeight: '100px', resize: 'vertical', ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.buttonGroup}>
                <button
                  type="submit"
                  style={{...styles.button, ...styles.primaryButton, flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  Add Contact
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingContact(false)}
                  style={{...styles.button, backgroundColor: '#f3f4f6', color: '#374151', flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Schedule Modal */}
      {isAddingSchedule && (
        <div style={finalStyles.modal}>
          <div style={{...styles.modalContent, ...(isMobile ? responsiveStyles.modalContent : {})}}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Add New Schedule</h2>
              <button
                onClick={() => setIsAddingSchedule(false)}
                style={styles.closeButton}
              >
                <FiX />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddSchedule();
            }}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Date</label>
                <input
                  type="date"
                  value={newSchedule.date}
                  onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Time</label>
                <input
                  type="time"
                  value={newSchedule.time}
                  onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  value={newSchedule.email}
                  onChange={(e) => setNewSchedule({ ...newSchedule, email: e.target.value })}
                  required
                  style={{...styles.input, ...(isSmallScreen ? responsiveStyles.input : {})}}
                />
              </div>
              <div style={styles.buttonGroup}>
                <button
                  type="submit"
                  style={{...styles.button, ...styles.primaryButton, flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  Add Schedule
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingSchedule(false)}
                  style={{...styles.button, backgroundColor: '#f3f4f6', color: '#374151', flex: 1, ...(isSmallScreen ? responsiveStyles.button : {})}}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

