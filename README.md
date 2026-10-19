# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

| | |
|---|---|
| **Nama** | Muhamad Prasetyo Andri Wibowo |
| **NIM** | 312510181 |
| **Kelas** | I251B |
| **Program Studi** | Teknik Informatika |
| **Mata Kuliah** | Pemrograman Web (Pertemuan 6) |

## Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## Struktur Folder

```
Lab5Web/
├── index.html        # Latihan 1-8 dan eksperimen mandiri
├── script.js         # JavaScript untuk index.html
├── minproject.html   # Mini project: Kalkulator Nilai Mahasiswa
├── minproject.js     # JavaScript untuk minproject.html
├── JAWABAN.md        # Jawaban pertanyaan Bagian H
├── README.md
└── screenshots/      # Screenshot hasil setiap latihan
```

## Cara Menjalankan

1. Unduh atau clone repository ini.
2. Buka `index.html` dengan browser modern (Chrome/Edge/Firefox). Cukup klik dua kali, tanpa server.
3. Tekan **F12** lalu pilih tab **Console** untuk melihat output `console.log`.
4. Untuk mini project, klik tautan di bagian atas halaman atau buka `minproject.html`.

## Langkah Kerja

1. Membuat folder kerja `Lab5Web` dengan file `index.html` dan `script.js`.
2. Menyalin kerangka HTML dari modul dan menghubungkan `script.js` dengan `<script src="script.js"></script>` di akhir `<body>`, supaya semua elemen sudah termuat saat script berjalan.
3. Mengerjakan Latihan 1 sampai 8 berurutan. Latihan yang memakai `prompt()` dijalankan lewat tombol agar tidak muncul dialog otomatis setiap halaman dibuka.
4. Mengerjakan eksperimen mandiri dan mini project.
5. Menguji setiap latihan, mengambil screenshot, lalu commit ke repository.

## Hasil Setiap Latihan

### Latihan 1 — Menampilkan output
Teks pada halaman berubah menjadi "Hello World" melalui `textContent`, dan pesan yang sama tampil di Console. Perbedaannya: output halaman terlihat oleh pengguna, sedangkan Console hanya terlihat oleh pengembang.

![Latihan 1] <img width="1350" height="348" alt="latihan1" src="https://github.com/user-attachments/assets/9471f68a-e84f-4e3b-8572-44d7665e87dc" />

### Latihan 2 — Alert dan prompt
| Skenario | Hasil |
|---|---|
| Mengisi nama "Ndry" | Alert "Halo, Ndry!" dan teks halaman menjadi "Selamat datang, Ndry." |
| Menekan Cancel | `prompt` mengembalikan `null`, tampil alert "Nama belum diisi." |
| Input kosong | Tampil alert "Nama belum diisi." |

![Latihan 2] <img width="1350" height="621" alt="latihan2" src="https://github.com/user-attachments/assets/f64c35b7-b4e5-412a-b118-5cda14d36a0e" />

### Latihan 3 — Function dan operasi aritmetika
`operasiDasar(9, 4)` menghasilkan: penjumlahan 13, pengurangan 5, perkalian 36, pembagian 2.25, modulus 1. Pembagian dan modulus diberi pengaman agar tidak error saat pembagi 0.

![Latihan 3] <img width="1350" height="773" alt="latihan3" src="https://github.com/user-attachments/assets/723b6435-ea85-40e0-919f-319e3bcabdb2" />

### Latihan 4 — if–else
| Input | Hasil |
|---|---|
| 75 | Lulus |
| 40 | Belum lulus |
| abc / kosong / 105 / Cancel | Input nilai tidak valid. |

![Latihan 4] <img width="1350" height="978" alt="latihan4" src="https://github.com/user-attachments/assets/42401e37-4c22-4ba8-8c31-2628cd90283b" />

### Latihan 5 — switch
Angka 1 sampai 5 menampilkan "Bilangan satu" sampai "Bilangan lima". Nilai lain menampilkan "Pilihan tidak tersedia".

![Latihan 5] <img width="1350" height="740" alt="latihan5" src="https://github.com/user-attachments/assets/abbcbd4c-979c-49df-a0b3-c7747f6dbe2c" />

### Latihan 6 — Genap atau ganjil
| Input | Hasil |
|---|---|
| 4 | Bilangan genap |
| -3 | Bilangan ganjil |
| 0 | Bilangan genap |
| 2.5 | Masukkan bilangan bulat yang valid. |
| (kosong) | Masukkan bilangan bulat yang valid. |

![Latihan 6] <img width="1350" height="546" alt="latihan6" src="https://github.com/user-attachments/assets/1c8f382a-b8ab-4c81-a2c6-2685f1325558" />

### Latihan 7 — Mengubah warna halaman
Satu function `ubahWarnaLatar(warna)` dipakai oleh tiga tombol (hijau, putih, kuning), sehingga kode tidak berulang.

![Latihan 7] <img width="1350" height="275" alt="latihan7" src="https://github.com/user-attachments/assets/7d42549a-8e8f-49a2-a27d-fbda8caa3aef" />

### Latihan 8 — Checkbox menu makanan
Total harga dihitung ulang setiap checkbox dicentang atau dilepas. Contoh: Ayam Goreng + Tempe + Es Teh Manis = Rp7.500.

![Latihan 8] <img width="1350" height="485" alt="latihan8" src="https://github.com/user-attachments/assets/b099d0d0-f5a3-460d-b57b-6842aa4ffca1" />

## Mini Project — Kalkulator Nilai Mahasiswa

Rumus nilai akhir: Tugas 30% + UTS 30% + UAS 40%. Predikat: A (≥85), B (≥75), C (≥60), D (≥50), E (<50). Status lulus jika nilai akhir ≥ 60. Perhitungan (`hitungNilaiAkhir`, `tentukanPredikat`, `tentukanStatus`) dipisahkan dari tampilan (`tampilkanHasil`, `tampilkanError`).

| Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|---|---|---|---|---|---|---|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 90 | 85 | 95 | 90.50 | A | Lulus |
| 3 | 70 | 60 | 62 | 63.80 | C | Lulus |
| 4 | 60 | 55 | 52 | 55.30 | D | Belum lulus |
| 5 | 40 | 50 | 45 | 45.00 | E | Belum lulus |

Validasi: input kosong, bukan angka, atau di luar rentang 0–100 menampilkan pesan kesalahan di halaman.

Tampilan dan Console untuk skenario 1:

![Mini Project] <img width="1350" height="917" alt="miniproject" src="https://github.com/user-attachments/assets/76353751-386b-4f63-bb6f-993bb660ef50" />

Kelima skenario di tabel di atas, ditambah dua uji validasi (Tugas kosong dan Tugas 101):

![Skenario Mini Project] <img width="1488" height="2296" alt="miniproject-skenario" src="https://github.com/user-attachments/assets/2be27315-1921-470c-b894-e1053627192e" />

## Eksperimen Mandiri

### Eksperimen 1 — Dua nilai dari prompt
Latihan 3 diubah agar menerima dua nilai dari `prompt()` yang dikonversi ke number (`operasiDariPrompt()`). Contoh input 17 dan 5.

![Eksperimen 1] <img width="1350" height="860" alt="eksperimen1" src="https://github.com/user-attachments/assets/20b542d3-6e3c-4006-9343-420a30a99eba" />

### Eksperimen 2 — Tabel perkalian angka 7
Perulangan `for` menampilkan 7 x 1 sampai 7 x 10 (`tampilkanTabelPerkalian()`).

![Eksperimen 2] <img width="1350" height="743" alt="eksperimen2" src="https://github.com/user-attachments/assets/be7e9915-adee-4038-91ce-b0259bb621a8" />

### Eksperimen 3 — Function `cekGenap(angka)`
Mengembalikan `true` jika angka genap, `false` jika ganjil.

![Eksperimen 3] <img width="1350" height="506" alt="eksperimen3" src="https://github.com/user-attachments/assets/e9451560-4d3c-4fce-ab55-e7f07f07bfbe" />

### Eksperimen 4 — Validasi form
Nama tidak boleh kosong dan nilai harus berada pada rentang 0–100. Ini juga menjawab Tugas nomor 7.

![Eksperimen 4] <img width="1350" height="605" alt="eksperimen4" src="https://github.com/user-attachments/assets/48217d4a-28cc-4e17-a31c-36f20c0a5fa8" />

### Eksperimen 5 — Tambahan menu
Latihan 8 ditambah dua menu: Nasi Putih Rp3.000 dan Es Teh Manis Rp2.000. Contoh: Ayam Goreng + Nasi Putih + Es Teh Manis = Rp10.000.

![Eksperimen 5] <img width="1350" height="485" alt="eksperimen5" src="https://github.com/user-attachments/assets/4a478d71-bb61-4e32-ae75-bb42f4230152" />

### Eksperimen 6 — Sembunyikan/tampilkan elemen
Tombol mengganti `style.display` antara `none` dan `block`. Gambar atas: sebelum diklik, gambar bawah: sesudah diklik.

![Eksperimen 6] <img width="1350" height="488" alt="eksperimen6" src="https://github.com/user-attachments/assets/f976dd3c-2ff3-41fd-b40c-84c700198d1e" />

## Catatan tentang Screenshot

Screenshot diambil otomatis dari browser Chromium yang menjalankan file di repository ini. Karena dialog `alert`/`prompt` dan Console tidak bisa difoto langsung secara otomatis, isinya ditampilkan pada panel gelap di bawah setiap latihan. Isi panel itu direkam dari eksekusi sebenarnya, bukan diketik manual.

## Pertanyaan dan Tugas

Jawaban pertanyaan nomor 1 sampai 7 ada di [JAWABAN.md](JAWABAN.md).

## Referensi

1. Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O'Reilly Media.
2. MDN Web Docs. JavaScript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
