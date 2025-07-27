import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = AuthController((state) => state.login);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Login...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await login(email, password, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Selamat datang kembali",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: err.response?.data?.message || "Email atau password salah",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 flex items-center justify-center px-6">
      <div className="bg-gray-900 shadow-lg w-full max-w-md rounded-2xl p-10">
        <h2 className="font-bold text-white text-center text-4xl mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              minLength={8}
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
          </div>

          {/* Spacer for error message */}
          <div className="min-h-[1.5rem] mb-4">
            {error && <p className="text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-green-500 text-white font-semibold py-3 rounded transition"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">
            Belum punya akun?{" "}
            <Link to="/register" className="text-yellow-400 hover:text-yellow-500">
              Register sekarang
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
