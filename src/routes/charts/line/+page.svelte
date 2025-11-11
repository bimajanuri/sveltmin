<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import LineChartOne from '$lib/components/charts/line/LineChartOne.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Chart Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Chart Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Line Chart" />
<div class="space-y-6">
  <ComponentCard title="Line Chart 1">
    <LineChartOne />
  </ComponentCard>
</div>