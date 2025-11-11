<script lang="ts">
  export let id: string;
  export let name: string;
  export let value: string;
  export let checked: boolean = false;
  export let label: string;
  export let className: string = "";
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleChange() {
    dispatch('change', value);
  }
</script>

<label
  for={id}
  class={`flex cursor-pointer select-none items-center text-sm text-gray-500 dark:text-gray-400 ${className}`}
>
  <span class="relative">
    <!-- Hidden Input -->
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      on:change={handleChange}
      class="sr-only"
    />
    <!-- Styled Radio Circle -->
    <span
      class={`mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${
        checked
          ? "border-brand-500 bg-brand-500"
          : "bg-transparent border-gray-300 dark:border-gray-700"
      }`}
    >
      <!-- Inner Dot -->
      <span
        class={`h-1.5 w-1.5 rounded-full ${
          checked ? "bg-white" : "bg-white dark:bg-[#1e2636]"
        }`}
      ></span>
    </span>
  </span>
  {label}
</label>