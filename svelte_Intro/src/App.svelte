<script>
	// I INTRODUCTION
	// We should've given a default value for name here to be displayed in parent component
	// export let name = "VLAD";
	export let name;
	import Data from "./components/0_Introduction/Data.svelte";
	import Dynamic_attr from "./components/0_Introduction/Dynamic_attr.svelte";
	function toggleName() {
		if (name === 'world') {
			name = 'Svelte'
		} else {
			name = 'world'
		}
  	}

	// II REACTIVITY
	import Reactivity from "./pages/1_Reactivity/Reactivity.svelte";

	// III PROPS
	import Props from "./pages/2_Props/Props.svelte";

	// IV LOGIC
	import Logic from "./pages/3_Logic/Logic.svelte";

	// V EVENTS
	import Events from "./pages/4_Events/Events.svelte";
	
</script>



<main>
	<div class="content">
		<hr>
		<b>I INTRODUCTION</b>
		<hr>
		<!-- COMMENTED OUT props in main.js file so now this will be undefined because we have no default exported from here. -->
		<h1>Hello {name}!</h1>
		<button on:click={toggleName}>Toggle name</button>
		<Data/>
		<Dynamic_attr/>
		<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
		<hr>
	</div>

	<br>
	<br>

	<Reactivity/>

	<br>
	<br>

	<Props/>

	<br>
	<br>

	<Logic/>

	<br>
	<br>

	<Events/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>