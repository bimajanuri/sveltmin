<script lang="ts">
  export let forId: string | undefined = undefined;
  export let className: string = '';
</script>

<label
  for={forId}
  class={`mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 ${className}`}
>
  <slot></slot>
</label>