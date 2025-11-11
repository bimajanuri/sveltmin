<script lang="ts">
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
  import Button from '$lib/components/ui/button/Button.svelte';
  
  // Membuat ikon box sederhana
  function BoxIcon() {
    return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 7.5L10 5L14.5 7.5M5.5 7.5L10 10M5.5 7.5V12.5M10 10L14.5 12.5M10 10V5M14.5 7.5L10 10M14.5 7.5V12.5M5.5 12.5L10 15M5.5 12.5V7.5M10 15L14.5 12.5M10 15V10M14.5 12.5L10 15M14.5 12.5V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
</script>

<PageMeta
  title="SvelteKit Buttons Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Buttons Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Buttons" />
<div class="space-y-5 sm:space-y-6">
  <!-- Primary Button -->
  <ComponentCard title="Primary Button">
    <div class="flex items-center gap-5">
      <Button size="sm" variant="primary">
        Button Text
      </Button>
      <Button size="md" variant="primary">
        Button Text
      </Button>
    </div>
  </ComponentCard>
  <!-- Primary Button with Start Icon -->
  <ComponentCard title="Primary Button with Left Icon">
    <div class="flex items-center gap-5">
      <Button
        size="sm"
        variant="primary"
        startIcon={BoxIcon()}
      >
        Button Text
      </Button>
      <Button
        size="md"
        variant="primary"
        startIcon={BoxIcon()}
      >
        Button Text
      </Button>
    </div>
  </ComponentCard>
  <!-- Primary Button with Start Icon -->
  <ComponentCard title="Primary Button with Right Icon">
    <div class="flex items-center gap-5">
      <Button
        size="sm"
        variant="primary"
        endIcon={BoxIcon()}
      >
        Button Text
      </Button>
      <Button
        size="md"
        variant="primary"
        endIcon={BoxIcon()}
      >
        Button Text
      </Button>
    </div>
  </ComponentCard>
  <!-- Outline Button -->
  <ComponentCard title="Secondary Button">
    <div class="flex items-center gap-5">
      <!-- Outline Button -->
      <Button size="sm" variant="outline">
        Button Text
      </Button>
      <Button size="md" variant="outline">
        Button Text
      </Button>
    </div>
  </ComponentCard>
  <!-- Outline Button with Start Icon -->
  <ComponentCard title="Outline Button with Left Icon">
    <div class="flex items-center gap-5">
      <Button
        size="sm"
        variant="outline"
        startIcon={BoxIcon()}
      >
        Button Text
      </Button>
      <Button
        size="md"
        variant="outline"
        startIcon={BoxIcon()}
      >
        Button Text
      </Button>
    </div>
  </ComponentCard>
  <!-- Outline Button with Start Icon -->
  <ComponentCard title="Outline Button with Right Icon">
    <div class="flex items-center gap-5">
      <Button
        size="sm"
        variant="outline"
        endIcon={BoxIcon()}
      >
        Button Text
      </Button>
      <Button
        size="md"
        variant="outline"
        endIcon={BoxIcon()}
      >
        Button Text
      </Button>
    </div>
  </ComponentCard>
</div>