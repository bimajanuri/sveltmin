<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import BarChartOne from '$lib/components/charts/bar/BarChartOne.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Chart Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Chart Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Bar Chart" />
<div class="space-y-6">
  <ComponentCard title="Bar Chart 1">
    <BarChartOne />
  </ComponentCard>
</div>