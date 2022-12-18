<script lang="ts">
	import { page } from '$app/stores';
	import darkMode from '$lib/stores/darkMode';
	import NavLink from '$lib/ui/NavLink.svelte';

	const switchMode = () => {
		window.localStorage.setItem('darkMode', $darkMode ? 'false' : 'true');
		$darkMode ? darkMode.set(false) : darkMode.set(true);
	};
</script>

<div
	class="flex h-12 items-center backdrop-blur-md border-b border-x-0 lg:border-x border-gray-900 dark:border-gray-100"
>
	<div
		class="flex justify-center items-center w-12 h-12 border-r border-gray-900 dark:border-gray-100"
	>
		<a
			href="/"
			class="flex justify-center items-center w-12 h-12 cursor-pointer hover:animate-pulse"
		>
			<img src="/logo.svg" class="w-6 h-6" />
		</a>
	</div>

	<div class="flex h-full gap-3 lg:gap-6 items-center ml-auto mr-auto lg:mr-4">
		<NavLink text="home" active={$page.route.id === '/'} href="/" />
		<NavLink text="portfolio" active={$page.route.id === '/portfolio'} href="/portfolio" />
		<NavLink text="blog" active={($page.route.id || '').includes('/blog')} href="/blog" />
		<NavLink text="contact" active={$page.route.id === '/contact'} href="/contact" />
	</div>

	<div
		class="w-12 h-12 border-l border-gray-900 dark:border-gray-100 cursor-pointer"
		on:click={switchMode}
	>
		{#if $darkMode}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-full h-full p-3 text-gray-300 hover:animate-pulse"
			>
				<path
					d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"
				/>
				<path
					d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"
				/>
			</svg>
		{:else}
			<svg
				class="w-full h-full p-3 text-yellow-300 hover:animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20" />
				<circle cx="12" cy="12" r="4" />
			</svg>
		{/if}
	</div>
</div>
