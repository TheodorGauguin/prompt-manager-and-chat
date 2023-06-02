<script lang="ts">
	import '../app.css';
	import { Trash } from 'lucide-svelte';
</script>

<div class="flex h-screen">
	<div class="w-full max-w-xs rounded-2xl m-4 bg-gray-900 p-8">
		<h1 class="text-muted-foreground mb-6">History</h1>
		<button class="bg-gray-700 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="hover:bg-gray-800 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="hover:bg-gray-800 group w-full text-left p-4 pe-6 rounded-full flex items-center">
			<p class="flex-1">You are here</p>
			<Trash class="w-4 h-4 hidden group-hover:block" />
		</button>
		<button class="hover:bg-gray-800 group w-full text-left p-4 pe-6 rounded-full flex items-center">
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
