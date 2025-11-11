<script lang="ts">
  import { isSidebarOpen } from '$lib/stores';
  
  function closeSidebar() {
    isSidebarOpen.set(false);
  }
</script>

{#if $isSidebarOpen}
  <div
    class="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
    on:click={closeSidebar}
    role="button"
    tabindex="0"
    on:keydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        closeSidebar();
      }
    }}
  ></div>
{/if}