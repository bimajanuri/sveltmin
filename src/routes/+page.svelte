<script lang="ts">
  // Import Flowbite Svelte Icons
  import {
    UsersSolid,
    GiftBoxOutline,
    ArrowUpOutline,
    ArrowDownOutline,
    ChevronDownOutline
  } from 'flowbite-svelte-icons';
</script>

<svelte:head>
  <title>React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template</title>
  <meta name="description" content="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template">
</svelte:head>

<div class="grid grid-cols-12 gap-4 md:gap-6">
  <div class="col-span-12 space-y-6 xl:col-span-7">
    <!-- EcommerceMetrics component placeholder -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      <!-- Metric Item Start -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <UsersSolid class="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Customers
            </span>
            <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <div class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <ArrowUpOutline class="size-3" />
            11.01%
          </div>
        </div>
      </div>
      <!-- Metric Item End -->

      <!-- Metric Item Start -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GiftBoxOutline class="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div class="flex items-end justify-between mt-5">
          <div>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>

          <div class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            <ArrowDownOutline class="size-3" />
            9.05%
          </div>
        </div>
      </div>
      <!-- Metric Item End -->
    </div>

    <!-- MonthlySalesChart component placeholder -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div class="flex flex-wrap items-start justify-between gap-4 sm:flex-nowrap">
        <div>
          <h3 class="font-bold text-gray-900 text-title-md dark:text-white">
            Sales Overview
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Last 6 months
          </p>
        </div>
        <div class="flex gap-3.5">
          <button class="inline-flex items-center gap-1.5 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <span>Last 6 months</span>
            <ChevronDownOutline class="size-4" />
          </button>
        </div>
      </div>
      
      <!-- Chart placeholder -->
      <div class="mt-6">
        <div class="h-80 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Chart Visualization Area</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-12 xl:col-span-5">
    <!-- MonthlyTarget component placeholder -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div>
        <h3 class="font-bold text-gray-900 text-title-md dark:text-white">
          Monthly Target
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Last 6 months
          <span class="text-gray-900 dark:text-white">$50,000</span>
        </p>
      </div>
      
      <div class="mt-6">
        <div class="h-64 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Target Visualization Area</p>
        </div>
      </div>
      
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Today
          </h4>
          <p class="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            $2,450
          </p>
        </div>
        <div>
          <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">
            This Month
          </h4>
          <p class="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            $12,450
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-12">
    <!-- StatisticsChart component placeholder -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div class="flex flex-wrap items-start justify-between gap-4 sm:flex-nowrap">
        <div>
          <h3 class="font-bold text-gray-900 text-title-md dark:text-white">
            Visitors Analytics
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Last 6 months
          </p>
        </div>
        <div class="flex gap-3.5 flex-wrap">
          <button class="inline-flex items-center gap-1.5 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <span>View Report</span>
          </button>
        </div>
      </div>
      
      <!-- Chart placeholder -->
      <div class="mt-6">
        <div class="h-80 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Statistics Visualization Area</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-12 xl:col-span-5">
    <!-- DemographicCard component placeholder -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div>
        <h3 class="font-bold text-gray-900 text-title-md dark:text-white">
          Audience By Country
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Top selling countries
        </p>
      </div>
      
      <!-- Map placeholder -->
      <div class="mt-6">
        <div class="h-64 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <p class="text-gray-500 dark:text-gray-400">Country Map Visualization Area</p>
        </div>
      </div>
      
      <div class="mt-6 space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
              <span class="text-xs font-medium text-gray-800 dark:text-gray-300">🇺🇸</span>
            </div>
            <span class="font-medium text-gray-900 dark:text-white">United States</span>
          </div>
          <div class="text-right">
            <span class="font-medium text-gray-900 dark:text-white">45%</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">45,432</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
              <span class="text-xs font-medium text-gray-800 dark:text-gray-300">🇨🇦</span>
            </div>
            <span class="font-medium text-gray-900 dark:text-white">Canada</span>
          </div>
          <div class="text-right">
            <span class="font-medium text-gray-900 dark:text-white">25%</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">25,321</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
              <span class="text-xs font-medium text-gray-800 dark:text-gray-300">🇬🇧</span>
            </div>
            <span class="font-medium text-gray-900 dark:text-white">United Kingdom</span>
          </div>
          <div class="text-right">
            <span class="font-medium text-gray-900 dark:text-white">15%</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">15,234</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-12 xl:col-span-7">
    <!-- RecentOrders component placeholder -->
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div>
        <h3 class="font-bold text-gray-900 text-title-md dark:text-white">
          Recent Orders
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          You have 426 orders
        </p>
      </div>
      
      <div class="mt-6 overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-left text-gray-500 dark:text-gray-400">
              <th class="pb-3 font-normal">Customer</th>
              <th class="pb-3 font-normal">Product</th>
              <th class="pb-3 font-normal">Price</th>
              <th class="pb-3 font-normal">Status</th>
              <th class="pb-3 text-right font-normal">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <td class="py-4">
                <div class="flex items-center gap-3">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700">
                    <span class="text-sm font-medium text-gray-800 dark:text-gray-300">D</span>
                  </div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">Debra Howell</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">debra.howell@example.com</p>
                  </div>
                </div>
              </td>
              <td class="py-4">
                <p class="font-medium text-gray-900 dark:text-white">Fjallraven - Foldsack No. 1...</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Category: Backpacks</p>
              </td>
              <td class="py-4 font-medium text-gray-900 dark:text-white">$99.99</td>
              <td class="py-4">
                <span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Completed
                </span>
              </td>
              <td class="py-4 text-right">
                <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <span>⋯</span>
                </button>
              </td>
            </tr>
            <!-- Additional rows would go here -->
          </tbody>
        </table>
      </div>
      
      <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Showing 1 to 5 of 426 entries
        </p>
        <div class="flex items-center gap-2">
          <button class="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <span>Previous</span>
          </button>
          <button class="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>