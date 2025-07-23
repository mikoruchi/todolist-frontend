function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 2xl:px-60 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Company info */}
        <div className="flex flex-col items-start space-y-4">
          <img src="/miko.png" alt="Mikochi Logo" width={120} height={60} />
          <div className="text-gray-300">
            <p className="font-semibold text-lg">Mikochi Corp.</p>
            <p>IT Software Company</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="footer-title mb-4 text-white font-bold text-lg">Services</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Branding</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Marketing</a></li>
            <li><a href="#" className="hover:text-white transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title mb-4 text-white font-bold text-lg">Company</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">About us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Jobs</a></li>
            <li><a href="#" className="hover:text-white transition">Press kit</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title mb-4 text-white font-bold text-lg">Legal</h6>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Terms of use</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2025 Mikochi Corp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
