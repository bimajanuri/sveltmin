<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let isOpen: boolean = false;
  export let onClose: () => void = () => {};
  export const title: string = '';
  export const size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  export let isFullscreen: boolean = false;
  export const hideCloseButton: boolean = false;
  export let className: string = '';
  export const closeOnBackdropClick: boolean = true;

  let modalRef: HTMLElement;
  let contentClasses = '';

  function handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (modalRef && !modalRef.contains(target)) {
      handleClose();
    }
  }

  function handleClose() {
    onClose();
    dispatch('close');
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  $: {
    contentClasses = isFullscreen
      ? "w-full h-full"
      : "relative w-full rounded-3xl bg-white dark:bg-gray-900";
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999">
    {#if !isFullscreen}
      <button
        class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]"
        on:click={onClose}
        on:keydown={(e) => e.key === 'Escape' && onClose()}
        aria-label="Close modal"
        tabindex="0"
      ></button>
    {/if}
    <div
      bind:this={modalRef}
      class={`${contentClasses} ${className}`}
      role="dialog"
      aria-modal="true"
      on:keydown={(e) => e.key === 'Escape' && onClose()}
      tabindex="-1"
    >
      {#if showCloseButton}
        <button
          on:click={onClose}
          class="absolute right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        </button>
      {/if}
      <div>
        {@render children()}
      </div>
    </div>
  </div>
{/if}