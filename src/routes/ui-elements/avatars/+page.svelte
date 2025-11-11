<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import ComponentCard from '$lib/components/common/ComponentCard.svelte';
  import Avatar from '$lib/components/ui/avatar/Avatar.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Avatars Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Avatars Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Avatars" />
<div class="space-y-5 sm:space-y-6">
  <ComponentCard title="Default Avatar">
    <!-- Default Avatar (No Status) -->
    <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Avatar src="/images/user/user-01.jpg" size="xsmall" />
      <Avatar src="/images/user/user-01.jpg" size="small" />
      <Avatar src="/images/user/user-01.jpg" size="medium" />
      <Avatar src="/images/user/user-01.jpg" size="large" />
      <Avatar src="/images/user/user-01.jpg" size="xlarge" />
      <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
    </div>
  </ComponentCard>
  <ComponentCard title="Avatar with online indicator">
    <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Avatar
        src="/images/user/user-01.jpg"
        size="xsmall"
        status="online"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="small"
        status="online"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="medium"
        status="online"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="large"
        status="online"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xlarge"
        status="online"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xxlarge"
        status="online"
      />
    </div>
  </ComponentCard>
  <ComponentCard title="Avatar with Offline indicator">
    <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Avatar
        src="/images/user/user-01.jpg"
        size="xsmall"
        status="offline"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="small"
        status="offline"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="medium"
        status="offline"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="large"
        status="offline"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xlarge"
        status="offline"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xxlarge"
        status="offline"
      />
    </div>
  </ComponentCard>
  <ComponentCard title="Avatar with busy indicator">
    <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <Avatar
        src="/images/user/user-01.jpg"
        size="xsmall"
        status="busy"
      />
      <Avatar src="/images/user/user-01.jpg" size="small" status="busy" />
      <Avatar
        src="/images/user/user-01.jpg"
        size="medium"
        status="busy"
      />
      <Avatar src="/images/user/user-01.jpg" size="large" status="busy" />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xlarge"
        status="busy"
      />
      <Avatar
        src="/images/user/user-01.jpg"
        size="xxlarge"
        status="busy"
      />
    </div>
  </ComponentCard>
</div>