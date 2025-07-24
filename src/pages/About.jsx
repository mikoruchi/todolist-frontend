function About() {
  return (
    <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 min-h-screen py-32 xl:px-60 px-6">
      <div className="grid xl:grid-cols-2 gap-16 items-center">
        {/* Konten Teks */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white mb-6">
            Siapa Kami?
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-purple-400 font-semibold">TodoList</span> adalah platform manajemen tugas modern yang dirancang
            untuk membantumu mengatur hidup dengan lebih mudah dan terstruktur.
            Kami hadir untuk kamu yang ingin tetap <span className="text-purple-300 font-semibold">produktif</span>,
            <span className="text-purple-300 font-semibold"> fokus</span>, dan <span className="text-purple-300 font-semibold">efisien</span> setiap hari.
          </p>
          <p className="text-lg text-gray-300 mt-5 leading-relaxed">
            Dengan antarmuka yang simpel dan fitur yang intuitif, TodoList membuat aktivitas mencatat,
            menjadwalkan, dan menyelesaikan tugas jadi lebih menyenangkan.
            Kami percaya bahwa manajemen waktu yang baik adalah kunci kehidupan yang lebih seimbang.
          </p>
        </div>

        {/* Gambar Ilustrasi */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <img
            src="/src/assets/time-organization-concept-close-up.jpg"
            alt="Manajemen waktu"
            className="rounded-2xl shadow-2xl w-full h-[22rem] xl:h-[30rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
