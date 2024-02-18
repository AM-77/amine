<script lang="ts">
	export let tils: any[];
</script>

<div class="flex flex-col gap-5">
	{#each tils as til}
		<div class="flex flex-col gap-3 border border-gray-900 dark:border-gray-100">
			<div class="flex flex-col gap-2 p-4">
				<a
					href={`/til/${til.slug}`}
					class="flex w-fit text-gray-900 dark:text-gray-100 font-medium font-syne text-xl cursor-pointer hover:text-primary dark:hover:text-primary"
				>
					{til.title}
				</a>
				<p class="text-gray-900 dark:text-gray-100 font-syne text-sm">{til.description}</p>
			</div>
			<div class="flex justify-between border-t border-gray-900 dark:border-gray-100 px-4">
				<div
					class="flex items-center border-r border-gray-900 dark:border-gray-100 py-1 gap-4 pr-4"
				>
					{#each til.tags.split(',') as tag}
						<span class="text-xs font-syne font-semibold text-neutral-600 dark:text-neutral-200">
							{tag}
						</span>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
