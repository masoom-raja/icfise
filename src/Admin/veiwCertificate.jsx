import { useState, useEffect } from 'react';
import axios from 'axios';
export default function ViewCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const token = localStorage.getItem("token");
  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    setLoading(true);

      try {
    const res = await axios.get(
      "http://localhost:8000/api/certificate/getcertificate",{
  headers: {
    Authorization: `Bearer ${token}`,
  },
}
    );

    console.log(res.data);

    // ✅ use API data
    setCertificates(res.data);

  } catch (err) {
    console.log(err);

  } finally {
    setLoading(false);
  }
  };

 const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this certificate?"
  );

  if (!confirmDelete) return;

  try {
    setDeleting(id); // 👉 show loading on that row

    const res = await axios.delete(
      `http://localhost:8000/api/certificate/deleteCertificate/${id}`,{
  headers: {
    Authorization: `Bearer ${token}`,
  },
}
    );

    if (res.data) {
      // ✅ remove from UI instantly
      setCertificates((prev) =>
        prev.filter((item) => item._id !== id)
      );

      alert("Certificate deleted successfully!");
    }

  } catch (err) {
    console.log(err)
  } finally {
    setDeleting(null);
  }
};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600">Loading certificates...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          Uploaded Certificates ({certificates.length})
        </h2>

        <button
          onClick={loadCertificates}
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
        >
          Refresh
        </button>
      </div>

      {certificates.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No certificates uploaded yet
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm">Certificate ID</th>
                <th className="px-6 py-3 text-left text-sm">Student Name</th>
                <th className="px-6 py-3 text-left text-sm">Course Name</th>
                <th className="px-6 py-3 text-left text-sm">Issue Date</th>
                <th className="px-6 py-3 text-left text-sm">Status</th>
                                <th className="px-6 py-3 text-left text-sm">Action</th>
                <th className="px-6 py-3 text-left text-sm">Certificate URL</th>
              </tr>
            </thead>

            <tbody>
              {[...certificates].reverse().map((c) => (
                <tr key={c._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{c.certificateId}</td>
                  <td className="px-6 py-4">{c.fullName}</td>
                  <td className="px-6 py-4 font-mono">{c.courseName}</td>
                  <td className="px-6 py-4">
                    {new Date(c.issueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-green-500">{c.Status}</td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(c._id)}
                      disabled={deleting === c._id}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded text-xs"
                    >
                      {deleting === c.id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
               <td className="px-6 py-4 hover text-blue-500"> <a href={c.certificateUrl}>{c.certificateUrl}</a></td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}