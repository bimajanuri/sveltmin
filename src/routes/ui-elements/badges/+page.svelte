<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import Badge from '$lib/components/ui/badge/Badge.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  
  // Kita perlu membuat ikon plus sederhana karena tidak ada di flowbite-svelte-icons
  function PlusIcon() {
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33325V12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.33325 8H12.6666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
</script>

<PageMeta
  title="SvelteKit Badges Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Badges Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Badges" />
<div class="space-y-5 sm:space-y-6">
  <ComponentCard title="With Light Background">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <!-- Light Variant -->
      <Badge variant="light" color="primary">
        Primary
      </Badge>
      <Badge variant="light" color="success">
        Success
      </Badge>
      <Badge variant="light" color="error">
        Error
      </Badge>
      <Badge variant="light" color="warning">
        Warning
      </Badge>
      <Badge variant="light" color="info">
        Info
      </Badge>
      <Badge variant="light" color="light">
        Light
      </Badge>
      <Badge variant="light" color="dark">
        Dark
      </Badge>
    </div>
  </ComponentCard>
  <ComponentCard title="With Solid Background">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <!-- Light Variant -->
      <Badge variant="solid" color="primary">
        Primary
      </Badge>
      <Badge variant="solid" color="success">
        Success
      </Badge>
      <Badge variant="solid" color="error">
        Error
      </Badge>
      <Badge variant="solid" color="warning">
        Warning
      </Badge>
      <Badge variant="solid" color="info">
        Info
      </Badge>
      <Badge variant="solid" color="light">
        Light
      </Badge>
      <Badge variant="solid" color="dark">
        Dark
      </Badge>
    </div>
  </ComponentCard>
  <ComponentCard title="Light Background with Left Icon">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <Badge variant="light" color="primary" startIcon={PlusIcon()}>
        Primary
      </Badge>
      <Badge variant="light" color="success" startIcon={PlusIcon()}>
        Success
      </Badge>
      <Badge variant="light" color="error" startIcon={PlusIcon()}>
        Error
      </Badge>
      <Badge variant="light" color="warning" startIcon={PlusIcon()}>
        Warning
      </Badge>
      <Badge variant="light" color="info" startIcon={PlusIcon()}>
        Info
      </Badge>
      <Badge variant="light" color="light" startIcon={PlusIcon()}>
        Light
      </Badge>
      <Badge variant="light" color="dark" startIcon={PlusIcon()}>
        Dark
      </Badge>
    </div>
  </ComponentCard>
  <ComponentCard title="Solid Background with Left Icon">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <Badge variant="solid" color="primary" startIcon={PlusIcon()}>
        Primary
      </Badge>
      <Badge variant="solid" color="success" startIcon={PlusIcon()}>
        Success
      </Badge>
      <Badge variant="solid" color="error" startIcon={PlusIcon()}>
        Error
      </Badge>
      <Badge variant="solid" color="warning" startIcon={PlusIcon()}>
        Warning
      </Badge>
      <Badge variant="solid" color="info" startIcon={PlusIcon()}>
        Info
      </Badge>
      <Badge variant="solid" color="light" startIcon={PlusIcon()}>
        Light
      </Badge>
      <Badge variant="solid" color="dark" startIcon={PlusIcon()}>
        Dark
      </Badge>
    </div>
  </ComponentCard>
  <ComponentCard title="Light Background with Right Icon">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <Badge variant="light" color="primary" endIcon={PlusIcon()}>
        Primary
      </Badge>
      <Badge variant="light" color="success" endIcon={PlusIcon()}>
        Success
      </Badge>
      <Badge variant="light" color="error" endIcon={PlusIcon()}>
        Error
      </Badge>
      <Badge variant="light" color="warning" endIcon={PlusIcon()}>
        Warning
      </Badge>
      <Badge variant="light" color="info" endIcon={PlusIcon()}>
        Info
      </Badge>
      <Badge variant="light" color="light" endIcon={PlusIcon()}>
        Light
      </Badge>
      <Badge variant="light" color="dark" endIcon={PlusIcon()}>
        Dark
      </Badge>
    </div>
  </ComponentCard>
  <ComponentCard title="Solid Background with Right Icon">
    <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
      <Badge variant="solid" color="primary" endIcon={PlusIcon()}>
        Primary
      </Badge>
      <Badge variant="solid" color="success" endIcon={PlusIcon()}>
        Success
      </Badge>
      <Badge variant="solid" color="error" endIcon={PlusIcon()}>
        Error
      </Badge>
      <Badge variant="solid" color="warning" endIcon={PlusIcon()}>
        Warning
      </Badge>
      <Badge variant="solid" color="info" endIcon={PlusIcon()}>
        Info
      </Badge>
      <Badge variant="solid" color="light" endIcon={PlusIcon()}>
        Light
      </Badge>
      <Badge variant="solid" color="dark" endIcon={PlusIcon()}>
        Dark
      </Badge>
    </div>
  </ComponentCard>
</div>