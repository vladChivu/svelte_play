import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const intervalU = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(intervalU);
	});
}