export interface AdminDocSection {
  id: string;
  title: string;
  category: string;
  href: string;
  summary: string;
  audience: string[];
  quickActions: string[];
  workflows: Array<{
    title: string;
    steps: string[];
  }>;
  tips: string[];
  visualSteps?: Array<{
    title: string;
    description: string;
    image: string;
    alt: string;
  }>;
}

export interface RoleAccessRow {
  module: string;
  superadmin: string;
  tim_media: string;
  bendahara: string;
  panitia_psb: string;
  user: string;
}

export const adminDocSections: AdminDocSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard Utama',
    category: 'Orientasi',
    href: '/admin',
    summary:
      'Halaman pertama untuk mengecek kondisi umum sistem Alma, melihat statistik cepat, dan menentukan prioritas kerja harian sesuai role yang sedang login.',
    audience: ['Semua admin'],
    quickActions: [
      'Lihat ringkasan modul yang paling sering dipakai tanpa membuka satu per satu menu.',
      'Cek notifikasi visual, statistik utama, dan pintasan menuju halaman kerja berikutnya.',
      'Gunakan dashboard sebagai titik orientasi sebelum mulai input atau review data.',
    ],
    workflows: [
      {
        title: 'Rutinitas buka dashboard setiap awal kerja',
        steps: [
          'Masuk ke panel admin dan lihat kartu statistik paling atas.',
          'Periksa modul yang paling relevan untuk role Anda hari itu, misalnya PSB, pembayaran, atau inbox.',
          'Klik shortcut atau buka sidebar untuk lanjut ke modul operasional yang perlu ditangani.',
        ],
      },
    ],
    tips: [
      'Dashboard paling cocok dipakai untuk orientasi, bukan untuk mengedit data final.',
      'Jika angka terasa janggal, selalu verifikasi ke modul sumbernya.',
      'Biasakan mulai dari dashboard agar pekerjaan harian lebih terarah.',
    ],
  },
  {
    id: 'news',
    title: 'Berita & Publikasi',
    category: 'Konten Publik',
    href: '/admin/news',
    summary:
      'Tempat menulis, mengedit, dan menerbitkan berita resmi pondok agar website publik selalu hidup, informatif, dan rapi.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Buat artikel baru dengan judul, kategori, isi, gambar utama, dan status publikasi.',
      'Simpan berita sebagai draft jika masih perlu revisi internal.',
      'Gunakan generator AI sebagai draf awal lalu rapikan kembali sebelum diterbitkan.',
    ],
    workflows: [
      {
        title: 'Menerbitkan berita kegiatan pondok',
        steps: [
          'Masuk ke menu Berita lalu klik tombol tambah berita.',
          'Isi judul, kategori, tanggal, dan isi berita dengan bahasa yang jelas.',
          'Unggah gambar utama yang representatif dan pilih status published bila siap tayang.',
          'Simpan lalu cek hasilnya di halaman berita publik.',
        ],
      },
    ],
    tips: [
      'Gunakan judul yang lugas agar mudah dipahami wali santri dan pengunjung umum.',
      'Foto landscape cenderung tampil paling aman di halaman publik.',
      'Draft AI sebaiknya selalu ditinjau ulang agar tetap sesuai gaya komunikasi pondok.',
    ],
  },
  {
    id: 'programs',
    title: 'Program Pondok',
    category: 'Konten Publik',
    href: '/admin/programs',
    summary:
      'Modul untuk mengelola daftar program unggulan yang tampil di website, seperti tahfidz, kurikulum terpadu, dan pembinaan karakter.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Tambah program unggulan lengkap dengan deskripsi dan visual pendukung.',
      'Perbarui narasi program jika ada arah baru atau fokus pembinaan yang berubah.',
      'Rapikan urutan program agar tampilan landing page lebih kuat.',
    ],
    workflows: [
      {
        title: 'Menambahkan program unggulan baru',
        steps: [
          'Buka menu Program Pondok lalu pilih tambah program.',
          'Isi nama program, deskripsi singkat, dan gambar yang mendukung.',
          'Simpan lalu cek kembali pada halaman program publik.',
        ],
      },
    ],
    tips: [
      'Deskripsi program sebaiknya singkat, padat, dan menonjolkan manfaat.',
      'Gunakan gambar nyata kegiatan pondok agar kontennya lebih dipercaya.',
    ],
  },
  {
    id: 'agendas',
    title: 'Agenda Kegiatan',
    category: 'Konten Publik',
    href: '/admin/agendas',
    summary:
      'Kalender kegiatan pondok untuk mengatur jadwal acara, kajian, agenda santri, dan informasi publik lainnya.',
    audience: ['Semua admin'],
    quickActions: [
      'Tambah agenda baru dengan tanggal, lokasi, dan deskripsi singkat.',
      'Edit agenda jika ada perubahan waktu atau informasi pelaksanaan.',
      'Pastikan agenda penting tampil jelas bagi wali santri dan pengunjung.',
    ],
    workflows: [
      {
        title: 'Mempublikasikan agenda baru',
        steps: [
          'Masuk ke halaman agenda lalu klik tambah agenda.',
          'Isi judul kegiatan, tanggal pelaksanaan, dan lokasi.',
          'Tambahkan deskripsi singkat yang menjelaskan isi kegiatan.',
          'Simpan dan verifikasi bahwa agenda tampil di halaman publik.',
        ],
      },
    ],
    tips: [
      'Judul agenda sebaiknya langsung menyebut nama kegiatan.',
      'Jika kegiatan berubah, edit data lama agar publik tidak menerima informasi ganda.',
    ],
  },
  {
    id: 'gallery',
    title: 'Galeri Foto',
    category: 'Konten Publik',
    href: '/admin/gallery',
    summary:
      'Pusat dokumentasi foto kegiatan pondok, album acara, dan visual harian yang dipakai untuk membangun kepercayaan publik.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Buat album baru untuk satu kegiatan atau momen tertentu.',
      'Unggah beberapa foto sekaligus dan pilih sampul album terbaik.',
      'Kelola foto yang tampil agar galeri tetap rapi dan tidak penuh duplikat.',
    ],
    workflows: [
      {
        title: 'Menyusun album dokumentasi kegiatan',
        steps: [
          'Buat album baru dengan nama kegiatan yang jelas.',
          'Unggah kumpulan foto terbaik dari dokumentasi lapangan.',
          'Pilih satu foto sebagai cover album agar tampilannya menarik.',
          'Simpan dan cek halaman galeri publik.',
        ],
      },
    ],
    tips: [
      'Pilih foto yang tajam dan terang agar kualitas website tetap terasa profesional.',
      'Hindari album dengan isi terlalu campur aduk dari beberapa kegiatan berbeda.',
    ],
  },
  {
    id: 'videos',
    title: 'Video Kegiatan',
    category: 'Konten Publik',
    href: '/admin/videos',
    summary:
      'Mengelola video YouTube atau dokumentasi visual lain yang ditampilkan di website untuk memperkuat profil lembaga.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Tambahkan video dari URL YouTube yang valid.',
      'Kelola judul dan seri video agar mudah dipahami pengunjung.',
      'Tampilkan video unggulan untuk halaman publik.',
    ],
    workflows: [
      {
        title: 'Memasukkan video baru ke website',
        steps: [
          'Salin tautan video YouTube yang akan ditampilkan.',
          'Masuk ke menu Video Kegiatan lalu klik tambah video.',
          'Tempel URL, lengkapi judul bila perlu, lalu simpan.',
          'Cek hasil embed pada halaman video publik.',
        ],
      },
    ],
    tips: [
      'Pastikan video di YouTube bersifat public agar bisa diputar di website.',
      'Gunakan judul yang konsisten agar seri video lebih mudah diikuti.',
    ],
  },
  {
    id: 'psb',
    title: 'Data Santri (PSB)',
    category: 'Kesantrian',
    href: '/admin/psb',
    summary:
      'Tempat memantau seluruh pendaftar PSB, mengecek dokumen, dan mengubah status pendaftaran calon santri baru.',
    audience: ['Superadmin', 'Panitia PSB'],
    quickActions: [
      'Lihat daftar pendaftar dan status proses mereka.',
      'Buka detail pendaftar untuk meninjau biodata serta dokumen yang diunggah.',
      'Ubah status calon santri sesuai hasil verifikasi atau seleksi.',
    ],
    workflows: [
      {
        title: 'Verifikasi pendaftar baru',
        steps: [
          'Buka menu Data Santri PSB dan filter data yang masih baru atau pending.',
          'Klik detail untuk meninjau biodata dan berkas calon santri.',
          'Jika dokumen lengkap, ubah status ke tahap review atau sesuai alur panitia.',
          'Setelah keputusan final, ubah status menjadi diterima atau ditolak.',
        ],
      },
    ],
    tips: [
      'Gunakan status review untuk menandai pendaftar yang sedang diproses lebih lanjut.',
      'Periksa nomor WhatsApp wali karena data itu dipakai pada notifikasi berikutnya.',
    ],
  },
  {
    id: 'academics',
    title: 'eRapor',
    category: 'Kesantrian',
    href: '/admin/academics',
    summary:
      'Modul akademik untuk nilai, presensi, tahfidz, dan rekap raport yang akan tampil juga di portal wali santri.',
    audience: ['Superadmin', 'Bendahara'],
    quickActions: [
      'Input dan edit data nilai santri.',
      'Catat presensi harian atau rekap kehadiran.',
      'Kelola progres tahfidz dan siapkan data raport.',
    ],
    workflows: [
      {
        title: 'Input nilai santri',
        steps: [
          'Masuk ke eRapor lalu buka tab nilai yang dibutuhkan.',
          'Pilih semester dan tahun ajaran yang sesuai.',
          'Isi nilai komponen yang tersedia lalu simpan.',
          'Cek ringkasan agar data yang tampil ke wali santri sudah benar.',
        ],
      },
      {
        title: 'Menyiapkan raport untuk wali santri',
        steps: [
          'Pastikan nilai, presensi, dan tahfidz sudah terisi lengkap.',
          'Buka bagian rekap atau cetak raport.',
          'Lakukan preview sebelum laporan dibagikan atau diunduh.',
        ],
      },
    ],
    tips: [
      'Pastikan periode akademik yang dipilih benar sebelum menyimpan data.',
      'Perubahan di modul ini berdampak langsung pada informasi yang dilihat wali santri.',
    ],
  },
  {
    id: 'teachers',
    title: 'Staf Pengajar',
    category: 'Kesantrian',
    href: '/admin/teachers',
    summary:
      'Mengelola profil ustadz, ustadzah, dan tenaga pengajar yang ditampilkan di website publik.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Tambah profil pengajar baru beserta foto dan keterangan singkat.',
      'Perbarui data jika ada perubahan amanah, bidang, atau status aktif.',
      'Rapikan tampilan daftar pengajar agar lebih representatif.',
    ],
    workflows: [
      {
        title: 'Menambah profil pengajar',
        steps: [
          'Buka menu Staf Pengajar lalu klik tambah.',
          'Isi nama, jabatan atau bidang, serta deskripsi singkat.',
          'Unggah foto profil dan simpan.',
          'Cek halaman pengajar publik untuk memastikan hasilnya rapi.',
        ],
      },
    ],
    tips: [
      'Gunakan format nama dan gelar yang konsisten.',
      'Foto yang seragam akan membuat halaman pengajar terlihat lebih profesional.',
    ],
  },
  {
    id: 'disciplines',
    title: 'Kedisiplinan',
    category: 'Kesantrian',
    href: '/admin/disciplines',
    summary:
      'Panel pemantauan poin kedisiplinan santri, pencatatan pelanggaran, dan tindak lanjut pembinaan.',
    audience: ['Superadmin', 'Panitia PSB'],
    quickActions: [
      'Lihat sisa poin seluruh santri dari satu halaman rekap.',
      'Catat pelanggaran baru dan kurangi poin otomatis.',
      'Pantau santri yang masuk kategori perhatian atau kritis.',
    ],
    workflows: [
      {
        title: 'Mencatat pelanggaran santri',
        steps: [
          'Klik tombol catat pelanggaran pada halaman kedisiplinan.',
          'Isi santri, kategori pelanggaran, rincian kejadian, dan poin pengurang.',
          'Simpan lalu pastikan rekap poin santri ikut berubah.',
        ],
      },
      {
        title: 'Memantau santri dengan poin rendah',
        steps: [
          'Buka rekapitulasi poin dan lihat indikator warna atau status.',
          'Fokus pada santri yang sudah masuk tahap perhatian atau kritis.',
          'Gunakan riwayat pelanggaran untuk memahami pola kejadian sebelum tindak lanjut.',
        ],
      },
    ],
    tips: [
      'Masukkan data secara teliti karena riwayat pembinaan perlu akurat.',
      'Gunakan detail pelanggaran yang jelas agar mudah ditelusuri kembali.',
    ],
  },
  {
    id: 'donations',
    title: 'Program Donasi',
    category: 'Keuangan',
    href: '/admin/donations',
    summary:
      'Mengelola kampanye donasi dan daftar transaksi donatur yang masuk ke sistem, termasuk verifikasi donasi.',
    audience: ['Superadmin', 'Bendahara'],
    quickActions: [
      'Buat kampanye donasi baru dengan target, poster, dan deskripsi.',
      'Pantau daftar program aktif yang tampil di website publik.',
      'Verifikasi donasi yang masuk dari donatur.',
    ],
    workflows: [
      {
        title: 'Membuat open donasi baru',
        steps: [
          'Masuk ke Program Donasi lalu pilih tambah program donasi.',
          'Isi judul kampanye, target dana, tenggat waktu, dan deskripsi lengkap.',
          'Unggah poster kampanye lalu simpan.',
          'Pastikan kampanye tampil pada halaman donasi publik.',
        ],
      },
      {
        title: 'Memverifikasi transaksi donasi',
        steps: [
          'Buka tab transaksi pada modul donasi.',
          'Cari donasi yang masih pending dan cek detailnya.',
          'Klik verifikasi jika data sudah valid agar progres kampanye ikut bertambah.',
        ],
      },
    ],
    tips: [
      'Poster kampanye yang jelas akan membantu publik lebih cepat memahami tujuan donasi.',
      'Cek target dan status aktif sebelum kampanye dipublikasikan.',
    ],
    visualSteps: [
      {
        title: 'Masuk ke modul Donasi dan buka form campaign baru',
        description:
          'Klik menu Program Donasi di sidebar kiri, lalu gunakan tombol Buat Campaign untuk membuka form pembuatan donasi baru.',
        image: '/assets/tutorials/donations-step-1.png',
        alt: 'Tutorial langkah masuk ke modul donasi dan membuka form campaign baru',
      },
      {
        title: 'Isi judul dan deskripsi campaign',
        description:
          'Masukkan nama program donasi yang jelas, lalu lengkapi deskripsi agar tim dan calon donatur memahami tujuan campaign.',
        image: '/assets/tutorials/donations-step-2.png',
        alt: 'Tutorial langkah mengisi judul dan deskripsi campaign donasi',
      },
      {
        title: 'Lengkapi target, tanggal, poster, lalu sebarkan',
        description:
          'Isi target dana, tentukan tenggat waktu bila diperlukan, unggah poster campaign, lalu klik Sebarkan saat semua data sudah siap.',
        image: '/assets/tutorials/donations-step-3.png',
        alt: 'Tutorial langkah melengkapi target dana dan menyebarkan campaign donasi',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Pembayaran SPP',
    category: 'Keuangan',
    href: '/admin/payments',
    summary:
      'Mencatat transaksi pembayaran santri, memantau statusnya, dan menyiapkan data keuangan yang tampil ke portal terkait.',
    audience: ['Superadmin', 'Bendahara'],
    quickActions: [
      'Tambah pembayaran baru secara manual.',
      'Filter transaksi berdasarkan status, pengguna, atau jenis pembayaran.',
      'Pantau riwayat administrasi pembayaran dari satu halaman.',
    ],
    workflows: [
      {
        title: 'Mencatat pembayaran manual',
        steps: [
          'Buka menu Pembayaran SPP lalu pilih tambah pembayaran.',
          'Pilih pengguna, isi nominal, kategori, metode, dan catatan bila perlu.',
          'Simpan transaksi lalu pastikan status dan datanya sesuai.',
        ],
      },
    ],
    tips: [
      'Gunakan keterangan yang rapi agar laporan bulanan lebih mudah dibaca.',
      'Verifikasi kembali nominal sebelum menyimpan karena data keuangan sensitif.',
    ],
  },
  {
    id: 'facilities',
    title: 'Fasilitas Publik',
    category: 'Layanan',
    href: '/admin/facilities',
    summary:
      'Mengelola daftar fasilitas pondok yang ditampilkan ke publik, termasuk foto, nama fasilitas, dan deskripsi.',
    audience: ['Superadmin', 'Tim Media'],
    quickActions: [
      'Tambah fasilitas baru lengkap dengan gambar.',
      'Perbarui deskripsi fasilitas agar sesuai kondisi terbaru.',
      'Rapikan daftar fasilitas yang ingin ditonjolkan di website.',
    ],
    workflows: [
      {
        title: 'Menampilkan fasilitas baru di website',
        steps: [
          'Masuk ke Fasilitas Publik lalu klik tambah fasilitas.',
          'Isi nama fasilitas, deskripsi, kategori jika ada, dan unggah foto.',
          'Simpan lalu cek halaman fasilitas publik.',
        ],
      },
    ],
    tips: [
      'Gunakan foto nyata kondisi fasilitas saat ini.',
      'Deskripsi singkat biasanya lebih efektif daripada paragraf yang terlalu panjang.',
    ],
  },
  {
    id: 'messages',
    title: 'Pesan & Inbox',
    category: 'Layanan',
    href: '/admin/messages',
    summary:
      'Kotak masuk publik yang menampung pesan dari formulir kontak website dan membantu admin merespon calon wali atau pengunjung.',
    audience: ['Superadmin', 'Panitia PSB'],
    quickActions: [
      'Baca pesan baru dari website.',
      'Tandai pesan sebagai sudah dibaca.',
      'Balas cepat melalui tautan WhatsApp jika nomor tersedia.',
    ],
    workflows: [
      {
        title: 'Menangani pesan masuk baru',
        steps: [
          'Masuk ke menu Pesan & Inbox dan fokus pada tab pesan baru.',
          'Buka detail pesan untuk melihat nama, isi, dan kontak pengirim.',
          'Balas lewat WhatsApp bila perlu tindak lanjut cepat.',
          'Tandai pesan sebagai dibaca atau hapus jika memang sudah selesai dan tidak dibutuhkan lagi.',
        ],
      },
    ],
    tips: [
      'Balasan cepat membantu membangun kesan profesional.',
      'Hapus hanya pesan yang benar-benar tidak perlu disimpan lagi.',
    ],
  },
  {
    id: 'notifications',
    title: 'Notifikasi WA',
    category: 'Sistem',
    href: '/admin/notifications',
    summary:
      'Panel pengiriman WhatsApp manual dan broadcast untuk tagihan, nilai, atau status PSB, sekaligus memantau kesiapan integrasi gateway.',
    audience: ['Superadmin', 'Bendahara'],
    quickActions: [
      'Cek apakah koneksi notifikasi WhatsApp sedang aktif.',
      'Kirim pesan manual ke nomor tertentu.',
      'Jalankan broadcast tagihan, nilai, atau status PSB.',
    ],
    workflows: [
      {
        title: 'Mengirim pesan manual',
        steps: [
          'Buka menu Notifikasi WA.',
          'Isi nomor tujuan dan pesan yang akan dikirim.',
          'Klik kirim lalu cek umpan balik statusnya di halaman.',
        ],
      },
      {
        title: 'Menjalankan broadcast sistem',
        steps: [
          'Pastikan status integrasi WA sudah configured.',
          'Pilih jenis broadcast yang dibutuhkan, misalnya tagihan atau PSB.',
          'Konfirmasi tindakan lalu tunggu proses selesai.',
        ],
      },
    ],
    tips: [
      'Nomor tujuan paling aman menggunakan format 62 di depan.',
      'Jalankan broadcast hanya setelah data sumbernya benar dan siap dibagikan.',
    ],
  },
  {
    id: 'users',
    title: 'Manajemen Pengguna',
    category: 'Sistem',
    href: '/admin/users',
    summary:
      'Tempat superadmin mengelola akun staf, mengatur role, dan mereset akses jika ada perubahan tim kerja.',
    audience: ['Superadmin'],
    quickActions: [
      'Tambah akun admin baru.',
      'Ubah role pengguna sesuai tanggung jawabnya.',
      'Reset password atau hapus akun yang tidak dipakai lagi.',
    ],
    workflows: [
      {
        title: 'Membuat akun admin baru',
        steps: [
          'Masuk ke menu Manajemen Pengguna lalu buka form tambah pengguna.',
          'Isi nama, email, password awal, dan pilih role yang sesuai.',
          'Simpan lalu berikan akses login ke staf terkait secara aman.',
        ],
      },
      {
        title: 'Mereset password pengguna',
        steps: [
          'Cari akun yang ingin direset pada tabel pengguna.',
          'Buka aksi reset password lalu masukkan password baru.',
          'Simpan dan informasikan perubahan itu ke pemilik akun.',
        ],
      },
    ],
    tips: [
      'Berikan role sesempit mungkin sesuai tugas agar akses tetap aman.',
      'Akun yang sudah tidak dipakai sebaiknya dinonaktifkan atau dihapus.',
    ],
  },
  {
    id: 'logs',
    title: 'Log Sistem',
    category: 'Sistem',
    href: '/admin/logs',
    summary:
      'Rekam jejak aktivitas admin untuk audit internal, pelacakan perubahan data, dan pemeriksaan keamanan operasional.',
    audience: ['Superadmin'],
    quickActions: [
      'Cari aktivitas berdasarkan user, aksi, atau detail tertentu.',
      'Lihat riwayat perubahan data pada sistem.',
      'Ekspor log ke PDF atau Excel bila dibutuhkan untuk audit.',
    ],
    workflows: [
      {
        title: 'Melacak perubahan data',
        steps: [
          'Buka Log Sistem lalu gunakan kolom pencarian.',
          'Cari nama modul, user, atau jenis aksi seperti LOGIN atau UPDATE.',
          'Baca detail log untuk mengetahui siapa melakukan apa dan kapan.',
        ],
      },
    ],
    tips: [
      'Gunakan log saat ada perbedaan data atau perlu jejak audit.',
      'Log bersifat referensi dan sebaiknya tidak dipakai sebagai tempat kerja utama.',
    ],
  },
  {
    id: 'settings',
    title: 'Pengaturan Utama',
    category: 'Sistem',
    href: '/admin/settings',
    summary:
      'Pusat konfigurasi identitas lembaga, konten homepage, kontak, AI, notifikasi, pembayaran PSB, dan website builder Alma.',
    audience: ['Superadmin'],
    quickActions: [
      'Ubah identitas dasar pondok seperti nama, logo, dan deskripsi.',
      'Atur homepage lewat Website Builder, slider, kartu info, dan sambutan.',
      'Kelola kontak, sosial media, konfigurasi AI, notifikasi WA, dan pembayaran PSB.',
    ],
    workflows: [
      {
        title: 'Memperbarui tampilan homepage',
        steps: [
          'Masuk ke Pengaturan Utama lalu buka tab Website Builder atau Slider Beranda.',
          'Lakukan perubahan konten, urutan blok, atau materi visual yang dibutuhkan.',
          'Simpan perubahan lalu cek langsung di website publik.',
        ],
      },
      {
        title: 'Memperbarui identitas lembaga',
        steps: [
          'Buka tab Umum atau Kontak sesuai informasi yang ingin diubah.',
          'Perbarui data seperti nama pondok, alamat, nomor admin, atau tautan sosial media.',
          'Simpan lalu verifikasi hasilnya pada website publik.',
        ],
      },
    ],
    tips: [
      'Lakukan perubahan besar secara bertahap agar lebih mudah dicek dampaknya.',
      'Setelah mengubah tampilan publik, cek hasilnya di browser baru atau mode incognito.',
    ],
  },
];

export const roleAccessMatrix: RoleAccessRow[] = [
  {
    module: 'Dashboard Utama',
    superadmin: 'Ya',
    tim_media: 'Ya',
    bendahara: 'Ya',
    panitia_psb: 'Ya',
    user: 'Tidak',
  },
  {
    module: 'Berita, Program, Galeri, Video, Staf Pengajar, Fasilitas',
    superadmin: 'Ya',
    tim_media: 'Ya',
    bendahara: 'Tidak',
    panitia_psb: 'Tidak',
    user: 'Tidak',
  },
  {
    module: 'PSB dan Pesan Masuk',
    superadmin: 'Ya',
    tim_media: 'Tidak',
    bendahara: 'Tidak',
    panitia_psb: 'Ya',
    user: 'Tidak',
  },
  {
    module: 'eRapor, Donasi, Pembayaran, Notifikasi WA',
    superadmin: 'Ya',
    tim_media: 'Tidak',
    bendahara: 'Ya',
    panitia_psb: 'Tidak',
    user: 'Tidak',
  },
  {
    module: 'Kedisiplinan',
    superadmin: 'Ya',
    tim_media: 'Tidak',
    bendahara: 'Tidak',
    panitia_psb: 'Ya',
    user: 'Tidak',
  },
  {
    module: 'Manajemen Pengguna, Log Sistem, Pengaturan',
    superadmin: 'Ya',
    tim_media: 'Tidak',
    bendahara: 'Tidak',
    panitia_psb: 'Tidak',
    user: 'Tidak',
  },
];

export function getAdminDocById(id: string | null | undefined) {
  if (!id) {
    return adminDocSections[0];
  }

  return (
    adminDocSections.find((section) => section.id === id || section.href === id) ||
    adminDocSections.find(
      (section) => id.includes(section.id) || id.includes(section.href.replace('/admin/', ''))
    ) ||
    adminDocSections[0]
  );
}
