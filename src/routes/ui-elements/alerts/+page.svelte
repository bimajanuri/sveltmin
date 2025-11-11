<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Alert from '$lib/components/ui/alert/Alert.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Alerts Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Alerts Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Alerts" />
<div class="space-y-5 sm:space-y-6">
  <ComponentCard title="Success Alert">
    <Alert
      variant="success"
      title="Success Message"
      message="Be cautious when performing this action."
      showLink={true}
      linkHref="/"
      linkText="Learn more"
    />
    <Alert
      variant="success"
      title="Success Message"
      message="Be cautious when performing this action."
      showLink={false}
    />
  </ComponentCard>
  <ComponentCard title="Warning Alert">
    <Alert
      variant="warning"
      title="Warning Message"
      message="Be cautious when performing this action."
      showLink={true}
      linkHref="/"
      linkText="Learn more"
    />
    <Alert
      variant="warning"
      title="Warning Message"
      message="Be cautious when performing this action."
      showLink={false}
    />
  </ComponentCard>
  <ComponentCard title="Error Alert">
    <Alert
      variant="error"
      title="Error Message"
      message="Be cautious when performing this action."
      showLink={true}
      linkHref="/"
      linkText="Learn more"
    />
    <Alert
      variant="error"
      title="Error Message"
      message="Be cautious when performing this action."
      showLink={false}
    />
  </ComponentCard>
  <ComponentCard title="Info Alert">
    <Alert
      variant="info"
      title="Info Message"
      message="Be cautious when performing this action."
      showLink={true}
      linkHref="/"
      linkText="Learn more"
    />
    <Alert
      variant="info"
      title="Info Message"
      message="Be cautious when performing this action."
      showLink={false}
    />
  </ComponentCard>
</div>