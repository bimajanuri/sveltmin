<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import {
    XSolid,
    DotsHorizontalOutline,
    ChevronDownOutline,
    HomeOutline,
    CalendarMonthOutline,
    UserOutline,
    TextSizeOutline,
    InsertTableOutline,
    FolderDuplicateOutline,
    ChartPieOutline,
    CubesStackedOutline,
    LockOutline
  } from 'flowbite-svelte-icons';

  export let isExpanded = true;
  export let isHovered = false;

  let isMounted = false;
  let isMobileOpen = false;
  let openSubmenu = { type: '', index: -1 };

  onMount(() => {
    isMounted = true;
  });

  function closeMobileSidebar() {
    isMobileOpen = false;
  }

  function handleSubmenuToggle(index, type) {
    if (openSubmenu?.type === type && openSubmenu?.index === index) {
      openSubmenu = { type: '', index: -1 };
    } else {
      openSubmenu = { type, index };
    }
  }

  // Main navigation items
  const mainItems = [
    {
      name: 'Dashboard',
      icon: HomeOutline,
      href: '/',
      children: [
        { name: 'Ecommerce', href: '/' }
      ]
    },
    {
      name: 'Calendar',
      icon: CalendarMonthOutline,
      href: '/calendar'
    },
    {
      name: 'User Profile',
      icon: UserOutline,
      href: '/profile'
    },
    {
      name: 'Forms',
      icon: TextSizeOutline,
      children: [
        { name: 'Form Elements', href: '/form-elements' }
      ]
    },
    {
      name: 'Tables',
      icon: InsertTableOutline,
      children: [
        { name: 'Basic Tables', href: '/basic-tables' }
      ]
    },
    {
      name: 'Pages',
      icon: FolderDuplicateOutline,
      children: [
        { name: 'Blank Page', href: '/blank' },
        { name: '404 Error', href: '/error-404' }
      ]
    }
  ];

  // Additional navigation items
  const additionalItems = [
    {
      name: 'Charts',
      icon: ChartPieOutline,
      children: [
        { name: 'Line Chart', href: '/line-chart' },
        { name: 'Bar Chart', href: '/bar-chart' }
      ]
    },
    {
      name: 'UI Elements',
      icon: CubesStackedOutline,
      children: [
        { name: 'Alerts', href: '/alerts' },
        { name: 'Avatar', href: '/avatars' },
        { name: 'Badge', href: '/badge' },
        { name: 'Buttons', href: '/buttons' },
        { name: 'Images', href: '/images' },
        { name: 'Videos', href: '/videos' }
      ]
    },
    {
      name: 'Authentication',
      icon: LockOutline,
      children: [
        { name: 'Sign In', href: '/signin' },
        { name: 'Sign Up', href: '/signup' }
      ]
    }
  ];

  // Function to check if a path is active
  function isPathActive(path) {
    if (!path) return false;
    return $page.url.pathname === path;
  }
</script>

<div class="fixed flex flex-col h-full bg-white border-r border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:static lg:translate-x-0 {isMobileOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out w-72.5">
  <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
    <a href="/" class="flex items-center">
      {#if isExpanded || isHovered || isMobileOpen}
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
      {:else}
        <img
          class="dark:hidden"
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width="32"
          height="32"
        />
        <img
          class="hidden dark:block"
          src="/images/logo/logo-icon-dark.svg"
          alt="Logo"
          width="32"
          height="32"
        />
      {/if}
    </a>
    
    <button
      on:click={closeMobileSidebar}
      class="items-center justify-center hidden w-10 h-10 text-gray-500 rounded-full lg:flex hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
    >
      <XSolid class="size-6" />
    </button>
  </div>
  
  <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
    <nav class="mb-6">
      <div class="flex flex-col gap-4">
        <div>
          <h2 class={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 { !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start' }`}>
            {#if isExpanded || isHovered || isMobileOpen}
              Menu
            {:else}
              <DotsHorizontalOutline class="size-6" />
            {/if}
          </h2>
          
          <!-- Main navigation items -->
          <ul class="flex flex-col gap-4">
            {#each mainItems as nav, index}
              <li>
                {#if nav.children}
                  <button
                    on:click={() => handleSubmenuToggle(index, 'main')}
                    class={`menu-item group cursor-pointer { !isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start' }`}
                  >
                    <span class="menu-item-icon-size">
                      <svelte:component this={nav.icon} class="size-6" />
                    </span>
                    {#if isExpanded || isHovered || isMobileOpen}
                      <span class="menu-item-text">{nav.name}</span>
                      <span class="ml-auto w-5 h-5 transition-transform duration-200">
                        {#if openSubmenu?.type === 'main' && openSubmenu?.index === index}
                          <ChevronDownOutline class="menu-item-arrow-active" />
                        {:else}
                          <ChevronDownOutline class="menu-item-arrow-inactive" />
                        {/if}
                      </span>
                    {/if}
                  </button>
                  
                  {#if isExpanded || isHovered || isMobileOpen}
                    <div
                      class="overflow-hidden transition-all duration-300"
                      style="height: 0px;"
                    >
                      <ul class="mt-2 space-y-1 ml-9">
                        {#each nav.children as subItem}
                          <li>
                            <a
                              href={subItem.href}
                              class={`menu-dropdown-item ${isPathActive(subItem.href) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}
                            >
                              {subItem.name}
                              <span class="flex items-center gap-1 ml-auto">
                                {#if subItem.new}
                                  <span class="ml-auto menu-dropdown-badge">
                                    new
                                  </span>
                                {/if}
                                {#if subItem.pro}
                                  <span class="ml-auto menu-dropdown-badge">
                                    pro
                                  </span>
                                {/if}
                              </span>
                            </a>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/if}
                {:else if nav.href}
                  <a
                    href={nav.href}
                    class={`menu-item group ${isPathActive(nav.href) ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400 border-l-4 border-brand-500 pl-4 -ml-1' : ''}`}
                  >
                    <span class="menu-item-icon-size">
                      <svelte:component this={nav.icon} class="size-6" />
                    </span>
                    {#if isExpanded || isHovered || isMobileOpen}
                      <span class="menu-item-text">{nav.name}</span>
                    {/if}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
        
        <div>
          <h2 class={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 { !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start' }`}>
            {#if isExpanded || isHovered || isMobileOpen}
              Others
            {:else}
              <DotsHorizontalOutline class="size-6" />
            {/if}
          </h2>
          
          <!-- Others navigation items -->
          <ul class="flex flex-col gap-4">
            {#each additionalItems as nav, index}
              <li>
                {#if nav.children}
                  <button
                    on:click={() => handleSubmenuToggle(index, 'others')}
                    class={`menu-item group cursor-pointer { !isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start' }`}
                  >
                    <span class="menu-item-icon-size">
                      <svelte:component this={nav.icon} class="size-6" />
                    </span>
                    {#if isExpanded || isHovered || isMobileOpen}
                      <span class="menu-item-text">{nav.name}</span>
                      <span class="ml-auto w-5 h-5 transition-transform duration-200">
                        {#if openSubmenu?.type === 'others' && openSubmenu?.index === index}
                          <ChevronDownOutline class="menu-item-arrow-active" />
                        {:else}
                          <ChevronDownOutline class="menu-item-arrow-inactive" />
                        {/if}
                      </span>
                    {/if}
                  </button>
                  
                  {#if isExpanded || isHovered || isMobileOpen}
                    <div
                      class="overflow-hidden transition-all duration-300"
                      style="height: 0px;"
                    >
                      <ul class="mt-2 space-y-1 ml-9">
                        {#each nav.children as subItem}
                          <li>
                            <a
                              href={subItem.href}
                              class={`menu-dropdown-item ${isPathActive(subItem.href) ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}
                            >
                              {subItem.name}
                              <span class="flex items-center gap-1 ml-auto">
                                {#if subItem.new}
                                  <span class="ml-auto menu-dropdown-badge">
                                    new
                                  </span>
                                {/if}
                                {#if subItem.pro}
                                  <span class="ml-auto menu-dropdown-badge">
                                    pro
                                  </span>
                                {/if}
                              </span>
                            </a>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/if}
                {:else if nav.href}
                  <a
                    href={nav.href}
                    class={`menu-item group ${isPathActive(nav.href) ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400 border-l-4 border-brand-500 pl-4 -ml-1' : ''}`}
                  >
                    <span class="menu-item-icon-size">
                      <svelte:component this={nav.icon} class="size-6" />
                    </span>
                    {#if isExpanded || isHovered || isMobileOpen}
                      <span class="menu-item-text">{nav.name}</span>
                    {/if}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </nav>
    
    {#if isExpanded || isHovered || isMobileOpen}
      <div class="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]">
        <h3 class="mb-2 font-semibold text-gray-900 dark:text-white">
          #1 Tailwind CSS Dashboard
        </h3>
        <p class="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
          Leading Tailwind CSS Admin Template with 400+ UI Component and Pages.
        </p>
        <a
          href="https://tailadmin.com/pricing"
          target="_blank"
          rel="nofollow"
          class="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
        >
          Upgrade to Pro
        </a>
      </div>
    {/if}
  </div>
</div>