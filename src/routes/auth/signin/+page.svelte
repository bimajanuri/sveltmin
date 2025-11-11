<script lang="ts">
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import AuthPageLayout from '$lib/pages/AuthPages/AuthPageLayout.svelte';
  import SignInForm from '$lib/components/auth/SignInForm.svelte';
</script>

<PageMeta
  title="SvelteKit SignIn Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit SignIn Tables Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<AuthPageLayout>
  <SignInForm />
</AuthPageLayout>