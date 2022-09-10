import type { MarkdownInstance } from "astro";

export const formatPosts = (
  posts: MarkdownInstance<Record<string, any>>[]
): MarkdownInstance<Record<string, any>>[] => {
  const sorted = posts.sort((p1, p2) =>
    new Date(p1.frontmatter.date) < new Date(p2.frontmatter.date) ? 1 : -1
  );
  const formated = sorted.map((p) => ({
    ...p,
    frontmatter: {
      ...p.frontmatter,
      tags: p.frontmatter.tags.split(","),
    },
  }));

  return formated;
};

export default formatPosts;
