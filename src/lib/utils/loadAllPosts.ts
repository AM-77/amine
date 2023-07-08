export const loadAllPosts = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/blog/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop()!.slice(0, -3);
			return { ...metadata, slug };
		})
	);

	return posts;
};
