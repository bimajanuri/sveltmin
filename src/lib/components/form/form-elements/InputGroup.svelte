<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Label from '../Label.svelte';
  import Input from '../input/InputField.svelte';
  // import { EnvelopeIcon } from '../../../icons';
  import PhoneInput from '../group-input/PhoneInput.svelte';

  let countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];
  
  function handlePhoneNumberChange(phoneNumber: string) {
    console.log("Updated phone number:", phoneNumber);
  }
</script>

<ComponentCard title="Input Group">
  <div class="space-y-6">
    <div>
      <Label>Email</Label>
      <div class="relative">
        <Input
          placeholder="info@gmail.com"
          type="text"
          class="pl-[62px]"
        />
        <span class="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <svg class="size-6" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
        </span>
      </div>
    </div>
    <div>
      <Label>Phone</Label>
      <PhoneInput
        selectPosition="start"
        countries={countries}
        placeholder="+1 (555) 000-0000"
        on:change={handlePhoneNumberChange}
      />
    </div>
    <div>
      <Label>Phone</Label>
      <PhoneInput
        selectPosition="end"
        countries={countries}
        placeholder="+1 (555) 000-0000"
        on:change={handlePhoneNumberChange}
      />
    </div>
  </div>
</ComponentCard>