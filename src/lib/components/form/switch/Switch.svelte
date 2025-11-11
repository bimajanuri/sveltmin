<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export const color: string = "default";
  export let isChecked: boolean = false;
  export const name: string = "";
  export const id: string = "";
  export let onChange: (isChecked: boolean) => void = () => {};
  export let disabled: boolean = false;
  export let label: string = "";

  function handleChange() {
    if (!disabled) {
      isChecked = !isChecked;
      onChange(isChecked);
      dispatch('change', { isChecked });
    }
  }
</script>

<div class="flex items-center">
  <label
    class={`flex cursor-pointer select-none items-center gap-3 text-sm font-medium ${
      disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-400"
    }`}
  >
    <div class="relative">
      <input
        type="checkbox"
        {id}
        {name}
        class="sr-only"
        {disabled}
        bind:checked={isChecked}
        on:change={handleChange}
      />
      <div
        class={`block h-6 w-12 rounded-full transition ${
          isChecked
            ? color === "primary"
              ? "bg-blue-500"
              : color === "success"
              ? "bg-green-500"
              : color === "danger"
              ? "bg-red-500"
              : "bg-gray-500"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        class={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition-transform ${
          isChecked ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
    {label}
  </label>
</div>