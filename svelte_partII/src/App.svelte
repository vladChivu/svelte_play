<script>
	import Binding from "./components/bindings/Binding.svelte";
	import Checkbox from "./components/bindings/Checkbox.svelte";
	import MultipleChoices from "./components/bindings/MultipleChoices.svelte";
	import Timer from "./components/lifecycle/Timer.svelte";
	import Mounting from "./components/lifecycle/Mounting.svelte";
	import Counter from "./components/store/Counter.svelte";
import Time from "./components/store/Time.svelte";
import Storebinding from "./components/store/Storebinding.svelte";
	// import Autoscroll from "./components/lifecycle/Autoscroll.svelte";

	// Lifecycle
	let open = true;
	let seconds = 0;
	const toggle = () => (open = !open);
	const handleTick = () => (seconds += 1);
</script>

<main>
	<h3>Binding</h3>
	<Binding/>
	<hr>
	<h3>Checkbox</h3>
	<Checkbox/>
	<hr>
	<h3>Multiple Choices</h3>
	<MultipleChoices/>
	<hr>
	<h3>Lifecycle, onMounting</h3>
	<Mounting/>
	<hr>
	<h3>Lifecycle, onDestroy</h3>
	<div>
		<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
		<p>
			The Timer component has been open for
			{seconds} {seconds === 1 ? 'second' : 'seconds'}
		</p>
		{#if open}
		<Timer callback={handleTick} />
		{/if}
	</div>
	<hr>
	<!-- <h3>Lifecycle, beforeUpdate</h3> -->
	<!-- <Autoscroll/> -->
	<h3>Store</h3>
	<Counter/>
	<hr>
	<Time/>
	<hr>
	<h3>Store bindings</h3>
	<Storebinding/>
</main>

<style>
</style>