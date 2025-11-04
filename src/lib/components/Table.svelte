<script lang="ts">
  import { ChevronDownOutline, ChevronUpOutline, ArrowsRepeatOutline } from 'flowbite-svelte-icons';
  
  export let title = "Data Table";
  export let columns = [];
  export let data = [];
  export let sortable = false;
  
  let sortColumn = '';
  let sortDirection: 'asc' | 'desc' | null = null;
  
  function handleSort(columnKey: string) {
    if (!sortable) return;
    
    if (sortColumn === columnKey) {
      if (sortDirection === 'asc') {
        sortDirection = 'desc';
      } else if (sortDirection === 'desc') {
        sortDirection = null;
        sortColumn = '';
      } else {
        sortDirection = 'asc';
      }
    } else {
      sortColumn = columnKey;
      sortDirection = 'asc';
    }
  }
  
  function getSortedData() {
    if (!sortColumn || !sortDirection) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  
  function getSortIcon(columnKey: string) {
    if (sortColumn !== columnKey) {
      return ArrowsRepeatOutline;
    }
    
    return sortDirection === 'asc' ? ChevronUpOutline : ChevronDownOutline;
  }
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
  
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-800">
        <tr>
          {#each columns as column}
            <th 
              scope="col" 
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
              class:cursor-pointer={sortable}
              on:click={() => handleSort(column.key)}
            >
              <div class="flex items-center">
                <span>{column.label}</span>
                {#if sortable}
                  <svelte:component 
                    this={getSortIcon(column.key)} 
                    class="ml-1 size-4 text-gray-500 dark:text-gray-400" 
                  />
                {/if}
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
        {#each getSortedData() as row, i}
          <tr class={i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
            {#each columns as column}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row[column.key]}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <div class="flex items-center justify-between mt-6">
    <div class="text-sm text-gray-500 dark:text-gray-400">
      Showing 1 to {Math.min(10, data.length)} of {data.length} entries
    </div>
    <div class="flex gap-2">
      <button class="px-3 py-1 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
        Previous
      </button>
      <button class="px-3 py-1 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
        Next
      </button>
    </div>
  </div>
</div>