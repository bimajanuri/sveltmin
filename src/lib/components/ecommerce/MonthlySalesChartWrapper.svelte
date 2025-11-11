<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let MonthlySalesChart;
  
  onMount(async () => {
    if (browser) {
      MonthlySalesChart = (await import('$lib/components/ecommerce/MonthlySalesChart.svelte')).default;
    }
  });
</script>

{#if browser && MonthlySalesChart}
  <svelte:component this={MonthlySalesChart} />
{/if}