import { useState } from "react";
import axios from 'axios'
import {CheckCircle2 } from "lucide-react";

export default function contactForm() {

      const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseType: "",
    message:""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try{

       const res = await axios.post(
        "http://localhost:8000/api/enquiry/createEnquiry", // your backend endpoint
        formData
      );
       console.log(res)
         if (res.data.success) {
        setSubmitted(true);
        setTimeout(() => {
        setFormData({
        fullName: "",
        email: "",
        phone: "",
        courseType: "",
        message:""
      });
      setSubmitted(false);
    }, 3000);
         }
    }catch(err){
      console.log(err)
    }
  };


  return (
                  <div className="lg:col-span-2">
                    <div className="p-8 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-lg border border-gray-200">
                      <h2 className="font-display text-3xl font-bold text-[#1e3a5f] mb-6">
                        Send us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
    
                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
    
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            inputMode="numeric"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-colors"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
    
                        {/* course Type */}
                        <div>
                          <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                            Select Course *
                          </label>
                          <select
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-colors"
                          >
                            <option value="">Select the course</option>
                            <option value="Diploma in Industrial Safety & Fire Management">Diploma in Industrial Safety & Fire Management</option>
                            <option value="Diploma in Construction Safety and Health Management">Diploma in Construction Safety and Health Management</option>
                            <option value="Advance Diploma in Industrial Safety">Advance Diploma in Industrial Safety</option>
                            <option value="PG Diploma in Industrial Safety management">PG Diploma in Industrial Safety management</option>
                            <option value="PG Diploma in Fire and Safety management">PG Diploma in Fire and Safety management</option>
                            <option value="IOSH Managing Safely">IOSH Managing Safely</option>
                            <option value="Confined Space Safety">Confined Space Safety</option>
                            <option value="OSHA 30 HOURS - General Industry Training">OSHA 30 HOURS - General Industry Training</option>
                            <option value="First Aid & CPR Training">First Aid & CPR Training</option>
                            <option value="Basic Scaffolding Competent Person">Basic Scaffolding Competent Person</option>
                          </select>
                        </div>
    
                         {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                            Your Query Message*
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d97706] focus:ring-2 focus:ring-[#d97706]/20 transition-colors resize-none"
                            placeholder="Tell us about your Query..."
                          ></textarea>
                        </div>
    
      {submitted && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                          <div>
                            <p className="font-semibold text-green-900">Thank you!</p>
                            <p className="text-green-800 text-sm">We'll contact you within 24 hours.</p>
                          </div>
                        </div>
                      )}
                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full bg-[#d97706] hover:bg-[#b45309] text-white py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
  )
}

