<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let className: string = '';
  
  const dispatch = createEventDispatcher();
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    dispatch('submit', e);
  }
</script>

<form
  on:submit={handleSubmit}
  class={className}
>
  <slot></slot>
</form>