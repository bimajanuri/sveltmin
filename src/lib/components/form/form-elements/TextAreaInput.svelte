<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import TextArea from '../input/TextArea.svelte';
  import Label from '../Label.svelte';

  let message = "";
  let messageTwo = "";
</script>

<ComponentCard title="Textarea input field">
  <div class="space-y-6">
    <!-- Default TextArea -->
    <div>
      <Label>Description</Label>
      <TextArea
        bind:value={message}
        on:input={(e) => message = e.target.value}
        rows={6}
      />
    </div>

    <!-- Disabled TextArea -->
    <div>
      <Label>Description</Label>
      <TextArea rows={6} disabled />
    </div>

    <!-- Error TextArea -->
    <div>
      <Label>Description</Label>
      <TextArea
        rows={6}
        bind:value={messageTwo}
        error
        on:input={(e) => messageTwo = e.target.value}
        hint="Please enter a valid message."
      />
    </div>
  </div>
</ComponentCard>