// src/data/articles.ts — Pilot batch (13 articles, all content types, evidence-based)
// Articles 11–13 added Batch 3 + V1 completion: acoustic concept, bass service, bass concept
import type { Article } from "@/lib/types";

const SRC_FENDER_SETUP = { title: "Fender Setup Guide (structural reference — Fender)", tier: "primary" as const, author: "Fender Musical Instruments", publisher: "Fender", accessDate: "2026-08-28", note: "Used as structural reference. Not a universal rule; instrument-dependent." };
const SRC_GIBSON_REPAIR = { title: "Gibson Repair / Setup Documentation (structural reference)", tier: "primary" as const, author: "Gibson", publisher: "Gibson", accessDate: "2026-08-28", note: "Reference for comparison." };
const SRC_FISHMAN = { title: "Fishman Acoustic Pickup / Preamp Documentation", tier: "primary" as const, author: "Fishman", publisher: "Fishman", accessDate: "2026-08-28" };
const SRC_LRBAGGS = { title: "LR Baggs Pickup / Preamp Documentation", tier: "primary" as const, author: "LR Baggs", publisher: "LR Baggs", accessDate: "2026-08-28" };
const SRC_STEWMAC = { title: "StewMac Technical Reference (fret rocker, fret leveling, tool usage)", tier: "expert" as const, publisher: "Stewart-MacDonald", accessDate: "2026-08-28", note: "Tier 2 — industry-standard luthier supply reference; specific URLs vary." };
const SRC_DADDARIO = { title: "D'Addario String Manufacturer Guide", tier: "primary" as const, author: "D'Addario", publisher: "D'Addario", accessDate: "2026-08-28" };

export const ARTICLES: Article[] = [
  // ── 1. concept — Apa Itu Setup Gitar? ─────────────────────────────────────
  {
    id: "art-setup-concept-001",
    slug: "apa-itu-setup-gitar",
    title: "Apa Itu Setup Gitar?",
    description: "Penjelasan mendasar tentang apa yang dimaksud dengan 'setup gitar' — proses penyesuaian instrumen untuk playability, intonasi, dan kenyamanan bermain yang optimal.",
    category: "elektrik",
    domains: ["setup", "maintenance", "measurement"],
    contentType: "concept",
    difficulty: "pemula",
    readingMinutes: 4,
    status: "draft",
    related: ["pengukuran-action-string-height", "pengukuran-neck-relief", "service-setup-dasar-gitar-elektrik", "fret-buzz", "terminologi-intonasi"],
    sources: [SRC_FENDER_SETUP, SRC_GIBSON_REPAIR],
    updatedAt: "2026-08-28",
    body: {
      contentType: "concept",
      apaItu: "Setup gitar adalah proses penyesuaian berbagai parameter instrumen — termasuk relief leher (neck relief), ketinggian senar (string action), intonasi, kondisi nut dan bridge — agar gitar dapat dimainkan dengan nyaman, suara tetap konsisten di seluruh fret, dan sesuai dengan preferensi pemain. Setup bukan sekadar 'memperbaiki' masalah, melainkan proses penyesuaian preventif dan korektif yang dilakukan secara berkala atau saat kondisi berubah. Menurut panduan teknis Fender (referensi struktural, bukan aturan universal), setup dasar mencakup pemeriksaan leher, penyesuaian truss rod jika diperlukan, penyesuaian ketinggian senar pada bridge, dan pemeriksaan intonasi — semua langkah ini bergantung pada tipe instrumen, kondisi leher, jenis senar, dan preferensi pemain.",
      fungsi: "Fungsi utama setup adalah memastikan instrumen bermain dengan nyaman, suara stabil, dan tidak menghasilkan masalah seperti fret buzz, intonasi buruk, atau aksi yang terlalu tinggi/rendah. Setup juga berfungsi sebagai langkah preventif: instrumen yang disetel dengan baik cenderung lebih tahan terhadap perubahan kondisi, lebih awet pada komponen kayu, dan lebih mudah dimainkan — yang pada akhirnya mengurangi risiko kerusakan.",
      hubunganDengan: ["pengukuran-neck-relief", "pengukuran-action-string-height", "service-setup-dasar-gitar-elektrik", "fret-buzz", "terminologi-intonasi"],
    },
  },

  // ── 2. concept — Elektronik Gitar Akustik ────────────────────────────────
  {
    id: "art-electronics-concept-001",
    slug: "apa-itu-elektronik-gitar-akustik",
    title: "Apa Itu Elektronik pada Gitar Akustik?",
    description: "Penjelasan tentang sistem elektronik pada gitar akustik elektrik: pickup, preamp, EQ, tuner, baterai, dan output jack.",
    category: "elektrik-akustik",
    domains: ["elektronik", "komponen", "hardware"],
    contentType: "concept",
    difficulty: "pemula",
    readingMinutes: 5,
    status: "draft",
    related: ["service-setup-dasar-gitar-elektrik"],
    sources: [SRC_FISHMAN, SRC_LRBAGGS],
    brandIds: ["yamaha"],
    modelIds: ["yamaha-fg800"],
    updatedAt: "2026-08-28",
    body: {
      contentType: "concept",
      apaItu: "Gitar akustik elektrik (electro-acoustic) adalah gitar akustik yang dilengkapi dengan sistem elektronik untuk memperkuat suaranya melalui amplifier atau sistem PA. Sistem ini terdiri dari pickup (sumber transduksi getaran senar dan body), preamp (penguat sinyal awal), EQ (pengaturan nada), tuner (penala digital built-in), output jack (sambungan ke amplifier/PA), dan baterai sebagai sumber daya. Menurut dokumentasi Fishman dan LR Baggs (produsen utama pickup akustik), ada beberapa jenis pickup akustik yang umum digunakan: undersaddle pickup (di bawah saddle, menangkap getaran senar secara langsung), soundhole pickup (magnetik, dipasang di lubang soundhole), contact pickup (menempel di body), dan microphone-based system (menggunakan mikrofon internal).",
      fungsi: "Fungsi utama sistem elektronik pada gitar akustik adalah mengubah getaran akustik menjadi sinyal listrik yang dapat diperkuat — memungkinkan gitar akustik digunakan dalam situasi live performance atau recording dengan volume yang lebih besar tanpa kehilangan karakter akustik. Sistem ini juga berfungsi memberikan kontrol tambahan (EQ, volume, tuner) yang tidak tersedia pada gitar akustik murni.",
      hubunganDengan: ["service-setup-dasar-gitar-elektrik"],
    },
  },

  // ── 3. problem — Fret Buzz ───────────────────────────────────────────────
  {
    id: "art-problem-fretbuzz-001",
    slug: "fret-buzz",
    title: "Fret Buzz — Penyebab dan Diagnosis",
    description: "Apa itu fret buzz, penyebab umum, dan cara mendiagnosisnya. Panduan untuk menentukan apakah perbaikan bisa dilakukan sendiri atau harus ke teknisi.",
    category: "elektrik",
    domains: ["problems", "diagnosis", "setup", "repair"],
    contentType: "problem",
    difficulty: "menengah",
    readingMinutes: 7,
    status: "draft",
    related: ["pengukuran-neck-relief", "pengukuran-action-string-height", "service-setup-dasar-gitar-elektrik", "fret-rocker-cara-menggunakan", "terminologi-fret-leveling"],
    sources: [SRC_FENDER_SETUP, SRC_STEWMAC],
    updatedAt: "2026-08-28",
    body: {
      contentType: "problem",
      apaItu: "Fret buzz adalah suara dengung atau 'buzz' yang muncul ketika senar bersentuhan dengan fret di posisi selain fret yang ditekan. Buzz terjadi ketika jarak antara senar dan fret terlalu kecil di area tertentu pada leher — bisa di area fret awal, tengah, atau akhir, tergantung penyebabnya.",
      gejala: "Gejala fret buzz antara lain: suara senar terdengar 'dengung' atau 'gemetar' ketika dipetik (terutama pada frekuensi rendah), buzz hanya muncul pada fret atau area tertentu (bukan seluruh leher), buzz bisa hilang ketika volume diperbesar atau distorsi ditambah (karena buzz tertutup sinyal utama), buzz tetap ada meskipun senar diganti.",
      penyebab: [
        "Neck relief (kelengkungan leher) yang tidak sesuai — bisa terlalu datar atau terlalu melengkung ke depan (backbow)",
        "Action (ketinggian senar) terlalu rendah untuk gaya bermain atau jenis senar yang digunakan",
        "Fret tidak rata (uneven frets) — beberapa fret lebih tinggi dari yang lain, menyebabkan kontak dengan senar di area tertentu",
        "Nut atau saddle sudah aus, menyebabkan senar terlalu rendah di area tertentu",
        "Perubahan kondisi kayu karena perubahan suhu/kelembapan (cuaca/travel)",
        "Setup yang tidak sesuai untuk preferensi pemain — misalnya, action yang sangat rendah untuk tapping mungkin menghasilkan buzz pada strumming",
      ],
      diagnosis: "Langkah diagnosis fret buzz (urutan dari penyebab yang paling umum hingga yang paling jarang): (1) Periksa neck relief dengan pengukuran standar (capo di fret 1, tekan senar di fret terakhir, ukur celah antara senar dan fret ke-7 atau ke-9). (2) Periksa ketinggian senar di bridge. (3) Periksa kondisi fret dengan fret rocker — letakkan fret rocker di beberapa kombinasi 3 fret berurutan dan lihat apakah ada celah. (4) Periksa nut dan saddle untuk keausan. (5) Periksa kondisi kayu leher — apakah ada perubahan signifikan dari kondisi sebelumnya. Penting: jika buzz hanya muncul pada 1-2 fret tertentu dan menghilang di tempat lain, kemungkinan besar masalahnya adalah fret yang tidak rata, bukan relief. Jika buzz terjadi di banyak area, kemungkinan besar masalah relief/action.",
      pengukuran: "Untuk neck relief: capo di fret 1, tekan senar bass ke fret terakhir (biasanya fret 21-22 pada gitar elektrik modern), ukur celah antara senar bass (biasanya senar E-6) dan fret ke-7 atau ke-9 dengan feeler gauge. Untuk action: ukur jarak antara senar dan fret ke-12 (tanpa capo), diukur di bass side dan treble side. Catatan: nilai 'normal' sangat bervariasi tergantung instrumen, senar, dan preferensi pemain. Sebagai referensi umum, banyak teknisi menggunakan rentang yang disebutkan dalam panduan teknis Fender, tetapi ini bukan aturan universal. Untuk gitar akustik, rentang umumnya lebih tinggi dari elektrik — tergantung pada tipe body, senar, dan kekuatan pemain.",
      tools: ["Feeler gauge (pengukur celah)", "Fret rocker (alat diagnostik fret)", "Capo (opsional, untuk pengukuran relief)", "Tuner (untuk memastikan senar dalam tune saat pengukuran)"],
      proses: "Perbaikan fret buzz tergantung penyebab: (1) Jika neck relief tidak sesuai, sesuaikan truss rod dengan wrench yang sesuai — putar 1/8 atau 1/4 putaran pada satu waktu, tunggu beberapa menit, ukur ulang. (2) Jika action terlalu rendah, naikkan saddle/bridge sesuai kemampuan instrumen. (3) Jika fret tidak rata, leveling mungkin diperlukan — pekerjaan yang biasanya diserahkan kepada teknisi profesional. (4) Jika nut/saddle aus, ganti komponen yang rusak. PENTING: setiap penyesuaian pada truss rod atau saddle harus dilakukan dengan hati-hati dan diukur ulang sebelum langkah berikutnya — penyesuaian yang berlebihan dapat merusak leher atau nut.",
      risiko: "Risiko utama dari perbaikan fret buzz: (1) Truss rod yang diputar berlebihan dapat merusak leher (over-adjustment). (2) Saddle yang dipotong/diasah terlalu rendah tidak bisa dikembalikan ke posisi semula (perlu diganti). (3) Fret leveling yang tidak tepat dapat merusak fret secara permanen. (4) Tanpa diagnosis yang benar, perbaikan pada area yang salah (misalnya menyesuaikan truss rod ketika masalahnya adalah fret) justru memperburuk kondisi.",
      lihatProfesional: "Bawa ke teknisi profesional jika: (1) Buzz tetap ada setelah menyesuaikan neck relief dan action dalam rentang yang wajar. (2) Ditemukan fret yang tidak rata dengan fret rocker (leveling biasanya memerlukan alat dan teknik khusus). (3) Leher menunjukkan perubahan bentuk yang signifikan (twisted neck, severe backbow). (4) Nut atau saddle perlu diganti (sering memerlukan komponen khusus). (5) Pemain tidak yakin dengan diagnosis — biaya servis jauh lebih kecil daripada risiko kerusakan permanen.",
      topikTerkait: ["pengukuran-neck-relief", "pengukuran-action-string-height", "service-setup-dasar-gitar-elektrik", "fret-rocker-cara-menggunakan", "terminologi-fret-leveling"],
    },
  },

  // ── 4. problem — Tuning Instability ───────────────────────────────────────
  {
    id: "art-problem-tuning-001",
    slug: "tuning-instability",
    title: "Tuning Instability — Penyebab dan Diagnosis",
    description: "Mengapa gitar tidak stabil dalam tune? Penyebab umum tuning instability dan cara mendiagnosisnya.",
    category: "elektrik",
    domains: ["problems", "diagnosis", "setup"],
    contentType: "problem",
    difficulty: "menengah",
    readingMinutes: 6,
    status: "draft",
    related: ["service-setup-dasar-gitar-elektrik", "pengukuran-neck-relief"],
    sources: [SRC_FENDER_SETUP, SRC_DADDARIO],
    updatedAt: "2026-08-28",
    body: {
      contentType: "problem",
      apaItu: "Tuning instability adalah kondisi di mana gitar tidak mempertahankan tuning (penalaan) yang sudah diatur — gitar cepat 'naik turun' sendiri, terutama setelah pemetikan keras, penggunaan tremolo, atau perubahan kondisi lingkungan (suhu, kelembapan).",
      gejala: "Gejala tuning instability: (1) Gitar cepat 'naik' ke nada yang lebih tinggi setelah pemetikan keras atau penggunaan tremolo. (2) Gitar 'turun' secara perlahan setelah beberapa menit. (3) Tuning tidak stabil saat pindah dari fret rendah ke fret tinggi. (4) Tuning berubah signifikan saat volume/distortion dinaikkan (terutama pada gitar elektrik dengan setelan pickup yang sensitif).",
      penyebab: [
        "Senar baru — senar yang baru dipasang belum stabil dan biasanya memerlukan beberapa kali stretching (menarik senar dengan lembut) sebelum tuning stabil",
        "Nut yang terlalu ketat atau aus — senar 'macet' di slot nut dan tidak bergerak bebas saat tuning atau penggunaan tremolo",
        "String trees atau tuner yang longgar — komponen penahan senar tidak cukup kencang",
        "Bridge atau saddle yang aus/tidak stabil — terutama pada tremolo yang sudah lama",
        "Tremolo springs yang perlu diseimbangkan (pada gitar dengan tremolo)",
        "Perubahan suhu dan kelembapan yang signifikan — kayu dan senar bereaksi terhadap perubahan lingkungan",
      ],
      diagnosis: "Diagnosis tuning instability: (1) Periksa kondisi senar — senar baru perlu stretching berulang kali selama beberapa hari. (2) Periksa nut: jika senar 'bouncing' kembali saat ditekan di fret 1-3, atau ada tanda senar 'macet' di slot, nut perlu diperiksa. (3) Periksa tuner — pastikan mur tuner cukup kencang. (4) Pada gitar dengan tremolo, periksa keseimbangan springs di belakang body. (5) Periksa apakah perubahan tuning konsisten dengan perubahan lingkungan (suhu/kelembapan).",
      tools: ["Tuner elektronik (untuk akurasi tuning)", "Nut file (jika nut perlu disesuaikan — biasanya untuk teknisi)", "String winder (mempercepat penggantian senar)", "Kunci/L-key (untuk mur tuner)"],
      proses: "Proses perbaikan tuning instability: (1) Untuk senar baru: setelah tuning, tarik senar dengan lembut beberapa kali (stretching), re-tune, ulangi beberapa kali selama beberapa hari. (2) Untuk nut yang macet: lubricasi nut dengan graphite (pensil) atau nut sauce, atau ganti nut. (3) Untuk mur tuner longgar: kencangkan mur pengunci. (4) Untuk masalah tremolo: sesuaikan keseimbangan springs. (5) Untuk masalah lingkungan: simpan gitar di tempat dengan suhu/kelembapan stabil, gunakan humidifier/dehumidifier sesuai kebutuhan.",
      risiko: "Risiko perbaikan tuning instability: (1) Nut yang difile terlalu lebar/dalam merusak nut secara permanen (perlu diganti). (2) Tremolo springs yang disetel dengan tegangan berlebihan dapat merusak sistem tremolo. (3) Lubrication dengan bahan yang salah (misalnya oli) justru dapat merusak kayu nut.",
      lihatProfesional: "Bawa ke teknisi jika: (1) Nut perlu difile (butuh presisi tinggi). (2) Bridge/tremolo perlu diservis. (3) Tuning tetap tidak stabil setelah semua langkah dasar dilakukan.",
      topikTerkait: ["service-setup-dasar-gitar-elektrik", "pengukuran-neck-relief"],
    },
  },

  // ── 5. tool — Fret Rocker ────────────────────────────────────────────────
  {
    id: "art-tool-fretrocker-001",
    slug: "fret-rocker-cara-menggunakan",
    title: "Fret Rocker — Cara Menggunakannya",
    description: "Panduan menggunakan fret rocker — alat diagnostik untuk mendeteksi fret yang tidak rata pada leher gitar.",
    category: "elektrik",
    domains: ["tools", "diagnosis", "techniques"],
    contentType: "tool",
    difficulty: "menengah",
    readingMinutes: 4,
    status: "draft",
    related: ["fret-buzz", "terminologi-fret-leveling", "service-setup-dasar-gitar-elektrik"],
    sources: [SRC_STEWMAC],
    updatedAt: "2026-08-28",
    body: {
      contentType: "tool",
      apaItu: "Fret rocker (juga dikenal sebagai fret rocker) adalah alat sederhana berbentuk siku dengan tiga atau empat 'kaki' yang ditempatkan pada fret. Alat ini digunakan untuk mendeteksi fret yang lebih tinggi atau lebih rendah dari fret tetangganya — kondisi yang menyebabkan fret buzz pada area tertentu atau intonasi yang tidak konsisten.",
      fungsi: "Fungsi fret rocker adalah memberikan deteksi cepat dan visual untuk fret yang tidak rata. Dengan menempatkan fret rocker pada tiga fret berurutan, teknisi dapat melihat apakah ada celah di fret tengah (yang menandakan fret tengah lebih rendah) atau apakah fret rocker 'rock' (berosilasi) yang menandakan ada fret yang lebih tinggi di antara.",
      jenis: ["Fret rocker dengan 3 kaki (umum, untuk sebagian besar kasus)", "Fret rocker dengan 4 kaki (lebih presisi, jarang dibutuhkan oleh pengguna rumahan)", "Fret rocker stainless steel (standar industri, lebih tahan lama)"],
      caraMenggunakan: "Cara menggunakan fret rocker: (1) Bersihkan fret dan area leher dengan kain kering. (2) Letakkan fret rocker pada tiga fret berurutan — misalnya fret 3-4-5. (3) Tekan fret rocker dengan lembut ke bawah. (4) Perhatikan apakah fret rocker 'rock' — jika fret rocker berosilasi, berarti fret di tengah lebih rendah dari fret di kedua sisinya. (5) Ulangi pada semua kombinasi 3 fret di seluruh leher. (6) Catat di mana fret rocker rock — ini adalah area yang perlu leveling. PENTING: fret rocker tidak boleh ditempatkan pada fret dengan senar — senar harus dilepas atau dihindari. Juga, fret rocker paling efektif pada fret yang sudah bersih.",
      perawatan: "Perawatan fret rocker: (1) Simpan di tempat kering untuk mencegah karat (terutama versi stainless steel). (2) Bersihkan setelah digunakan dengan kain kering. (3) Periksa keausan pada kaki fret rocker secara berkala — fret rocker yang aus dapat memberikan hasil yang tidak akurat.",
      topikTerkait: ["fret-buzz", "terminologi-fret-leveling", "service-setup-dasar-gitar-elektrik"],
    },
  },

  // ── 6. measurement — Neck Relief ─────────────────────────────────────────
  {
    id: "art-measurement-relief-001",
    slug: "pengukuran-neck-relief",
    title: "Cara Mengukur Neck Relief",
    description: "Panduan mengukur neck relief — salah satu parameter paling penting dalam setup gitar.",
    category: "elektrik",
    domains: ["measurement", "setup", "diagnosis"],
    contentType: "measurement",
    difficulty: "menengah",
    readingMinutes: 5,
    status: "draft",
    related: ["fret-buzz", "service-setup-dasar-gitar-elektrik", "pengukuran-action-string-height"],
    sources: [SRC_FENDER_SETUP, SRC_GIBSON_REPAIR],
    updatedAt: "2026-08-28",
    body: {
      contentType: "measurement",
      apaItu: "Neck relief adalah jarak antara senar dan fret pada titik tertentu (biasanya fret ke-7 atau ke-9) ketika senar dalam keadaan penuh dan leher dalam kondisi rileks. Relief positif berarti leher sedikit melengkung ke depan (terjadi pada gitar yang disetel dengan benar); relief nol atau negatif (backbow) berarti leher terlalu datar atau melengkung ke belakang.",
      target: "Tidak ada angka 'target universal' untuk neck relief — nilainya sangat bergantung pada tipe instrumen, jenis senar, gaya bermain, dan preferensi pemain. Sebagai referensi struktural (bukan aturan universal), panduan teknis Fender memberikan rentang tertentu untuk gitar Fender; gitar Gibson, Martin, dan pabrikan lain mungkin menggunakan rentang yang berbeda. Catatan: senar yang lebih berat (heavy gauge) biasanya membutuhkan relief yang sedikit lebih besar untuk mencegah fret buzz. Pemain yang menggunakan teknik fingerstyle atau strumming keras mungkin membutuhkan relief yang berbeda dari pemain yang bermain soft.",
      caraMengukur: "Cara mengukur neck relief (metode standar): (1) Pasang capo pada fret 1 (untuk menghilangkan pengaruh nut). (2) Tekan senar bass (biasanya E-6) pada fret terakhir (biasanya fret 21-24 pada gitar elektrik modern). (3) Dengan feeler gauge, ukur celah antara bagian bawah senar dan fret ke-7 atau ke-9. (4) Catat hasilnya dalam mm atau inci (0.001 inch = 0.0254 mm). PENTING: pengukuran harus dilakukan dengan senar dalam tune penuh, dan capo harus menekan semua senar dengan tekanan yang cukup.",
      tools: ["Capo (standar, untuk mengisolasi leher dari nut)", "Feeler gauge (pengukur celah, range yang sesuai — biasanya 0.10-0.50 mm)", "Tuner (memastikan senar dalam tune)", "Kain kering (membersihkan fret sebelum pengukuran)"],
      interpretasi: "Interpretasi hasil pengukuran: (1) Jika tidak ada celah (relief = 0) atau fret rocker rock di beberapa titik, kemungkinan leher terlalu datar atau ada backbow. (2) Jika celah terlalu besar (lebih dari rentang referensi pabrikan), kemungkinan leher terlalu melengkung. (3) Jika celah dalam rentang referensi pabrikan, kondisi neck relief kemungkinan sesuai. PENTING: hasil ini hanya valid jika neck relief adalah faktor yang relevan — jika fret tidak rata, hasilnya bisa menyesatkan. Selalu kombinasikan dengan pemeriksaan fret (fret rocker) dan action.",
      topikTerkait: ["fret-buzz", "service-setup-dasar-gitar-elektrik", "pengukuran-action-string-height"],
    },
  },

  // ── 7. measurement — Action / String Height ──────────────────────────────
  {
    id: "art-measurement-action-001",
    slug: "pengukuran-action-string-height",
    title: "Cara Mengukur Action (String Height)",
    description: "Panduan mengukur action — ketinggian senar di fret ke-12, parameter kritis dalam setup gitar.",
    category: "elektrik",
    domains: ["measurement", "setup", "diagnosis"],
    contentType: "measurement",
    difficulty: "menengah",
    readingMinutes: 5,
    status: "draft",
    related: ["fret-buzz", "pengukuran-neck-relief", "service-setup-dasar-gitar-elektrik"],
    sources: [SRC_FENDER_SETUP, SRC_GIBSON_REPAIR],
    updatedAt: "2026-08-28",
    body: {
      contentType: "measurement",
      apaItu: "Action (juga dikenal sebagai string height) adalah jarak antara senar dan fret pada titik pengukuran tertentu — biasanya di fret ke-12 karena fret ke-12 berada di tengah-tengah skala gitar dan memberikan representasi yang baik untuk keseluruhan instrumen. Action yang terlalu tinggi membuat gitar sulit dimainkan; action yang terlalu rendah menyebabkan fret buzz.",
      target: "Action 'target' sangat bergantung pada instrumen, gaya bermain, dan preferensi pemain. Sebagai referensi struktural (bukan aturan universal): (a) Gitar elektrik Fender (menurut panduan teknis Fender) memberikan rentang tertentu untuk bass side dan treble side di fret 12. (b) Gitar Gibson umumnya menggunakan rentang yang berbeda. (c) Gitar akustik biasanya memiliki action yang lebih tinggi dari elektrik. (d) Action yang lebih rendah biasanya lebih mudah dimainkan tetapi lebih rentan terhadap fret buzz; action yang lebih tinggi memberikan sustain lebih tetapi lebih sulit dimainkan. Penting: angka pasti sangat bergantung pada neck relief, jenis senar, dan kondisi fret.",
      caraMengukur: "Cara mengukur action: (1) Pastikan gitar dalam tune penuh. (2) Pada fret ke-12, ukur jarak antara bagian bawah senar dan puncak fret ke-12. (3) Ukur di bass side (senar E-6 atau E-1 untuk bass) dan treble side (senar e-1 atau e-1) — biasanya bass side lebih tinggi dari treble side. (4) Catat hasilnya dalam mm atau inci (0.001 inch = 0.0254 mm). PENTING: ukur tegak lurus terhadap fret untuk akurasi, dan pastikan senar tidak tertekan saat pengukuran.",
      tools: ["Tuner (memastikan senar dalam tune)", "Feeler gauge atau ruler presisi (mengukur celah)", "Kain kering (membersihkan fret)"],
      interpretasi: "Interpretasi: (1) Jika action terlalu rendah dan ada fret buzz, kemungkinan perlu dinaikkan (jika relief dan fret dalam kondisi baik). (2) Jika action terlalu tinggi dan gitar sulit dimainkan, kemungkinan perlu diturunkan. (3) Jika action tampak normal tetapi ada fret buzz, masalah kemungkinan di neck relief atau fret yang tidak rata, bukan action. PENTING: action, neck relief, dan kondisi fret saling terkait — perubahan pada satu parameter mempengaruhi yang lain. Selalu evaluasi ketiganya bersama.",
      topikTerkait: ["fret-buzz", "pengukuran-neck-relief", "service-setup-dasar-gitar-elektrik"],
    },
  },

  // ── 8. terminology — Fret Leveling ───────────────────────────────────────
  {
    id: "art-terminology-fret-001",
    slug: "terminologi-fret-leveling",
    title: "Terminologi: Fret Leveling",
    description: "Definisi teknis istilah 'fret leveling' — proses penghalusan permukaan fret agar semua fret memiliki ketinggian yang seragam.",
    category: "all",
    domains: ["terminology", "repair", "techniques"],
    contentType: "terminology",
    difficulty: "menengah",
    readingMinutes: 3,
    status: "draft",
    related: ["pengukuran-neck-relief", "fret-buzz", "service-setup-dasar-gitar-elektrik", "terminologi-intonasi"],
    sources: [SRC_FENDER_SETUP, SRC_STEWMAC],
    updatedAt: "2026-08-28",
    body: {
      contentType: "terminology",
      definisi: "Fret leveling (penghalusan fret) adalah proses teknis di mana permukaan atas semua fret pada leher gitar dihaluskan menggunakan alat khusus (seperti fret file atau sistem seperti Plek) sehingga semua fret memiliki ketinggian yang seragam relatif terhadap permukaan leher. Proses ini berbeda dari 'fret crowning' (pembentukan kembali permukaan fret setelah leveling). Menurut panduan teknis Fender (referensi struktural), fret leveling diperlukan ketika beberapa fret memiliki ketinggian yang berbeda secara signifikan — kondisi yang biasanya terdeteksi melalui pemeriksaan dengan fret rocker atau pengukuran visual — yang dapat menyebabkan fret buzz atau intonasi yang buruk pada fret tertentu. Penting: proses ini bergantung pada kondisi leher, jenis fret, dan tipe instrumen; tidak semua instrumen memerlukan leveling pada interval yang sama.",
      konteks: "Fret leveling biasanya diperlukan setelah fret mengalami keausan yang tidak merata (sering terjadi pada fret yang sering digunakan), setelah perubahan besar pada kondisi leher (misalnya setelah penyesuaian truss rod yang signifikan), atau sebagai bagian dari overhaul profesional. Proses ini bukan perbaikan yang dilakukan sembarangan: memerlukan alat khusus, teknik yang tepat, dan pemahaman tentang struktur kayu — oleh karena itu, banyak pemilik instrumen memilih untuk menyerahkannya kepada teknisi profesional.",
      contoh: "Contoh: gitar dengan fret ke-3 hingga ke-5 yang lebih tinggi dari fret lainnya (terdeteksi dengan fret rocker) akan menghasilkan fret buzz ketika senar ditekan di fret yang rendah — ini adalah indikasi bahwa leveling mungkin diperlukan. Namun, keputusan akhir bergantung pada kondisi leher secara keseluruhan, bukan hanya satu fret.",
      topikTerkait: ["pengukuran-neck-relief", "fret-buzz", "service-setup-dasar-gitar-elektrik", "terminologi-intonasi"],
    },
  },

  // ── 9. terminology — Intonation ──────────────────────────────────────────
  {
    id: "art-terminology-intonation-001",
    slug: "terminologi-intonasi",
    title: "Terminologi: Intonasi",
    description: "Definisi teknis 'intonasi' — hubungan antara panjang senar yang bergetar dan nada yang dihasilkan, dan mengapa intonasi harus disesuaikan untuk setiap gitar.",
    category: "all",
    domains: ["terminology", "setup", "measurement"],
    contentType: "terminology",
    difficulty: "menengah",
    readingMinutes: 4,
    status: "draft",
    related: ["service-setup-dasar-gitar-elektrik", "pengukuran-neck-relief"],
    sources: [SRC_FENDER_SETUP, SRC_GIBSON_REPAIR],
    updatedAt: "2026-08-28",
    body: {
      contentType: "terminology",
      definisi: "Intonasi dalam konteks gitar adalah seberapa akurat nada yang dihasilkan ketika senar ditekan pada fret yang berbeda. Intonasi yang baik berarti setiap fret menghasilkan nada yang sesuai dengan frekuensi yang seharusnya (misalnya, fret ke-12 menghasilkan nada satu oktaf di atas open string, dengan akurasi yang tinggi). Intonasi dipengaruhi oleh beberapa faktor: panjang skala efektif, posisi saddle, ketinggian senar, kondisi fret, dan jenis senar.",
      konteks: "Intonasi tidak bisa 'diukur' dengan satu angka universal — setiap gitar, dengan bridge/saddle-nya masing-masing, memerlukan penyesuaian yang berbeda. Sebagai contoh, gitar dengan tremolo (seperti Stratocaster) memiliki sistem intonasi yang berbeda dari gitar dengan hardtail (seperti Telecaster) atau tune-o-matic (seperti Les Paul). Proses penyesuaian intonasi (setting intonation) biasanya dilakukan dengan membandingkan nada open string dengan nada di fret ke-12, dan menyesuaikan panjang saddle sampai keduanya sesuai.",
      contoh: "Contoh: pada gitar elektrik dengan tune-o-matic bridge, intonasi disesuaikan dengan menggeser saddle maju atau mundur — geser mundur memperpanjang panjang senar efektif (menaikkan nada di fret ke-12), geser maju memperpendek (menurunkan nada). Proses ini biasanya memerlukan tuner elektronik yang akurat (atau strobe tuner) dan perbandingan harmonik (fret ke-12 harus sama dengan fret ke-12 + fret ke-24 jika ada). Penting: intonasi hanya akurat jika neck relief dan action dalam kondisi baik — intonasi yang 'salah' bisa jadi gejala masalah lain.",
      topikTerkait: ["service-setup-dasar-gitar-elektrik", "pengukuran-neck-relief"],
    },
  },

  // ── 10. service — Setup Dasar Gitar Elektrik ─────────────────────────────
  {
    id: "art-service-setup-001",
    slug: "service-setup-dasar-gitar-elektrik",
    title: "Service: Setup Dasar Gitar Elektrik",
    description: "Apa saja yang termasuk dalam layanan setup dasar gitar elektrik, kapan perlu dilakukan, dan apa yang diharapkan.",
    category: "elektrik",
    domains: ["professional-services", "setup", "maintenance"],
    contentType: "service",
    difficulty: "pemula",
    readingMinutes: 5,
    status: "draft",
    related: ["apa-itu-setup-gitar", "pengukuran-neck-relief", "pengukuran-action-string-height", "terminologi-intonasi", "fret-buzz"],
    sources: [SRC_FENDER_SETUP, SRC_GIBSON_REPAIR],
    brandIds: ["fender","gibson"],
    modelIds: ["fender-stratocaster","gibson-les-paul","fender-telecaster"],
    updatedAt: "2026-08-28",
    body: {
      contentType: "service",
      apaItu: "Setup dasar gitar elektrik adalah layanan servis yang bertujuan mengembalikan atau menyesuaikan parameter-parameter penting pada gitar agar bermain dengan nyaman, suara stabil, dan intonasi baik. Ini adalah layanan yang paling umum diminta oleh pemain gitar — biasanya sebagai persiapan untuk演奏, setelah pembelian gitar baru, atau setelah periode tidak digunakan.",
      mencakup: [
        "Pemeriksaan dan penyesuaian neck relief (truss rod) — sesuai dengan kondisi instrumen dan preferensi pemain",
        "Pemeriksaan dan penyesuaian ketinggian senar (action) di bridge",
        "Pemeriksaan dan penyesuaian intonasi (panjang saddle)",
        "Pemeriksaan kondisi nut dan saddle",
        "Pembersihan umum (body, fret, hardware)",
        "Penggantian senar (jika diminta, biasanya dengan biaya tambahan)",
        "Pemeriksaan dan pengencangan hardware (mur tuner, bridge, strap pin, dll.)",
      ],
      durasi: "Durasi setup dasar bervariasi: 30-60 menit untuk gitar yang kondisinya baik; 1-2 jam jika ada penyesuaian signifikan atau fret yang perlu conditioning. Untuk gitar yang sudah lama tidak diservis, bisa lebih lama.",
      tools: ["Truss rod wrench (sesuai ukuran nut gitar)", "Feeler gauge (pengukur celah)", "Screwdriver set (presisi)", "Tuner elektronik atau strobe tuner", "String winder", "Nut files (jika nut perlu disesuaikan)", "Cleaning supplies (kain, fret cleaner)"],
      proses: "Proses setup dasar (urutan umum — dapat bervariasi antar teknisi): (1) Inspeksi awal — periksa kondisi umum, fret, hardware, elektronik. (2) Pemeriksaan neck relief — ukur, sesuaikan jika perlu. (3) Pemeriksaan dan penyesuaian action di bridge. (4) Pemeriksaan dan penyesuaian intonasi. (5) Pemeriksaan kondisi nut. (6) Pembersihan. (7) Test play — pemetikan di seluruh fret, periksa fret buzz, periksa tuning stability. (8) Jika diminta, ganti senar (biasanya dengan biaya tambahan).",
      risiko: "Risiko setup: (1) Truss rod yang diputar berlebihan dapat merusak leher. (2) Saddle yang disesuaikan terlalu rendah tidak bisa dikembalikan. (3) Nut yang difile terlalu lebar/dalam merusak nut. (4) Setup yang tidak sesuai dengan preferensi pemain (misalnya action terlalu rendah untuk strumming keras). Teknisi yang berpengalaman biasanya mendiskusikan preferensi pemain sebelum melakukan penyesuaian besar.",
      lihatProfesional: "Bawa ke teknisi profesional untuk setup dasar — layanan ini biasanya ditawarkan oleh toko musik, luthier independen, atau teknisi servis gitar. Hindari setup sendiri jika: (1) tidak yakin dengan prosedur truss rod adjustment, (2) tidak memiliki alat yang sesuai, (3) gitar adalah instrumen koleksi/nilai tinggi yang tidak boleh dirisikokan. Biaya setup dasar bervariasi — di Indonesia, umumnya Rp 150.000 - Rp 500.000 tergantung kompleksitas dan lokasi.",
      topikTerkait: ["apa-itu-setup-gitar", "pengukuran-neck-relief", "pengukuran-action-string-height", "terminologi-intonasi", "fret-buzz"],
    },
  },

  // ── 11. concept — Setup Gitar Akustik ─────────────────────────────────────
  {
    id: "art-setup-acoustic-001",
    slug: "apa-itu-setup-gitar-akustik",
    title: "Apa Itu Setup Gitar Akustik?",
    description:
      "Penjelasan setup untuk gitar akustik — perbedaan dari elektrik, tantangan unik, dan prinsip dasar penyesuaian instrumen akustik.",
    category: "akustik",
    domains: ["setup", "maintenance", "measurement"],
    contentType: "concept",
    difficulty: "pemula",
    readingMinutes: 5,
    status: "draft",
    related: [
      "apa-itu-setup-gitar",
      "pengukuran-neck-relief",
      "pengukuran-action-string-height",
      "fret-buzz",
      "terminologi-intonasi",
    ],
    sources: [
      {
        title: "Fender Acoustic Guitar Setup Guide (structural reference)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference for acoustic setup principles. Not a universal rule; instrument-dependent.",
      },
      {
        title: "Gibson Acoustic Guitar Setup Documentation (structural reference)",
        tier: "primary" as const,
        author: "Gibson",
        publisher: "Gibson",
        accessDate: "2026-08-28",
        note: "Reference for comparison. Specific values vary per model.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "concept",
      apaItu:
        "Setup gitar akustik adalah proses penyesuaian parameter instrumen pada gitar akustik — meliputi neck relief, action (ketinggian senar), dan intonasi. Secara prinsip sama dengan setup gitar elektrik, namun gitar akustik memiliki tantangan tambahan: body yang lebih besar, bracing internal, saddle berbasis kayu atau tulang (bukan metal saddle), dan sensitivitas tinggi terhadap perubahan suhu dan kelembapan. Gitar akustik tanpa elektronik juga tidak memiliki preamp untuk mengoreksi masalah setup melalui EQ — sehingga akurasi setup lebih kritis untuk kualitas suara.",
      fungsi:
        "Fungsi setup akustik: memastikan gitar menghasilkan volume optimal, nada bersih di seluruh fret, dan nyaman dimainkan. Gitar akustik yang disetel dengan baik akan memiliki projection yang baik tanpa buzz, serta string action yang sesuai gaya bermain — baik strumming maupun fingerpicking. Berbeda dengan elektrik, masalah setup pada akustik lebih sulit dikompensasi dengan amplifier karena karakter suara akustik sangat bergantung pada resonansi body secara fisik.",
      hubunganDengan: [
        "apa-itu-setup-gitar",
        "pengukuran-neck-relief",
        "pengukuran-action-string-height",
        "fret-buzz",
        "terminologi-intonasi",
      ],
    },
  },

  // ── 12. service — Setup Dasar Bass ─────────────────────────────────────────
  {
    id: "art-service-bass-001",
    slug: "service-setup-dasar-bass",
    title: "Service: Setup Dasar Bass Guitar",
    description:
      "Layanan setup dasar untuk bass guitar — pengecekan neck relief, action, intonasi, dan pickup height. Prinsip sama dengan gitar elektrik dengan pertimbangan scale length lebih panjang dan senar yang lebih berat.",
    category: "bass",
    domains: ["professional-services", "setup", "maintenance"],
    contentType: "service",
    difficulty: "pemula",
    readingMinutes: 5,
    status: "draft",
    related: [
      "apa-itu-setup-gitar",
      "service-setup-dasar-gitar-elektrik",
      "pengukuran-neck-relief",
      "pengukuran-action-string-height",
    ],
    sources: [
      {
        title: "Fender Bass Guitar Setup Guide (structural reference)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference. Scale length and string gauge considerations differ per bass model.",
      },
      {
        title: "Yamaha Bass Guitar Service Documentation (structural reference)",
        tier: "primary" as const,
        author: "Yamaha",
        publisher: "Yamaha",
        accessDate: "2026-08-28",
        note: "Reference for comparison. Specific values vary per model.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "service",
      apaItu:
        "Setup dasar bass guitar adalah layanan servis untuk memastikan bass bermain dengan nyaman, sound konsisten, dan intonasi akurat. Secara prinsip mirip dengan setup gitar elektrik, namun ada perbedaan penting: scale length bass lebih panjang (umumnya 34 inci, dibanding 25.5 inci pada gitar elektrik), senar bass umumnya lebih berat (gauge lebih besar), dan bass biasanya menggunakan pickup electromagnetic (jazz bass, precision bass style) yang height-adjustable. Bass dengan active elektronik juga memerlukan pengecekan baterai dan EQ settings sebagai bagian dari setup.",
      mencakup: [
        "Pemeriksaan dan penyesuaian neck relief (truss rod) — prinsip sama dengan gitar elektrik, namun sensitivitas berbeda karena scale lebih panjang",
        "Pemeriksaan dan penyesuaian action (string height) di bridge",
        "Pemeriksaan dan penyesuaian intonasi (panjang saddle)",
        "Pemeriksaan pickup height dan polaritas (bass pickup bisa lebih sensitif terhadap adjustment dibanding gitar)",
        "Pemeriksaan kondisi nut dan bridge saddle",
        "Pemeriksaan electronics untuk bass aktif (baterai, preamp, EQ)",
        "Pemeriksaan hardware (tuner, strap pin, output jack)",
      ],
      durasi:
        "Durasi setup bass bervariasi: 45-90 menit untuk bass yang kondisinya baik; 1.5-3 jam jika ada penyesuaian signifikan. Bass dengan active elektronik memerlukan waktu tambahan untuk pemeriksaan elektronik.",
      tools: [
        "Truss rod wrench (sesuai ukuran nut bass)",
        "Feeler gauge (pengukur celah)",
        "Screwdriver set (presisi)",
        "Tuner elektronik (bass-tuned)",
        "Multimeter (untuk bass aktif — pemeriksaan baterai dan grounding)",
        "String winder",
        "Cleaning supplies",
      ],
      proses:
        "Proses setup bass (urutan umum): (1) Inspeksi awal — kondisi umum, body, neck, hardware, elektronik. (2) Pemeriksaan neck relief — capo di fret 1, tekan senar di fret terakhir, ukur celah. (3) Periksa action di bridge — ukur di bass side dan treble side. (4) Periksa intonasi — bandingkan nada open string dengan fret ke-12. (5) Periksa pickup height — sesuaikan sesuai preferensi dan jenis pickup. (6) Untuk bass aktif: periksa baterai, grounding, dan fungsi preamp. (7) Test play — periksa seluruh fret, buzz, dan kualitas sound. (8) Rekomendasi senar jika diperlukan.",
      risiko:
        "Risiko setup bass: (1) Truss rod bass sensitivity berbeda dari gitar elektrik karena scale lebih panjang — putar bertahap dan ukur ulang. (2) Saddle bass biasanya lebih besar dan terbuat dari bahan berbeda — penyesuaian harus lebih hati-hati. (3) Bass aktif memerlukan penanganan elektronik yang benar — salah cabut kabel bisa menyebabkan short. (4) Pickup height yang terlalu tinggi bisa menghasilkan distorsi pada amplifier.",
      lihatProfesional:
        "Bawa ke teknisi profesional untuk setup bass jika: (1) Bass aktif memerlukan pemeriksaan elektronik yang benar. (2) Neck reset atau body repair diperlukan. (3) Pickup atau preamp bermasalah. (4) Bass adalah model langka atau vintage yang memerlukan penanganan khusus.",
      topikTerkait: [
        "apa-itu-setup-gitar",
        "service-setup-dasar-gitar-elektrik",
        "pengukuran-neck-relief",
        "pengukuran-action-string-height",
      ],
    },
  },

  // ── 13. concept — Setup Bass Guitar ──────────────────────────────────────
  {
    id: "art-bass-setup-concept-001",
    slug: "apa-itu-setup-bass",
    title: "Apa Itu Setup Bass Guitar?",
    description:
      "Penjelasan setup untuk bass guitar — perbedaan dari gitar elektrik, tantangan unik (scale length, string gauge, active electronics), dan prinsip dasar penyesuaian instrumen bass.",
    category: "bass",
    domains: ["setup", "maintenance", "measurement"],
    contentType: "concept",
    difficulty: "pemula",
    readingMinutes: 5,
    status: "draft",
    related: [
      "service-setup-dasar-bass",
      "apa-itu-setup-gitar",
      "pengukuran-neck-relief",
      "pengukuran-action-string-height",
    ],
    sources: [
      {
        title: "Fender Bass Setup Guide (structural reference)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference for bass setup principles. Scale length and string gauge considerations differ per bass model.",
      },
      {
        title: "Yamaha Bass Service Documentation (structural reference)",
        tier: "primary" as const,
        author: "Yamaha",
        publisher: "Yamaha",
        accessDate: "2026-08-28",
        note: "Reference for comparison. Specific values vary per model.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "concept",
      apaItu:
        "Setup bass guitar adalah proses penyesuaian parameter instrumen pada bass — meliputi neck relief, action (ketinggian senar), intonasi, pickup height, dan (untuk bass aktif) fungsi elektronik internal. Secara prinsip mirip dengan setup gitar elektrik, namun bass memiliki tantangan tambahan: scale length (panjang scale) yang lebih panjang (umumnya 34 inci untuk bass 4-string, dibanding 25.5 inci untuk gitar elektrik), string gauge yang lebih besar, dan sensitivitas fret yang lebih rendah terhadap tekanan. Bass dengan elektronik aktif juga memerlukan pemeriksaan tambahan seperti kondisi baterai, grounding, dan fungsi preamp.",
      fungsi:
        "Fungsi setup bass: memastikan bass menghasilkan nada rendah yang bersih, fretbuzz minimal, dan nyaman dimainkan. Bass yang disetel dengan baik akan memiliki tension senar yang seimbang, intonasi akurat di seluruh fret, dan keseimbangan output antara senar. Berbeda dengan gitar elektrik, masalah fretbuzz pada bass lebih sulit terdengar karena frekuensi rendah lebih lambat diserap — sehingga setup yang baik mencegah masalah di frekuensi tinggi (di fret atas).",
      hubunganDengan: [
        "service-setup-dasar-bass",
        "apa-itu-setup-gitar",
        "pengukuran-neck-relief",
        "pengukuran-action-string-height",
      ],
    },
  },
];

export const ARTICLES_BY_SLUG: Record<string, Article> = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));
export const ARTICLES_BY_CATEGORY: Record<string, Article[]> = {};
for (const a of ARTICLES) {
  const key = a.category === "all" ? "all" : a.category;
  if (!ARTICLES_BY_CATEGORY[key]) ARTICLES_BY_CATEGORY[key] = [];
  ARTICLES_BY_CATEGORY[key].push(a);
}
export const ARTICLES_BY_DOMAIN: Record<string, Article[]> = {};
for (const a of ARTICLES) {
  for (const d of a.domains) {
    if (!ARTICLES_BY_DOMAIN[d]) ARTICLES_BY_DOMAIN[d] = [  // ── 14. measurement — Pengukuran Action Akustik ────────────────────────
  {
    id: "art-meas-action-akustik-001",
    slug: "pengukuran-action-string-akustik",
    title: "Pengukuran Action / String Height pada Gitar Akustik",
    description:
      "Panduan pengukuran action (ketinggian senar dari fret) pada gitar akustik — termasuk titik pengukuran, nilai acuan, dan hubungan dengan kenyamanan bermain.",
    category: "akustik",
    domains: ["measurement", "setup", "maintenance"],
    contentType: "measurement",
    difficulty: "menengah",
    readingMinutes: 7,
    status: "draft",
    related: [
      "apa-itu-setup-gitar-akustik",
      "pengukuran-action-string-height",
      "pengukuran-neck-relief",
      "fret-buzz",
    ],
    sources: [
      {
        title: "Fender Acoustic Setup Guide (structural reference — Fender Acoustic Guitar Setup)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference for acoustic action measurement. Not a universal rule; instrument-dependent.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "measurement",
      apaItu: "Action atau string height adalah jarak antara bagian bawah senar dan bagian atas fret pada titik tertentu — biasanya di fret 12 dan fret pertama. Pada gitar akustik, nilai action yang terlalu rendah dapat menyebabkan fret buzz akibat resonansi body; terlalu tinggi membuat bermain sulit.",
      target: "Menentukan apakah action sudah sesuai preferensi pemain dan mendeteksi apakah fret buzz berasal dari action tidak sesuai.",
      caraMengukur: "Pasang capo di fret 1. Ukur jarak senar ke fret 12 pada sisi bass (E/A) dan treble (B/e). Catat nilai acuan. Ukur jarak senar ke fret pertama dengan capo. Bandingkan dengan target pemain.",
      tools: ["Feeler gauge", "Ruler", "Capo"],
      interpretasi: "Nilai action sangat bergantung pada gaya bermain dan preferensi, bukan instrumen saja. Tidak ada nilai universal wajib dipatuhi.",
      topikTerkait: [
        "apa-itu-setup-gitar-akustik",
        "pengukuran-action-string-height",
        "pengukuran-neck-relief",
        "fret-buzz",
      ],
    },
  },

  // ── 15. problem — Fret Buzz pada Gitar Akustik ───────────────────────────
  {
    id: "art-problem-fret-buzz-akustik-001",
    slug: "masalah-fret-buzz-akustik",
    title: "Masalah Fret Buzz pada Gitar Akustik",
    description:
      "Penjelasan penyebab, observasi aman, dan langkah penyelesaian untuk fret buzz khusus pada gitar akustik — termasuk perbedaan dari gitar elektrik karena tidak selalu memiliki easy-access truss rod adjustment.",
    category: "akustik",
    domains: ["problems", "diagnosis", "setup"],
    contentType: "problem",
    difficulty: "pemula",
    readingMinutes: 6,
    status: "draft",
    related: [
      "fret-buzz",
      "pengukuran-action-string-akustik",
      "pengukuran-neck-relief",
      "apa-itu-setup-gitar-akustik",
    ],
    sources: [
      {
        title: "Fender Acoustic Setup Guide (structural reference — Fender)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference. Not a universal rule.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "problem",
      apaItu: "Fret buzz pada gitar akustik adalah suara dengung saat senar dipetik dan menyentuh fret sebelum waktunya. Pada akustik, penyebab umum: action terlalu rendah, neck relief tidak sesuai, bridge/saddle tidak rata, atau perubahan bracing internal.",
      gejala: "Buzz terdengar saat senar dipetik; bisa terlokalisasi di satu fret atau menyebar; bisa hanya pada satu senar atau semua; muncul saat strumming keras atau sudah di fingerpicking ringan.",
      penyebab: [
        "Action terlalu rendah — dapat diukur dengan feeler gauge di fret 12 dan fret pertama.",
        "Neck relief tidak sesuai — truss rod pada akustik sering diakses melalui soundhole (bukan headstock), sehingga penyesuaian memerlukan keahlian khusus.",
        "Saddle atau bridge tidak sejajar — memerlukan teknisi.",
        "Perubahan kelembapan atau suhu — wood expansion dapat menyebabkan bridge lift atau perubahan bracing.",
      ],
      diagnosis: "Periksa apakah buzz terjadi di satu fret (kemungkinan fret tidak rata — jangan coba file sendiri tanpa keahlian) atau menyebar (kemungkinan action atau neck relief). Perhatikan apakah buzz hanya pada satu senar atau semua senar.",
      pengukuran: "Pengukuran action di fret 12 dan fret 1 dengan feeler gauge; pengukuran neck relief dengan metode standar (capo di fret 1, ukur di fret 7 atau 8 saat fret 1 dan fret 17 di-capo).",
      tools: ["Feeler gauge", "Capo", "Ruler"],
      proses: "Periksa action dengan feeler gauge; jika terlalu rendah dan tidak nyaman menyesuaikan, bawa ke teknisi. Jangan memaksakan penyesuaian truss rod tanpa keahlian — akustik memiliki akses truss rod yang berbeda dari elektrik (sering melalui soundhole).",
      risiko: "Memaksakan penyesuaian truss rod atau file fret tanpa keahlian dapat merusak instrumen akustik — termasuk kerusakan truss rod atau neck warp permanen.",
      lihatProfesional: "Jika buzz tidak hilang setelah penyesuaian action sederhana, atau jika melibatkan bridge, saddle, atau perubahan struktural, bawa ke teknisi profesional atau luthier yang berpengalaman dengan gitar akustik.",
      topikTerkait: [
        "fret-buzz",
        "pengukuran-action-string-akustik",
        "pengukuran-neck-relief",
        "apa-itu-setup-gitar-akustik",
      ],
    },
  },

  // ── 16. terminology — Scale Length Bass ─────────────────────────────────
  {
    id: "art-terminologi-scale-bass-001",
    slug: "terminologi-scale-length-bass",
    title: "Terminologi: Scale Length pada Bass Guitar",
    description:
      "Penjelasan apa itu scale length, mengapa penting untuk bass guitar, dan bagaimana scale length mempengaruhi feel, tension, dan karakter suara bass.",
    category: "bass",
    domains: ["terminology", "setup", "maintenance"],
    contentType: "terminology",
    difficulty: "pemula",
    readingMinutes: 4,
    status: "draft",
    related: [
      "apa-itu-setup-bass",
      "service-setup-dasar-bass",
      "pengukuran-action-bass",
    ],
    sources: [
      {
        title: "Fender Bass Setup Guide (structural reference — Fender)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference. Not a universal rule.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "terminology",
      definisi: "Scale length adalah jarak dari nut (atau nut seat) ke saddle bridge. Untuk bass 4-string, scale length umum adalah 34 inci atau sekitar 864 mm. Bass dengan scale lebih panjang memiliki tension senar yang lebih tinggi untuk nada yang sama, dan cenderung menghasilkan karakter nada yang berbeda.",
      konteks: "Scale length mempengaruhi tiga hal: (1) Feel — jarak antar fret terasa berbeda; (2) Tension — senar dengan scale panjang untuk nada yang sama terasa lebih tegang; (3) Suara — karakter nada rendah dan mid berbeda. Bass short-scale (30 inci) terasa lebih nyaman untuk tangan kecil dan lebih warm, sedangkan long-scale (34 inci) lebih articulate dan punchy.",
      contoh: "Fender Precision Bass (P-Bass) menggunakan long-scale 34 inci. Beberapa bass entry-level atau vintage-style menggunakan short-scale 30 inci (misalnya Fender Mustang Bass).",
      topikTerkait: [
        "apa-itu-setup-bass",
        "service-setup-dasar-bass",
        "pengukuran-action-bass",
      ],
    },
  },

  // ── 17. measurement — Pengukuran Action Bass ────────────────────────────
  {
    id: "art-meas-action-bass-001",
    slug: "pengukuran-action-bass",
    title: "Pengukuran Action / String Height pada Bass",
    description:
      "Panduan pengukuran action pada bass guitar — termasuk perbedaan dari gitar elektrik karena scale length dan string gauge yang lebih besar.",
    category: "bass",
    domains: ["measurement", "setup", "maintenance"],
    contentType: "measurement",
    difficulty: "menengah",
    readingMinutes: 6,
    status: "draft",
    related: [
      "apa-itu-setup-bass",
      "service-setup-dasar-bass",
      "pengukuran-action-string-height",
      "pengukuran-neck-relief",
    ],
    sources: [
      {
        title: "Fender Bass Setup Guide (structural reference — Fender)",
        tier: "primary" as const,
        author: "Fender Musical Instruments",
        publisher: "Fender",
        accessDate: "2026-08-28",
        note: "Used as structural reference. Scale length and string gauge considerations differ per bass model.",
      },
    ],
    updatedAt: "2026-08-28",
    body: {
      contentType: "measurement",
      apaItu: "Action pada bass guitar adalah jarak antara senar dan fret di titik pengukuran — biasanya fret 12 dan fret pertama (dengan capo di fret 1). Karena scale length lebih panjang dan string gauge lebih besar dari gitar, action bass umumnya sedikit lebih tinggi dari gitar elektrik.",
      target: "Memastikan action sesuai preferensi pemain dan mencegah fret buzz atau kesulitan bermain. Bass umumnya memiliki action sedikit lebih tinggi dari gitar elektrik karena scale length dan string gauge.",
      caraMengukur: "Tuning bass terlebih dahulu. Pasang capo di fret 1 (saat mengukur di fret 12). Ukur jarak senar ke fret 12 di bass side (E/A) dan treble side (G/D). Catat nilai. Ukur jarak senar ke fret pertama dengan capo di fret 1. Bandingkan dengan target pemain.",
      tools: ["Feeler gauge", "Capo", "Ruler"],
      interpretasi: "Nilai action bass sangat bergantung pada gaya bermain (fingerstyle, slap, pick) dan preferensi pemain. Bass dengan string gauge lebih tebal mungkin memerlukan action sedikit lebih tinggi. Nilai acuan bass umumnya sedikit lebih tinggi dari gitar elektrik, namun tidak ada nilai universal.",
      topikTerkait: [
        "pengukuran-action-string-height",
        "service-setup-dasar-bass",
        "apa-itu-setup-bass",
        "pengukuran-neck-relief",
      ],
    },
  },

];
    ARTICLES_BY_DOMAIN[d].push(a);
  }
}
