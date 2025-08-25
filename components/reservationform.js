'use client';
import { useState } from "react";
import { FaUser, FaPhone, FaUsers, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function ReservationForm() {
     const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    person: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (with country code, no + sign)
    // const phoneNumber = "971501234567";
     const phoneNumber = "971544115335";

    const message = `📅 *Table Reservation Request*  
Name: ${formData.name}  
 Email: ${formData.email}  
 Phone: ${formData.phone}  
 Person(s): ${formData.person}  
 Date: ${formData.date}  
Time: ${formData.time}`;

    // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // window.open(url, "_blank");

     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const baseUrl = isMobile
    ? "https://wa.me"
    : "https://web.whatsapp.com/send";

  const url = `${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
    
  };

  return (
    <div className="bg-[#0d0f11] text-white py-16 px-16 rounded-lg max-w-4xl mx-auto shadow-lg mb-20 mt-20">
      <div className="kf-titles align-center">
        <div className="kf-subtitle">
            <span>BOOKING TABLE</span>
        </div>
        <h3 className="kf-title">Make Your Reservation</h3>
      </div>
      
    
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="relative">
            <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.name}
          onChange={handleChange}
          required
        />
             <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
         <div className="relative">
  <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.email}
          onChange={handleChange}
          required
        />
 <MdEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
         </div>

           <div className="relative">
             <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.phone}
          onChange={handleChange}
          required
        />
          <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>  
       
        {/* <select
          name="person"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.person}
          onChange={handleChange}
          required
        >
          <option value="">Person</option>
          <option value="1">1 Person</option>
          <option value="2">2 Person</option>
          <option value="3">3 Person</option>
          <option value="4">4 Person</option>
          <option value="5">5 Person</option>
          <option value="6">6 Person</option>
          <option value="7">7 Person</option>
          <option value="8">8 Person</option>
          <option value="9">9 Person</option>
          <option value="10">10 Person</option>
        </select> */}
         <div className="relative">
          <select
            name="person"
            className="w-full p-3 pr-10 rounded bg-black border border-gray-700 appearance-none"
            value={formData.person}
            onChange={handleChange}
            required
          >
            <option value="">Person</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Person
              </option>
            ))}
          </select>
          <FaUsers className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {/* <input
          type="date"
          name="date"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.date}
          onChange={handleChange}
          required
        /> */}
        {/* <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="p-3 rounded bg-black border border-gray-700 text-white"
      placeholderText="Select a date"
      dateFormat="dd/MM/yyyy"
    /> */}
    <DatePicker
  selected={selectedDate}
  onChange={(date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date ? date.toLocaleDateString("en-GB") : "" // format: DD/MM/YYYY
    });
  }}
  className="p-3 rounded bg-black border border-gray-700 text-white"
  placeholderText="Select a date"
  dateFormat="dd/MM/yyyy"
/>
        {/* <div className="relative">
          <input
            type="date"
            name="date"
            className="w-full p-3 pr-10 rounded bg-black border border-gray-700"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div> */}
       {/* <select
          name="time"
          className="p-3 rounded bg-black border border-gray-700"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="01:30 PM">01:30 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="07:30 PM">07:30 PM</option>
          <option value="08:00 PM">08:00 PM</option>
          <option value="08:30 PM">08:30 PM</option>
          <option value="09:00 PM">09:00 PM</option>
        </select> */}
        <div className="relative">
          <select
            name="time"
            className="w-full p-3 pr-10 rounded bg-black border border-gray-700 appearance-none"
            value={formData.time}
            onChange={handleChange}
            required
          >
      <option value="08:00 AM">08:00 AM</option>
  <option value="08:30 AM">08:30 AM</option>
  <option value="09:00 AM">09:00 AM</option>
  <option value="09:30 AM">09:30 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="10:30 AM">10:30 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="11:30 AM">11:30 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="12:30 PM">12:30 PM</option>
  <option value="01:00 PM">01:00 PM</option>
  <option value="01:30 PM">01:30 PM</option>
  <option value="02:00 PM">02:00 PM</option>
  <option value="02:30 PM">02:30 PM</option>
  <option value="03:00 PM">03:00 PM</option>
  <option value="03:30 PM">03:30 PM</option>
  <option value="04:00 PM">04:00 PM</option>
  <option value="04:30 PM">04:30 PM</option>
  <option value="05:00 PM">05:00 PM</option>
  <option value="05:30 PM">05:30 PM</option>
  <option value="06:00 PM">06:00 PM</option>
  <option value="06:30 PM">06:30 PM</option>
  <option value="07:00 PM">07:00 PM</option>
  <option value="07:30 PM">07:30 PM</option>
  <option value="08:00 PM">08:00 PM</option>
  <option value="08:30 PM">08:30 PM</option>
  <option value="09:00 PM">09:00 PM</option>
  <option value="09:30 PM">09:30 PM</option>
  <option value="10:00 PM">10:00 PM</option>
  <option value="10:30 PM">10:30 PM</option>
  <option value="11:00 PM">11:00 PM</option>
  <option value="11:30 PM">11:30 PM</option>
  <option value="12:00 AM">12:00 AM</option>
  <option value="12:30 AM">12:30 AM</option>
  <option value="01:00 AM">01:00 AM</option>
  <option value="01:30 AM">01:30 AM</option>
  <option value="02:00 AM">02:00 AM</option>
  <option value="02:30 AM">02:30 AM</option>
  <option value="03:00 AM">03:00 AM</option>
  <option value="03:30 AM">03:30 AM</option>
  <option value="04:00 AM">04:00 AM</option>
  <option value="04:30 AM">04:30 AM</option>
  <option value="05:00 AM">05:00 AM</option>
          </select>
          <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <div className="col-span-2 text-center mt-4">
         
{/* <Link href="/reservation" className="kf-btn w-48">
                      <span>Book a table</span>
                      <i className="fas fa-chevron-right" />
                    </Link> */}

          < button  type="submit" className="hidden md:inline-block kf-btn ">
           <span>Book a table</span>
                      <i className="fas fa-chevron-right" />
          </button>
        </div>
      </form>
    </div>
  );
}
