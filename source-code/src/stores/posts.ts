import type { MarkdownInstance } from "astro";
import { atom } from "nanostores";

export const postsStore = atom<MarkdownInstance<Record<string, any>>[]>([]);

export default postsStore;
