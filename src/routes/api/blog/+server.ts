import { loadAllPosts } from '$lib/utils/loadAllPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await loadAllPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
