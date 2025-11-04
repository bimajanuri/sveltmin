<script lang="ts">
  import { ListOutline } from 'flowbite-svelte-icons';
</script>

<div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
  <div class="flex items-center gap-3 mb-6">
    <ListOutline class="size-8 text-gray-800 dark:text-white" />
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Form Elements</h1>
  </div>
  
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div>
      <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Input Fields</h2>
      
      <div class="space-y-4">
        <div>
          <label for="text-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Input</label>
          <input 
            id="text-input"
            type="text" 
            placeholder="Enter text" 
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div>
          <label for="email-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Input</label>
          <input 
            id="email-input"
            type="email" 
            placeholder="Enter email" 
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div>
          <label for="password-input" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password Input</label>
          <input 
            id="password-input"
            type="password" 
            placeholder="Enter password" 
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
    </div>
    
    <div>
      <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Select and Textarea</h2>
      
      <div class="space-y-4">
        <div>
          <label for="select-option" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Option</label>
          <select id="select-option" class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        
        <div>
          <label for="textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Textarea</label>
          <textarea 
            id="textarea"
            rows="4" 
            placeholder="Enter your message" 
            class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</div>