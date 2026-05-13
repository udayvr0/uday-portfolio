function Footer() {
  return (
    <footer className="
      border-t
      border-white/10
      py-8
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
      ">

        <p className="text-gray-500 text-sm">
          © 2026 Uday VR. All rights reserved.
        </p>

        <p className="text-gray-600 text-sm">
          Built with React, Tailwind & Framer Motion
        </p>

      </div>

    </footer>
  );
}

export default Footer;