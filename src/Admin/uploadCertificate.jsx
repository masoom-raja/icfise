import { useState } from "react";
import axios from "axios";
export default function UploadCertificate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    certificateId: "",
    fullName: "",
    courseName: "",
    issueDate: "",
    certificateUrl: "",
  });

  const courses = [
    "Diploma in Industrial Safety & Fire management",
    "Diploma in Construction Safety and Health Management",
    "Advance Diploma in Industrial Safety",
    "PG Diploma in Industrial Safety management",
    "PG Diploma in Fire and Safety management",
    "IOSH Managing Safely",
    "Confined Space Safety",
    "OSHA 30 HOURS - General Industry Training",
    "First Aid & CPR Training",
    "Basic Scaffolding Competent Person",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const checkCertificateExists = async (id) => {
  try {
    const res = await axios.get(
      `https://icfise-backend-2.onrender.com/api/certificate/getCertificateById/${id}`
    );

    return true; // ✅ exists

  } catch (err) {
    if (err.response?.status === 404) {
      return false; // ✅ NOT found (this is OK)
    }

    throw err; // ❌ real error
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (
    !formData.certificateId ||
    !formData.fullName ||
    !formData.courseName ||
    !formData.issueDate ||
    !formData.certificateUrl
  ) {
    setError("Please fill all fields");
    return;
  }



  try {
    setLoading(true);

    const exists = await checkCertificateExists(formData.certificateId);

    if (exists) {
      setError("Certificate already exists!");
      return;
    }

    // ✅ Create
   const res = await axios.post(
  "https://icfise-backend-2.onrender.com/api/certificate/createCertificate",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
   
        if (res.data) {
      setSuccess("Certificate uploaded successfully!");

      setFormData({
        certificateId: "",
        fullName: "",
        courseName: "",
        issueDate: "",
        certificateUrl: "",
      });
    }

  } catch (err) {
    console.log(err)
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }

  // try {
  //   // ✅ 2. Create certificate
  //   const res = await axios.post(
  //     "http://localhost:8000/api/certificate/createCertificate",
  //     formData
  //   );

  //   if (res.data) {
  //     setSuccess("Certificate uploaded successfully!");

  //     setFormData({
  //       certificateId: "",
  //       fullName: "",
  //       courseName: "",
  //       issueDate: "",
  //       certificateUrl: "",
  //     });
  //   }

  // } catch (err) {
  //   setError("Failed to upload certificate");
  // } finally {
  //   setLoading(false);
  // }
};

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-6">
        Upload Certificate
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Certificate ID */}
        <input
          type="text"
          name="certificateId"
          value={formData.certificateId}
          onChange={handleChange}
          placeholder="Certificate ID"
          className="w-full px-3 py-2 border rounded-lg"
        />

        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-3 py-2 border rounded-lg"
        />

        {/* Course Dropdown */}
        <select
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        {/* Issue Date */}
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />

        {/* Certificate URL */}
        <input
          type="text"
          name="certificateUrl"
          value={formData.certificateUrl}
          onChange={handleChange}
          placeholder="Paste Google Drive PDF Link"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Uploading..." : "Upload Certificate"}
        </button>
      </form>
    </div>
  );
}