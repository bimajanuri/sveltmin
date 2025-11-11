<script lang="ts">
  import Dropdown from '$lib/components/ui/dropdown/Dropdown.svelte';
  import DropdownItem from '$lib/components/ui/dropdown/DropdownItem.svelte';
  import { writable } from 'svelte/store';

  let isOpen = false;
  let notificationCount = writable(3);

  function handleClick() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div class="relative">
  <button
    class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
    on:click={handleClick}
  >
    <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    <span class="absolute -top-0.5 -right-0.5 z-10 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center font-medium">
      {$notificationCount}
    </span>
  </button>
  <Dropdown {isOpen} on:close={closeDropdown}>
    <div class="w-80 rounded-xl bg-white shadow-lg dark:bg-gray-dark">
      <div class="border-b border-gray-200 px-6 py-5 dark:border-gray-dark-2">
        <h5 class="text-lg font-semibold text-gray-900 dark:text-white">
          Notification
        </h5>
      </div>
      <div class="max-h-96 overflow-y-auto">
        <DropdownItem href="#" text="Your order is placed" subtext="A dummy text of the printing and typesetting industry." time="2 min ago" />
        <DropdownItem href="#" text="Delivery processing" subtext="A dummy text of the printing and typesetting industry." time="5 mins ago" />
        <DropdownItem href="#" text="Order shipped successfully" subtext="A dummy text of the printing and typesetting industry." time="10 mins ago" />
      </div>
      <div class="border-t border-gray-200 px-6 py-3 dark:border-gray-dark-2">
        <button
          on:click={toggleDropdown}
          class="text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          View All
        </button>
      </div>
    </div>
  </Dropdown>
</div>