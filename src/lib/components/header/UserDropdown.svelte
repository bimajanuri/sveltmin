<script lang="ts">
  import DropdownItem from '$lib/components/ui/dropdown/DropdownItem.svelte';
  import Dropdown from '$lib/components/ui/dropdown/Dropdown.svelte';
  import { writable } from 'svelte/store';

  let isOpen = false;
  let user = writable({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/images/user/user-01.png"
  });

  function handleClick() {
    isOpen = !isOpen;
  }

  function closeDropdown() {
    isOpen = false;
  }
</script>

<div class="relative">
  <button
    class="flex items-center gap-3 lg:gap-4"
    on:click={handleClick}
  >
    <div class="h-10 w-10 rounded-full">
      <img
        src={$user.avatar}
        alt="User"
        class="h-full w-full rounded-full object-cover"
      />
    </div>
    <div class="hidden sm:block">
      <p class="text-sm font-medium text-gray-900 dark:text-white">
        {$user.name}
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">
        Administrator
      </p>
    </div>
  </button>
  <Dropdown {isOpen} on:close={closeDropdown}>
    <div class="w-64 rounded-xl bg-white shadow-lg dark:bg-gray-dark">
      <div class="border-b border-gray-200 px-6 py-5 dark:border-gray-dark-2">
        <h5 class="text-lg font-semibold text-gray-900 dark:text-white">
          User Profile
        </h5>
      </div>
      <div class="py-2">
        <DropdownItem href="#" text="My Profile" />
        <DropdownItem href="#" text="My Contacts" />
        <DropdownItem href="#" text="Settings" />
        <DropdownItem href="/auth/signin" text="Sign Out" />
      </div>
    </div>
  </Dropdown>
</div>