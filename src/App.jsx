import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 min-h-screen flex items-center px-6 2xl:px-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="text-center xl:text-left">
            <h1 className="text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="text-white">Kelola tugas harianmu</span><br />
              dengan <span className="underline decoration-white decoration-4">mudah</span> dan <span className="underline decoration-white decoration-4">teratur</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto xl:mx-0">
              TodoList membantu kamu tetap produktif dengan manajemen tugas yang mudah dan intuitif.
            </p>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Mulai Sekarang
            </Link>
          </div>
          <div className="hidden xl:flex justify-center">
            <img
              src="/src/assets/checklist-1-18.svg"
              alt="TodoList Illustration"
              className="w-[30rem] drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 text-gray-200 py-15 px-6 2xl:px-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/catat.png"
              alt="Fokus Lebih Baik"
              className="rounded-lg shadow-xl mb-2 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-white">Fokus Lebih Baik</h3>
            <p>
              Catat dan jadwalkan semua tugas pentingmu dengan mudah agar hari-harimu lebih produktif.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/centang.jpg"
              alt="Pantau Progres"
              className="rounded-lg shadow-xl mb-6 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-white">Pantau Progres</h3>
            <p>
              Tandai tugas selesai dan atur ulang prioritas dengan cepat supaya kamu tetap on track.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/src/assets/catat.png"
              alt="Atur dan Raih"
              className="rounded-lg shadow-xl mb-6 w-full max-w-sm"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-3 text-white">Atur dan Raih</h3>
            <p>
              Rencanakan tugas dan jadwalmu secara efektif untuk mencapai hari yang penuh hasil.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-gray-200 py-24 px-6 2xl:px-60 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Siap mengatur harimu lebih baik?
        </h2>
        <p className="max-w-xl mx-auto mb-30 text-lg">
          Bergabunglah dengan TodoList dan mulai perjalananmu menuju hari yang lebih teratur dan produktif sekarang juga.
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white font-bold px-16 py-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Mulai Sekarang
        </Link>
      </section>

      {/* Repeated Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 min-h-screen flex items-center px-6 2xl:px-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="text-center xl:text-left">
            <h1 className="text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="text-white">Kelola tugas harianmu</span><br />
              dengan <span className="underline decoration-white decoration-4">mudah</span> dan <span className="underline decoration-white decoration-4">teratur</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto xl:mx-0">
              TodoList membantu kamu tetap produktif dengan manajemen tugas yang mudah dan intuitif.
            </p>
            <Link
              to="/login"
              className="inline-block bg-white text-blue-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Mulai Sekarang
            </Link>
          </div>
          <div className="hidden xl:flex justify-center">
            <img
              src="/src/assets/checklist-1-18.svg"
              alt="TodoList Illustration"
              className="w-[30rem] drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
