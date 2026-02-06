import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HariIni from "../js/date.js";
import "../css/blog.css";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/azpwk/artikel/refs/heads/main/pertanian/news/2026.json",
        );
        if (!response.ok) throw new Error("Gagal ambil data");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk menampilkan 3 kotak loading (Skeleton)
  const SkeletonCard = () => (
    <div className="card" style={{ border: "1px solid #ddd", padding: "1rem" }}>
      <div className="skeleton skeleton-text" style={{ width: "30%" }}></div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
    </div>
  );

  return (
    <div className="blog-container">
      <h2>Wawasan Pertanian</h2>
      <div className="grid-blog">
        {loading
          ? // Jika masih loading, tampilkan 3 skeleton
            [1, 2, 3].map((n) => <SkeletonCard key={n} />)
          : // Jika sudah selesai, tampilkan posts asli
            posts.map((post) => (
              <div key={post.id} className="card">
                <h3>{post.title}</h3>
                <div className="postdate">
                  <small>{post.tanggal}</small>
                  <span>{post.lokasi}</span>
                </div>

                <p style={{ color: "var(--text-muted)", margin: "10px 0" }}>
                  {post.isi_berita}
                </p>
                <Link to={`/blog/${post.id}`} className="btn-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
