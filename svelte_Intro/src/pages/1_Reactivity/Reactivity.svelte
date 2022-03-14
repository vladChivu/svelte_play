<script>
    // II REACTIVITY
	// 1. assignment
	let count = 0;
	function incrementCount() {
		count += 1;
	}
	// 2. declaration
	$: doubled = count * 2;
	// 3. statement
	// We're not limited to declaring reactive values — we can also run arbitrary statements reactively
	$: if (count >= 10) {
		console.log(`the count is ` + count);
		alert(`I SAID THE COUNT IS ` + count)	
	}
	// 4. updating arrays and objects
	let numbers = [1, 2, 3, 4]
	function addNumber() {
		// numbers.push(numbers.length + 1);
		// numbers = numbers;
		numbers = [...numbers, numbers.length + 1];
	}
	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<div class="content">
    <hr>
    <b>II REACTIVITY</b>
    <hr>
    1. assignment:
    <br>
    <button on:click={incrementCount}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
    <br>
    2. declaration:
    <p>{count} doubled is {doubled}</p>
    <br>
    4. updating arrays and objects:
    <p>{numbers.join(' + ')} = {sum}</p>
    <button on:click={addNumber}>
        Add a number
    </button>
    <hr>
</div>