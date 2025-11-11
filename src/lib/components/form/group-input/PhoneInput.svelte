<script lang="ts">
  export let countries: { code: string; label: string }[] = [];
  export let placeholder: string = "+1 (555) 000-0000";
  export let selectPosition: "start" | "end" = "start";
  
  // Create event dispatcher
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  let selectedCountry = "US";
  let phoneNumber = "+1";
  
  // Create country codes map
  let countryCodes: Record<string, string> = {};
  
  // Initialize country codes
  $: countryCodes = countries.reduce(
    (acc, { code, label }) => ({ ...acc, [code]: label }),
    {}
  );
  
  function handleCountryChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const newCountry = target.value;
    selectedCountry = newCountry;
    phoneNumber = countryCodes[newCountry];
    dispatch('change', phoneNumber);
  }
  
  function handlePhoneNumberChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const newPhoneNumber = target.value;
    phoneNumber = newPhoneNumber;
    dispatch('change', newPhoneNumber);
  }
</script>

<div class="relative flex">
  <!-- Dropdown position: Start -->
  {#if selectPosition === "start"}
    <div class="absolute">
      <select
        bind:value={selectedCountry}
        on:change={handleCountryChange}
        class="appearance-none bg-none rounded-l-lg border-0 border-r border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
      >
        {#each countries as country}
          <option
            value={country.code}
            class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {country.code}
          </option>
        {/each}
      </select>
      <div class="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none bg-none right-3 dark:text-gray-400">
        <svg
          class="stroke-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  {/if}

  <!-- Input field -->
  <input
    type="tel"
    bind:value={phoneNumber}
    on:input={handlePhoneNumberChange}
    placeholder={placeholder}
    class={`dark:bg-dark-900 h-11 w-full ${
      selectPosition === "start" ? "pl-[84px]" : "pr-[84px]"
    } rounded-lg border border-gray-300 bg-transparent py-3 px-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`}
  />

  <!-- Dropdown position: End -->
  {#if selectPosition === "end"}
    <div class="absolute right-0">
      <select
        bind:value={selectedCountry}
        on:change={handleCountryChange}
        class="appearance-none bg-none rounded-r-lg border-0 border-l border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400"
      >
        {#each countries as country}
          <option
            value={country.code}
            class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {country.code}
          </option>
        {/each}
      </select>
      <div class="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none right-3 dark:text-gray-400">
        <svg
          class="stroke-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  {/if}
</div>