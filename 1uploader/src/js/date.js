// date.js
const date = new Date();
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const HariIni = {
  dayName: days[date.getDay()],
  day: date.getDate(),
  monthName: months[date.getMonth()],
  year: date.getFullYear(),
};

export default HariIni;
