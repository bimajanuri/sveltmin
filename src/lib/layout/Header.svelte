<script lang="ts">
  import { isSidebarOpen } from '$lib/stores';
  import ThemeToggleButton from '$lib/components/common/ThemeToggleButton.svelte';
  import NotificationDropdown from '$lib/components/header/NotificationDropdown.svelte';
  import UserDropdown from '$lib/components/header/UserDropdown.svelte';
  
  let isApplicationMenuOpen = false;
  let isSearchFocused = false;
  
  function handleToggle() {
    isSidebarOpen.update(n => !n);
  }
  
  function toggleApplicationMenu() {
    isApplicationMenuOpen = !isApplicationMenuOpen;
  }
  
  function handleSearchFocus() {
    isSearchFocused = true;
  }
  
  function handleSearchBlur() {
    isSearchFocused = false;
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
        {#if $isSidebarOpen}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
              fill="currentColor"
            />
          </svg>
        {:else}
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
              fill="currentColor"
            />
          </svg>
        {/if}
      </button>

      <a href="/" class="lg:hidden">
        <img
          class="dark:hidden"
          src="/images/logo/logo.svg"
          alt="Logo"
        />
        <img
          class="hidden dark:block"
          src="/images/logo/logo-dark.svg"
          alt="Logo"
        />
      </a>

      <button
        on:click={toggleApplicationMenu}
        class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
        aria-label="Toggle application menu"
      >
        <svg
          class="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5.25H21C21.1989 5.25 21.3897 5.17098 21.5303 5.03033C21.671 4.88968 21.75 4.69891 21.75 4.5C21.75 4.30109 21.671 4.11032 21.5303 3.96967C21.3897 3.82902 21.1989 3.75 21 3.75H3C2.80109 3.75 2.61032 3.82902 2.46967 3.96967C2.32902 4.11032 2.25 4.30109 2.25 4.5C2.25 4.69891 2.32902 4.88968 2.46967 5.03033C2.61032 5.17098 2.80109 5.25 3 5.25ZM3 12H21C21.1989 12 21.3897 11.921 21.5303 11.7803C21.671 11.6397 21.75 11.4489 21.75 11.25C21.75 11.0511 21.671 10.8603 21.5303 10.7197C21.3897 10.579 21.1989 10.5 21 10.5H3C2.80109 10.5 2.61032 10.579 2.46967 10.7197C2.32902 10.8603 2.25 11.0511 2.25 11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12ZM3 18.75H21C21.1989 18.75 21.3897 18.671 21.5303 18.5303C21.671 18.3897 21.75 18.1989 21.75 18C21.75 17.8011 21.671 17.6103 21.5303 17.4697C21.3897 17.329 21.1989 17.25 21 17.25H3C2.80109 17.25 2.61032 17.329 2.46967 17.4697C2.32902 17.6103 2.25 17.8011 2.25 18C2.25 18.1989 2.32902 18.3897 2.46967 18.5303C2.61032 18.671 2.80109 18.75 3 18.75Z"
            fill=""
          />
        </svg>
      </button>

      <div class="hidden lg:block">
        <form>
          <div class="relative">
            <span class="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
              <svg
                class="fill-gray-500 dark:fill-gray-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                  fill=""
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search or type command..."
              class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
              on:focus={handleSearchFocus}
              on:blur={handleSearchBlur}
            />

            <button class="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
              <span> ⌘ </span>
              <span> K </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class={`${
        isApplicationMenuOpen ? "flex" : "hidden"
      } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
    >
      <div class="flex items-center gap-2 2xsm:gap-3">
        <ThemeToggleButton />
        <NotificationDropdown />
      </div>
      <UserDropdown />
    </div>
  </div>
</header>