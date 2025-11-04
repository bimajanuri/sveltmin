<script lang="ts">
  import { onMount } from 'svelte';
  import { ChartPieSolid } from 'flowbite-svelte-icons';
  
  export let title = "Chart";
  export let data = [
    { label: 'Jan', value: 4000 },
    { label: 'Feb', value: 3000 },
    { label: 'Mar', value: 2000 },
    { label: 'Apr', value: 2780 },
    { label: 'May', value: 1890 },
    { label: 'Jun', value: 2390 },
  ];
  
  let chartContainer: HTMLElement;
  let chartWidth = 400;
  let chartHeight = 300;
  let maxValue = Math.max(...data.map(d => d.value));
  
  onMount(() => {
    if (chartContainer) {
      chartWidth = chartContainer.clientWidth;
    }
  });
  
  function getY(value: number) {
    return chartHeight - (value / maxValue) * chartHeight;
  }
  
  function getPath() {
    if (data.length === 0) return '';
    
    let path = `M 0 ${getY(data[0].value)}`;
    for (let i = 1; i < data.length; i++) {
      path += ` L ${(i / (data.length - 1)) * chartWidth} ${getY(data[i].value)}`;
    }
    return path;
  }
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  <div class="flex items-center gap-3 mb-6">
    <ChartPieSolid class="size-8 text-gray-800 dark:text-white" />
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
  </div>
  
  <div class="w-full" bind:this={chartContainer}>
    <svg width="100%" height={chartHeight} class="overflow-visible">
      <!-- Grid lines -->
      <line x1="0" y1="0" x2={chartWidth} y2="0" stroke="#eee" stroke-width="1"/>
      <line x1="0" y1={chartHeight/2} x2={chartWidth} y2={chartHeight/2} stroke="#eee" stroke-width="1"/>
      <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#eee" stroke-width="1"/>
      
      <!-- Chart line -->
      <path 
        d={getPath()} 
        fill="none" 
        stroke="#3b82f6" 
        stroke-width="2" 
        stroke-linecap="round"
      />
      
      <!-- Data points -->
      {#each data as d, i}
        <circle 
          cx={(i / (data.length - 1)) * chartWidth} 
          cy={getY(d.value)} 
          r="4" 
          fill="#3b82f6"
        />
      {/each}
    </svg>
    
    <!-- X-axis labels -->
    <div class="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
      {#each data as d, i}
        <span>{d.label}</span>
      {/each}
    </div>
  </div>
</div>