<script lang="ts">
  export let children: any;
  export let className: string = "";
</script>

<thead class={className}>
  {@render children()}
</thead>