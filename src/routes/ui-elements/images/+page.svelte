<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ResponsiveImage from '$lib/components/ui/images/ResponsiveImage.svelte';
  import TwoColumnImageGrid from '$lib/components/ui/images/TwoColumnImageGrid.svelte';
  import ThreeColumnImageGrid from '$lib/components/ui/images/ThreeColumnImageGrid.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Images Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Images page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Images" />
<div class="space-y-5 sm:space-y-6">
  <ComponentCard title="Responsive image">
    <ResponsiveImage />
  </ComponentCard>
  <ComponentCard title="Image in 2 Grid">
    <TwoColumnImageGrid />
  </ComponentCard>
  <ComponentCard title="Image in 3 Grid">
    <ThreeColumnImageGrid />
  </ComponentCard>
</div>