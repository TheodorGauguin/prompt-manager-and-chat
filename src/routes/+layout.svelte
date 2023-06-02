<script lang="ts">
	import '../app.css';
	import { Trash } from 'lucide-svelte';
</script>

<div class="flex h-screen">
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
	<div class="p-4 pl-0 flex-1">
		<slot />
	</div>
</div>


<style lang="postcss">
</style>
