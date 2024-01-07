import { loadAllTils } from '$lib/utils/loadAllTils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await loadAllTils();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return json(sortedPosts);
};
