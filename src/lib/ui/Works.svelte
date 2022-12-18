<script lang="ts">
	export let title: string;
	export let works: any;
</script>

<div class="flex flex-col w-full gap-2">
	<h2 class="underline text-lg font-syne font-medium text-gray-900 dark:text-gray-100">{title}</h2>
	<div class="flex w-full flex-wrap border-r border-b border-gray-900 dark:border-gray-100">
		{#each works as work}
			<div
				class="flex flex-col w-full lg:w-1/3 border-t border-l border-gray-900 dark:border-gray-100"
			>
				<div class="flex flex-col p-4 gap-4 border-gray-900 dark:border-gray-100">
					<h3 class="text-lg font-syne font-medium text-gray-900 dark:text-gray-100">
						{work.title}
					</h3>
					<p class="text-sm font-syne text-gray-900 dark:text-gray-100">{work.desc}</p>
				</div>

				<div class="flex flex-wrap gap-1 px-4 pb-4 mt-auto">
					{#each work.tags as tag}
						<span
							class="text-xs font-syne font-semibold text-neutral-600 dark:text-neutral-200 py-0.5 px-1"
						>
							{tag}
						</span>
					{/each}
				</div>

				<div class="flex border-t border-gray-900 dark:border-gray-100">
					{#each Object.keys(work.links) as linkKey}
						<a
							class="flex justify-center items-center p-4 w-full text-xs font-bold font-syne text-gray-900 dark:text-gray-100 hover:bg-primary hover:text-gray-100 border-l border-gray-900 dark:border-gray-100 first:border-l-0 cursor-ne-resize"
							href={work.links[linkKey]}
							target="_blank"
						>
							{linkKey}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
