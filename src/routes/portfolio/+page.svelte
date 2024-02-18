<script>
	import Works from '$lib/ui/Works.svelte';
	import works from '$lib/data/work.json';
	import tools from '$lib/data/tools.json';
	import apps from '$lib/data/apps.json';
</script>

<div class="flex flex-col p-4 lg:p-12 gap-10">
	<div class="flex flex-col gap-1">
		<h1 class="font-syne font-medium text-4xl uppercase text-gray-900 dark:text-gray-100">
			portfolio
		</h1>
		<span class="font-syne font-medium text-xs text-gray-900 dark:text-gray-100">
			Here is a list of some of the stuff I built, either for a client, a side projects or just for
			fun
		</span>
	</div>

	<Works title="Work" {works} />
	<!-- <Works title="Websites" works={apps} /> -->
	<!-- <Works title="libraries/tools" works={tools} /> -->
</div>
