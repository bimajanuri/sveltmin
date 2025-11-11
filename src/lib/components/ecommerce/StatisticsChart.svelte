<script lang="ts">
  import { onMount } from 'svelte';
  import ApexCharts from 'apexcharts';
  
  let chartElement: HTMLElement;
  let chart: ApexCharts | undefined;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const options = {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return "$ " + val + " thousands";
            }
          }
        }
      };

      chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  });

  import { afterUpdate } from 'svelte';

  afterUpdate(() => {
    if (chart && typeof window !== 'undefined') {
      chart.updateOptions({
        // Update chart options if needed
      });
    }
  });
</script>

<div>
  <div class="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-dark">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        Statistics
      </h2>
      <div class="flex flex-wrap gap-2">
        <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
          Today
        </button>
        <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
          Weekly
        </button>
        <button class="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
          Monthly
        </button>
      </div>
    </div>
    <div>
      <div bind:this={chartElement}></div>
    </div>
  </div>
</div>