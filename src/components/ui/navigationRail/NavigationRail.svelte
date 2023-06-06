<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FabButton from './../buttons/FabButton.svelte';
	import { Menu } from 'lucide-svelte';

	export let hasMenu = false;
	export let floating = false;
  export let actionColor: "primary" | "secondary" | "contrast" | "base" = "primary";

  const dispatch = createEventDispatcher();

	const handleClick = (e: CustomEvent) => {
		dispatch('action', e);
	};
</script>

<div
	class="w-20 rounded-2xl pt-12 2xl:m-4
  {floating ?
		'm-4 bg-base-100 outline outline-1 outline-base-200/50 dark:bg-base-800 dark:outline-none' : 'm-2'} 
    {$$props.class || ''}"
>
	{#if $$slots["action-icon"] || hasMenu}
		<div class="flex flex-col justify-center items-center mb-12">
			{#if hasMenu}
      <div class="flex flex-col justify-center items-center mb-6">
				<Menu class="h-6 w-6" />
      </div>
			{/if}
      {#if $$slots["action-icon"]}
      <FabButton variant="flat" color={actionColor} on:click={handleClick}><slot name="action-icon" /></FabButton>
      {/if}
		</div>
	{/if}
	<slot />
</div>
