import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Register...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await register(form, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Register",
        text: "Pendaftaran berhasil, silakan login",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Register",
        text: err.response?.data?.message || "Pendaftaran gagal, silakan coba lagi nanti",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 flex items-center justify-center px-6">
      <div className="bg-gray-900 shadow-lg w-full max-w-md rounded-2xl p-10">
        <h2 className="font-bold text-white text-center text-4xl mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="mail@site.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              required
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>

          {error && <p className="text-red-600 mb-15">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-green-500 text-white font-semibold py-3 rounded transition"
          >
            Daftar
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-yellow-400 hover:text-yellow-500">
              Login sekarang
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
