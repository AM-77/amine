<script>
  import { postsStore } from '../stores'
  import PostCard from './PostCard.svelte';
</script>

<div class="grid grid-cols-1 gap-6">
  {#each $postsStore as post}
    <PostCard
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      url={post.url}
    />
  {/each}
</div>