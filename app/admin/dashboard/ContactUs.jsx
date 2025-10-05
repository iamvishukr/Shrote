"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as XLSX from "xlsx";

export default function ContactUs() {
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
          query(collection(db, "contactUs"), orderBy("timestamp", "desc"))
        );
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(list);
        setFilteredData(list);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

 
  const handleFilter = () => {
    if (!startDate && !endDate && !searchTerm) return setFilteredData(data);

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (end) end.setHours(23, 59, 59); 

    const filtered = data.filter((item) => {
   
      if (start || end) {
        const ts = item.timestamp
          ? item.timestamp.toDate
            ? item.timestamp.toDate()
            : new Date(item.timestamp)
          : null;

        if (ts) {
          if (start && ts < start) return false;
          if (end && ts > end) return false;
        } else {
          return false;
        }
      }

 
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          (item.name && item.name.toLowerCase().includes(searchLower)) ||
          (item.email && item.email.toLowerCase().includes(searchLower)) ||
          (item.mobile && item.mobile.toLowerCase().includes(searchLower)) ||
          (item.service && item.service.toLowerCase().includes(searchLower)) ||
          (item.city && item.city.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });

    setFilteredData(filtered);
  };


  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setSearchTerm("");
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
    XLSX.utils.book_append_sheet(workbook, worksheet, "ContactUs");
    XLSX.writeFile(workbook, "ContactUs.xlsx");
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

    
        <div className="overflow-x-auto">
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
            <table className="w-full">
              <thead>
                <tr className="bg-gray-400 text-left text-gray-600 uppercase text-sm font-medium">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Mobile</th>
                  <th className="p-4 hidden lg:table-cell">Address</th>
                  <th className="p-4">City</th>
                  <th className="p-4 hidden md:table-cell">Service</th>
                  <th className="p-4 hidden xl:table-cell">Message</th>
                  <th className="p-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="p-4 font-medium capitalize">{item.name}</td>
                    <td className="p-4 text-blue-600 ">{item.email}</td>
                    <td className="p-4 capitalize">{item.mobile}</td>
                    <td className="p-4 hidden lg:table-cell capitalize">
                      {item.address}
                    </td>
                    <td className="p-4 capitalize">{item.city}</td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full capitalize">
                        {item.service}
                      </span>
                    </td>
                    <td className="p-4 hidden xl:table-cell">
                      <div
                        className="max-w-xs truncate capitalize"
                        title={item.message}
                      >
                        {item.message}
                      </div>
                    </td>

                    <td className="p-4 text-sm text-gray-500">
                      {item.timestamp?.toDate
                        ? item.timestamp.toDate().toLocaleString()
                        : item.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <style jsx global>{`
        /* Custom scrollbar for the table */
        .overflow-x-auto::-webkit-scrollbar {
          height: 8px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Animation for table rows */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        tbody tr {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
