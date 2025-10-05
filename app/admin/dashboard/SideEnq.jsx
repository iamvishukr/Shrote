"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as XLSX from "xlsx";

export default function SideEnq() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const snapshot = await getDocs(
          query(collection(db, "sideEnq"), orderBy("timestamp", "desc"))
        );
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
        setFilteredData(list);
      } catch (error) {
        console.log("Error fetching side enquiries:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (end) end.setHours(23, 59, 59);

    const filtered = data.filter((item) => {
      const ts = item.timestamp
        ? item.timestamp.toDate
          ? item.timestamp.toDate()
          : new Date(item.timestamp)
        : null;
      if (!ts) return false;

      if (start && ts < start) return false;
      if (end && ts > end) return false;

      return true;
    });

    setFilteredData(filtered);
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setFilteredData(data);
  };

  const handleExport = () => {
    const exportData = filteredData.map(({ id, timestamp, ...rest }) => ({
      ...rest,
      timestamp: timestamp?.toDate
        ? timestamp.toDate().toLocaleString()
        : timestamp,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SideEnq");
    XLSX.writeFile(workbook, "SideEnq.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-7xl mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden">
       
        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-0.5">
                Start Date
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 text-slate-600 rounded-[15px] text-sm focus:ring focus:ring-blue-400 focus:border-blue-400"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-0.5">
                End Date
              </label>
              <input
                type="date"
                className="w-full p-2 border text-slate-600 border-gray-300 rounded-[15px] text-sm focus:ring focus:ring-blue-400 focus:border-blue-400"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-1">
            <button
              className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium"
              onClick={handleFilter}
            >
              Apply Filters
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1.5 rounded-md text-sm font-medium"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="bg-slate-600  text-white px-4 py-1.5 rounded-md text-sm font-medium ml-auto"
              onClick={handleExport}
            >
              Export to Excel
            </button>
          </div>
        </div>

        
        <div className="px-6 py-4 bg-gray-400 border-b border-gray-200">
          <p className="text-sm text-blue-800 font-medium">
            Showing {filteredData.length} of {data.length} submissions
          </p>
        </div>

        
        <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-4 text-gray-600">Loading submissions...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">
                No submissions found matching your criteria
              </p>
            </div>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-400 text-left text-gray-600 uppercase text-sm font-medium">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Mobile</th>
                  <th className="p-4 hidden md:table-cell">Message</th>
                  <th className="p-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((item) => {
                  const ts = item.timestamp
                    ? item.timestamp.toDate
                      ? item.timestamp.toDate()
                      : new Date(item.timestamp)
                    : null;
                  return (
                    <tr key={item.id} >
                      <td className="p-4 font-medium capitalize">{item.name}</td>
                      <td className="p-4 text-blue-600 ">{item.email}</td>
                      <td className="p-4 capitalize">{item.mobile}</td>
                      <td className="p-4 hidden md:table-cell capitalize">
                        {item.message}
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {ts ? ts.toLocaleString() : "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
