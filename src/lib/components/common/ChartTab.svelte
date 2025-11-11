<script lang="ts">
  import type { ComponentProps } from 'svelte';

  let selected: 'optionOne' | 'optionTwo' | 'optionThree' = 'optionOne';

  function getButtonClass(option: 'optionOne' | 'optionTwo' | 'optionThree'): string {
    return selected === option
      ? 'shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800'
      : 'text-gray-500 dark:text-gray-400';
  }
</script>

<div class="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
  <button
    on:click={() => selected = 'optionOne'}
    class={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass('optionOne')}`}
  >
    Monthly
  </button>

  <button
    on:click={() => selected = 'optionTwo'}
    class={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass('optionTwo')}`}
  >
    Quarterly
  </button>

  <button
    on:click={() => selected = 'optionThree'}
    class={`px-3 py-2 font-medium w-full rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass('optionThree')}`}
  >
    Annually
  </button>
</div>