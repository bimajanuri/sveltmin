<script lang="ts">
  import { onMount } from 'svelte';
  import ApexCharts from 'apexcharts';
  
  let chartElement: HTMLElement;
  let chart: ApexCharts | undefined;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const options = {
        chart: {
          type: 'line',
          height: 350,
          toolbar: {
            show: false
          }
        },
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2024-01-01T00:00:00.000Z",
            "2024-02-01T00:00:00.000Z", 
            "2024-03-01T00:00:00.000Z",
            "2024-04-01T00:00:00.000Z",
            "2024-05-01T00:00:00.000Z",
            "2024-06-01T00:00:00.000Z",
            "2024-07-01T00:00:00.000Z",
            "2024-08-01T00:00:00.000Z",
            "2024-09-01T00:00:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      };

      chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  });
</script>

<div class="col-span-12 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-dark xl:col-span-6">
  <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
      Line Chart
    </h2>
    <div class="relative inline-block">
      <button class="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
        <span>Monthly</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
  <div>
    <div bind:this={chartElement}></div>
  </div>
</div>
