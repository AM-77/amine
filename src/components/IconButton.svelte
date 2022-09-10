<script lang="ts">
  export let goto: string;
  export let active: boolean;
</script>

<a 
  class="flex justify-center items-center h-12 w-12 bg-transparent hover:bg-gray-50 hover:bg-opacity-5 text-white rounded-md"
  class:active
  href={goto}
>
  <slot />
</a>

<style lang="postcss">
  .active {
    @apply bg-zinc-700 bg-opacity-20 text-primary
  }
</style>