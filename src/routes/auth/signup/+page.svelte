<script lang="ts">
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import AuthPageLayout from '$lib/pages/AuthPages/AuthPageLayout.svelte';
  import SignUpForm from '$lib/components/auth/SignUpForm.svelte';
</script>

<PageMeta
  title="SvelteKit SignUp Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit SignUp Tables Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<AuthPageLayout>
  <SignUpForm />
</AuthPageLayout>