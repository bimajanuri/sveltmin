<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import FourIsToThree from '$lib/components/ui/videos/FourIsToThree.svelte';
  import OneIsToOne from '$lib/components/ui/videos/OneIsToOne.svelte';
  import SixteenIsToNine from '$lib/components/ui/videos/SixteenIsToNine.svelte';
  import TwentyOneIsToNine from '$lib/components/ui/videos/TwentyOneIsToNine.svelte';
</script>

<PageMeta
  title="SvelteKit Videos Tabs | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Videos page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Videos" />
<div class="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
  <div class="space-y-5 sm:space-y-6">
    <ComponentCard title="Video Ratio 16:9">
      <SixteenIsToNine />
    </ComponentCard>
    <ComponentCard title="Video Ratio 4:3">
      <FourIsToThree />
    </ComponentCard>
  </div>
  <div class="space-y-5 sm:space-y-6">
    <ComponentCard title="Video Ratio 21:9">
      <TwentyOneIsToNine />
    </ComponentCard>
    <ComponentCard title="Video Ratio 1:1">
      <OneIsToOne />
    </ComponentCard>
  </div>
</div>