<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  interface Option {
    value: string;
    label: string;
  }
  
  export let options: Option[] = [];
  export let placeholder: string = "Select an option";
  export let className: string = "";
  export let defaultValue: string = "";
  
  let selectedValue = defaultValue;
  const dispatch = createEventDispatcher();
  
  function handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    selectedValue = value;
    dispatch('change', value);
  }
</script>

<select
  class={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
    selectedValue
      ? "text-gray-800 dark:text-white/90"
      : "text-gray-400 dark:text-gray-400"
  } ${className}`}
  bind:value={selectedValue}
  on:change={handleChange}
>
  <!-- Placeholder option -->
  <option
    value=""
    disabled
    class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
  >
    {placeholder}
  </option>
  <!-- Map over options -->
  {#each options as option}
    <option
      value={option.value}
      class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
    >
      {option.label}
    </option>
  {/each}
</select>