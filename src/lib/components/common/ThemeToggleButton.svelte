<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores';
</script>

<button
  on:click={toggleTheme}
  class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
  aria-label="Toggle theme"
>
  <svg
    class="absolute transition-all duration-300 ease-out opacity-100 dark:opacity-0 dark:scale-50"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.893 15.95a.75.75 0 01.75.75c0 2.28-1.87 4.125-4.125 4.125a.75.75 0 010-1.5c1.447 0 2.625-1.165 2.625-2.625a.75.75 0 01.75-.75zM12 18.75a.75.75 0 01.75.75c0 2.28-1.87 4.125-4.125 4.125a.75.75 0 010-1.5c1.447 0 2.625-1.165 2.625-2.625a.75.75 0 01.75-.75zM19.5 3.75a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V3.75zM6.75 6.75a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H7.5a.75.75 0 01-.75-.75zM18.75 17.25a.75.75 0 000-1.5h-2.25a.75.75 0 000 1.5h2.25z"
      fill="currentColor"
    />
  </svg>
  <svg
    class="absolute transition-all duration-300 ease-out scale-50 opacity-0 dark:opacity-100 dark:scale-100"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
      fill="currentColor"
    />
  </svg>
</button>