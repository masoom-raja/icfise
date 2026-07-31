import { useState } from "react";
import axios from "axios";
import { useLocation, Link } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://icfise-backend-2.onrender.com/api/user/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      setLocation("/adminDashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#1e3a5f] to-[#0f172a]">

      {/* 🔹 Top Navbar */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">ICFISE</h1>

        {/* Go to Home */}
        <Link href="/">
          <button className="bg-[#d97706] hover:bg-[#b45309] px-4 py-2 rounded-lg text-sm">
            Go to Home
          </button>
        </Link>
      </div>

      {/* 🔹 Center Login Card */}
      <div className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl shadow-xl w-full max-w-md space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-white">
            Admin Login
          </h2>

          {error && (
            <p className="text-red-400 text-center">{error}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97706]"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d97706]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d97706] hover:bg-[#b45309] text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}