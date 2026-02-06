// Cabairawit.jsx
import React, { useState } from "react";
import "../css/Blogger.css";

const Cabairawit = () => {
  const [days, setDays] = useState(90);
  const [plantingDate, setPlantingDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [altitude, setAltitude] = useState("rendah");
  const [fertilizer, setFertilizer] = useState("optimal");
  const [weather, setWeather] = useState("normal");
  const [showResult, setShowResult] = useState(false);
  const [harvestResult, setHarvestResult] = useState({
    harvestDate: "",
    totalDays: 0,
  });

  const handleDayChange = (event) => {
    setDays(parseInt(event.target.value));
  };

  const getHarvestDate = () => {
    const today = new Date();
    const harvestDate = new Date(today);
    harvestDate.setDate(today.getDate() + days);
    return harvestDate.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getPhase = (days) => {
    if (days <= 30) return "Penyemaian";
    if (days <= 40) return "Fase Vegetatif";
    if (days <= 60) return "Fase Generatif (Bunga)";
    if (days <= 85) return "Fase Pematangan";
    return "Siap Panen!";
  };

  const getPhaseDescription = (days) => {
    if (days <= 30) return "Benih disemai sampai muncul 4-5 helai daun.";
    if (days <= 40) return "Pertumbuhan batang dan daun dipercepat.";
    if (days <= 60) return "Bunga mulai muncul dan berubah menjadi buah kecil.";
    if (days <= 85)
      return "Buah membesar dan berubah warna dari hijau ke jingga/merah.";
    return "Cabai sudah keras dan berwarna merah mengkilap. Siap dipanen!";
  };

  const calculateHarvestDate = () => {
    const baseDays = 90;
    let adjustment = 0;

    if (altitude === "rendah") adjustment -= 5;
    if (altitude === "tinggi") adjustment += 10;

    if (fertilizer === "kurang") adjustment += 15;
    if (fertilizer === "optimal") adjustment -= 3;

    if (weather === "hujan") adjustment += 12;
    if (weather === "cerah") adjustment -= 5;

    const totalDays = baseDays + adjustment;
    const planting = new Date(plantingDate);
    const harvest = new Date(planting);
    harvest.setDate(planting.getDate() + totalDays);

    return {
      harvestDate: harvest.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      totalDays: totalDays,
    };
  };

  const handleCalculate = () => {
    const result = calculateHarvestDate();
    setHarvestResult(result);
    setShowResult(true);
  };

  const phases = [
    {
      phase: "Penyemaian",
      time: "25 – 30 hari",
      description: "Benih disemai sampai muncul 4-5 helai daun.",
    },
    {
      phase: "Vegetatif",
      time: "1 – 40 HST",
      description: "Pertumbuhan batang dan daun dipercepat.",
    },
    {
      phase: "Generatif (Bunga)",
      time: "45 – 60 HST",
      description: "Bunga mulai muncul dan berubah menjadi buah kecil.",
    },
    {
      phase: "Pematangan",
      time: "60 – 85 HST",
      description:
        "Buah membesar dan berubah warna dari hijau ke jingga/merah.",
    },
    {
      phase: "Panen Perdana",
      time: "85 – 95 HST",
      description: "Cabai sudah keras dan berwarna merah mengkilap.",
    },
  ];

  const factors = [
    {
      icon: "🏔️",
      title: "Ketinggian Tempat",
      description:
        "Di dataran rendah, suhu lebih panas sehingga cabai lebih cepat matang. Di dataran tinggi yang dingin, proses pematangan bisa sedikit lebih lambat.",
    },
    {
      icon: "🌱",
      title: "Pemupukan",
      description:
        "Unsur Kalium (K) sangat krusial di fase pembuahan. Jika kekurangan Kalium, buah lama matangnya dan mudah rontok.",
    },
    {
      icon: "☔",
      title: "Cuaca",
      description:
        "Curah hujan yang terlalu tinggi bisa menghambat proses pematangan dan meningkatkan risiko jamur.",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>Cabai Rawit Varietas Ori 212</h1>
        <p className="subtitle">
          Primadona dengan Produktivitas Tinggi - Panduan Estimasi Waktu Panen
        </p>
      </header>

      <section className="intro">
        <p>
          <strong>Cabai rawit varietas Ori 212</strong> memang jadi primadona
          karena produktivitasnya yang tinggi. Kalau kamu sedang menanam atau
          berencana menanamnya, berikut adalah estimasi waktu panennya.
        </p>
      </section>

      {/* Simulator Perkembangan */}
      <div className="calculator">
        <h3>Simulasi Perkembangan Cabai Rawit Ori 212</h3>
        <div className="input-group">
          <label htmlFor="daysInput">
            Hari Setelah Tanam (HST): <strong>{days} hari</strong>
          </label>
          <input
            type="range"
            id="daysInput"
            min="1"
            max="120"
            value={days}
            onChange={handleDayChange}
          />
          <div className="range-labels">
            <span>1 HST</span>
            <span>120 HST</span>
          </div>
        </div>

        <div className="result">
          <p>
            <strong>Fase saat ini:</strong> {getPhase(days)}
          </p>
          <p>
            <strong>Deskripsi:</strong> {getPhaseDescription(days)}
          </p>
          {days >= 85 && (
            <p className="harvest-date">
              <strong>Estimasi panen:</strong> {getHarvestDate()}
            </p>
          )}
        </div>
      </div>

      {/* Estimasi Waktu Panen */}
      <section>
        <h2>Estimasi Waktu Panen</h2>
        <p>
          Secara umum, cabai rawit Ori mulai bisa dipanen pada rentang waktu:
        </p>

        <div className="harvest-estimation">
          <div className="days-box">
            <div className="days-number">85-95</div>
            <div className="days-label">Hari Setelah Tanam</div>
          </div>
          <div className="months-box">
            <p>
              Artinya, kamu butuh waktu sekitar <strong>3 bulan</strong> setelah
              bibit dipindahkan dari persemaian ke lahan permanen untuk melihat
              buahnya memerah sempurna.
            </p>
          </div>
        </div>
      </section>

      {/* Tahapan Menuju Panen */}
      <section>
        <h2>Tahapan Menuju Panen</h2>
        <p>
          Waktu maksimal ini sangat bergantung pada cara kamu merawatnya.
          Berikut adalah fase yang akan dilalui:
        </p>

        <table className="phase-table">
          <thead>
            <tr>
              <th>Fase Pertumbuhan</th>
              <th>Waktu (Estimasi)</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((item, index) => (
              <tr key={index}>
                <td>{item.phase}</td>
                <td>{item.time}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Faktor yang Mempengaruhi */}
      <section>
        <h2>Faktor yang Mempengaruhi Kecepatan Panen</h2>
        <p>
          Kalau sampai lewat dari 100 hari belum merah juga, biasanya ada
          beberapa faktor yang mempengaruhinya:
        </p>

        <div className="factors-section">
          {factors.map((factor, index) => (
            <div className="factor-card" key={index}>
              <div className="factor-icon">{factor.icon}</div>
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <div className="tip-box">
        <div className="tip-title">💡 Tips Panen</div>
        <p>
          Panenlah saat buah sudah berwarna merah minimal 80-90% jika ingin
          dijual ke pasar, agar daya simpannya lebih lama.
        </p>
      </div>

      {/* Kalkulator Estimasi Panen */}
      <div className="calculator">
        <h3>Kalkulator Estimasi Panen Cabai Rawit Ori 212</h3>
        <p>
          Masukkan data budidaya Anda untuk mendapatkan estimasi waktu panen
          yang lebih akurat:
        </p>

        <div className="input-group">
          <label htmlFor="plantingDate">Tanggal Tanam:</label>
          <input
            type="date"
            id="plantingDate"
            value={plantingDate}
            onChange={(e) => setPlantingDate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="altitude">Ketinggian Tempat:</label>
          <select
            id="altitude"
            value={altitude}
            onChange={(e) => setAltitude(e.target.value)}
          >
            <option value="rendah">Dataran Rendah (0-400 mdpl)</option>
            <option value="menengah">Dataran Menengah (400-700 mdpl)</option>
            <option value="tinggi">Dataran Tinggi (700+ mdpl)</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="fertilizer">Intensitas Pemupukan Kalium (K):</label>
          <select
            id="fertilizer"
            value={fertilizer}
            onChange={(e) => setFertilizer(e.target.value)}
          >
            <option value="kurang">Kurang</option>
            <option value="cukup">Cukup</option>
            <option value="optimal">Optimal</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="weather">Kondisi Cuaca Dominan:</label>
          <select
            id="weather"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          >
            <option value="hujan">Hujan Lebat</option>
            <option value="normal">Normal/Berganti</option>
            <option value="cerah">Cerah/Panas</option>
          </select>
        </div>

        <button onClick={handleCalculate}>Hitung Estimasi Panen</button>

        {showResult && (
          <div className="result harvest-result">
            <h4>Hasil Estimasi Panen:</h4>
            <p>
              <strong>Total HST:</strong> {harvestResult.totalDays} hari
            </p>
            <p>
              <strong>Tanggal Panen Estimasi:</strong>{" "}
              {harvestResult.harvestDate}
            </p>
            <p>
              <strong>Catatan:</strong> Hasil ini merupakan estimasi berdasarkan
              data yang dimasukkan. Faktor lain seperti hama, penyakit, dan
              perawatan harian juga mempengaruhi hasil akhir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cabairawit;
