<script lang="ts">
  import { isSidebarOpen } from '$lib/stores';
  import Header from '$lib/layout/Header.svelte';
  import Sidebar from '$lib/layout/Sidebar.svelte';
  import Backdrop from '$lib/layout/Backdrop.svelte';
</script>

<div class="min-h-screen xl:flex">
  <div>
    <Sidebar />
    <Backdrop />
  </div>
  <div
    class={`flex-1 transition-all duration-300 ease-in-out ${
      $isSidebarOpen ? "lg:ml-[290px]" : "lg:ml-[90px]"
    }`}
  >
    <Header />
    <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
      <slot />
    </div>
  </div>
</div>