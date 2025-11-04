# Struktur Routing SvelteKit untuk TailAdmin

Berikut adalah struktur routing yang diperlukan untuk mereplikasi fungsionalitas TailAdmin React:

## Struktur Folder saat ini:
```
src/
├── routes/
│   ├── +layout.svelte     # Layout utama (termasuk sidebar dan header)
│   └── +page.svelte       # Halaman dashboard utama
├── lib/
│   └── components/
│       └── Sidebar.svelte # Komponen sidebar
```

## Struktur Routing yang Diperlukan:
```
src/
├── routes/
│   ├── +layout.svelte           # Layout utama (termasuk sidebar dan header)
│   ├── +page.svelte             # Halaman dashboard utama
│   ├── calendar/
│   │   └── +page.svelte         # Halaman calendar
│   ├── profile/
│   │   └── +page.svelte         # Halaman user profile
│   ├── form-elements/
│   │   └── +page.svelte         # Halaman form elements
│   ├── basic-tables/
│   │   └── +page.svelte         # Halaman basic tables
│   ├── blank/
│   │   └── +page.svelte         # Halaman blank
│   ├── error-404/
│   │   └── +page.svelte         # Halaman error 404
│   ├── line-chart/
│   │   └── +page.svelte         # Halaman line chart
│   ├── bar-chart/
│   │   └── +page.svelte         # Halaman bar chart
│   ├── alerts/
│   │   └── +page.svelte         # Halaman alerts
│   ├── avatars/
│   │   └── +page.svelte         # Halaman avatars
│   ├── badge/
│   │   └── +page.svelte         # Halaman badge
│   ├── buttons/
│   │   └── +page.svelte         # Halaman buttons
│   ├── images/
│   │   └── +page.svelte         # Halaman images
│   ├── videos/
│   │   └── +page.svelte         # Halaman videos
│   ├── signin/
│   │   └── +page.svelte         # Halaman sign in
│   └── signup/
│       └── +page.svelte         # Halaman sign up
├── lib/
│   └── components/
│       ├── Sidebar.svelte       # Komponen sidebar
│       ├── Header.svelte        # Komponen header
│       └── ...                  # Komponen lainnya
```

## Komponen Utama:
1. `Sidebar.svelte` - Sidebar navigasi dengan menu yang dapat diperluas
2. `Header.svelte` - Header dengan tombol toggle sidebar, search, dan menu user
3. Komponen-komponen dashboard seperti card, chart, table, dll.

## Fitur Routing:
- Nested routing menggunakan layout SvelteKit
- Routing sesuai dengan menu navigasi TailAdmin
- Responsive design untuk mobile dan desktop