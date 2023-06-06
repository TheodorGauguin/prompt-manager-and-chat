<script lang="ts">
	import mouseSimpleIcon from '@iconify/icons-ph/mouse-simple';
	import mouseSimpleFill from '@iconify/icons-ph/mouse-simple-fill';
import bugDuotone from '@iconify/icons-ph/bug-duotone';
	import chatIcon from '@iconify/icons-ph/chat';
	import chatFill from '@iconify/icons-ph/chat-fill';
	import rectangleIcon from '@iconify/icons-ph/rectangle';
	import rectangleFill from '@iconify/icons-ph/rectangle-fill';
	import paperPlaneTiltDuotone from '@iconify/icons-ph/paper-plane-tilt-duotone';
	import houseIcon from '@iconify/icons-ph/house';
	import houseFill from '@iconify/icons-ph/house-fill';
	import RailItem from './../components/ui/navigationRail/RailItem.svelte';
	import '../app.css';
	import NavigationRail from '../components/ui/navigationRail/NavigationRail.svelte';
	import Icon from '@iconify/svelte/dist/Icon.svelte';
</script>

<div class="flex h-screen w-screen">
	<!--
	<div class="w-full max-w-xs rounded-2xl m-4 bg-base-900 p-8">
		<h1 class="text-foreground-muted mb-6">History</h1>
		<button class="bg-gradient-135 from-primary-500 to-secondary-600 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="bg-inherit hover:brightness-150 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="bg-inherit hover:brightness-150 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="bg-inherit hover:brightness-150 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
	</div>	
-->
	<NavigationRail on:action={(e) => console.log("action clicked")} hasMenu floating>
		<svelte:fragment slot="action-icon">
			<Icon icon={paperPlaneTiltDuotone} class="h-7 w-7" />
		</svelte:fragment>
		<RailItem title="Home" route="/">
			<Icon icon={houseIcon} class="h-6 w-6" />
			<Icon slot="activeIcon" icon={houseFill} class="h-6 w-6" />
		</RailItem>
		<RailItem title="Chat" route="/chat">
			<Icon icon={chatIcon} class="h-6 w-6" />
			<Icon slot="activeIcon" icon={chatFill} class="h-6 w-6" />
		</RailItem>
		<RailItem title="Cards" route="/cards">
			<Icon icon={rectangleIcon} class="h-6 w-6" />
			<Icon slot="activeIcon" icon={rectangleFill} class="h-6 w-6" />
		</RailItem>
		<RailItem title="Buttons" route="/buttons">
			<Icon icon={mouseSimpleIcon} class="h-6 w-6" />
			<Icon slot="activeIcon" icon={mouseSimpleFill} class="h-6 w-6" />
		</RailItem>
	</NavigationRail>
	<div class="p-4 pl-0 flex-1">
		<slot />
	</div>
</div>

<style lang="postcss">
</style>
