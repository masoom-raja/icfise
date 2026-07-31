import axios from "axios";
import { useState } from "react";
export default function downloadCertificate() {

      const [verifyId, setVerifyId] = useState("");
      const [downloadId, setDownloadId] = useState("");
      const [error, setError] = useState("");
      const [data, setData] = useState(null);

        const handleDownload = async (e) => {
    console.log("Download:", downloadId);

      setError("");
    setData(null);

    try {
      const res = await axios.get(
        `http://localhost:8000/api/certificate/getCertificateById/${downloadId}`
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
                  Download Certificate
                </h3>

                <input
                  type="text"
                  placeholder="Enter Certificate ID"
                  value={downloadId}
                  onChange={(e) => setDownloadId(e.target.value)}
                  className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]"
                />
                 {error && <p className="text-red-500 pb-4 ">{error}</p>}

                  {data && (
        <div className="mt-2 p-5 rounded-lg shadow">
          
          {/* Certificate Details */}
          <div className="space-y-2">
           <h1 className="text-bold text-xl ">Your Certificate is ready</h1>
          </div>
          <a
            href={`https://drive.google.com/uc?export=download&id=${data.certificateUrl.split("/d/")[1].split("/")[0]}`}
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            click here 
          </a>
        </div>
      )}

                <button
                  onClick={handleDownload}
                  className="w-full bg-[#d97706] text-white py-2 rounded hover:bg-[#b45309] transition"
                >
                  Download Now
                </button>
              </div>
  )
}

