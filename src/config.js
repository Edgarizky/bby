// ==============================================================
// KONFIGURASI KADO VIRTUAL / BIRTHDAY SURPRISE
// Ubah teks, foto, tanggal, dan lagu di bawah ini sesuai keinginan Anda!
// ==============================================================

export const config = {
  // Informasi Pasangan
  partnerName: "Dewi Tri Octariani Mulyono",
  nickname: "Sayang", // e.g. Bububbb, Sayang, Cil, dll
  birthDate: "15 Oktober 2026",
  age: 23,
  
  // Halaman 0: Envelope / Amplop Pembuka
  envelope: {
    title: "Press the Envelope",
    subtitle: "tap to lanjut",
    waxSealColor: "#8e0078", // warna segel wax
  },

  // Halaman 1: Perayaan Birthday (Collage Envelope)
  celebration: {
    title: "Happy Birthday",
    dateText: "15.10.2026 • 23rd Birthday",
    subtitle: "TAP FOR SURPRISE",
    // Foto-foto kolase halaman 1
    heartPhoto: "/images/celebration_couple_beach.jpg", // Foto bentuk Hati (Kiri atas)
    polaroidPhoto: "/images/celebration_couple_flower.png", // Foto Polaroid (Kiri bawah)
    photostrip: [
      "/images/celebration_portrait_smile.jpg", // Photostrip atas
      "/images/celebration_beach_night.jpg", // Photostrip tengah
      "/images/celebration_cute_silly.png", // Photostrip bawah
    ],
  },

  // Halaman 2: Menu Utama (Choose the Surprise)
  menu: {
    title: "Choose the Surprise",
    items: [
      { id: "journey", title: "Memory of Us", icon: "camera", desc: "Our Memories & Love Story" },
      { id: "moment", title: "Moment", icon: "watch", desc: "Surat Cinta & Musik Spesial" },
      { id: "playlist", title: "Playlist", icon: "disc", desc: "Lagu Favorit Khusus Buat Kamu" },
      { id: "gift", title: "Gift", icon: "gift", desc: "Kejutan Kado Rahasia" },
    ]
  },

  // Halaman 3: Memory of Us (Photostrip Kolase Aesthetic & Daisy Flowers)
  journey: {
    title: "Our Memories",
    subtitle: "Here's to all the memories we've made... and all the ones we're yet to create.",
    photos: [
      { id: 1, url: "/images/memory_couple_dino.png", caption: "Cozy Night With You 🦖💖" },
      { id: 2, url: "/images/memory_couple_peace.png", caption: "Peace & Love Always ✌️✨" },
      { id: 3, url: "/images/celebration_couple_flower.png", caption: "Flowers for My Special Girl 🌸💐" },
      { id: 4, url: "/images/memory_birthday_cake.png", caption: "Make a Wish, Birthday Girl 🎂🕯️✨" },
      { id: 5, url: "/images/memory_couple_bee.png", caption: "Silly Faces, Pure Joy 🐝😋" },
      { id: 6, url: "/images/memory_couple_beach.jpg", caption: "Sunset Walk & Sweet Breeze 🌅❤️" }
    ]
  },

  // Halaman 4: Moment (Surat Cinta & Musik)
  moment: {
    name: "Dewi Tri Octariani Mulyono",
    firstName: "Dewi Tri Octariani",
    lastName: "Mulyono",
    senderName: "Edgar",
    photo: "/images/moment_portrait_dewi.png",
    letter: `"Selamat ulang tahun yang ke-23, Sayang. Di hari spesialmu ini, aku cuma mau bilang terima kasih karena sudah lahir ke dunia dan membawa begitu banyak kebahagiaan ke hidupku. Kamu adalah hal terindah yang pernah hadir dalam hidupku, dan aku berharap bisa terus merayakan hari-hari bahagiamu di tahun-tahun berikutnya. I love you so much, kini dan nanti."`,
    signature: "— Edgar ❤️",
  },

  // Halaman 5: Playlist (YouTube & Galeri Foto Vintage)
  playlist: {
    // Video YouTube (Bisa diganti ID videonya, e.g. "Sur6aFd1URk")
    youtubeId: "Sur6aFd1URk",
    songTitle: "Cinderella - Mac Miller (Lyrics) ft. Ty Dolla $ign",
    frames: [
      {
        url: "/images/playlist_glasses_blazer.jpg",
        caption: "Cute glasses look ✨"
      },
      {
        url: "/images/playlist_glasses_couch.jpg",
        caption: "Prettiest girl in the world 💖"
      },
      {
        url: "/images/playlist_cafe_smile.png",
        caption: "Your beautiful smile 🌸"
      }
    ]
  },

  // Halaman 6: Gift (Hadiah Spesial & Pilihan Kado)
  gift: {
    badge: "SPECIAL 23RD BIRTHDAY GIFT",
    title: "Kado Ulang Tahun Spesial 23rd 🎁",
    voucherCode: "DEWI-23RD-FOREVER",
    dateText: "15.10.26 • 23rd Birthday",
    heroTitle: "I love you, Love!",
    heroSubtitle: "Always proud of you, always here with you.",
    couplePhoto: "/images/couple_kiss_cheek.jpg",
    categories: [
      {
        id: "cincin",
        name: "Cincin",
        icon: "ring",
        title: "Cincin Impian Spesial 💍",
        desc: "Lambang cinta abadi dan janji selamanya untuk selalu ada di sampingmu.",
        perk: "A gorgeous ring chosen with all my love, just for you.",
        waText: "Halo Sayang! Aku mau klaim kado Cincin impianku di ultah ke-23 ini! 💍✨"
      },
      {
        id: "tas",
        name: "Tas",
        icon: "bag",
        title: "Tas Wishlist Pilihanmu 👜",
        desc: "Pilih tas idaman yang paling kamu suka, aku yang siap wujudkan!",
        perk: "Shopping spree wishlist tas favorit pilihan kamu.",
        waText: "Halo Sayang! Aku mau klaim kado Tas wishlist pilihanku! 👜💖"
      },
      {
        id: "bunga",
        name: "Bunga",
        icon: "flower",
        title: "Buket Bunga Terindah 💐",
        desc: "Buket bunga segar nan harum spesial khusus di hari ulang tahunmu yang ke-23.",
        perk: "Grand fresh flower bouquet delivered straight with love.",
        waText: "Halo Sayang! Aku mau klaim kado Buket Bunga spesialku! 💐🌹"
      },
      {
        id: "kue",
        name: "Kue Ultah",
        icon: "cake",
        title: "Kue Ulang Tahun Spesial 23rd 🎂",
        desc: "Kue ulang tahun manis spesial untuk merayakan usia 23 tahun bidadari tercantikku!",
        perk: "Sweet custom 23rd birthday cake & make a wish bersama aku.",
        waText: "Halo Sayang! Aku mau klaim Kue Ulang Tahun ke-23 kita! 🎂🎉"
      }
    ],
    items: [
      "✨ Dinner romantis di restoran favorit kamu (aku yang traktir!)",
      "🛍️ Shopping spree wishlist pilihan kamu",
      "💆 Pelukan hangat & dengerin curhat tanpa batas waktu",
      "☕ Seharian bebas ngambek & dapat pelayanan ratu 24 jam!"
    ],
    note: "Voucher ini berlaku selamanya dan tidak ada tanggal kadaluarsa. Klik tombol klaim untuk kirim ke WhatsApp aku! ❤️",
    claimWhatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp kamu jika ingin klaim langsung
    claimMessage: "Halo sayang! Aku udah buka webnya dan mau klaim kado ulang tahunku sekarang! ❤️🎁"
  },

  // Audio Latar Belakang (Sound TikTok Asli)
  audio: {
    src: "/audio/bgm.mp3",
    autoPlay: true,
  },

  // WhatsApp QR Code Info (Teks untuk dibagikan)
  whatsappShare: {
    chatPreviewSender: "HAPPY BITYHDAY BUBUBBB 🥳💖💖💖",
    chatPreviewBubble: "COBA BUKA INI 👇",
  }
};
