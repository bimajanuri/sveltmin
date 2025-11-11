<script lang="ts">
  import EcommerceMetrics from '$lib/components/ecommerce/EcommerceMetrics.svelte';
  import MonthlySalesChartWrapper from '$lib/components/ecommerce/MonthlySalesChartWrapper.svelte';
  import StatisticsChartWrapper from '$lib/components/ecommerce/StatisticsChartWrapper.svelte';
  import MonthlyTargetWrapper from '$lib/components/ecommerce/MonthlyTargetWrapper.svelte';
  import RecentOrdersWrapper from '$lib/components/ecommerce/RecentOrdersWrapper.svelte';
  import DemographicCard from '$lib/components/ecommerce/DemographicCard.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Ecommerce Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Ecommerce Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>

<!-- Breadcrumb -->
<div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
	<h2 class="text-title-md2 font-bold text-black dark:text-white">
		Dashboard
	</h2>

	<nav>
		<ol class="flex items-center gap-2">
			<li>
				<a class="font-medium" href="/">Dashboard /</a>
			</li>
			<li class="font-medium text-primary">Home</li>
		</ol>
	</nav>
</div>
<!-- Breadcrumb -->

<div class="grid grid-cols-12 gap-4 md:gap-6">
  <div class="col-span-12 space-y-6 xl:col-span-7">
    <EcommerceMetrics />
    <MonthlySalesChartWrapper />
  </div>

  <div class="col-span-12 xl:col-span-5">
    <MonthlyTargetWrapper />
  </div>

  <div class="col-span-12">
    <StatisticsChartWrapper />
  </div>

  <div class="col-span-12 xl:col-span-5">
    <DemographicCard />
  </div>

  <div class="col-span-12 xl:col-span-7">
    <RecentOrdersWrapper />
  </div>
</div>