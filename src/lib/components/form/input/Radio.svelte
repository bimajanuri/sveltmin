<script lang="ts">
  export let id: string;
  export let name: string;
  export let value: string;
  export let checked: boolean = false;
  export let label: string;
  export let className: string = "";
  export let disabled: boolean = false;
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleChange() {
    if (!disabled) {
      dispatch('change', value);
    }
  }
</script>

<label
  for={id}
  class={`relative flex cursor-pointer  select-none items-center gap-3 text-sm font-medium ${
    disabled
      ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
      : "text-gray-700 dark:text-gray-400"
  } ${className}`}
>
  <input
    id={id}
    name={name}
    type="radio"
    value={value}
    checked={checked}
    on:change={handleChange}
    class="sr-only"
    disabled={disabled}
  />
  <span
    class={`flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] ${
      checked
        ? "border-brand-500 bg-brand-500"
        : "bg-transparent border-gray-300 dark:border-gray-700"
    } ${
      disabled
        ? "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700"
        : ""
    }`}
  >
    <span
      class={`h-2 w-2 rounded-full bg-white ${
        checked ? "block" : "hidden"
      }`}
    ></span>
  </span>
  {label}
</label>