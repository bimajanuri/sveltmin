<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import BasicTableOne from '$lib/components/tables/BasicTables/BasicTableOne.svelte';
</script>

<PageMeta
  title="SvelteKit Basic Tables Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Basic Tables Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Basic Tables" />
<div class="space-y-6">
  <ComponentCard title="Basic Table 1">
    <BasicTableOne />
  </ComponentCard>
</div>