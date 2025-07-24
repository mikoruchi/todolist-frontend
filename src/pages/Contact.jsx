function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 min-h-screen">
      <div className="py-40 xl:px-60 px-6">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:space-x-20">
          <div className="mb-3 xl:mb-0">
            <img
              src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
              data-aos="fade-up"
              className="rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1
              className="font-bold xl:text-5xl text-4xl text-white"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <span className="text-purple-400">Kontak</span> Kami
            </h1>
            <p
              className="font-medium text-gray-300 xl:mt-5 mt-3 text-2xl text-justify"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Punya pertanyaan, saran, atau butuh bantuan? Tim <span className="font-semibold text-white">Mikochi</span> siap
              membantumu! Jangan ragu untuk menghubungi kami melalui kontak
              berikut. Kami ingin mendengar darimu.
            </p>
          </div>
        </div>

        {/* Kontak Cards */}
        <div className="grid xl:grid-cols-3 grid-cols-1 mt-24 xl:space-x-10 xl:space-y-0 space-y-7">
          <div
            className="bg-gray-800 shadow-xl py-10 rounded-2xl text-center"
            data-aos="fade-up"
          >
            <h1 className="text-5xl text-purple-400">
              <i className="fa-solid fa-phone"></i>
            </h1>
            <h2 className="text-2xl font-semibold text-white mt-5">WhatsApp</h2>
            <p className="text-white mt-3">0858 6342 5497</p>
          </div>

          <div
            className="bg-gray-800 shadow-xl py-10 rounded-2xl text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h1 className="text-5xl text-purple-400">
              <i className="fa-solid fa-envelope"></i>
            </h1>
            <h2 className="text-2xl font-semibold text-white mt-5">Email</h2>
            <p className="text-white mt-3">Mikochi@gmail.com</p>
          </div>

          <div
            className="bg-gray-800 shadow-xl py-10 rounded-2xl text-center"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <h1 className="text-5xl text-purple-400">
              <i className="fa-solid fa-location-dot"></i>
            </h1>
            <h2 className="text-2xl font-semibold text-white mt-5">Lokasi</h2>
            <p className="text-white mt-3">Kota Sukabumi</p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="pt-20">
        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.019807876192!2d139.7732174152272!3d35.69835318019744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57d9beea01%3A0x123456789abcdef!2sMandarake%20Akihabara%20Complex!5e0!3m2!1sen!2sjp!4v1721900000000!5m2!1sen!2sjp"          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Contact;
