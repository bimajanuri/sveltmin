<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Radio from '../input/Radio.svelte';
  
  let selectedValue = "option2";

  function handleRadioChange(value: string) {
    selectedValue = value;
  }
</script>

<ComponentCard title="Radio Buttons">
  <div class="flex flex-wrap items-center gap-8">
    <Radio
      id="radio1"
      name="group1"
      value="option1"
      checked={selectedValue === "option1"}
      on:change={handleRadioChange}
      label="Default"
    />
    <Radio
      id="radio2"
      name="group1"
      value="option2"
      checked={selectedValue === "option2"}
      on:change={handleRadioChange}
      label="Selected"
    />
    <Radio
      id="radio3"
      name="group1"
      value="option3"
      checked={selectedValue === "option3"}
      on:change={handleRadioChange}
      label="Disabled"
      disabled={true}
    />
  </div>
</ComponentCard>