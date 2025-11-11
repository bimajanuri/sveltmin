<script lang="ts">
  export let children: any;
  export let isHeader: boolean = false;
  export let className: string = "";
</script>

<svelte:element this={isHeader ? 'th' : 'td'} class={className}>
  {@render children()}
</svelte:element>