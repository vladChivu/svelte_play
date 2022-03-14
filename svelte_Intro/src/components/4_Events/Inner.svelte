<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('message', {
            text: 'Hello'
        });
    }
</script>

<!-- createEventDispatcher must be called when the component is first instantiated —
     you can't do it later inside e.g. a setTimeout callback. This links dispatch to the component instance. -->
<button on:click={sayHello}>
    Click to say hello
</button>