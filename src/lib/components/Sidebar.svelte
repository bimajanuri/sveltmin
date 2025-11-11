<script lang="ts">
	import { isSidebarExpanded, isMobileSidebarOpen, isSidebarHovered, activeSidebarItem, openSubmenu, toggleSidebar, toggleMobileSidebar, toggleSubmenu, setActiveSidebarItem, setSidebarHovered } from '$lib/stores';
	import { onMount } from 'svelte';

	let isMobile = false;

	onMount(() => {
		const handleResize = () => {
			isMobile = window.innerWidth < 768;
			if (isMobile) {
				isMobileSidebarOpen.set(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
	 class:translate-x-0={$isMobileSidebarOpen}
	 class:-translate-x-full={!$isMobileSidebarOpen}
	 class:lg:w-64={$isSidebarExpanded || $isSidebarHovered}
	 class:lg:w-22.5={!$isSidebarExpanded && !$isSidebarHovered}>
	
	<!-- SIDEBAR HEADER -->
	<div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
		<a href="/">
			<div class="flex items-center gap-2">
				<svg class="fill-current" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" />
					<path d="M15 8H17V12H21V14H17V24H15V14H11V12H15V8Z" />
				</svg>
				<h1 class="text-2xl font-bold text-white">TailAdmin</h1>
			</div>
		</a>

		<button
			on:click|preventDefault={toggleSidebar}
			class="block lg:hidden"
		>
			<svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path d="M10.1569 9.25L15.1569 4.25L16.25 5.34315L11.25 10.3431L16.25 15.3431L15.1569 16.4363L10.1569 11.4363L5.15686 16.4363L4.06372 15.3431L9.06372 10.3431L4.06372 5.34315L5.15686 4.25L10.1569 9.25Z" />
			</svg>
		</button>
	</div>
	<!-- SIDEBAR HEADER -->

	<div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
		<!-- Sidebar Menu -->
		<nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
			<!-- Menu Group -->
			<div>
				<h3 class="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

				<ul class="mb-6 flex flex-col gap-1.5">
					<!-- Menu Item Dashboard -->
					<li>
						<a
							href="/"
							class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
							class:bg-graydark={$activeSidebarItem === 'dashboard'}
							on:click|preventDefault={() => setActiveSidebarItem('dashboard')}
						>
							<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.10319 15.3914C5.75778 15.3914 5.44328 15.2515 5.20599 15.0142C4.71937 14.5276 4.71937 13.719 5.20599 13.2324L10.4384 7.95361C10.8138 7.5782 11.3969 7.5782 11.7723 7.95361L16.794 12.9753C17.2806 13.4619 17.2806 14.2705 16.794 14.7571C16.3074 15.2437 15.4988 15.2437 15.0122 14.7571L11.0876 10.8325L6.98577 14.9806C6.74848 15.2179 6.43398 15.3914 6.10319 15.3914Z" />
								<path d="M1.20599 14.7571C0.719372 14.2705 0.719372 13.4619 1.20599 12.9753L12.9753 1.20599C13.4619 0.719372 14.2705 0.719372 14.7571 1.20599C15.2437 1.69261 15.2437 2.50118 14.7571 2.9878L3.01839 14.7571C2.50118 15.2437 1.69261 15.2437 1.20599 14.7571Z" />
							</svg>
							Dashboard
						</a>
					</li>
					<!-- Menu Item Dashboard -->

					<!-- Menu Item Calendar -->
					<li>
						<a
							href="/calendar"
							class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
							class:bg-graydark={$activeSidebarItem === 'calendar'}
							on:click={() => setActiveSidebarItem('calendar')}
						>
							<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.75 3.75H15V3C15 2.30964 14.4404 1.75 13.75 1.75C13.0596 1.75 12.5 2.30964 12.5 3V3.75H5.5V3C5.5 2.30964 4.94036 1.75 4.25 1.75C3.55964 1.75 3 2.30964 3 3V3.75H2.25C1.55964 3.75 1 4.30964 1 5C1 5.69036 1.55964 6.25 2.25 6.25H2.5V14.5C2.5 15.8807 3.61929 17 5 17H13C14.3807 17 15.5 15.8807 15.5 14.5V6.25H15.75C16.4404 6.25 17 5.69036 17 5C17 4.30964 16.4404 3.75 15.75 3.75ZM5.5 14.5V6.25H12.5V14.5C12.5 14.2239 12.2761 14 12 14H6C5.72386 14 5.5 14.2239 5.5 14.5ZM4.25 3.25C4.11193 3.25 4 3.36193 4 3.5V4.25H5V3.5C5 3.36193 4.88807 3.25 4.75 3.25H4.25ZM13.75 3.25C13.6119 3.25 13.5 3.36193 13.5 3.5V4.25H14.5V3.5C14.5 3.36193 14.3881 3.25 14.25 3.25H13.75ZM14 14.5C14 15.0523 13.5523 15.5 13 15.5H5C4.44772 15.5 4 15.0523 4 14.5V7.75H14V14.5Z" />
							</svg>
							Calendar
						</a>
					</li>
					<!-- Menu Item Calendar -->

					<!-- Menu Item Profile -->
					<li>
						<a
							href="/profile"
							class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
							class:bg-graydark={$activeSidebarItem === 'profile'}
							on:click={() => setActiveSidebarItem('profile')}
						>
							<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.99999 10.25C11.3472 10.25 13.25 8.34721 13.25 6C13.25 3.65279 11.3472 1.75 8.99999 1.75C6.65278 1.75 4.75 3.65279 4.75 6C4.75 8.34721 6.65278 10.25 8.99999 10.25ZM8.99999 3.25C10.5188 3.25 11.75 4.48122 11.75 6C11.75 7.51878 10.5188 8.75 8.99999 8.75C7.48121 8.75 6.25 7.51878 6.25 6C6.25 4.48122 7.48121 3.25 8.99999 3.25Z" />
								<path d="M15.7125 16.25H2.2875C1.87329 16.25 1.5375 15.9142 1.5375 15.5C1.5375 15.0858 1.87329 14.75 2.2875 14.75H3.0375C3.0375 12.6138 4.76376 10.8875 6.9 10.8875H11.1C13.2362 10.8875 14.9625 12.6138 14.9625 14.75H15.7125C16.1267 14.75 16.4625 15.0858 16.4625 15.5C16.4625 15.9142 16.1267 16.25 15.7125 16.25ZM4.5375 14.75H13.4625C13.4625 13.4025 12.4475 12.3875 11.1 12.3875H6.9C5.55248 12.3875 4.5375 13.4025 4.5375 14.75Z" />
							</svg>
							Profile
						</a>
					</li>
					<!-- Menu Item Profile -->

					<!-- Menu Item Tables -->
					<li>
						<a
							href="/tables"
							class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
							class:bg-graydark={$activeSidebarItem === 'tables'}
							on:click={() => setActiveSidebarItem('tables')}
						>
							<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.75 3.75H2.25C1.83579 3.75 1.5 4.08579 1.5 4.5V13.5C1.5 13.9142 1.83579 14.25 2.25 14.25H15.75C16.1642 14.25 16.5 13.9142 16.5 13.5V4.5C16.5 4.08579 16.1642 3.75 15.75 3.75ZM2.25 12.75V5.25H15.75L15.75 12.75H2.25Z" />
								<path d="M4.5 7.5H13.5V9H4.5V7.5Z" />
								<path d="M4.5 10.5H13.5V12H4.5V10.5Z" />
							</svg>
							Tables
						</a>
					</li>
					<!-- Menu Item Tables -->

					<!-- Menu Item Settings -->
					<li>
						<a
							href="/settings"
							class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
							class:bg-graydark={$activeSidebarItem === 'settings'}
							on:click={() => setActiveSidebarItem('settings')}
						>
							<svg class="fill-current" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.99999 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 8.99999 6.75C7.75735 6.75 6.74999 7.75736 6.74999 9C6.74999 10.2426 7.75735 11.25 8.99999 11.25Z" />
								<path d="M15.75 9C15.75 9.31066 15.7255 9.6156 15.6784 9.91289C15.3907 11.728 14.2192 13.2573 12.5979 13.9421C12.1006 14.1518 11.5589 14.25 11.0062 14.25H6.99375C6.44108 14.25 5.89938 14.1518 5.40208 13.9421C3.78076 13.2573 2.60925 11.728 2.32158 9.91289C2.27447 9.6156 2.25 9.31066 2.25 9C2.25 8.68934 2.27447 8.3844 2.32158 8.08711C2.60925 6.27196 3.78076 4.74274 5.40208 4.05787C5.89938 3.84824 6.44108 3.75 6.99375 3.75H11.0062C11.5589 3.75 12.1006 3.84824 12.5979 4.05787C14.2192 4.74274 15.3907 6.27196 15.6784 8.08711C15.7255 8.3844 15.75 8.68934 15.75 9ZM14.2261 9.97422C13.9873 11.4788 12.9953 12.7714 11.6142 13.3548C11.2163 13.5226 10.7773 13.6125 10.3312 13.6125H7.66875C7.22271 13.6125 6.78366 13.5226 6.38579 13.3548C5.00467 12.7714 4.01271 11.4788 3.77387 9.97422C3.73451 9.66257 3.7125 9.3393 3.7125 9C3.7125 8.6607 3.73451 8.33743 3.77387 8.02578C4.01271 6.52124 5.00467 5.22857 6.38579 4.64521C6.78366 4.47742 7.22271 4.3875 7.66875 4.3875H10.3312C10.7773 4.3875 11.2163 4.47742 11.6142 4.64521C12.9953 5.22857 13.9873 6.52124 14.2261 8.02578C14.2655 8.33743 14.2875 8.6607 14.2875 9C14.2875 9.3393 14.2655 9.66257 14.2261 9.97422Z" />
							</svg>
							Settings
						</a>
					</li>
					<!-- Menu Item Settings -->
				</ul>
			</div>
		</nav>
		<!-- Sidebar Menu -->
	</div>
</div>