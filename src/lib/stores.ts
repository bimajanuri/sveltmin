import { writable, derived, get } from 'svelte/store';

// Sidebar store
export const isSidebarExpanded = writable(true);
export const isMobileSidebarOpen = writable(false);
export const isSidebarHovered = writable(false);
export const activeSidebarItem = writable<string | null>(null);
export const openSubmenu = writable<string | null>(null);

// Derived store untuk menangani ukuran layar mobile
export const isMobile = writable(false);

// Gabungan dari semua kondisi sidebar
export const isSidebarOpen = derived(
  [isSidebarExpanded, isMobileSidebarOpen, isMobile],
  ([$isSidebarExpanded, $isMobileSidebarOpen, $isMobile]) => {
    return $isMobile ? $isMobileSidebarOpen : $isSidebarExpanded;
  }
);

// Theme store
const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : 'light';
export const theme = writable<'light' | 'dark'>(storedTheme === 'dark' ? 'dark' : 'light');

// Update tema di DOM dan localStorage setiap kali nilai tema berubah
theme.subscribe(current => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', current);
		if (current === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
});

// Fungsi untuk toggle sidebar
export const toggleSidebar = () => {
	isSidebarExpanded.update(value => !value);
};

// Fungsi untuk toggle mobile sidebar
export const toggleMobileSidebar = () => {
	isMobileSidebarOpen.update(value => !value);
};

// Fungsi untuk toggle submenu
export const toggleSubmenu = (item: string) => {
	openSubmenu.update(current => current === item ? null : item);
};

// Fungsi untuk mengatur item aktif
export const setActiveSidebarItem = (item: string | null) => {
	activeSidebarItem.set(item);
};

// Fungsi untuk mengatur hover state
export const setSidebarHovered = (hovered: boolean) => {
	isSidebarHovered.set(hovered);
};

// Fungsi untuk toggle tema
export const toggleTheme = () => {
	theme.update(current => current === 'light' ? 'dark' : 'light');
};