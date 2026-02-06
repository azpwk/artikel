import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Hubungi Kami</h2>
      <p>Punya pertanyaan tentang produk atau layanan pertanian kami?</p>

      <div className="grid" style={{ marginTop: "30px" }}>
        <div className="card">
          <h3>Informasi Kontak</h3>
          <p>📍 Jl. Pertanian No. 123, Jawa Barat</p>
          <p>📞 +62 812 3456 7890</p>
          <p>✉️ hello@agrimodern.com</p>
        </div>

        <form className="card" onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Nama Lengkap
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Masukkan nama..."
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Email
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="email@contoh.com"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Pesan
            </label>
            <textarea
              className="input-field"
              rows="4"
              placeholder="Apa yang bisa kami bantu?"
            ></textarea>
          </div>
          <button className="btn btn-primary" style={{ width: "100%" }}>
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
