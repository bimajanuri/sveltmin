# Sveltmin - Konversi TailAdmin React ke SvelteKit

Proyek ini adalah hasil konversi dashboard admin TailAdmin dari React ke SvelteKit dengan mempertahankan fungsionalitas, struktur, dan desain UI/UX yang identik.

## Struktur Proyek

```
src/
├── routes/
│   ├── +layout.svelte                 # Layout utama dengan sidebar dan header
│   ├── +page.svelte                   # Halaman dashboard utama
│   ├── calendar/
│   │   └── +page.svelte               # Halaman calendar
│   ├── profile/
│   │   └── +page.svelte               # Halaman user profile
│   ├── form-elements/
│   │   └── +page.svelte               # Halaman form elements
│   ├── basic-tables/
│   │   └── +page.svelte               # Halaman basic tables
│   ├── blank/
│   │   └── +page.svelte               # Halaman blank
│   ├── error-404/
│   │   └── +page.svelte               # Halaman error 404
│   ├── line-chart/
│   │   └── +page.svelte               # Halaman line chart
│   └── ... (rute lainnya)
├── lib/
│   └── components/
│       ├── Sidebar.svelte             # Komponen sidebar
│       ├── Header.svelte              # Komponen header
│       ├── Chart.svelte               # Komponen chart
│       └── Table.svelte               # Komponen tabel
├── app.css                            # Styling dengan Tailwind CSS
├── app.d.ts                           # Type definitions
└── app.html                           # HTML template
static/
├── images/
│   └── logo/                          # Logo assets dari TailAdmin
docs/
├── icon-mapping.md                    # Mapping icon dari Hero Icons ke Flowbite Svelte Icons
├── routing-structure.md               # Struktur routing yang direncanakan
└── implementation-summary.md          # Ringkasan implementasi
```

## Komponen Utama

### Sidebar.svelte
Komponen sidebar yang dikonversi dari `AppSidebar.tsx` di TailAdmin React:
- Mendukung mode expanded dan collapsed
- Responsive untuk mobile dan desktop
- Menu navigasi dengan submenu yang dapat diperluas
- Menampilkan logo dengan ukuran yang berbeda tergantung mode
- Menggunakan Flowbite Svelte Icons

### Header.svelte
Komponen header yang dikonversi dari `AppHeader.tsx` di TailAdmin React:
- Tombol toggle untuk sidebar
- Search form dengan shortcut keyboard
- Dropdown notifikasi
- Menu pengguna
- Toggle tema gelap/terang
- Menggunakan Flowbite Svelte Icons

### +page.svelte (Dashboard)
Halaman dashboard utama dengan:
- Card metrik (Customers dan Orders) menggunakan Flowbite Svelte Icons
- Komponen chart sederhana untuk visualisasi
- Tabel data yang dapat disortir
- Card demografi pengguna

### Komponen Tambahan
- `Chart.svelte` - Komponen chart sederhana untuk visualisasi data
- `Table.svelte` - Komponen tabel yang dapat disortir

## Desain dan Styling

Proyek ini menggunakan:
- Tailwind CSS v4 untuk styling
- Font Inter dari Google Fonts
- Flowbite Svelte dan Flowbite Svelte Icons untuk komponen UI
- Sistem warna dan kelas utilitas dari TailAdmin

## Mapping Icon

Lihat [docs/icon-mapping.md](docs/icon-mapping.md) untuk daftar lengkap mapping icon dari Hero Icons (digunakan di TailAdmin React) ke Flowbite Svelte Icons.

## Cara Menjalankan

1. Install dependensi:
   ```bash
   npm install
   ```

2. Jalankan dalam mode development:
   ```bash
   npm run dev
   ```

3. Bangun untuk produksi:
   ```bash
   npm run build
   ```

4. Preview build produksi:
   ```bash
   npm run preview
   ```

## Kemajuan Implementasi

Sampai saat ini, kami telah berhasil mengimplementasikan:

1. Layout yang sama seperti TailAdmin dengan sidebar dan header
2. Mengganti semua placeholder icon dengan komponen Flowbite Svelte Icons yang sesuai
3. Membuat beberapa halaman yang ada di menu navigasi:
   - Dashboard (halaman utama)
   - Calendar
   - User Profile
   - Form Elements
   - Basic Tables
   - Blank Page
   - Error 404
   - Line Chart
4. Mengimplementasikan komponen UI tambahan seperti chart dan tabel yang dapat disortir

## Konfirmasi Fungsionalitas

Implementasi saat ini sudah berhasil:
- Menampilkan layout dashboard lengkap dengan sidebar dan header
- Menampilkan halaman dashboard utama dengan komponen dasar
- Mendukung desain responsif
- Memiliki struktur yang dapat diperluas untuk komponen tambahan
- Menggunakan Flowbite Svelte Icons yang sesuai

Aplikasi dapat dibangun dan dijalankan dengan benar menggunakan perintah SvelteKit standar.

## Langkah Selanjutnya

Untuk menyelesaikan konversi penuh TailAdmin ke SvelteKit:
1. Membuat halaman-halaman yang tersisa di menu navigasi
2. Mengimplementasikan komponen UI tambahan seperti alert, avatar, badge, buttons, images, videos
3. Mengimplementasikan halaman autentikasi (Sign In/Sign Up)
4. Menghubungkan dengan data yang sebenarnya melalui API atau sumber data lainnya