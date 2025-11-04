<script lang="ts">
  import { UserCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  <div class="flex items-center gap-3 mb-6">
    <UserCircleSolid class="size-8 text-gray-800 dark:text-white" />
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">User Profile</h1>
  </div>
  
  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    <div class="md:col-span-1">
      <div class="rounded-lg bg-gray-100 dark:bg-gray-800 p-6">
        <div class="flex flex-col items-center">
          <div class="mb-4 rounded-full bg-gray-200 dark:bg-gray-700 w-24 h-24 flex items-center justify-center">
            <span class="text-2xl font-bold text-gray-800 dark:text-white">U</span>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Thomas Edison</h2>
          <p class="text-gray-500 dark:text-gray-400">Admin</p>
        </div>
      </div>
    </div>
    
    <div class="md:col-span-2">
      <div class="rounded-lg bg-gray-100 dark:bg-gray-800 p-6">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Profile Information</h3>
        
        <div class="space-y-4">
          <div>
            <label for="full-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input 
              id="full-name"
              type="text" 
              value="Thomas Edison" 
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              value="thomas.edison@example.com" 
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label for="role" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
            <input 
              id="role"
              type="text" 
              value="Admin" 
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div class="pt-4">
            <button class="rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>