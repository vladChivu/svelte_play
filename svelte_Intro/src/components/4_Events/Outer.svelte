<script>
    // One way we could solve the problem is adding createEventDispatcher to Outer.svelte, listening for 
	//	the message event, and creating a handler for it:

    // script
    //     import Inner from './Inner.svelte';
    //     import { createEventDispatcher } from 'svelte';
    //     const dispatch = createEventDispatcher();
    //     function forward(event) {
    //         dispatch('message', event.detail);
    //     }
    // script
    // Inner on:message={forward}

    // But that's a lot of code to write, so Svelte gives us an equivalent shorthand 
    //  — an on:message event directive without a value means 'forward all message events'.

    import Inner from "./Inner.svelte";
</script>

<Inner on:message/>