<script lang="ts">
  import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  <ExclamationCircleSolid class="size-16 text-red-500 mb-4" />
  
  <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">404</h1>
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
  
  <p class="text-gray-500 dark:text-gray-400 mb-6 text-center">
    Sorry, the page you are looking for could not be found.
  </p>
  
  <a 
    href="/" 
    class="rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-600"
  >
    Go Back Home
  </a>
</div>