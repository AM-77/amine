<script lang="ts">
  export let title: string;
  export let description: string;
  export let tags: string[] = [];
  export let date: string;
  export let url: string;
</script>

<a href={url} class="flex flex-col p-5 gap-5 rounded-lg bg-transparent border-2 border-primary text-gray-50 h-full hover:no-underline hover:border-gray-500">
  <span class="font-share font-semibold text-xl">{title}</span>
  
  <div class="flex flex-col gap-2">
    <span class="font-ibm text-sm">{description}</span>
  </div>

  <div class="mt-auto flex gap-2">
    {#each tags as tag}
      <span class="font-ibm text-xs font-medium px-2 py-0.5 rounded-full text-gray-50 bg-primary">{tag}</span>
    {/each}

    <span class="ml-auto font-ibm font-semibold text-xs">{new Date(date).toLocaleDateString()}</span>
  </div>
</a>