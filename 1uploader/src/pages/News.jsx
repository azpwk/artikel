import "../css/alert.css";
import Alert from "../assets/alert.svg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
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

        // LOGIKA SCAN & LIMIT:
        // 1. .reverse() membuat ID terbesar (berita terbaru) berada di awal.
        // 2. .slice(0, 6) hanya mengambil 6 item pertama.
        const latestPosts = data.reverse().slice(0, 6);

        setPosts(latestPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const SkeletonCard = () => (
    <div className="card" style={{ border: "1px solid #ddd", padding: "1rem" }}>
      <div className="skeleton skeleton-text" style={{ width: "30%" }}></div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
    </div>
  );

  return (
    <>
      <div className="grid">
        {loading
          ? [1, 2, 3].map((n) => <SkeletonCard key={n} />)
          : posts.map((post) => (
              <div key={post.id} className="card">
                <h3>{post.judul}</h3>
                <div className="postdate">
                  <small>{post.tanggal}</small>
                  <span>{post.lokasi}</span>
                </div>
                <p style={{ color: "var(--text-muted)", margin: "10px 0" }}>
                  {/* Membatasi teks agar tidak terlalu panjang di grid */}
                  {post.isi_berita.substring(0, 100)}...
                </p>
                <Link to={`/blog/${post.id}`} className="btn-read-more">
                  Baca Selengkapnya →
                </Link>
              </div>
            ))}
      </div>
    </>
  );
};

export default News;
