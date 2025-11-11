<script lang="ts">
  export let type: string = "text";
  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let value: string | number | undefined = undefined;
  export let className: string = "";
  export let min: string | undefined = undefined;
  export let max: string | undefined = undefined;
  export let step: number | undefined = undefined;
  export let disabled: boolean = false;
  export let success: boolean = false;
  export let error: boolean = false;
  export let hint: string | undefined = undefined;
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleChange(e: Event) {
    const event = e as CustomEvent & { target: HTMLInputElement };
    dispatch('change', event);
  }
  
  function handleInput(e: Event) {
    const event = e as CustomEvent & { target: HTMLInputElement };
    dispatch('input', event);
  }
  
  $: inputClasses = ` h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

  $: {
    if (disabled) {
      inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
    } else if (error) {
      inputClasses += `  border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
    } else if (success) {
      inputClasses += `  border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
    } else {
      inputClasses += ` border-gray-300 focus:border-primary-300 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-primary-800`;
    }
  }
</script>

<div class="relative">
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    value={value}
    min={min}
    max={max}
    step={step}
    disabled={disabled}
    class={inputClasses}
    on:change={handleChange}
    on:input={handleInput}
  />

  {#if hint}
    <p
      class={`mt-1.5 text-xs ${
        error
          ? "text-error-500"
          : success
          ? "text-success-500"
          : "text-gray-500"
      }`}
    >
      {hint}
    </p>
  {/if}
</div>