import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const location = useLocation();

  // Sembunyikan footer jika berada di halaman detail blog
  const isDetailPage = /^\/blog\/.+/.test(location.pathname);
  if (isDetailPage) return null;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="copyright">
          <Link to="/" className="logo-footer">
            Bibit<span>ID</span>
          </Link>
          <p className="handle">@pertanian.2026</p>
        </div>

        <div className="contact">
          <h4>Alamat Kami</h4>
          <ul>
            <li>Jl. Pertanian Raya No. 123</li>
            <li>Jawa Tengah, Indonesia</li>
            <li>Email: info@bibitid.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 BibitID. Seluruh Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
