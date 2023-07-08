<script lang="ts">
	import Tils from '$lib/ui/Tils.svelte';

	export let data: { tils: any[] };
</script>

<div class="flex flex-col p-4 lg:p-12 gap-10">
	<div class="flex flex-col gap-1">
		<h1 class="font-syne font-medium text-4xl uppercase text-gray-900 dark:text-gray-100">TIL</h1>
		<span class="font-syne font-medium text-xs text-gray-900 dark:text-gray-100">
			Because why not!
		</span>
	</div>
	<Tils tils={data.tils} />
</div>
