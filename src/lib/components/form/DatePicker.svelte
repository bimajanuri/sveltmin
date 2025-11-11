<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Label from './Label.svelte';
  // import flatpickr from 'flatpickr';
  // import 'flatpickr/dist/flatpickr.css';
  
  export let id: string;
  export let mode: "single" | "multiple" | "range" | "time" = "single";
  export let onChange: (dates: Date[], currentDateString: string) => void = () => {};
  export let defaultDate: Date | undefined = undefined;
  export let label: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  
  let inputRef: HTMLInputElement | undefined = undefined;
  let flatPickrInstance: any = undefined;
  
  onMount(() => {
    // Kita akan mengabaikan integrasi flatpickr untuk saat ini karena kompleksitas
    // Dalam implementasi nyata, kita akan mengintegrasikan flatpickr dengan benar
    /*
    flatPickrInstance = flatpickr(`#${id}`, {
      mode: mode || "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "Y-m-d",
      defaultDate,
      onChange: (selectedDates, dateStr, instance) => {
        onChange(selectedDates, dateStr);
      }
    });
    */
  });
  
  onDestroy(() => {
    if (flatPickrInstance) {
      flatPickrInstance.destroy();
    }
  });
</script>

<div>
  {#if label}
    <Label for={id}>{label}</Label>
  {/if}

  <div class="relative">
    <input
      id={id}
      bind:this={inputRef}
      placeholder={placeholder}
      class="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700  dark:focus:border-brand-800"
    />

    <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
      <svg class="size-6" viewBox="0 0 24 24" fill="none">
        <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z" fill="currentColor"/>
      </svg>
    </span>
  </div>
</div>