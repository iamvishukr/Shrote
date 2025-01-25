import React, { useState, useEffect } from 'react'
import { addDays, format, isSameDay } from 'date-fns'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Dialog"
import { X } from 'lucide-react'
import app from "../../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function ScheduleCallDialog({ isOpen, onClose }) {
  const db = getFirestore(app);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [dateRange, setDateRange] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const today = new Date();
    const range = Array.from({ length: 30 }, (_, i) => addDays(today, i));
    setDateRange(range);
  }, []);

  const handlePreviousDate = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextDate = () => {
    if (startIndex < dateRange.length - 7) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleBooking = async () => {
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const scheduleData = {
      email,
      phone,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedTime,
      timestamp: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "schedules"), scheduleData);
      alert("Meeting Scheduled Successfully");
      onClose();
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-[#1C1C1C] text-white border-gray-800">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-normal">
              Schedule a meeting 
            </DialogTitle>
            <button
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date selection */}
          <div>
            <h3 className="mb-4 text-sm font-normal">
              What date works best for a call?
            </h3>
            <div className="flex justify-between">
              <button
                className="text-gray-400 hover:text-white"
                onClick={handlePreviousDate}
                disabled={startIndex === 0}
              >
                &lt;
              </button>
              <div className="grid grid-cols-7 gap-1 text-center text-sm flex-grow">
                {dateRange.slice(startIndex, startIndex + 7).map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => setSelectedDate(date)}
                    className={`rounded-lg py-3 text-center transition-colors
                      ${isSameDay(selectedDate, date)
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-gray-800'
                      }`}
                  >
                    <div className="font-medium">{format(date, 'd')}</div>
                    <div className="text-xs text-gray-400">{format(date, 'MMM')}</div>
                  </button>
                ))}
              </div>
              <button
                className="text-gray-400 hover:text-white"
                onClick={handleNextDate}
                disabled={startIndex >= dateRange.length - 7}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Time selection */}
          <div>
            <h3 className="mb-4 text-sm font-normal">
              What time works?
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-lg py-2 text-sm transition-colors
                    ${selectedTime === time 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Email input */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border text-black border-gray-400 bg-gray-100 rounded focus:outline-none"
            required
          />

          {/* Phone input */}
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-3 border text-black border-gray-400 bg-gray-100 rounded focus:outline-none"
            required
          />

          {/* Submit button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            onClick={handleBooking}
          >
            Book a Call Now
          </button>

          <p className="text-center text-sm text-gray-400">
            Help and support will be provided to you within 24 hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
