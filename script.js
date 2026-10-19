// script.js - Praktikum 5: JavaScript Dasar dan Manipulasi HTML

// ===== Latihan 1 — Menampilkan output =====
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ===== Latihan 2 — Alert dan prompt =====
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// ===== Latihan 3 — Function dan operasi aritmetika =====
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}
operasiDasar(9, 4);

// Versi yang juga menampilkan hasil ke halaman (mengembalikan teks)
function teksOperasi(a, b) {
  return [
    "Penjumlahan : " + (a + b),
    "Pengurangan : " + (a - b),
    "Perkalian   : " + (a * b),
    "Pembagian   : " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus     : " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ].join("\n");
}
document.getElementById("hasilOperasi").textContent = teksOperasi(9, 4);

// Eksperimen 1: dua nilai dari prompt, dikonversi ke number
function operasiDariPrompt() {
  const input1 = prompt("Masukkan bilangan pertama:");
  const input2 = prompt("Masukkan bilangan kedua:");
  const hasil = document.getElementById("hasilOperasiPrompt");

  if (input1 === null || input2 === null || input1.trim() === "" || input2.trim() === "") {
    hasil.textContent = "Input tidak boleh kosong.";
    return;
  }
  const a = Number(input1);
  const b = Number(input2);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    hasil.textContent = "Input harus berupa angka.";
    return;
  }
  operasiDasar(a, b); // tampil di Console
  hasil.textContent = teksOperasi(a, b); // tampil di halaman
}

// ===== Latihan 4 — if–else =====
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");
  const nilaiMahasiswa = Number(inputNilai);

  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// ===== Latihan 5 — switch =====
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

// ===== Latihan 6 — Genap atau ganjil =====
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// ===== Latihan 7 — Mengubah warna halaman =====
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// Contoh dari dasar teori (bagian C.8)
function ubahTampilan() {
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("pesan").style.color = "blue";
  document.getElementById("pesan").textContent = "Tampilan berhasil diubah.";
}

// ===== Latihan 8 — Checkbox menu makanan =====
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ===== Eksperimen 2 — Tabel perkalian 7 =====
function tampilkanTabelPerkalian(angka) {
  let baris = "";
  for (let i = 1; i <= 10; i++) {
    baris += "<tr><td>" + angka + " x " + i + "</td><td>" + (angka * i) + "</td></tr>";
  }
  document.getElementById("tabelPerkalian").innerHTML =
    "<table><tr><th>Perkalian</th><th>Hasil</th></tr>" + baris + "</table>";
  // Versi Console
  for (let i = 1; i <= 10; i++) {
    console.log(angka + " x " + i + " = " + (angka * i));
  }
}

// ===== Eksperimen 3 — cekGenap =====
function cekGenap(angka) {
  return angka % 2 === 0;
}

function demoCekGenap() {
  const input = document.getElementById("angkaGenap").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilCekGenap");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = "cekGenap(" + angka + ") = " + cekGenap(angka);
}

// ===== Eksperimen 4 & Tugas H.7 — Validasi form =====
document.getElementById("formValidasi").addEventListener("submit", function (e) {
  e.preventDefault(); // cegah halaman reload
  const nama = document.getElementById("nama").value.trim();
  const nilaiInput = document.getElementById("nilai").value.trim();
  const nilai = Number(nilaiInput);
  const hasil = document.getElementById("hasilValidasi");

  if (nama === "") {
    hasil.className = "error";
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (nilaiInput === "" || Number.isNaN(nilai)) {
    hasil.className = "error";
    hasil.textContent = "Nilai tidak boleh kosong dan harus berupa angka.";
  } else if (nilai < 0 || nilai > 100) {
    hasil.className = "error";
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
  } else {
    hasil.className = "ok";
    hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
  }
});

// ===== Eksperimen 6 — Sembunyikan / tampilkan elemen =====
document.getElementById("tombolToggle").addEventListener("click", function () {
  const teks = document.getElementById("teksToggle");
  if (teks.style.display === "none") {
    teks.style.display = "block";
    this.textContent = "Sembunyikan Teks";
  } else {
    teks.style.display = "none";
    this.textContent = "Tampilkan Teks";
  }
});
