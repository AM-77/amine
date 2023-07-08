export const load = async ({ fetch }) => {
	const response = await fetch(`/api/til`);
	const tils = await response.json();

	return {
		tils
	};
};
