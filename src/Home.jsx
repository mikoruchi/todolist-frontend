import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 min-h-screen flex items-center px-6 2xl:px-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="text-center xl:text-left">
            <h1 className="text-5xl xl:text-5xl font-extrabold text-white mb-6 leading-tight">
              <span className="text-blue-900">Kelola tugas harianmu</span><br />
              dengan <span className="text-blue-900 underline decoration-white decoration-4">mudah</span> dan <span className="text-blue-900 underline decoration-white decoration-4">teratur</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto xl:mx-0">
              TodoList membantu kamu tetap produktif dengan manajemen tugas yang mudah dan intuitif.
            </p>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-900 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Mulai Sekarang
            </Link>
          </div>
          <div className="hidden xl:flex justify-center">
            <img
              src="/src/assets/catat.png"
              alt="TodoList Illustration"
              className="w-200rem] drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white -20 text-gray-800 py-26 px-6 2xl:px-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/catat.png"
              alt="Fokus Lebih Baik"
              className="rounded-lg shadow-xl mb-20 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Fokus Lebih Baik</h3>
            <p>
              Catat dan jadwalkan semua tugas pentingmu dengan mudah agar hari-harimu lebih produktif.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/centang.jpg"
              alt="Pantau Progres"
              className="rounded-lg shadow-xl mb-20 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Pantau Progres</h3>
            <p>
              Tandai tugas selesai dan atur ulang prioritas dengan cepat supaya kamu tetap on track.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/catat.png"
              alt="Atur dan Raih"
              className="rounded-lg shadow-xl mb-20 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">Atur dan Raih</h3>
            <p>
              Rencanakan tugas dan jadwalmu secara efektif untuk mencapai hari yang penuh hasil.
            </p>
          </div>
        </div>
      </section>

      {/* Repeated Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 min-h-screen flex items-center px-6 2xl:px-60">
  <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-25 items-center">
    
    {/* Ilustrasi di Kiri */}
    <div className="hidden xl:flex justify-center" data-aos="zoom-in">
      <img
        src="/src/assets/centang.jpg"
        alt="Ilustrasi produktivitas"
        className="w-[35rem] drop-shadow-2xl"
        loading="lazy"
      />
    </div>

    {/* Konten Teks di Kanan */}
    <div className="text-center xl:text-left" data-aos="fade-left">
      <p className="uppercase tracking-wide text-white font-semibold mb-4">
        Produktif itu Mudah
      </p>
      <h1 className="text-5xl xl:text-5xl font-extrabold text-white mb-6 leading-tight">
        Rencanakan, Lakukan, <br />Selesaikan Tanpa Drama
      </h1>
      <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto xl:mx-0">
        Dengan TodoList, kamu bisa mengelola tugas harian secara praktis. Fokus pada yang penting dan nikmati hari yang lebih teratur & bermakna.
      </p>
      <Link
        to="/login"
        className="inline-block bg-white text-purple-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        Mulai Sekarang
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-white -20 text-gray-800 py-40 px-6 2xl:px-60 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Siap mengatur harimu lebih baik?
        </h2>
        <p className="max-w-xl mx-auto mb-20 text-lg">
          Bergabunglah dengan TodoList dan mulai perjalananmu menuju hari yang lebih teratur dan produktif sekarang juga.
        </p>
        <Link
          to="/login"
          className="bg-purple-500 text-white font-bold px-16 py-4 rounded-full shadow-lg hover:bg-purple-600 transition"
        >
          Mulai Sekarang
        </Link>
      </section>
    </>
  );
}

export default Home;
