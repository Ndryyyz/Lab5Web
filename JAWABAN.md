# Jawaban Pertanyaan dan Tugas (Bagian H)

**Nama:** Muhamad Prasetyo Andri Wibowo | **NIM:** 312510181 | **Kelas:** I251B

## 1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`

| Perintah | Fungsi | Tampil di mana |
|---|---|---|
| `console.log()` | Mencetak pesan untuk keperluan pengembang/debugging | Console browser (F12), tidak terlihat oleh pengunjung biasa |
| `alert()` | Menampilkan kotak pesan dan menghentikan sementara halaman sampai ditutup | Jendela dialog browser |
| `prompt()` | Menampilkan kotak dialog untuk meminta masukan; hasilnya berupa string (atau `null` jika dibatalkan) | Jendela dialog browser |
| `textContent` / `innerHTML` | Mengubah isi elemen HTML yang sudah dimuat. `textContent` memperlakukan isi sebagai teks biasa, `innerHTML` membaca isi sebagai kode HTML | Langsung di halaman web |

`textContent` lebih aman untuk teks dari pengguna karena tag HTML tidak dijalankan.

## 2. Perbedaan `let` dan `const`

- `let` dipakai untuk variabel yang nilainya boleh diubah (ditetapkan ulang).
- `const` dipakai untuk variabel yang tidak ditetapkan ulang setelah diberi nilai awal.

```js
let umur = 20;
umur = 21;          // boleh

const nama = "Rani";
// nama = "Budi";   // error: Assignment to constant variable
```

## 3. Perbedaan `==` dan `===`

- `==` membandingkan nilai dengan melakukan konversi tipe otomatis terlebih dahulu.
- `===` membandingkan nilai **dan** tipe data tanpa konversi (strict equality).

```js
console.log(5 == "5");   // true  (string "5" dikonversi ke angka)
console.log(5 === "5");  // false (tipe berbeda: number vs string)
```

Disarankan memakai `===` agar hasil perbandingan lebih bisa diprediksi.

## 4. Fungsi `if–else` dan `switch`

- `if–else` menguji kondisi logis (benar/salah). Cocok untuk rentang nilai atau kondisi gabungan, misalnya `nilai >= 60`.
- `switch` memilih satu tindakan dari beberapa kemungkinan nilai tertentu. Cocok untuk menu atau pilihan angka/teks yang pasti, misalnya pilihan 1 sampai 5. Perintah `break` mencegah eksekusi berlanjut ke `case` berikutnya.

## 5. Fungsi parameter dan `return`

- **Parameter** adalah variabel penerima data masukan saat function dipanggil, sehingga function bisa dipakai dengan data berbeda.
- **`return`** mengembalikan hasil dari function ke pemanggilnya dan mengakhiri eksekusi function.

```js
function hitungLuas(panjang, lebar) {   // panjang & lebar = parameter
  return panjang * lebar;               // return = hasil dikembalikan
}
console.log(hitungLuas(8, 4)); // 32
```

## 6. Memilih elemen dengan `document.getElementById()`

Method ini mencari elemen HTML yang atribut `id`-nya sama dengan teks yang diberikan, lalu mengembalikan elemen tersebut (atau `null` jika tidak ada). Elemen itu kemudian bisa diubah isi atau gayanya.

```html
<p id="pesan">Konten awal.</p>
```
```js
const elemen = document.getElementById("pesan");
elemen.textContent = "Halo, JavaScript!";
elemen.style.color = "blue";
```

## 7. Script validasi form (nama tidak kosong, nilai 0–100)

Form dan script lengkap ada pada `index.html` (bagian "Eksperimen 4 & Tugas 7") dan `script.js`. Intinya:

```js
document.getElementById("formValidasi").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const nilaiInput = document.getElementById("nilai").value.trim();
  const nilai = Number(nilaiInput);
  const hasil = document.getElementById("hasilValidasi");

  if (nama === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (nilaiInput === "" || Number.isNaN(nilai)) {
    hasil.textContent = "Nilai tidak boleh kosong dan harus berupa angka.";
  } else if (nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus berada pada rentang 0–100.";
  } else {
    hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
  }
});
```
