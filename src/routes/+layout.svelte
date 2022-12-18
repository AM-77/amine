<script>
	import darkMode from '$lib/stores/darkMode';

	import Navbar from '$lib/ui/Navbar.svelte';
	import Footer from '$lib/ui/Footer.svelte';

	import '../app.css';
</script>

<div class:dark={$darkMode}>
	<div
		class="flex w-screen h-screen justify-center overflow-y-scroll bg-gray-100 dark:bg-neutral-900"
	>
		<div class="w-full max-w-5xl h-full">
			<div class="fixed top-0 w-full max-w-5xl">
				<Navbar />
			</div>
			<div class="min-h-[calc(100%-49px)] py-12">
				<slot />
			</div>
			<div class="fixed bottom-0 w-full max-w-5xl">
				<Footer />
			</div>
		</div>
	</div>
</div>
