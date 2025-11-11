<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Label from '../Label.svelte';
  import Select from '../Select.svelte';
  // import MultiSelect from '../MultiSelect.svelte';

  let options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  
  function handleSelectChange(value: string) {
    console.log("Selected value:", value);
  }
  
  // let selectedValues: string[] = [];

  // let multiOptions = [
  //   { value: "1", text: "Option 1", selected: false },
  //   { value: "2", text: "Option 2", selected: false },
  //   { value: "3", text: "Option 3", selected: false },
  //   { value: "4", text: "Option 4", selected: false },
  //   { value: "5", text: "Option 5", selected: false },
  // ];
</script>

<ComponentCard title="Select Inputs">
  <div class="space-y-6">
    <div>
      <Label>Select Input</Label>
      <Select
        options={options}
        placeholder="Select Option"
        on:change={handleSelectChange}
        class="dark:bg-dark-900"
      />
    </div>
    <!--
    <div>
      <MultiSelect
        label="Multiple Select Options"
        options={multiOptions}
        defaultSelected={["1", "3"]}
        on:change={(values) => selectedValues = values}
      />
      <p class="sr-only">
        Selected Values: {selectedValues.join(", ")}
      </p>
    </div>
    -->
  </div>
</ComponentCard>