<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let MonthlyTarget;
  
  onMount(async () => {
    if (browser) {
      MonthlyTarget = (await import('$lib/components/ecommerce/MonthlyTarget.svelte')).default;
    }
  });
</script>

{#if browser && MonthlyTarget}
  <svelte:component this={MonthlyTarget} />
{/if}