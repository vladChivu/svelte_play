<script>
	import { onDestroy } from 'svelte';
	import { count } from '../../store/store.js';
	import { createcount } from '../../store/store.js';
	import Incrementer from './components/Incrementer.svelte';
	import Decrementer from './components/Decrementer.svelte';
	import Resetter from './components/Resetter.svelte';

	let countValue;

	count.subscribe(value => {
		countValue = value;
	});

	const unsubscribe = count.subscribe(value => {
		countValue = value;
	});

	onDestroy(unsubscribe);
</script>

<h1>The count is {countValue}</h1>
<!-- <h1>The count is {$countValue}</h1> -->
<Incrementer/>
<Decrementer/>
<Resetter/>

<h3>Custom Store</h3>
<h1>The count is {$createcount}</h1>
<button on:click={createcount.increment}>+</button>
<button on:click={createcount.decrement}>-</button>
<button on:click={createcount.reset}>reset</button>