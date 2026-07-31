import axios from "axios";
import { useState } from "react";

export default function verifyCertificate() {
  const [verifyId, setVerifyId] = useState("");
  const [downloadId, setDownloadId] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const handleVerify = async () => {
    setError("");
    setData(null);
    try {
      const res = await axios.get(
        `https://icfise-backend-2.onrender.com/api/certificate/getCertificateById/${verifyId}`,
      );
      setData(res.data.data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Server error");
      }

      setTimeout(() => setError(""), 3000);
    }
  };
  return (
    <div className="flex-1 p-8 bg-white rounded-lg shadow-md border">
      <h3 className="text-xl font-bold mb-4 text-[#1e3a5f]">
        Verify Certificate
      </h3>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={verifyId}
        onChange={(e) => setVerifyId(e.target.value)}
        className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
      />
     
                 {error && <p className="text-red-500 pb-4 ">{error}</p>}

      {data && (
        <div className="mt-6 p-5 border rounded-lg shadow">
          {/* PDF Preview */}
          <div className="mb-4">
            {data?.certificateUrl && (
              <iframe
                src={`https://drive.google.com/file/d/${data.certificateUrl.split("/d/")[1].split("/")[0]}/preview`}
                width="100%"
                height="500px"
                title="Certificate Preview"
                className="rounded"
              />
            )}
          </div>

          {/* Certificate Details */}
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {data.fullName}
            </p>
            <p>
              <strong>Course:</strong> {data.courseName}
            </p>
            <p>
              <strong>Issue Date:</strong>{" "}
              {new Date(data.issueDate).toLocaleDateString()}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={`font-semibold text-green-600`}>
                {data.Status}
              </span>
            </p>
          </div>
          <a
            href={`https://drive.google.com/uc?export=download&id=${data.certificateUrl.split("/d/")[1].split("/")[0]}`}
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Certificate
          </a>
        </div>
      )}

      <button
        onClick={handleVerify}
        className="w-full bg-[#0B3C5D] text-white py-2 rounded hover:bg-[#092c44] transition"
      >
        Verify Now
      </button>
    </div>
  );
}
