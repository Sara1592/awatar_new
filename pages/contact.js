import React from 'react'
import BreadcrumbBanner from '@/components/BreadcrumbBanner'
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from '@/components/Footer';
import { useState } from "react";
const Contact = () => {

const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "971544115335"; // your WhatsApp number (no +)
    const text = `Hello, my name is ${form.name}, phone: ${form.phone}, email: ${form.email}.
Subject: ${form.subject}
Message: ${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <div>
     <BreadcrumbBanner/>
      <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Location */}
        <div className="p-6 rounded-2xl shadow-lg text-center 
            bg-[rgba(190,147,4,0.1)] backdrop-blur-md border border-yellow-500/20">
          <MapPin className="mx-auto w-10 h-10 text-[#8E6E3B] mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
          <p className=" mt-2">
            Dubai - Al Muraqqabat – Deira – Bu Haleeba Plaza
          </p>
        </div>

        {/* Phone */}
        <div className="p-6 rounded-2xl shadow-lg text-center 
            bg-[rgba(190,147,4,0.1)] backdrop-blur-md border border-yellow-500/20">
          <Phone className="mx-auto w-10 h-10 text-[#8E6E3B] mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
          <p className="mt-2">+971544115335</p>
          <p className="">+97143422135</p>
        </div>

        {/* Email */}
        <div className="p-6 rounded-2xl shadow-lg text-center 
            bg-[rgba(190,147,4,0.1)] backdrop-blur-md border border-yellow-500/20">
          <Mail className="mx-auto w-10 h-10 text-[#8E6E3B] mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Email</h3>
          <p className=" mt-2">info@awtarcafe.com</p>
          {/* <p className="">support@example.com</p> */}
        </div>

      </div>
    </section>

      <section className="py-16">
        <h2 className='text-center'>Where to find Us</h2>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Google Map */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg mt-15">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11542.1848!2d55.320236!3d25.271139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzE1LjQiTiA1NcKwMTknMTIuOSJF!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.038742578994!2d55.328887300000005!3d25.2644579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc4f1bacb6b%3A0x4196f4fa51a04b3d!2zQXd0YXIgU2hpc2hhIENhZmUg2YXZgtmH2Ykg2LTZiti02Kkg2KPZiNiq2KfYsQ!5e1!3m2!1sen!2sae!4v1756703890441!5m2!1sen!2sae" width="100%" height="750"></iframe>
        </div>

        {/* Right: Contact Form */}
        {/* <div className=" p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-yellow-400 focus:ring-2 focus:ring-yellow-600 outline-none"
              required
            />

            <button
              type="submit"
              className="w-[50%] py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition"
            >
              Send Us Message
            </button>
          </form>
        </div> */}

         <div className=" p-8 rounded-2xl shadow-lg">
      {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Row 1: Full Name, Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
            required
          />
        </div>

        {/* Row 2: Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
          required
        />

        {/* Row 3: Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-600 outline-none"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="hidden md:inline-block kf-btn "
        >
         <span>Send Us Message</span> 
        </button>
      </form>
    </div>
      </div>
    </section>

<Footer/>
    </div>
  )
}

export default Contact

export async function getStaticProps() {
  return {
    props: {
      messages: (await import(`../locales/en.json`)).default,
    },
  };
}
