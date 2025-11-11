<script lang="ts">
  export let children: any;
  export let isHeader: boolean = false;
  export let className: string = "";
</script>

<svelte:element this={isHeader ? 'th' : 'td'} class={className}>
  {@render children()}
</svelte:element>

<tr class={className}>
  {@render children()}
</tr>

<tbody class={className}>
  {@render children()}
</tbody>

<thead class={className}>
  {@render children()}
</thead>

<table class={`min-w-full ${className}`}>
  {@render children()}
</table>