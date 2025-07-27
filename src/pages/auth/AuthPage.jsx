import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthController from "../../controllers/AuthController";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const login = AuthController((state) => state.login);
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: isLogin ? "Login..." : "Register...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      if (isLogin) {
        await login(form.email, form.password, navigate);
        Swal.fire({ icon: "success", title: "Berhasil Login" });
      } else {
        await register(form, navigate);
        Swal.fire({ icon: "success", title: "Berhasil Register" });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: isLogin ? "Gagal Login" : "Gagal Register",
        text: err.response?.data?.message || "Terjadi kesalahan",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 flex items-center justify-center px-6 transition-all duration-500">
      <div className="relative bg-gray-900 w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-700">
        
        {/* Container kiri */}
        <div className={`md:w-1/2 p-10 flex justify-center items-center bg-gray-800 transition-transform duration-700 ${isLogin ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">{isLogin ? "Welcome Back!" : "Hello There!"}</h2>
            <p className="text-gray-300">{isLogin ? "Silakan login untuk lanjut" : "Silakan daftar untuk mulai"}</p>
          </div>
        </div>

        {/* Form container */}
        <div className="md:w-1/2 p-10 bg-gray-900 transition-all duration-700">
          <h2 className="text-white text-4xl font-bold text-center mb-6">{isLogin ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
                  placeholder="Nama lengkap"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
                placeholder="mail@example.com"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <div className="min-h-[1.5rem] mb-4">
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-green-500 text-white py-3 rounded font-semibold transition"
            >
              {isLogin ? "Login" : "Daftar"}
            </button>
            <p className="text-center text-sm text-gray-300 mt-4">
              {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-yellow-400 hover:text-yellow-500 underline ml-1"
              >
                {isLogin ? "Daftar" : "Login"} sekarang
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
