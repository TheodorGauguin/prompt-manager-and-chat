<script lang="ts">
	const commonStyles = ' py-2 px-6 rounded-full flex items-center justify-center space-x-2 transition-all duration-200 ';

	const defaultStyles =
		commonStyles + 'bg-gradient-135 from-primary-600 to-secondary-700 hover:brightness-75';
	const flatStyle = commonStyles + 'bg-primary-700 hover:brightness-75';
	const lightStyle =
		commonStyles +
		'bg-gradient-135 from-primary-500/30 to-secondary-500/30 text-primary-400 hover:brightness-75';
	const outlineStyle =
		commonStyles +
		'bg-transparent border border-1 border-base-400 text-primary-500 hover:brightness-150';
	const ghostStyle = commonStyles + 'bg-transparent text-primary-500 hover:bg-primary-500/30';

	export let variant: 'default' | 'flat' | 'light' | 'outline' | 'ghost' = 'default';

	export let disabled: boolean = false;

	const selectedStyle = () => {
		switch (variant) {
			case 'default':
				return defaultStyles;
			case 'flat':
				return flatStyle;
			case 'light':
				return lightStyle;
			case 'outline':
				return outlineStyle;
			case 'ghost':
				return ghostStyle;
		}
	};
</script>

<button
	{disabled}
	class={selectedStyle() + ' ' + $$props.class}
	class:ps-4={$$slots['start-icon']}
	class:pe-4={$$slots['end-icon']}
  class:opacity-50={disabled}
  class:pointer-events-none={disabled}
>
	<slot name="start-icon" />
	<p>
		<slot />
	</p>
	<slot name="end-icon" />
</button>

