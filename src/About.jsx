function About() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-gray-900 min-h-screen py-40 xl:px-60 px-6">
      <div>
        <h1
          className="xl:text-5xl text-4xl text-white font-extrabold text-center"
          data-aos="fade-up"
        >
          <span className="text-blue-400">Tentang</span> Kami
        </h1>
        <p
          className="text-2xl text-gray-300 font-medium text-center mt-6 max-w-5xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span className="font-semibold text-white">TodoList</span> adalah aplikasi manajemen tugas yang dirancang untuk
          membantu kamu tetap <span className="text-blue-300 font-semibold">teratur</span>, lebih <span className="text-blue-300 font-semibold">fokus</span>,
          dan selalu <span className="text-blue-300 font-semibold">produktif</span>. Semua kebutuhanmu mulai dari mencatat ide,
          menyusun jadwal harian, hingga menyelesaikan tugas—dapat dilakukan
          dalam satu platform yang simpel, cepat, dan menyenangkan.
        </p>

        <div
          className="mt-10"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <img
            src="/src/assets/time-organization-concept-close-up.jpg"
            alt="Ilustrasi pengelolaan waktu"
            className="rounded-xl shadow-2xl w-full h-[20rem] xl:h-[30rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
