<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let RecentOrders;
  
  onMount(async () => {
    if (browser) {
      RecentOrders = (await import('$lib/components/ecommerce/RecentOrders.svelte')).default;
    }
  });
</script>

{#if browser && RecentOrders}
  <svelte:component this={RecentOrders} />
{/if}