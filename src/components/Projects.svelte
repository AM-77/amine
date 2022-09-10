<script>
  import { worksStore } from '../stores'
import ProjectCard from './ProjectCard.svelte';
</script>

<div class="grid grid-cols-1 gap-6">
  {#each $worksStore as work}
    <ProjectCard
      title={work.title}
      date={work.date}
      description={work.description}
      tags={work.tags}
      sourceCode={work.links.source_code}
      demo={work.links.demo}
      clientSide={work.links.client_side}
      serverSide={work.links.server_side}
    />
  {/each}
</div>