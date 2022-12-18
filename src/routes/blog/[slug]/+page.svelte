<script>
	export let data;
</script>

<article class="flex flex-col">
	<div
		class="flex justify-between items-center p-4 lg:p-12 flex-col lg:flex-row text-center lg:text-left"
	>
		<h1 class="text-3xl font-syne font-semibold text-gray-900 dark:text-gray-100">{data.title}</h1>
		<span class="text-sm font-syne text-neutral-600 dark:text-neutral-200">
			{new Date(data.date).toLocaleDateString('en-UK')}
		</span>
	</div>
	<div class="blog-post dark:blog-post-dark p-4 lg:p-12">
		<svelte:component this={data.content} />
	</div>
</article>
