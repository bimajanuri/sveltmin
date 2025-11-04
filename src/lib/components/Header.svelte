<script lang="ts">
  import { writable } from 'svelte/store';
  
  // Import Flowbite Svelte Icons
  import {
    BarsOutline,
    BellSolid,
    SunSolid,
    MoonSolid,
    SearchSolid,
    ChevronDownOutline,
    DotsVerticalOutline,
    SchoolXmarkOutline
  } from 'flowbite-svelte-icons';
  
  // State management for header
  export let isMobileOpen = false;
  
  // Create a writable store for sidebar state
  const sidebar = writable({
    isExpanded: true,
    isMobileOpen,
    isHovered: false
  });
  
  // State for dropdowns
  let isApplicationMenuOpen = false;
  let isNotificationOpen = false;
  let isUserMenuOpen = false;
  
  // Function to toggle sidebar
  function handleToggle() {
    sidebar.update(s => {
      if (window.innerWidth >= 1024) {
        s.isExpanded = !s.isExpanded;
      } else {
        s.isMobileOpen = !s.isMobileOpen;
      }
      return s;
    });
  }
  
  // Function to toggle application menu
  function toggleApplicationMenu() {
    isApplicationMenuOpen = !isApplicationMenuOpen;
  }
  
  // Function to toggle notification dropdown
  function toggleNotification() {
    isNotificationOpen = !isNotificationOpen;
  }
  
  // Function to toggle user menu dropdown
  function toggleUserMenu() {
    isUserMenuOpen = !isUserMenuOpen;
  }
</script>

<header class="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
  <div class="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
    <div class="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
      <button
        class="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
        on:click={handleToggle}
        aria-label="Toggle Sidebar"
      >
        <BarsOutline class="size-5" />
      </button>

      <a href="/" class="lg:hidden">
        <img
          class="dark:hidden"
          src="/images/logo/logo.svg"
          alt="Logo"
          width="150"
          height="40"
        />
        <img
          class="hidden dark:block"
          src="/images/logo/logo-dark.svg"
          alt="Logo"
          width="150"
          height="40"
        />
      </a>

      <button
        on:click={toggleApplicationMenu}
        class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
        aria-label="Toggle Application Menu"
      >
        <DotsVerticalOutline class="size-6" />
      </button>

      <div class="hidden lg:block">
        <form>
          <div class="relative">
            <span class="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
              <SearchSolid class="fill-gray-500 dark:fill-gray-400 size-5" />
            </span>
            <input
              type="text"
              placeholder="Search or type command..."
              class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
            />

            <button class="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400" aria-label="Search Command">
              <span> ⌘ </span>
              <span> K </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <div
      class="{isApplicationMenuOpen ? 'flex' : 'hidden'} items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none"
    >
      <div class="flex items-center gap-2 2xsm:gap-3">
        <!-- Theme Toggle Button -->
        <button class="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800" aria-label="Toggle Theme">
          <SunSolid class="size-5 fill-current" />
        </button>
        
        <!-- Notification Dropdown -->
        <div class="relative">
          <button 
            on:click={toggleNotification}
            class="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Toggle Notifications"
          >
            <BellSolid class="size-5 fill-current" />
            <span class="absolute top-0 right-0 flex w-2 h-2 -mt-1 -mr-1">
              <span class="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
            </span>
          </button>
        </div>
      </div>
      
      <!-- User Area -->
      <div class="relative">
        <button 
          on:click={toggleUserMenu}
          class="flex items-center gap-2 2xsm:gap-4"
          aria-label="User Menu"
        >
          <span class="hidden text-right lg:block">
            <span class="block text-sm font-medium text-gray-900 dark:text-white">Thomas Edison</span>
            <span class="block text-xs text-gray-500 dark:text-gray-400">Admin</span>
          </span>

          <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700">
            <img class="rounded-full" src="/images/user/user-01.png" alt="User" />
          </div>
        </button>
      </div>
    </div>
  </div>
</header>