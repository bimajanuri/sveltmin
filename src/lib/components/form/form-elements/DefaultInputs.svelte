<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Label from '../Label.svelte';
  import Input from '../input/InputField.svelte';
  import Select from '../Select.svelte';
  // import { EyeCloseIcon, EyeIcon, TimeIcon } from '../../../icons';
  // import DatePicker from '../date-picker.tsx';
  
  let showPassword = false;
  let options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];
  
  function handleSelectChange(value: string) {
    console.log("Selected value:", value);
  }
</script>

<ComponentCard title="Default Inputs">
  <div class="space-y-6">
    <div>
      <Label for="input">Input</Label>
      <Input type="text" id="input" />
    </div>
    <div>
      <Label for="inputTwo">Input with Placeholder</Label>
      <Input type="text" id="inputTwo" placeholder="info@gmail.com" />
    </div>
    <div>
      <Label>Select Input</Label>
      <Select
        options={options}
        placeholder="Select an option"
        on:change={handleSelectChange}
        class="dark:bg-dark-900"
      />
    </div>
    <div>
      <Label>Password Input</Label>
      <div class="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />
        <button
          on:click={() => showPassword = !showPassword}
          class="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
        >
          {#if showPassword}
            <svg class="fill-gray-500 dark:fill-gray-400 size-5" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          {:else}
            <svg class="fill-gray-500 dark:fill-gray-400 size-5" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- 
    <div>
      <DatePicker
        id="date-picker"
        label="Date Picker Input"
        placeholder="Select a date"
        on:change={(e) => {
          // Handle your logic
          console.log({ dates: e.detail.dates, currentDateString: e.detail.currentDateString });
        }}
      />
    </div>
    -->

    <div>
      <Label for="tm">Time Picker Input</Label>
      <div class="relative">
        <Input
          type="time"
          id="tm"
          name="tm"
          on:change={(e) => console.log(e.target.value)}
        />
        <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" fill="currentColor"/>
          </svg>
        </span>
      </div>
    </div>
    <div>
      <Label for="tm">Input with Payment</Label>
      <div class="relative">
        <Input
          type="text"
          placeholder="Card number"
          class="pl-[62px]"
        />
        <span class="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.25 4.5H3.75C2.7835 4.5 2 5.2835 2 6.25V8.75H18V6.25C18 5.2835 17.2165 4.5 16.25 4.5ZM2 10.25V13.75C2 14.7165 2.7835 15.5 3.75 15.5H16.25C17.2165 15.5 18 14.7165 18 13.75V10.25H2ZM3.75 3C1.95507 3 0.5 4.45507 0.5 6.25V13.75C0.5 15.5449 1.95507 17 3.75 17H16.25C18.0449 17 19.5 15.5449 19.5 13.75V6.25C19.5 4.45507 18.0449 3 16.25 3H3.75Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</ComponentCard>