<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import DefaultInputs from '$lib/components/form/form-elements/DefaultInputs.svelte';
  import InputGroup from '$lib/components/form/form-elements/InputGroup.svelte';
  import DropzoneComponent from '$lib/components/form/form-elements/DropzoneComponent.svelte';
  import CheckboxComponents from '$lib/components/form/form-elements/CheckboxComponents.svelte';
  import RadioButtons from '$lib/components/form/form-elements/RadioButtons.svelte';
  import ToggleSwitch from '$lib/components/form/form-elements/ToggleSwitch.svelte';
  import FileInputExample from '$lib/components/form/form-elements/FileInputExample.svelte';
  import SelectInputs from '$lib/components/form/form-elements/SelectInputs.svelte';
  import TextAreaInput from '$lib/components/form/form-elements/TextAreaInput.svelte';
  import InputStates from '$lib/components/form/form-elements/InputStates.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Form Elements Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Form Elements Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Form Elements" />
<div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
  <div class="space-y-6">
    <DefaultInputs />
    <SelectInputs />
    <TextAreaInput />
    <InputStates />
  </div>
  <div class="space-y-6">
    <InputGroup />
    <FileInputExample />
    <CheckboxComponents />
    <RadioButtons />
    <ToggleSwitch />
    <DropzoneComponent />
  </div>
</div>