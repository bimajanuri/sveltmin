<script lang="ts">
  export let children: any;
  export let className: string = "";
</script>

<tbody class={className}>
  {@render children()}
</tbody>