<script lang="ts">
  import { writable } from 'svelte/store';
  import Dropdown from '$lib/components/ui/dropdown/Dropdown.svelte';
  import DropdownItem from '$lib/components/ui/dropdown/DropdownItem.svelte';
  import CountryMap from './CountryMap.svelte';
  
  let isOpen = writable(false);
  
  function toggleDropdown() {
    isOpen.update(n => !n);
  }

  function closeDropdown() {
    isOpen.set(false);
  }
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
  <div class="flex justify-between">
    <div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
        Customers Demographic
      </h3>
      <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
        Number of customer based on country
      </p>
    </div>
    <div class="relative inline-block">
      <button class="dropdown-toggle" on:click={toggleDropdown} aria-label="Toggle dropdown">
        <svg class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      </button>
      <Dropdown
        bind:isOpen
        onClose={closeDropdown}
        class="w-40 p-2"
      >
        <DropdownItem
          onItemClick={closeDropdown}
          class="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          View More
        </DropdownItem>
        <DropdownItem
          onItemClick={closeDropdown}
          class="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          Delete
        </DropdownItem>
      </Dropdown>
    </div>
  </div>
  <div class="px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl dark:border-gray-800 sm:px-6">
    <div
      id="mapOne"
      class="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
    >
      <CountryMap />
    </div>
  </div>

  <div class="space-y-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="items-center w-full rounded-full max-w-8">
          <img src="/images/country/country-01.svg" alt="usa" />
        </div>
        <div>
          <p class="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
            USA
          </p>
          <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
            2,379 Customers
          </span>
        </div>
      </div>

      <div class="flex w-full max-w-[140px] items-center gap-3">
        <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
          <div class="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
        </div>
        <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
          79%
        </p>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="items-center w-full rounded-full max-w-8">
          <img src="/images/country/country-02.svg" alt="france" />
        </div>
        <div>
          <p class="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
            France
          </p>
          <span class="block text-gray-500 text-theme-xs dark:text-gray-400">
            589 Customers
          </span>
        </div>
      </div>

      <div class="flex w-full max-w-[140px] items-center gap-3">
        <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
          <div class="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
        </div>
        <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
          23%
        </p>
      </div>
    </div>
  </div>
</div>