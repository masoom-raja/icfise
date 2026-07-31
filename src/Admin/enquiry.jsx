import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadEnquiries();
  }, []);

const loadEnquiries = async () => {
  setLoading(true);

  try {
    const res = await axios.get(
      "https://icfise-backend-2.onrender.com/api/enquiry/getEnquiry" ,{
  headers: {
    Authorization: `Bearer ${token}`,
  }
},
    );

    console.log(res.data);

    // ✅ use API data
    setEnquiries(res.data);

  } catch (err) {
    console.log(err);

    // fallback demo data
    const demoData = [
      {
        id: 1,
        name: "Rahul Kumar",
        email: "rahul@gmail.com",
        phone: "9876543210",
        course: "Fire Safety",
        message: "I want to know course duration",
        status: "pending",
      },
    ];

  } finally {
    setLoading(false);
  }
};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600">Loading enquiries...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Enquiries ({enquiries.length})
        </h2>
      </div>

      {enquiries.length === 0 ? (
        <div className="px-6 py-8 text-center text-gray-500">
          No enquiries found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Full Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Course</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Message</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {enquiries.map((enquiry) => (
                <tr key={enquiry._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{enquiry.fullName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{enquiry.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{enquiry.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{enquiry.courseType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {enquiry.message}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        enquiry.status === 'verified'
                          ? 'bg-green-100 text-green-800'
                          : enquiry.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {new Date(enquiry.createdAt).toLocaleDateString("en-IN")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}