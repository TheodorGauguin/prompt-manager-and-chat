<script lang="ts">
	export let variant: 'default' | 'flat' | 'light' | 'outline' | 'ghost' = 'default';
	export let color: 'primary' | 'secondary' | 'contrast' | 'base' = 'primary';
	export let disabled: boolean = false;
  
  /** DO NOT DELETE
  list of all tailwind classes that are used. this is necessary to compose the class names without classes being purged
  default:
  from-primary-600 to-secondary-700
  from-secondary-600 to-secondary-700
  from-contrast-600 to-contrast-700
  from-base-600 to-base-700
  flat:
  bg-primary-700
  bg-secondary-700
  bg-contrast-700
  bg-base-700
  light:
  from-primary-500/20 to-primary-500/20 text-primary-400 text-primary-600 text-primary-300 dark:text-primary-400
  from-secondary-500/20 to-secondary-500/20 text-secondary-400 text-secondary-600 text-secondary-300 dark:text-secondary-400
  from-contrast-500/20 to-contrast-500/20 text-contrast-400 text-contrast-600 text-contrast-300 dark:text-contrast-400
  from-base-500/20 to-base-500/20 text-base-300 text-base-400 text-base-500 text-base-600 text-base-700 
  outline:
  border border-1 border-primary-400 text-primary-400 hover:bg-primary-500/20 outline-primary-400
  border border-1 border-secondary-400 text-secondary-400 hover:bg-secondary-500/20 outline-secondary-400
  border border-1 border-contrast-400 text-contrast-400 hover:bg-contrast-500/20 outline-contrast-400
  border border-1 border-base-400 text-base-400 hover:bg-base-500/20 outline-base-400 text-base-300
  ghost:
  text-primary-400 hover:bg-primary-500/20
  text-secondary-400 hover:bg-secondary-500/20
  text-contrast-400 hover:bg-contrast-500/20
  text-base-400 hover:bg-base-500/20
  */

	const commonStyles =
		`${$$slots["round-icon-button"] ? "p-2" : "py-2 px-6"} rounded-full flex items-center justify-center space-x-2 transition-all duration-200`;

	const defaultStyle = `${commonStyles} bg-gradient-135 from-${color}-600 to-${color == "primary" ? "secondary" : color}-700 hover:brightness-90 dark:hover:brightness-75 text-base-50`;
  const flatStyle = `${commonStyles} bg-${color}-700 hover:brightness-90 dark:hover:brightness-75 text-base-50`;
  const lightStyle = `${commonStyles} bg-gradient-135 from-${color}-500/20 to-${color == "primary" ? "secondary" : color}-500/20 text-${color}-600 dark:text-${color == "base" ? "base-300" : color + "-400"} hover:brightness-90 hover:dark:brightness-75`;
  const outlineStyle = `${commonStyles} bg-transparent outline outline-1 -outline-offset-1 outline-base-300 dark:outline-base-700 text-${color == "base" ? "base-500" : color + "-400"} dark:text-${color == "base" ? "base-300" : color + "-400"} hover:bg-base-500/20`;
  const ghostStyle = `${commonStyles} bg-transparent text-${color}-400 hover:bg-${color}-500/20`;

	const selectedStyle = new Map<string,string>([
		["default", defaultStyle],
		["flat", flatStyle],
		["light", lightStyle],
		["outline", outlineStyle],
		["ghost", ghostStyle],
  ]);

</script>

<button
	{disabled}
	class="{selectedStyle.get(variant)} {$$props.class || ''}"
	class:ps-4={$$slots['start-icon']}
	class:pe-4={$$slots['end-icon']}
	class:opacity-50={disabled}
	class:pointer-events-none={disabled}
>
	<slot name="start-icon" />
	<p class="flex items-center justify-center">
    <slot name="round-icon-button" />
		<slot />
	</p>
	<slot name="end-icon" />
</button>
