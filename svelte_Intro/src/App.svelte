<script>
	// I INTRODUCTION
	import Introduction from "./pages/1_Introduction/Introduction.svelte";

	// II REACTIVITY
	import Reactivity from "./pages/2_Reactivity/Reactivity.svelte";

	// III PROPS
	import Props from "./pages/3_Props/Props.svelte";

	// IV LOGIC
	import Logic from "./pages/4_Logic/Logic.svelte";

	// V EVENTS
	import Events from "./pages/5_Events/Events.svelte";
	
	import { Router, Route, Link } from "svelte-navigator";
</script>


<Router>
	<header>
	  <nav>
		<Link to="/">Introduction</Link>
		<Link to="/reactivity">Reactivity</Link>
		<Link to="/props">Props</Link>
		<Link to="/logic">Logic</Link>
		<Link to="/events">Events</Link>
	  </nav>
	</header>

	<main>
		<div>
			<Route path="/" component={Introduction}/>
		</div>
		<div>
			<Route path="reactivity" component={Reactivity}/>
		</div>
		<div>
			<Route path="props" component={Props}/>
		</div>
		<div>
			<Route path="logic" component={Logic}/>
		</div>
		<div>
			<Route path="events" component={Events}/>
		</div>
	</main>	
</Router>
  
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>