
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-[#f8f6ef]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#3d6b4f] leading-none font-serif">
              Blue Hibiscus
            </h1>
          </div>
        </div>

        {/* CTA BUTTON */}
       <a
  href="https://thebluehibiscus.gumroad.com/l/jqfsdj"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="hidden md:block bg-[#3d6b4f] transition
    text-white px-6 py-2 rounded-2xl hover:bg-[#2e5040] font-semibold"
  >
    Order Now
  </button>
</a>
      </div>
    </nav>
  );
}