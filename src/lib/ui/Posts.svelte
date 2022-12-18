<script>
	export let posts;
</script>

<div class="flex flex-col gap-5">
	{#each posts as post}
		<div class="relative flex flex-col gap-3 border border-gray-900 dark:border-gray-100">
			<div class="flex flex-col gap-2 p-4">
				<a
					href={post.path}
					class="flex w-fit text-gray-900 dark:text-gray-100 font-medium font-syne text-xl cursor-pointer hover:text-primary dark:hover:text-primary"
				>
					{post.meta.title}
				</a>
				<p class="text-gray-900 dark:text-gray-100 font-syne text-sm">{post.meta.description}</p>
			</div>
			<div class="flex justify-between border-t border-gray-900 dark:border-gray-100 px-4">
				<div
					class="flex items-center border-r border-gray-900 dark:border-gray-100 py-1 gap-4 pr-4"
				>
					{#each post.meta.tags.split(',') as tag}
						<span class="text-xs font-syne font-semibold text-neutral-600 dark:text-neutral-200">
							{tag}
						</span>
					{/each}
				</div>
				<div class="flex items-center border-l border-gray-900 dark:border-gray-100 pl-4">
					<span class="text-xs font-syne font-semibold text-neutral-600 dark:text-neutral-200">
						{new Date(post.meta.date).toLocaleDateString('en-UK')}
					</span>
				</div>
			</div>
		</div>
	{/each}
</div>
