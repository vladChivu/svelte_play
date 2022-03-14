<script>
    export let name = "Vlad";
    let string = `this string contains some <strong>HTML!</strong>`;
</script>

<!-- NOT OK TO EXPORT FUNCTION IN CURLY PARENTHESIS WITHOUT CALLING FUNCTION -->
<!-- <h1>Hello {name.toUpperCase}!</h1> -->
<!-- function toUpperCase() { [native code] }! -->


<h1>Hello {name.toUpperCase()}!</h1>

<p>{@html string}</p>

<style>
	h1 {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>