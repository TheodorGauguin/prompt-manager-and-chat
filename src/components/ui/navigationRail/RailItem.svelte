<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	export let title: string;
  export let route: string;
	export let active = $page.url.pathname === route;

  $: active = $page.url.pathname === route;
</script>

<a href={route} class="block mb-3 w-full h-14 group transition-all">
	<div id="rail-item-chip" class="flex h-8 mx-3 justify-center items-center mb-1 rounded-full {active ? 'bg-primary-500/20 group-hover:bg-primary-600/40': 'group-hover:bg-base-400 group-hover:dark:bg-base-700'}">
    {#if !active && $$slots.activeIcon || !$$slots.activeIcon}
    <slot />
    {/if}
    {#if active && $$slots.activeIcon}
      <slot name="activeIcon" />
    {/if}
	</div>
	<p class="text-xs text-center tracking-tighter group-hover:text-base-900 group-hover:dark:text-base-200 {active ? 'text-base-900 dark:text-base-200' : 'text-base-500 dark:text-base-400'}">{title}</p>
</a>

<style lang="postcss">
  a:hover > #rail-item-chip > :global(svg) {
    stroke-width: 2.5px;
  }
</style>