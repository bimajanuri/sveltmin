<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Checkbox from '../input/Checkbox.svelte';
  
  let isChecked = false;
  let isCheckedTwo = true;
  let isCheckedDisabled = false;
</script>

<ComponentCard title="Checkbox">
  <div class="flex items-center gap-4">
    <div class="flex items-center gap-3">
      <Checkbox bind:checked={isChecked} />
      <span class="block text-sm font-medium text-gray-700 dark:text-gray-400">
        Default
      </span>
    </div>
    <div class="flex items-center gap-3">
      <Checkbox
        bind:checked={isCheckedTwo}
        label="Checked"
      />
    </div>
    <div class="flex items-center gap-3">
      <Checkbox
        bind:checked={isCheckedDisabled}
        disabled
        label="Disabled"
      />
    </div>
  </div>
</ComponentCard>