<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Input from '../input/InputField.svelte';
  import Label from '../Label.svelte';
  
  let email = "";
  let emailTwo = "";
  let error = false;

  // Simulate a validation check
  function validateEmail(value: string) {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    error = !isValidEmail;
    return isValidEmail;
  }

  function handleEmailChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    email = value;
    validateEmail(value);
  }
  
  function handleEmailTwoChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    emailTwo = value;
    validateEmail(value);
  }
</script>

<ComponentCard
  title="Input States"
  desc="Validation styles for error, success and disabled states on form controls."
>
  <div class="space-y-5 sm:space-y-6">
    <!-- Error Input -->
    <div>
      <Label>Email</Label>
      <Input
        type="email"
        bind:value={email}
        error={error}
        on:input={handleEmailChange}
        placeholder="Enter your email"
        hint={error ? "This is an invalid email address." : ""}
      />
    </div>

    <!-- Success Input -->
    <div>
      <Label>Email</Label>
      <Input
        type="email"
        bind:value={emailTwo}
        success={!error}
        on:input={handleEmailTwoChange}
        placeholder="Enter your email"
        hint={!error ? "This is an success message." : ""}
      />
    </div>

    <!-- Disabled Input -->
    <div>
      <Label>Email</Label>
      <Input
        type="text"
        value="disabled@example.com"
        disabled={true}
        placeholder="Disabled email"
      />
    </div>
  </div>
</ComponentCard>