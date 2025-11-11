<script lang="ts">
	import { isMobileSidebarOpen, toggleMobileSidebar, theme, toggleTheme } from '$lib/stores';
	import { onMount } from 'svelte';

	// Inisialisasi tema saat komponen dimuat
	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
	<div class="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
		<div class="flex items-center gap-2 sm:gap-4 lg:hidden">
			<!-- Hamburger Toggle BTN -->
			<button
				on:click={toggleMobileSidebar}
				class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
			>
				<svg class="fill-body" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V4C20 5.10457 19.1046 6 18 6H2C0.895431 6 0 5.10457 0 4V2Z" />
					<path d="M0 10C0 8.89543 0.895431 8 2 8H18C19.1046 8 20 8.89543 20 10V12C20 13.1046 19.1046 14 18 14H2C0.895431 14 0 13.1046 0 12V10Z" />
					<path d="M0 18C0 16.8954 0.895431 16 2 16H18C19.1046 16 20 16.8954 20 18V20C20 21.1046 19.1046 22 18 22H2C0.895431 22 0 21.1046 0 20V18Z" />
				</svg>
			</button>
			<!-- Hamburger Toggle BTN -->
		</div>

		<div class="hidden sm:block">
			<div class="relative">
				<svg class="absolute left-3 top-1/2 -translate-y-1/2 fill-body" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.16667 3.33331C5.94501 3.33331 3.33334 5.94498 3.33334 9.16665C3.33334 12.3883 5.94501 15 9.16667 15C12.3883 15 15 12.3883 15 9.16665C15 5.94498 12.3883 3.33331 9.16667 3.33331ZM1.66667 9.16665C1.66667 5.02451 5.02454 1.66665 9.16667 1.66665C13.3088 1.66665 16.6667 5.02451 16.6667 9.16665C16.6667 11.0287 15.9806 12.7308 14.8587 14.0228L19.7071 18.8712C20.0976 19.2617 20.0976 19.8949 19.7071 20.2854C19.3166 20.6759 18.6834 20.6759 18.2929 20.2854L13.4445 15.437C12.1525 16.5589 10.4504 17.245 8.58834 17.245C4.4462 17.245 1.08834 13.8871 1.08834 9.74498H1.66667Z" />
				</svg>

				<input
					type="text"
					placeholder="Type to search..."
					class="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
				/>
			</div>
		</div>

		<div class="flex items-center gap-3 2xsm:gap-7">
			<ul class="flex items-center gap-2 2xsm:gap-4">
				<!-- Dark Mode Toggle -->
				<li>
					<button 
						on:click={toggleTheme}
						class="flex h-8 w-8 items-center justify-center rounded-full bg-boxdark-2 text-body dark:bg-boxdark dark:text-bodydark">
						<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 1C4.47715 1 0 5.47715 0 11C0 16.5228 4.47715 21 10 21C15.5228 21 20 16.5228 20 11C20 5.47715 15.5228 1 10 1Z" />
						</svg>
					</button>
				</li>
				<!-- Dark Mode Toggle -->

				<!-- Notification Menu Area -->
				<li class="relative">
					<button class="flex h-8 w-8 items-center justify-center rounded-full bg-boxdark-2 text-body dark:bg-boxdark dark:text-bodydark">
						<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 2C8.89543 2 8 2.89543 8 4V5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5H12V4C12 2.89543 11.1046 2 10 2ZM10 4H10.01V4.01H10V4ZM6 7H14V17H6V7Z" />
						</svg>
					</button>
				</li>
				<!-- Notification Menu Area -->

				<!-- Chat Notification Area -->
				<li class="relative">
					<button class="flex h-8 w-8 items-center justify-center rounded-full bg-boxdark-2 text-body dark:bg-boxdark dark:text-bodydark">
						<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 7C2 5.89543 2.89543 5 4 5H16C17.1046 5 18 5.89543 18 7V13C18 14.1046 17.1046 15 16 15H4C2.89543 15 2 14.1046 2 13V7ZM4 13H16V7H4V13Z" />
							<path d="M1 7C1 5.34315 2.34315 4 4 4H16C17.6569 4 19 5.34315 19 7V13C19 14.6569 17.6569 16 16 16H4C2.34315 16 1 14.6569 1 13V7ZM4 14H16V8H4V14Z" />
						</svg>
					</button>
				</li>
				<!-- Chat Notification Area -->
			</ul>

			<!-- User Area -->
			<div class="relative">
				<button class="flex items-center gap-4">
					<span class="hidden text-right lg:block">
						<span class="block text-sm font-medium text-black dark:text-white">Thomasan</span>
						<span class="block text-xs">Administrator</span>
					</span>

					<span class="h-12 w-12 rounded-full">
						<img src="/images/user/user-01.png" alt="User" class="rounded-full" />
					</span>

					<svg class="hidden fill-current sm:block" width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853278 1.76381 0.0853278 1.23617 0.410765 0.910734Z" />
					</svg>
				</button>
			</div>
			<!-- User Area -->
		</div>
	</div>
</header>