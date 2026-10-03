# 🎁 Template Website Birthday Surprise (Vercel Ready)

Website interaktif kejutan ulang tahun yang direplikasi persis dari video TikTok, dilengkapi dengan animasi buka amplop segel wax, neon glow, galeri kenangan, surat cinta, pemutar musik, embed video YouTube favorit, kado voucher, serta **Generator QR Code berbentuk Hati** untuk dikirim ke WhatsApp!

---

## 🚀 Fitur Unggulan
1. **Intro Amplop Interaktif (Page 0):** Segel wax ungu 3D bertuliskan *"Press the Envelope"*, efek getar dan buka lipatan amplop yang mulus saat disentuh.
2. **Perayaan Birthday (Page 1):** Teks neon menyala *"Happy Birthday"*, tanggal kelahiran, foto polaroid vintage, taburan confetti, dan tombol *"TAP FOR SURPRISE"*.
3. **Menu Utama "Choose the Surprise" (Page 2):** 4 pilihan dengan pancaran cahaya emas (golden ray burst):
   - 📷 **Journey:** Galeri scrapbook kenangan manis berdua + popup preview (lightbox).
   - ⏱️ **Moment:** Surat cinta di kertas vintage, bingkai foto emas klasik, buket mawar merah, dan piringan vinyl *"Play Musik"*.
   - 🎵 **Playlist:** Pemutar video YouTube (*Cinderella - Mac Miller*), bingkai foto vintage jadul, radio & TV retro, serta gelombang not balok neon menyala.
   - 🎁 **Gift:** Kotak kado 3D interaktif yang bisa diklik untuk membuka voucher spesial + tombol langsung klaim ke WhatsApp!
4. **Tombol "BACK ◀"** hijau ikonik di setiap halaman untuk kembali ke menu utama.
5. **Generator QR Code Hati (WhatsApp Ready):** Tombol di pojok kiri bawah untuk membuat QR Code berbentuk hati (lengkap dengan mockup bubble WhatsApp) yang bisa di-download dan dikirim ke pasangan Anda.
6. **Musik Latar:** Disertai audio sound TikTok asli (`/audio/bgm.mp3`) dan widget vinyl musik mengambang di pojok kanan bawah.

---

## 🛠️ Cara Kustomisasi Data (Sangat Mudah!)
Semua data (nama pasangan, tanggal lahir, isi surat, foto-foto, video YouTube, dan nomor WhatsApp) terpusat di satu file:
👉 [`src/config.js`](file:///c:/Users/Jasamedika/Desktop/KosankuPro/src/config.js)

Cukup buka file tersebut dan ubah nilai variabel sesuai kebutuhan Anda:
- `partnerName`: Ganti nama pasangan (default: "Freya Anindya")
- `birthDate`: Ganti tanggal lahir (default: "28.08.2026")
- `moment.letter`: Ganti isi surat cinta
- `journey.photos`: Masukkan URL foto-foto kenangan Anda
- `playlist.youtubeId`: Ganti ID video YouTube favorit
- `gift.claimWhatsappNumber`: Ganti dengan nomor WhatsApp Anda untuk klaim kado

---

## 💻 Menjalankan di Komputer Lokal
1. Buka terminal di folder project ini:
   ```bash
   npm run dev
   ```
2. Buka browser di: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Cara Deploy ke Vercel (100% Gratis & Instan)

### Opsi A: Menggunakan Vercel CLI (Paling Cepat)
1. Install Vercel CLI jika belum ada:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah:
   ```bash
   vercel
   ```
3. Ikuti langkah singkat di terminal (tekan `Enter` untuk default). Website Anda akan langsung online dengan domain seperti `https://namaproject.vercel.app`!

### Opsi B: Menggunakan GitHub + Vercel Dashboard
1. Buat repository baru di GitHub dan upload folder ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Birthday Surprise"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_ANDA>
   git push -u origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com/) -> **Add New Project** -> **Import Git Repository**.
3. Vercel akan otomatis mendeteksi konfigurasi `Vite` dan file [`vercel.json`](file:///c:/Users/Jasamedika/Desktop/KosankuPro/vercel.json).
4. Klik **Deploy**!
