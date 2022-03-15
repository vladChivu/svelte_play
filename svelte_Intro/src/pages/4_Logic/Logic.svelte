<script>
    // IV LOGIC
	// 1. if blocks
	let user = { loggedIn: false};
	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
	// 3. else if blocks
	let x = 11;
	// 4. each blocks
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
	// 5. keyed each blocks
	// By default, when you modify the value of an each block, it will add and remove items at the end of the block, 
	// and update any values that have changed. That might not be what you want.
	import Fruit from "../../components/3_Logic/Fruit.svelte";
	let fruits = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];
	function handleFruits() {
		fruits = fruits.slice(1);
	}
	// 6. await blocks
	// Only the most recent promise is considered, meaning you don't need to worry about race conditions.
	const apiRandom = "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new";
	async function getRandomNumber() {
		const res = await fetch(apiRandom);
		const text = await res.text();
		if (res.ok) {
			return text
		} else {
			throw new Error(text);
		}
	}
	let promise = getRandomNumber();
	function handleRandom() {
		promise = getRandomNumber();
	}
</script>

<div class="content">
    <hr>
    <b>IV LOGIC</b>
    <hr>
    1. if blocks:
    <br>
    {#if user.loggedIn}
        <button on:click={toggle}>
            Log out
        </button>
    {/if}
    
    {#if !user.loggedIn}
    <button on:click={toggle}>
        Log in
    </button>
    {/if}
    <br>
    2. else blocks:
    <br>
    {#if user.loggedIn}
        <button on:click={toggle}>
            Log out
        </button>
    {:else}
        <button on:click={toggle}>
            Log in
        </button>
    {/if}
    <br>
    3. else if blocks
    {#if x > 10}
        <p>{x} is greater than 10</p>
    {:else if 5 > x}
        <p>{x} is less than 5</p>
    {:else}
        <p>{x} is between 5 and 10</p>
    {/if}
    <br>
    4. each blocks:
    <h1>The Famous Cats of YouTube</h1>
    <ul>
        {#each cats as cat}
            <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
                {cat.name}
            </a></li>
        {/each}
    </ul>
    <br>
    5. keyed each blocks:
    <br>
    <button on:click={handleFruits}>
        Remove next fruit
    </button>
    {#each fruits as fruit (fruit.id)}
        <Fruit name={fruit.name}/>
    {/each}
    <br>
    6. await blocks:
    <br>
    <button on:click={handleRandom}>
        generate random number
    </button>
    {#await promise}
    <p>...waiting</p>
    {:then number}
    <p>the number is {number}</p>
    {:catch error}
    <p style="color: red">{error.message}</p>
    {/await}
    <hr>
</div>