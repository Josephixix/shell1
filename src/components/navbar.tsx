
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-[#f8f6ef]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#3d6b4f] leading-none">
              Blue Hibiscus
            </h1>
          </div>
        </div>

        {/* CTA BUTTON */}
        <button className="hidden md:block bg-black transition text-white px-6 py-2 rounded-2xl hover:bg-gray-50 font-semibold hover:text-black">
          Order Now
        </button>
      </div>
    </nav>
  );
}
