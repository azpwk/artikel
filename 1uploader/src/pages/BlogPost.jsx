// import React, { useState, useEffect } from "react";
// import { useParams, NavLink } from "react-router-dom"; // Tambah useParams
// import HariIni from "../js/date.js";
// import "../css/blog.css";

// const BlogPost = () => {
//   const { id } = useParams(); // Ambil ID dari URL (misal: localhost/blog/1)
//   const { dayName, day, monthName, year } = HariIni;

//   const [post, setPost] = useState(null); // Ubah dari array [] jadi null
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://raw.githubusercontent.com/azpwk/artikel/refs/heads/main/pertanian/news/2026.json",
//         );
//         if (!response.ok) throw new Error("Gagal ambil data");
//         const data = await response.json();

//         // FILTER: Cari 1 data yang ID-nya cocok
//         const detailPost = data.find((item) => item.id == id);
//         setPost(detailPost);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]); // Reload jika ID berubah

//   // Skeleton khusus detail (biasanya lebih panjang)
//   const SkeletonDetail = () => (
//     <div className="card-skeleton" style={{ padding: "1rem" }}>
//       <div className="skeleton skeleton-title" style={{ width: "80%" }}></div>
//       <div className="skeleton skeleton-text"></div>
//       <div className="skeleton skeleton-text"></div>
//       <div className="skeleton skeleton-text" style={{ width: "60%" }}></div>
//     </div>
//   );

//   return (
//     <>
//       <div className="blog-container">
//         <div className="back">
//           {/* Hapus setIsOpen jika tidak digunakan di sini */}
//           <NavLink to="/blog">← Back to Blog</NavLink>
//         </div>
//         <h1>Blog Detail</h1>
//         <p
//           style={{
//             marginTop: "10px",
//             fontSize: "12px",
//             borderBottom: "1px solid #ddd",
//             paddingBottom: "5px",
//           }}
//         >
//           Diakses pada: {dayName}, {day} {monthName} {year}
//         </p>
//       </div>

//       <div className="artikel" style={{ padding: "20px" }}>
//         {loading ? (
//           <SkeletonDetail />
//         ) : post ? (
//           // TAMPILKAN DETAIL ARTIKEL
//           <div className="full-post">
//             <h2 style={{ margin: "15px 0", color: "#2c3e50" }}>{post.title}</h2>
//             <small style={{ color: "gray" }}>Diterbitkan: {post.date}</small>
//             {/*  */}
//             {/* <div
//               className="content"
//               style={{ lineHeight: "1.8", textAlign: "justify" }}
//             >
//               {post.artikel}
//             </div> */}
//             <div
//               className="content"
//               style={{ lineHeight: "1.8", textAlign: "justify" }}
//             >
//               {post.artikel.split(".").map((kalimat, index) => {
//                 // Cek apakah kalimat tidak kosong (menghindari spasi kosong di akhir paragraf)
//                 return kalimat.trim() !== "" ? (
//                   <p key={index} style={{ marginBottom: "1rem" }}>
//                     {kalimat.trim()}.
//                   </p>
//                 ) : null;
//               })}
//             </div>
//           </div>
//         ) : (
//           <p>Artikel tidak ditemukan.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default BlogPost;

import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import HariIni from "../js/date.js";
import "../css/blog.css";

const BlogPost = () => {
  const { id } = useParams();
  const { dayName, day, monthName, year } = HariIni;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/azpwk/artikel/refs/heads/main/pertanian/news/2026.json",
        );
        if (!response.ok) throw new Error("Gagal ambil data");
        const data = await response.json();

        // Cari data berdasarkan ID
        const detailPost = data.find((item) => item.id == id);
        setPost(detailPost);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const SkeletonDetail = () => (
    <div className="card-skeleton" style={{ padding: "1rem" }}>
      <div className="skeleton skeleton-title" style={{ width: "80%" }}></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text" style={{ width: "60%" }}></div>
    </div>
  );

  return (
    <>
      <div className="blog-container">
        <div className="back" style={{ marginBottom: "20px" }}>
          <NavLink
            to="/blog"
            style={{
              textDecoration: "none",
              color: "#38a169",
              fontWeight: "bold",
            }}
          >
            ← Kembali ke Blog
          </NavLink>
        </div>
        <h1>Detail Berita Pertanian</h1>
        <p
          style={{
            marginTop: "10px",
            fontSize: "12px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            color: "#666",
          }}
        >
          Diakses pada: {dayName}, {day} {monthName} {year}
        </p>
      </div>

      <div
        className="artikel"
        style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
      >
        {loading ? (
          <SkeletonDetail />
        ) : post ? (
          <div className="full-post">
            <h2
              style={{ margin: "15px 0", color: "#2c3e50", fontSize: "1.8rem" }}
            >
              {post.judul}
            </h2>

            <div
              style={{
                marginBottom: "20px",
                fontSize: "0.9rem",
                color: "#7f8c8d",
              }}
            >
              <span>📍 {post.lokasi}</span> | 📅 <span>{post.tanggal}</span>
              {post.penulis && <span> | ✍️ {post.penulis}</span>}
            </div>

            {/* Konten Berita */}
            <div
              className="content"
              style={{
                lineHeight: "1.8",
                textAlign: "justify",
                color: "#34495e",
              }}
            >
              {post.isi_berita.split(".").map((kalimat, index) =>
                kalimat.trim() !== "" ? (
                  <p key={index} style={{ marginBottom: "1.2rem" }}>
                    {kalimat.trim()}.
                  </p>
                ) : null,
              )}
            </div>

            {/* Bagian Dampak - Hanya tampil jika ada isinya */}
            {post.dampak && post.dampak.some((item) => item.trim() !== "") && (
              <div
                style={{
                  marginTop: "30px",
                  padding: "20px",
                  backgroundColor: "#fff5f5",
                  borderRadius: "8px",
                  borderLeft: "5px solid #f56565",
                }}
              >
                <h4 style={{ color: "#c53030", marginTop: 0 }}>
                  Dampak Utama:
                </h4>
                <ul style={{ paddingLeft: "20px", color: "#4a5568" }}>
                  {post.dampak.map((item, index) =>
                    item.trim() !== "" ? (
                      <li key={index} style={{ marginBottom: "5px" }}>
                        {item}
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>Maaf, Artikel tidak ditemukan.</h3>
            <NavLink to="/blog">Kembali ke Daftar Berita</NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
