<script lang="ts">
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  export let pageTitle: string;
</script>

<div class="flex flex-wrap items-center justify-between gap-3 mb-6">
  <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">
    {pageTitle}
  </h2>
  <nav>
    <ol class="flex items-center gap-1.5">
      <li>
        <a class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" href="/">
          Home
          <ArrowRightOutline class="stroke-current w-4 h-4" />
        </a>
      </li>
      <li class="text-sm text-gray-800 dark:text-white/90">
        {pageTitle}
      </li>
    </ol>
  </nav>
</div>