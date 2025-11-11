<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import ApexCharts from 'apexcharts';
  import Dropdown from '$lib/components/ui/dropdown/Dropdown.svelte';
  import DropdownItem from '$lib/components/ui/dropdown/DropdownItem.svelte';
  import MoreDotIcon from '$lib/icons/MoreDotIcon.svelte';

  let chart: ApexCharts;
  let chartRef: HTMLDivElement;
  let isOpen = false;

  const series = [75.55];
  const options = {
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "#E4E7EC",
          strokeWidth: "100%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "#1D2939",
            formatter: function (val: number) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#465FFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Target"],
  };

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }

  onMount(async () => {
    if (chartRef) {
      chart = new ApexCharts(chartRef, { ...options, series });
      await chart.render();
    }
  });

  onDestroy(() => {
    if (chart) {
      chart.destroy();
    }
  });
</script>

<div class="col-span-12 rounded-xl bg-white p-6 shadow-theme-xs dark:bg-gray-dark xl:col-span-5">
  <div class="mb-6 flex items-center justify-between">
    <h2 class="text-lg font-bold text-gray-900 dark:text-white">
      Monthly Target
    </h2>
    <div class="relative">
      <button
        class="dropdown-toggle flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-dark-2 dark:hover:text-white"
        on:click={toggleDropdown}
      >
        <MoreDotIcon />
      </button>
      <Dropdown {isOpen} on:close={closeDropdown}>
        <DropdownItem href="#" text="View" />
        <DropdownItem href="#" text="Edit" />
        <DropdownItem href="#" text="Delete" />
      </Dropdown>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div bind:this={chartRef}></div>
  </div>
  <div class="mt-8 grid grid-cols-2 gap-4">
    <div class="rounded-lg bg-gray-50 p-5 dark:bg-gray-dark-2">
      <h3 class="mb-1 text-base font-bold text-gray-900 dark:text-white">
        $1,234
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Spent
      </p>
    </div>
    <div class="rounded-lg bg-gray-50 p-5 dark:bg-gray-dark-2">
      <h3 class="mb-1 text-base font-bold text-gray-900 dark:text-white">
        $2,345
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Saved
      </p>
    </div>
  </div>
</div>