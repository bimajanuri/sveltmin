<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  export let isOpen: boolean = false;
  export let onClose: () => void = () => {};
  export let className: string = "";

  let dropdownRef: HTMLDivElement;
  const dispatch = createEventDispatcher();

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef &&
        !dropdownRef.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".dropdown-toggle")
      ) {
        onClose();
        dispatch('close');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
</script>

{#if isOpen}
  <div
    bind:this={dropdownRef}
    class={`absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${className}`}
  >
    <slot />
  </div>
{/if}