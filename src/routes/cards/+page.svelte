<script>
	import { Globe2, Play, Signal, StepBack } from 'lucide-svelte';
import airplaneDuotone from '@iconify/icons-ph/airplane-duotone';
import infoDuotone from '@iconify/icons-ph/info-duotone';
	import Button from '../../components/ui/buttons/Button.svelte';
	import Card from '../../components/ui/card/Card.svelte';
	import CardImage from '../../components/ui/card/CardImage.svelte';
	import Icon from '@iconify/svelte/dist/Icon.svelte';
</script>

<div class="space-y-4 w-[90vw]">
	<Card
		>#thisIsATest
		<Card level={0}>#thisIsATest</Card>
	</Card>

	<div class="flex space-x-4 w-[90vw]">

    <!-- filled cards -->
		<div class="flex-grow space-y-4 w-[30vw]">
			<Card level={1} class="space-y-2">
				<h1 class="text-3xl">Play<br />relaxing songs</h1>
				<p class="text-foreground-muted pb-2">From your recent favorites</p>
				<Card level={2} clickable>#thisIsATest</Card>

				<svelte:fragment slot="actions-right">
					<Button class="h-full" variant="ghost">Cancel</Button>
					<Button class="w-16 h-16"><Play class="w-4 h-4" slot="round-icon-button" /></Button>
				</svelte:fragment>
			</Card>

			<Card level={1} class="space-y-2">
				<h1 class="text-3xl">Trip<br />to <strong>Costa Blanca</strong></h1>
				<p class="text-foreground-muted pb-2">Recommended for you</p>
				<Card level={1} variant="outline" color="contrast" clickable>
					<p class="text-lg">Only today</p>
					<h1 class="text-7xl font-bold text-contrast-700">699€</h1>
					<p class="text-foreground-muted text-sm">Including taxes 19%</p>
					<Card level={2} class="mt-4" variant="filled" color="contrast">
						<p class="">Departure</p>
						<h1 class="text-3xl font-bold">Berlin</h1>
						<p class="">Tegel Airport</p>
					</Card>
				</Card>

				<svelte:fragment slot="actions">
					<Button variant="normal"><Icon icon={airplaneDuotone} class="w-5 h-5" slot="start-icon" /> Book now</Button>
					<Button variant="ghost"><Icon icon={infoDuotone} class="w-5 h-5" slot="start-icon" /> More information</Button>
				</svelte:fragment>
			</Card>
		</div>

    <!-- outlined cards -->
		<div class="flex-grow space-y-4 w-[30vw]">
			<Card level={0} variant="filled" class="space-y-2" color="contrast">
				<h1 class="text-3xl">Play<br />relaxing songs</h1>
				<p class="text-foreground-muted pb-2">From your recent favorites</p>
				<Card level={3} variant="filled">
					<Button><Signal class="h-4 w-4" />Button</Button>
					<Button>Button<Signal class="h-4 w-4" /></Button>
				</Card>

				<svelte:fragment slot="actions-right">
					<Button class="h-full" variant="ghost" color="contrast">Cancel</Button>
					<Button class="w-16 h-16" color="contrast"><Play class="w-4 h-4" slot="round-icon-button" /></Button>
				</svelte:fragment>
			</Card>

			<Card level={1} variant="filled" class="space-y-2">
				<h1 class="text-3xl">Trip<br />to <strong>Costa Blanca</strong></h1>
				<p class="text-foreground-muted pb-2">Recommended for you</p>
				<Card level={1} variant="filled" color="contrast">
					<p class="text-lg">Only today</p>
					<h1 class="text-7xl font-bold text-contrast-800 dark:text-contrast-50">699€</h1>
					<p class="text-foreground-muted dark:text-contrast-200 text-sm">Including taxes 19%</p>

					<Card level={2} variant="filled" class="mt-4 hover:dark:bg-base-900 hover:bg-base-300" clickable={true}>
						<CardImage slot="image" imageUrl="https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_mobile_1x/private/image/Brandenburger_Tor_mehrHimmel_web_0.jpg?itok=rweEPKKX" alt="Berlin" />
						<p class="dark:text-foreground-muted">Departure</p>
						<h1 class="text-3xl font-bold">Berlin</h1>
						<p class="dark:text-foreground-muted">Tegel Airport</p>
					</Card>
				</Card>

				<svelte:fragment slot="actions-right">
					<Button variant="ghost">More information</Button>
					<Button variant="normal"><Globe2 class="w-4 h-4" slot="start-icon" /> Book now</Button>
				</svelte:fragment>
			</Card>
		</div>
		<div class="flex-grow w-[30vw]" />
	</div>
</div>
