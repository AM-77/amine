<script lang="ts">
	export let text: string;
	export let href: string;
	export let active: boolean;
</script>

<a class="link text-gray-900 dark:text-gray-100" class:active {href}>
	{text}

	{#if active}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="8"
			height="8"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="0.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute top-1.5 -left-3 hidden lg:block"
			class:active-icon={active}
			class:active={active}
		>
			<path
				d="M11.029 2.54a2 2 0 0 1 1.942 0l7 3.888A2 2 0 0 1 21 8.177v7.646a2 2 0 0 1-1.029 1.748l-7 3.89a2 2 0 0 1-1.942 0l-7-3.89A2 2 0 0 1 3 15.824V8.177a2 2 0 0 1 1.029-1.749l7-3.888z"
			/>
		</svg>
	{/if}
</a>

<style lang="postcss">
	.link {
		@apply relative -top-0.5 capitalize font-semibold lg:font-medium font-syne text-xs lg:text-sm;
	}

	.active {
		@apply !text-primary dark:!text-primary;
	}

	.active-icon {
		@apply fill-primary text-primary;
	}
</style>
