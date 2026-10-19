// minproject.js - Kalkulator Nilai Mahasiswa

// ---------- Bagian perhitungan (tidak menyentuh tampilan) ----------
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// Validasi satu nilai: kembalikan pesan error, atau "" jika valid
function validasiNilai(teks, namaField) {
  if (teks.trim() === "") return "Nilai " + namaField + " tidak boleh kosong.";
  const angka = Number(teks);
  if (Number.isNaN(angka)) return "Nilai " + namaField + " harus berupa angka.";
  if (angka < 0 || angka > 100) return "Nilai " + namaField + " harus berada pada rentang 0–100.";
  return "";
}

// ---------- Bagian tampilan ----------
function tampilkanHasil(tugas, uts, uas) {
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = tentukanStatus(akhir);
  const kotak = document.getElementById("hasil");

  kotak.className = status === "Lulus" ? "lulus" : "gagal";
  kotak.innerHTML =
    "<strong>Nilai akhir:</strong> " + akhir.toFixed(2) + "<br>" +
    "<strong>Predikat:</strong> " + predikat + "<br>" +
    "<strong>Status:</strong> " + status;

  // Tetap tampil di Console sesuai contoh modul
  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", status);
}

function tampilkanError(pesan) {
  const kotak = document.getElementById("hasil");
  kotak.className = "error";
  kotak.textContent = pesan;
}

document.getElementById("formNilai").addEventListener("submit", function (e) {
  e.preventDefault();

  const teksTugas = document.getElementById("tugas").value;
  const teksUts = document.getElementById("uts").value;
  const teksUas = document.getElementById("uas").value;

  const daftarError = [
    validasiNilai(teksTugas, "Tugas"),
    validasiNilai(teksUts, "UTS"),
    validasiNilai(teksUas, "UAS")
  ].filter((pesan) => pesan !== "");

  if (daftarError.length > 0) {
    tampilkanError(daftarError.join(" "));
    return;
  }

  tampilkanHasil(Number(teksTugas), Number(teksUts), Number(teksUas));
});

document.getElementById("tombolReset").addEventListener("click", function () {
  const kotak = document.getElementById("hasil");
  kotak.className = "";
  kotak.textContent = "";
});
