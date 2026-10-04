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
    badge: "SPECIAL 23RD BIRTHDAY SURPRISE",
    title: "Kado Cinta Terindah untuk Bidadariku 🎁",
    voucherCode: "DEWI-23RD-FOREVER",
    dateText: "15.10.26 • 23rd Birthday",
    heroTitle: "I love you with all my heart, Sayang ❤️",
    heroSubtitle: "Di usiamu yang ke-23 ini, aku berjanji akan selalu ada di setiap langkahmu, mencintaimu tanpa henti, dan menjagamu selamanya.",
    couplePhoto: "/images/gift_proposal.jpg",
    categories: [
      {
        id: "cincin",
        name: "Cincin",
        icon: "ring",
        title: "Cincin Janji & Masa Depan Abadi 💍",
        desc: "Sebuah cincin berkilau sebagai pengikat janji suci hatiku. Bahwa apapun yang terjadi di masa depan, tangan ini akan selalu menggenggam tanganmu erat, dan bahu ini akan selalu jadi tempat paling nyaman untukmu bersandar.",
        perk: "Simbol ketulusan cinta tanpa akhir dari Edgar untuk Sayang tercinta.",
        sweetNote: "Kamu adalah rumah tempat hatiku selalu ingin pulang, Sayang. 💍✨"
      },
      {
        id: "tas",
        name: "Tas",
        icon: "bag",
        title: "Tas Wishlist Impian Sang Ratu 👜",
        desc: "Untuk wanitaku yang anggun, tangguh, dan sangat berharga. Apapun tas idaman yang kamu impikan, dengan segenap bahagia aku ingin mewujudkannya agar senyum manismu selalu merekah di setiap langkahmu.",
        perk: "Kado istimewa untuk menemani setiap langkah bahagiamu meraih impian.",
        sweetNote: "Melihatmu tersenyum bahagia adalah hadiah paling berharga buat aku. 💖"
      },
      {
        id: "bunga",
        name: "Bunga",
        icon: "flower",
        title: "Buket Mawar Terindah untuk Bunga Hatiku 💐",
        desc: "Bunga-bunga mawar ini indah, tapi takkan pernah bisa menandingi kecantikan, kebaikan, dan ketulusan hatimu. Biarkan semerbaknya mengingatkanmu betapa dalamnya aku mengagumi dan menyayangimu di setiap detik.",
        perk: "Bunga segar semerbak, seindah rasa cintaku yang terus mekar setiap hari.",
        sweetNote: "Kamu adalah bunga paling cantik yang pernah mekar di hidupku. 🌸🌹"
      },
      {
        id: "kue",
        name: "Kue Ultah",
        icon: "cake",
        title: "Kue Ulang Tahun Manis & Make a Wish 🎂",
        desc: "Selamat ulang tahun yang ke-23, my sweetest soulmate! Tiup lilinnya, pejamkan matamu, dan panjatkan semua harapan terindahmu. Aku akan selalu ada di sampingmu untuk mengaminkan dan memperjuangkannya bersamamu.",
        perk: "Momen manis make a wish berdua yang akan selalu kita kenang selamanya.",
        sweetNote: "Semoga semua doa dan bahagiamu selalu dipeluk semesta, Cintaku. 🕯️✨"
      }
    ],
    items: [
      "✨ Dinner romantis berdua di tempat paling berkesan",
      "🛍️ Wujudkan apapun wishlist impian yang bikin kamu tersenyum bahagia",
      "💆 Pelukan ternyaman, kecupan hangat & dengerin ceritamu tanpa batas waktu",
      "☕ Selalu jadi support system nomor satu di setiap mimpi dan langkahmu"
    ],
    note: "Semua kado ini adalah tanda cintaku yang tulus untuk Sayang tercinta di usia 23 tahun. I love you to the moon and back! ❤️",
  },

  // Audio Latar Belakang (Sound TikTok Asli)
  audio: {
    src: "/audio/bgm.mp3",
    autoPlay: true,
  },

  // Production URL & WhatsApp QR Code Info (Teks untuk dibagikan)
  productionUrl: "https://bbyokta.biz.id",
  whatsappShare: {
    chatPreviewSender: "HAPPY 23RD BIRTHDAY BUBUBBB 🥳💖💖💖",
    chatPreviewBubble: "COBA BUKA INI, ADA SURPRISE SPESIAL BUAT KAMU SAYANG 👇❤️",
    subtext: "Scan untuk buka kejutan kado virtual di bbyokta.biz.id"
  }
};
