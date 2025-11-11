<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let tag: "a" | "button" = "button";
  export let href: string = "";
  export let onClick: () => void = () => {};
  export let onItemClick: () => void = () => {};
  export let baseClassName: string = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  export let className: string = "";
  export let children: any;

  const combinedClasses = `${baseClassName} ${className}`.trim();
  const dispatch = createEventDispatcher();

  function handleClick(event: Event) {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
    dispatch('click');
  }
</script>

{#if tag === "a" && href}
  <a href={href} class={combinedClasses} on:click={handleClick}>
    {@render children()}
  </a>
{:else}
  <button on:click={handleClick} class={combinedClasses}>
    {@render children()}
  </button>
{/if}