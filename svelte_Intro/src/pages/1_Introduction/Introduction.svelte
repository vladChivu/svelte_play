<script>
    // I INTRODUCTION
	// We should've given a default value for name here to be displayed in parent component
	// export let name = "VLAD";
	export let name;
	import Data from "../../components/0_Introduction/Data.svelte";
	import Dynamic_attr from "../../components/0_Introduction/Dynamic_attr.svelte";
	function toggleName() {
		if (name === 'world') {
			name = 'Svelte'
		} else {
			name = 'world'
		}
  	}
</script>

<div class="content">
    <hr>
    <b>I INTRODUCTION</b>
    <hr>
    <!-- COMMENTED OUT props in main.js file so now this will be undefined because we have no default exported from here. -->
    <h1>Hello {name}!</h1>
    <button on:click={toggleName}>Toggle name</button>
    <Data/>
    <Dynamic_attr/>
    <hr>
</div>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>