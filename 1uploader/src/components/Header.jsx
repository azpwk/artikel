// //
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "../css/Navigasi.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="navbar">
//       <Link to="/" className="logo">
//         Bibit<span style={{ color: "red" }}>ID</span>
//       </Link>

//       {/* Tombol Hamburger - Muncul hanya di Mobile */}
//       <div
//         className={`hamburger ${isOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>

//       {/* Nav Links */}
//       <nav className={`nav-links ${isOpen ? "mobile-active" : ""}`}>
//         <NavLink to="/" onClick={() => setIsOpen(false)}>
//           Beranda
//         </NavLink>
//         <NavLink to="/products" onClick={() => setIsOpen(false)}>
//           Produk
//         </NavLink>
//         <NavLink to="/blog" onClick={() => setIsOpen(false)}>
//           Artikel
//         </NavLink>
//         <NavLink to="/contact" onClick={() => setIsOpen(false)}>
//           Kontak
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom"; // Tambah useLocation
import "../css/Navigasi.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Ambil informasi URL saat ini

  // Logika pengecekan:
  // Jika path dimulai dengan '/blog/' dan ada karakter setelahnya (ID)
  // Kita gunakan regex untuk memastikan ini adalah halaman detail, bukan daftar blog biasa
  const isDetailPage = /^\/blog\/.+/.test(location.pathname);

  // Jika sedang di halaman detail, jangan tampilkan Header sama sekali
  if (isDetailPage) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Bibit<span style={{ color: "red" }}>ID</span>
      </Link>

      {/* Tombol Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar : bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${isOpen ? "mobile-active" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Beranda
        </NavLink>
        <NavLink to="/products" onClick={() => setIsOpen(false)}>
          Produk
        </NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>
          Artikel
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Kontak
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
