import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialValue = browser ? window.localStorage.getItem('darkMode') === 'true' ?? false : false;
export const darkMode = writable<boolean>(initialValue);

darkMode.subscribe((value) => {
	if (browser) {
		localStorage.darkMode = String(value);
	}
});

export default darkMode;
