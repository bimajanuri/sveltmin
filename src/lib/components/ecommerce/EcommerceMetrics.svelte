<script lang="ts">
  import Badge from '$lib/components/ui/badge/Badge.svelte';
  
  // Kita tidak bisa menggunakan ikon dari React, jadi kita akan menggunakan SVG inline
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
  <!-- Metric Item Start -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
      <svg class="text-gray-800 size-6 dark:text-white/90" viewBox="0 0 24 24" fill="none">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="flex items-end justify-between mt-5">
      <div>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Customers
        </span>
        <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
          3,782
        </h4>
      </div>
      <Badge color="success">
        <svg class="size-4" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        11.01%
      </Badge>
    </div>
  </div>
  <!-- Metric Item End -->

  <!-- Metric Item Start -->
  <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
    <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
      <svg class="text-gray-800 size-6 dark:text-white/90" viewBox="0 0 24 24" fill="none">
        <path d="M4 6H20V18H4V6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 6V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 10V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 10V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 10V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="flex items-end justify-between mt-5">
      <div>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Orders
        </span>
        <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
          5,359
        </h4>
      </div>

      <Badge color="error">
        <svg class="size-4" viewBox="0 0 24 24" fill="none">
          <path d="M17 7L7 17M7 17H16M7 17V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        9.05%
      </Badge>
    </div>
  </div>
  <!-- Metric Item End -->
</div>