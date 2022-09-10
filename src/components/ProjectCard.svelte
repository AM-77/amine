<script lang="ts">
  export let title: string;
  export let description: string;
  export let sourceCode: string | undefined;
  export let clientSide: string | undefined;
  export let serverSide: string | undefined;
  export let demo: string;
  export let tags: string[];
  export let date: string;
</script>

<div class="flex flex-col p-5 gap-5 rounded-lg bg-transparent border-2 border-primary text-gray-50 h-full">
  <span class="font-share font-semibold text-xl">{title}</span>
  
  <div class="flex flex-col gap-2">
    <span class="font-ibm text-sm">{description}</span>
    <div class="flex gap-3">
      {#if sourceCode} 
        <a href={sourceCode} target="_blank" class="text-sm font-share font-semibold hover:underline hover:text-primary">Source Code</a>
      {/if}

      {#if clientSide} 
        • <a href={clientSide} target="_blank" class="text-sm font-share font-semibold hover:underline hover:text-primary">Client Side</a>
      {/if}

      {#if serverSide} 
        • <a href={serverSide} target="_blank" class="text-sm font-share font-semibold hover:underline hover:text-primary">Server Side</a>
      {/if}

      {#if demo} 
        • <a href={demo} target="_blank" class="text-sm font-share font-semibold hover:underline hover:text-primary">Demo</a>
      {/if}
    </div>
  </div>

  <div class="mt-auto flex gap-2">
    {#each tags as tag}
      <span class="font-ibm text-xs font-medium px-2 py-0.5 rounded-full text-gray-50 bg-primary">{tag}</span>
    {/each}

    <span class="ml-auto font-ibm font-semibold text-xs">{date}</span>
  </div>
</div>