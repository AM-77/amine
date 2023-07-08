import { loadAllPosts } from '$lib/utils/loadAllPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await loadAllPosts();
	return json(posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
};
