export const loadAllTils = async () => {
	const tils = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/til/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop()!.slice(0, -3);
			return { ...metadata, slug };
		})
	);

	return tils;
};
