<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte';

	export let level: 0 | 1 | 2 | 3 = 1;
	export let color: 'primary' | 'secondary' | 'contrast' | 'base' = 'base';
	export let variant: 'filled' | 'outline' = 'filled';
	export let clickable: boolean = false;

	setContext('insideCard', true);

	const dispatch = createEventDispatcher();

	const handleClick = (event: MouseEvent) => {
		dispatch('click', event);
	};

	const sharedClasses = ['rounded-3xl', 'overflow-hidden'];
	const variantClasses = {
		filled: {
			0: {
				primary: [
					...sharedClasses,
					'bg-primary-50',
					'outline outline-1 outline-primary-100 dark:outline-none',
					'dark:bg-primary-950',
					'text-primary-600',
					'dark:text-primary-200',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'bg-secondary-50',
					'outline outline-1 outline-secondary-100 dark:outline-none',
					'dark:bg-secondary-950',
					'text-secondary-600',
					'dark:text-secondary-200',
					clickable &&
						'cursor-pointer hover:bg-secondary-300 dark:hover:bg-secondary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'bg-contrast-50',
					'outline outline-1 outline-contrast-100 dark:outline-none',
					'dark:bg-contrast-950',
					'text-contrast-600',
					'dark:text-contrast-200',
					clickable &&
						'cursor-pointer hover:bg-contrast-300 dark:hover:bg-contrast-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'bg-base-50',
					'outline outline-1 outline-base-100 dark:outline-none',
					'dark:bg-base-950',
					'text-base-600',
					'dark:text-base-200',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			1: {
				primary: [
					...sharedClasses,
					'bg-primary-100',
					'outline outline-1 outline-base-200/50 dark:outline-none',
					'dark:bg-primary-900',
					'text-primary-700',
					'dark:text-primary-100',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-800 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'bg-secondary-100',
					'outline outline-1 outline-secondary-200/50 dark:outline-none',
					'dark:bg-secondary-900',
					'text-secondary-700',
					'dark:text-secondary-100',
					clickable &&
						'cursor-pointer hover:bg-secondary-300 dark:hover:bg-secondary-800 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'bg-contrast-100',
					'outline outline-1 outline-contrast-200/50 dark:outline-none',
					'dark:bg-contrast-900',
					'text-contrast-700',
					'dark:text-contrast-100',
					clickable &&
						'cursor-pointer hover:bg-contrast-300 dark:hover:bg-contrast-800 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'bg-base-100',
					'outline outline-1 outline-base-200/50 dark:outline-none',
					'dark:bg-base-900',
					'text-base-700',
					'dark:text-base-100',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-800 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			2: {
				primary: [
					...sharedClasses,
					'bg-primary-200',
					'dark:bg-primary-800',
					'text-primary-800',
					'dark:text-primary-50',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-950 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'bg-secondary-200',
					'dark:bg-secondary-800',
					'text-secondary-800',
					'dark:text-secondary-50',
					clickable &&
						'cursor-pointer hover:bg-secondary-300 dark:hover:bg-secondary-950 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'bg-contrast-200',
					'dark:bg-contrast-800',
					'text-contrast-800',
					'dark:text-contrast-50',
					clickable &&
						'cursor-pointer hover:bg-contrast-300 dark:hover:bg-contrast-950 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'bg-base-200',
					'dark:bg-base-800',
					'text-base-800',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			3: {
				primary: [
					...sharedClasses,
					'bg-primary-300',
					'dark:bg-primary-700',
					'text-primary-900',
					'dark:text-primary-50',
					clickable &&
						'cursor-pointer hover:bg-primary-400 dark:hover:bg-primary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'bg-secondary-300',
					'dark:bg-secondary-700',
					'text-secondary-900',
					'dark:text-secondary-50',
					clickable &&
						'cursor-pointer hover:bg-secondary-400 dark:hover:bg-secondary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'bg-contrast-300',
					'dark:bg-contrast-700',
					'text-contrast-900',
					'dark:text-contrast-50',
					clickable &&
						'cursor-pointer hover:bg-contrast-400 dark:hover:bg-contrast-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'bg-base-300',
					'dark:bg-base-700',
					'text-base-900',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:bg-primary-400 dark:hover:bg-primary-900 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			}
		},
		outline: {
			0: {
				primary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-primary-700',
					'text-base-600',
					'dark:text-base-200',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-secondary-700',
					'text-base-600',
					'dark:text-base-200',
					clickable &&
						'cursor-pointer hover:outline-secondary-900 dark:hover:outline-secondary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-contrast-700',
					'text-base-600',
					'dark:text-base-200',
					clickable &&
						'cursor-pointer hover:outline-contrast-900 dark:hover:outline-contrast-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-base-700',
					'text-base-600',
					'dark:text-base-200',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			1: {
				primary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-primary-600',
					'text-base-700',
					'dark:text-base-100',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-secondary-600',
					'text-base-700',
					'dark:text-base-100',
					clickable &&
						'cursor-pointer hover:outline-secondary-900 dark:hover:outline-secondary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-contrast-600',
					'text-base-700',
					'dark:text-base-100',
					clickable &&
						'cursor-pointer hover:outline-contrast-900 dark:hover:outline-contrast-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-base-600',
					'text-base-700',
					'dark:text-base-100',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			2: {
				primary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-primary-500',
					'text-base-800',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-secondary-500',
					'text-base-800',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-secondary-900 dark:hover:outline-secondary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-contrast-500',
					'text-base-800',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-contrast-900 dark:hover:outline-contrast-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-base-500',
					'text-base-800',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			},
			3: {
				primary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-primary-400',
					'text-base-900',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				secondary: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-secondary-400',
					'text-base-900',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-secondary-900 dark:hover:outline-secondary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				contrast: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-contrast-400',
					'text-base-900',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-contrast-900 dark:hover:outline-contrast-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				],
				base: [
					...sharedClasses,
					'outline',
					'-outline-offset-1',
					'outline-1',
					'outline-base-400',
					'text-base-900',
					'dark:text-base-50',
					clickable &&
						'cursor-pointer hover:outline-primary-900 dark:hover:outline-primary-500 transition-all duration-200 ease-in-out hover:rounded-[2.5rem]'
				]
			}
		}
	};
</script>

<div
	class="{variantClasses[variant][level][color].join(' ')} {$$slots.image
		? ''
		: 'p-8'} {$$props.class || ''}"
		on:click={handleClick}
		on:keydown={undefined}
>
	<slot name="image" />
	<div class={$$slots.image ? 'p-8 pt-0' : ''}>
		<slot />
		{#if $$slots['actions-right'] || $$slots.actions}
			<div
				id="actions"
				class="flex w-full {$$slots['actions-right']
					? 'justify-end'
					: ''} mt-6 space-x-2 items-center"
			>
				<slot name="actions-right" />
				<slot name="actions" />
			</div>
		{/if}
	</div>
</div>

<style>
	#actions {
		@apply mt-6;
	}
</style>
