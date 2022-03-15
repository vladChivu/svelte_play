<script>
    // III PROPS
	// In any real application, you'll need to pass data from one component down to its children. 
	// To do that, we need to declare properties, generally shortened to 'props'. In Svelte, we do that with the export keyword. 
	import Nested from "../../components/2_Props/Nested.svelte";
	import Info from "../../components/2_Props/Info.svelte";
	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<div class="content">
    <hr>
    <b>III PROPS</b>
    <hr>
    1. declaring:
    <Nested answer={42}/>
    <br>
    2. default value:
    <Nested/>
    <br>
    3. spread props:
    <!-- <Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/> -->
    <Info {...pkg}/>
    <hr>
</div>