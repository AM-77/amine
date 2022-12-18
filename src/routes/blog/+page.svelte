<script lang="ts">
	import Posts from '$lib/ui/Posts.svelte';

	export let data: { posts: any[] };
</script>

<div class="flex flex-col p-4 lg:p-12 gap-10">
	<div class="flex flex-col gap-1">
		<h1 class="font-syne font-medium text-4xl uppercase text-gray-900 dark:text-gray-100">blog</h1>
		<span class="font-syne font-medium text-xs text-gray-900 dark:text-gray-100">
			I write mostly about tech and the web.
		</span>
	</div>
	<Posts posts={data.posts} />
</div>
