<script lang="ts">
  import PageBreadcrumb from '$lib/components/common/PageBreadCrumb.svelte';
  import UserMetaCard from '$lib/components/UserProfile/UserMetaCard.svelte';
  import UserInfoCard from '$lib/components/UserProfile/UserInfoCard.svelte';
  import UserAddressCard from '$lib/components/UserProfile/UserAddressCard.svelte';
  import PageMeta from '$lib/components/common/PageMeta.svelte';
</script>

<PageMeta
  title="SvelteKit Profile Dashboard | TailAdmin - SvelteKit Admin Dashboard Template"
  description="This is SvelteKit Profile Dashboard page for TailAdmin - SvelteKit Tailwind CSS Admin Dashboard Template"
/>
<PageBreadcrumb pageTitle="Profile" />
<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
  <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
    Profile
  </h3>
  <div class="space-y-6">
    <UserMetaCard />
    <UserInfoCard />
    <UserAddressCard />
  </div>
</div>