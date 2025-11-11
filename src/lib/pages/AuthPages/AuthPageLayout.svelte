<script lang="ts">
  import GridShape from '$lib/components/common/GridShape.svelte';
  import ThemeTogglerTwo from '$lib/components/common/ThemeTogglerTwo.svelte';
</script>

<div class="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
  <div class="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
    <slot />
    <div class="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
      <div class="relative flex items-center justify-center z-1">
        <!-- ===== Common Grid Shape Start ===== -->
        <GridShape />
        <div class="flex flex-col items-center max-w-xs">
          <a href="/" class="block mb-4">
            <img
              width="231"
              height="48"
              src="/images/logo/auth-logo.svg"
              alt="Logo"
            />
          </a>
          <p class="text-center text-gray-400 dark:text-white/60">
            Free and Open-Source Tailwind CSS Admin Dashboard Template
          </p>
        </div>
      </div>
    </div>
    <div class="fixed z-50 hidden bottom-6 right-6 sm:block">
      <ThemeTogglerTwo />
    </div>
  </div>
</div>