<script lang="ts">
  export let placeholder: string = "Enter your message";
  export let rows: number = 3;
  export let value: string = "";
  export let className: string = "";
  export let disabled: boolean = false;
  export let error: boolean = false;
  export let hint: string = "";
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    value = target.value;
    dispatch('change', value);
  }
  
  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    value = target.value;
    dispatch('input', value);
  }
  
  let textareaClasses = "";
  
  $: {
    textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden ${className} `;

    if (disabled) {
      textareaClasses += ` bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed opacity40 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
    } else if (error) {
      textareaClasses += ` bg-transparent  border-gray-300 focus:border-error-300 focus:ring-3 focus:ring-error-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800`;
    } else {
      textareaClasses += ` bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
    }
  }
</script>

<div class="relative">
  <textarea
    placeholder={placeholder}
    rows={rows}
    disabled={disabled}
    class={textareaClasses}
    on:input={handleInput}
    on:change={handleChange}
    bind:value={value}
  ></textarea>

  {#if hint}
    <p
      class={`mt-1.5 text-xs ${
        error
          ? "text-error-500"
          : "text-gray-500"
      }`}
    >
      {hint}
    </p>
  {/if}
</div>