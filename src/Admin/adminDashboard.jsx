import { useState } from 'react';
import Enquiries from './enquiry';
import ViewCertificates from './veiwCertificate';
import UploadCertificate from './uploadCertificate';
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('enquiries');
    const [, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token"); // ❌ remove token
    setLocation("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">

          {/* 🔹 Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3">

            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-gray-900 flex justify-between">
              ICFISE Admin
               <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded text-sm md:hidden"
      >
        Logout
      </button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-1 bg-gray-100 p-1 rounded-lg w-full md:w-auto">
              {[
                { key: "enquiries", label: "Enquiries" },
                { key: "view", label: "Certificates" },
                { key: "upload", label: "Upload" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base whitespace-nowrap transition ${
                    activeTab === tab.key
                      ? "bg-white text-blue-600 shadow"
                      : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* User */}
            <div className="text-sm text-gray-600 hidden md:block">
              Admin User
            </div>
             <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hidden md:block"
      >
        Logout
      </button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'enquiries' && <Enquiries />}
        {activeTab === 'view' && <ViewCertificates />}
        {activeTab === 'upload' && <UploadCertificate />}
      </main>
    </div>
  );
}