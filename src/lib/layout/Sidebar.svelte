<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { isSidebarOpen } from '$lib/stores';
  import SidebarWidget from '$lib/layout/SidebarWidget.svelte';

  let isHovered = false;
  let unsubscribe: (() => void) | null = null;

  onMount(() => {
    unsubscribe = isSidebarOpen.subscribe(() => {
      // Reaktivitas untuk perubahan sidebar
    });
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  function toggleHover(value: boolean) {
    isHovered = value;
  }
  
  function HorizontalDots() {
    return `<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="2" />
      <circle cx="2" cy="9" r="2" />
      <circle cx="16" cy="9" r="2" />
    </svg>`;
  }
</script>

<aside
  class={`fixed left-0 top-0 z-50 h-screen w-full bg-white duration-300 ease-linear dark:bg-gray-dark lg:static lg:translate-x-0 
    ${$isSidebarOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
    ${$isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0`}
  on:mouseenter={() => toggleHover(true)}
  on:mouseleave={() => toggleHover(false)}
>
  <div class={`py-8 flex ${!$isSidebarOpen && !isHovered ? 'lg:justify-center' : 'justify-start'}`}>
    <a href="/">
      {#if $isSidebarOpen || isHovered}
        <div>
          <img class="dark:hidden" src="/images/logo/logo.svg" alt="Logo" width="150" height="40">
          <img class="hidden dark:block" src="/images/logo/logo-dark.svg" alt="Logo" width="150" height="40">
        </div>
      {:else}
        <img src="/images/logo/logo-icon.svg" alt="Logo" width="32" height="32">
      {/if}
    </a>
  </div>
  <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
    <nav class="mb-6">
      <div class="flex flex-col gap-4">
        <div>
          <h2 class={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!$isSidebarOpen && !isHovered ? 'lg:justify-center' : 'justify-start'}`}>
            {#if $isSidebarOpen || isHovered}
              Menu
            {:else}
              {@html HorizontalDots()}
            {/if}
          </h2>
          <ul class="flex flex-col gap-4">
            <SidebarWidget
              href="/"
              title="Dashboard"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16675 7.5H7.50008M4.16675 12.5H7.50008M10.8334 7.5H14.1667M10.8334 12.5H14.1667M3.33341 5.83333C3.33341 4.90786 4.08124 4.16667 5.00008 4.16667H8.33341C9.25225 4.16667 10.0001 4.90786 10.0001 5.83333V14.1667C10.0001 15.0921 9.25225 15.8333 8.33341 15.8333H5.00008C4.08124 15.8333 3.33341 15.0921 3.33341 14.1667V5.83333ZM11.6667 5.83333C11.6667 4.90786 12.4146 4.16667 13.3334 4.16667H16.6667C17.5856 4.16667 18.3334 4.90786 18.3334 5.83333V14.1667C18.3334 15.0921 17.5856 15.8333 16.6667 15.8333H13.3334C12.4146 15.8333 11.6667 15.0921 11.6667 14.1667V5.83333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
              badgeText="New"
              isActive={true}
            />
            <SidebarWidget
              href="/calendar"
              title="Calendar"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66675 1.66667V4.16667M13.3334 1.66667V4.16667M3.33341 7.5H16.6667M5.83341 10.8333H6.66675M10.8334 10.8333H11.6667M14.1667 10.8333H15.0001M5.83341 14.1667H6.66675M10.8334 14.1667H11.6667M15.8334 15.8333H4.16675C3.24627 15.8333 2.50008 15.0871 2.50008 14.1667V5.83333C2.50008 4.91286 3.24627 4.16667 4.16675 4.16667H15.8334C16.7539 4.16667 17.5001 4.91286 17.5001 5.83333V14.1667C17.5001 15.0871 16.7539 15.8333 15.8334 15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
            />
            <SidebarWidget
              href="/user-profile"
              title="Profile"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0001 10C11.3808 10 12.5001 8.88071 12.5001 7.5C12.5001 6.11929 11.3808 5 10.0001 5C8.61935 5 7.50008 6.11929 7.50008 7.5C7.50008 8.88071 8.61935 10 10.0001 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.5001 17.5C17.5001 15.4289 15.8212 13.75 13.7501 13.75C11.679 13.75 10.0001 15.4289 10.0001 17.5M10.0001 17.5C10.0001 15.4289 8.32118 13.75 6.25008 13.75C4.17899 13.75 2.50008 15.4289 2.50008 17.5M10.0001 17.5H17.5001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
            />
            <SidebarWidget
              href="/form-elements"
              title="Form Elements"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33325 4.99935C3.33325 3.52659 4.46367 2.33331 5.85907 2.33331H14.1409C15.5345 2.33331 16.6666 3.52463 16.6666 4.99935V14.9993C16.6666 16.4741 15.5345 17.6654 14.1409 17.6654H5.85907C4.46367 17.6654 3.33325 16.4721 3.33325 14.9973V4.99935Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.4999 7.5H12.5082" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.49992 7.5H7.50825" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.4999 12.5H12.5082" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.49992 12.5H7.50825" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 7.5H10.0083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 12.5H10.0083" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
            />
            <SidebarWidget
              href="/basic-tables"
              title="Tables"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 3.33331H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.83325 6.66669V16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.1667 6.66669V16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 6.66669H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 16.6667H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33325 10H11.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33325 13.3333H11.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
            />
            <SidebarWidget
              href="#"
              title="UI Elements"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33325 3.33331H8.33325V8.33331H3.33325V3.33331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.6667 3.33331H16.6667V8.33331H11.6667V3.33331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.6667 11.6666H16.6667V16.6666H11.6667V11.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.33325 11.6666H8.33325V16.6666H3.33325V11.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
              subItems={[
                { href: "/ui-elements/alerts", title: "Alerts" },
                { href: "/ui-elements/avatars", title: "Avatars" },
                { href: "/ui-elements/badges", title: "Badges" },
                { href: "/ui-elements/buttons", title: "Buttons" },
                { href: "/ui-elements/images", title: "Images" },
                { href: "/ui-elements/videos", title: "Videos" }
              ]}
            />
            <SidebarWidget
              href="#"
              title="Auth Pages"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1667 17.5H5.83341C4.91294 17.5 4.16675 16.7538 4.16675 15.8333V4.16665C4.16675 3.24617 4.91294 2.49998 5.83341 2.49998H11.2501L15.8334 7.08331V15.8333C15.8334 16.7538 15.0872 17.5 14.1667 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.25 2.5V7.08333H15.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
              subItems={[
                { href: "/auth/signin", title: "Sign In" },
                { href: "/auth/signup", title: "Sign Up" }
              ]}
            />
            <SidebarWidget
              href="#"
              title="Charts"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 14.1667L7.5 9.16667L10.8333 12.5L17.5 5.83333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
              subItems={[
                { href: "/charts/bar", title: "Bar Chart" },
                { href: "/charts/line", title: "Line Chart" }
              ]}
            />
            <SidebarWidget
              href="/error-404"
              title="Error Page"
              icon={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 7.5L7.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.5 7.5L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
            />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</aside>