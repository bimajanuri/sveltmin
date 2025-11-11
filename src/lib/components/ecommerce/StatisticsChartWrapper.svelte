<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let StatisticsChart;
  
  onMount(async () => {
    if (browser) {
      StatisticsChart = (await import('$lib/components/ecommerce/StatisticsChart.svelte')).default;
    }
  });
</script>

{#if browser && StatisticsChart}
  <svelte:component this={StatisticsChart} />
{/if}