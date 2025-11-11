<script lang="ts">
  export let children: any;
  export let className: string = "";
</script>

<tr class={className}>
  {@render children()}
</tr>