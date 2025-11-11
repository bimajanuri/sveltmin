<script lang="ts">
  export let label: string | undefined = undefined;
  export let checked: boolean = false;
  export let className: string = "";
  export let id: string | undefined = undefined;
  export let disabled: boolean = false;
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleChange() {
    if (!disabled) {
      checked = !checked;
      dispatch('change', checked);
    }
  }
</script>

<label
  class={`flex items-center space-x-3 group cursor-pointer ${
    disabled ? "cursor-not-allowed opacity-60" : ""
  }`}
>
  <div class="relative w-5 h-5">
    <input
      id={id}
      type="checkbox"
      class={`w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
      ${className}`}
      checked={checked}
      on:change={handleChange}
      disabled={disabled}
    />
    {#if checked}
      <svg
        class="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
          stroke="white"
          strokeWidth="1.94437"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    {/if}
    {#if disabled && checked}
      <svg
        class="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
          stroke="#E4E7EC"
          strokeWidth="2.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    {/if}
  </div>
  {#if label}
    <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
      {label}
    </span>
  {/if}
</label>