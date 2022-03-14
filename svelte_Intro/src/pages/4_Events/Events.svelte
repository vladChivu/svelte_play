<script>
    // V EVENTS
	// 1. DOM events
	let m = {x: 0, y: 0};
	function handleMouseMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
	// 3. event modifiers
	// DOM event handlers can have modifiers that alter their behaviour.
	function handleClick() {
		alert('clicked');
	}
	// 4. component events
	// Components can also dispatch events. To do so, they must create an event dispatcher
	import Inner from "../../components/4_Events/Inner.svelte";
	function handleMessage(event) {
		alert(event.detail.text);
	}
	// 5. event forwarding
	// Unlike DOM events, component events don't bubble. If you want to listen to an event on some 
	//	deeply nested component, the intermediate components must forward the event.
	// In this case, we have the same App.svelte and Inner.svelte as in the previous chapter, 
	//	but there's now an Outer.svelte component that contains <Inner/>.
	import Outer from "../../components/4_Events/Outer.svelte";
	// 6. DOM event forwarding
	// Event forwarding works for DOM events too.
	// We want to get notified of clicks on our <CustomButton> — to do that, we just need to 
	//	forward click events on the <button> element in CustomButton.svelte:
	import CustomButton from "../../components/4_Events/CustomButton.svelte";
</script>

<div class="content">
    <hr>
        <b>V EVENTS</b>
    <hr>
    1. DOM events:
    <br>
    <div style="width: 100%; height: 100%;" on:mousemove={handleMouseMove}>
        IF YOU HOVER HERE PLEASE
        <br>
        The mouse position is  {m.x} x {m.y}
    </div>
    <br>
    2. inline handlers:
    <div style="width: 100%; height: 100%;" on:mousemove="{e => m = {x: e.clientX, y: e.clientY }}">
        IF YOU HOVER HERE PLEASE
        <br>
        The mouse position is  {m.x} x {m.y}
    </div>
    <br>
    3. event modifiers:
    <br>
    <button on:click|once={handleClick}>
        Click me
    </button>
    <br>
    4. component events:
    <!-- Notice that the App component is listening to the messages dispatched by Inner component thanks to the 
    on:message directive. This directive is an attribute prefixed with on: followed by the event name 
    that we are dispatching (in this case, message).
    Without this attribute, messages would still be dispatched, but the App would not react to it. -->
    <br>
    <Inner on:message={handleMessage}/>
    <br>
    5. event forwarding:
    <br>
    <Outer on:message={handleMessage}/>
    <br>
    6. DOM event forwarding
    <br>
    <CustomButton on:click={handleClick}/>
    <hr>
</div>