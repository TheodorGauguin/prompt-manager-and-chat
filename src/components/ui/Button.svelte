<script lang="ts">
	export let variant: 'normal' | 'flat' | 'light' | 'outline' | 'ghost' = 'normal';
	export let color: 'primary' | 'secondary' | 'contrast' | 'base' = 'primary';
	export let disabled: boolean = false;

	// these objects are used to generate the classes for the buttons
	// it CANNOT be optimized through string interpolation because tailwind purges these classes
	const shared = {
		padding: {
			default: 'py-2 px-6',
			'start-icon': 'ps-4',
			'round-icon-button': 'p-2 w-auto aspect-square',
			'end-icon': 'pe-4'
		},
		borderRadius: 'rounded-full',
		transition: 'transition-bg duration-100',
		flex: 'flex items-center justify-center',
		space: 'space-x-2'
	};

	const normal = {
		text: 'text-base-50',
		bg: 'bg-gradient-135',
		from: {
			primary: 'from-primary-500',
			secondary: 'from-secondary-500',
			contrast: 'from-contrast-500',
			base: 'from-base-500'
		},
		to: {
			primary: 'to-secondary-800',
			secondary: 'to-secondary-800',
			contrast: 'to-contrast-800',
			base: 'to-base-700'
		},
		hover: {
			brightness: 'hover:brightness-110 dark:hover:brightness-110',
		},
    active: {
      brightness: 'active:brightness-90 dark:active:brightness-90',
    },
    focus: {
      outline: {
        primary: 'focus-visible:outline-offset-2 focus-visible:outline-primary-700 focus-visible:dark:outline-primary-500',
        secondary: 'focus-visible:outline-offset-2 focus-visible:outline-secondary-700 focus-visible:dark:outline-secondary-500',
        contrast: 'focus-visible:outline-offset-2 focus-visible:outline-contrast-700 focus-visible:dark:outline-contrast-500',
        base: 'focus-visible:outline-offset-2 focus-visible:outline-base-700 focus-visible:dark:outline-base-500',
      },
    }
	};

	const flat = {
		bg: {
			primary: 'bg-primary-700',
			secondary: 'bg-secondary-700',
			contrast: 'bg-contrast-700',
			base: 'bg-base-600'
		},
		text: 'text-base-50',
		hover: {
			brightness: 'hover:brightness-110 dark:hover:brightness-110',
		},
    active: {
      brightness: 'active:brightness-90 dark:active:brightness-90',
    },
    focus: {
      outline: {
        primary: 'focus-visible:outline-offset-2 focus-visible:outline-primary-700 focus-visible:dark:outline-primary-500',
        secondary: 'focus-visible:outline-offset-2 focus-visible:outline-secondary-700 focus-visible:dark:outline-secondary-500',
        contrast: 'focus-visible:outline-offset-2 focus-visible:outline-contrast-700 focus-visible:dark:outline-contrast-500',
        base: 'focus-visible:outline-offset-2 focus-visible:outline-base-700 focus-visible:dark:outline-base-500',
      }
    }
	};

	const light = {
    bg: {
      primary: 'bg-primary-500/20',
      secondary: 'bg-secondary-500/20',
      contrast: 'bg-contrast-500/20',
      base: 'bg-base-500/20'
    },
		text: {
			primary: 'text-primary-600 dark:text-primary-400',
			secondary: 'text-secondary-600 dark:text-secondary-400',
			contrast: 'text-contrast-600 dark:text-contrast-400',
			base: 'text-base-600 dark:text-base-300',
		},
		hover: {
			bg: {
				primary: 'hover:bg-primary-500/40',
				secondary: 'hover:bg-secondary-500/40',
				contrast: 'hover:bg-contrast-500/40',
				base: 'hover:bg-base-500/40'
			}
		},
		active: {
      brightness: "active:brightness-75",
		},
    focus: {
      outline: {
        primary: 'focus-visible:outline-primary-700 focus-visible:dark:outline-primary-500',
        secondary: 'focus-visible:outline-secondary-700 focus-visible:dark:outline-secondary-500',
        contrast: 'focus-visible:outline-contrast-700 focus-visible:dark:outline-contrast-500',
        base: 'focus-visible:outline-base-700 focus-visible:dark:outline-base-500',
      }
    }
	};

	const outline = {
		outline: 'outline outline-1 -outline-offset-1',
		outlineColor: {
			primary: 'outline-base-300 dark:outline-base-500',
			secondary: 'outline-base-300 dark:outline-base-500',
			contrast: 'outline-base-300 dark:outline-base-500',
			base: 'outline-base-300 dark:outline-base-500',
		},
		text: {
			primary: 'text-primary-600 dark:text-primary-400',
			secondary: 'text-secondary-600 dark:text-secondary-400',
			contrast: 'text-contrast-600 dark:text-contrast-400',
			base: 'text-base-600 dark:text-base-300',
		},
		hover: {
			bg: {
				primary: 'hover:bg-base-300/20 hover:dark:bg-base-500/20',
				secondary: 'hover:bg-base-300/20 hover:dark:bg-base-500/20',
				contrast: 'hover:bg-base-300/20 hover:dark:bg-base-500/20',
				base: 'hover:bg-base-300/20 hover:dark:bg-base-500/20',
			}
		},
		active: {
      brightness: "active:brightness-75",
		},
    focus: {
      outline: {
        primary: 'focus-visible:outline-primary-700 focus-visible:dark:outline-primary-500',
        secondary: 'focus-visible:outline-secondary-700 focus-visible:dark:outline-secondary-500',
        contrast: 'focus-visible:outline-contrast-700 focus-visible:dark:outline-contrast-500',
        base: 'focus-visible:outline-base-700 focus-visible:dark:outline-base-500',
      }
    }
	};

	const ghost = {
		bg: 'bg-transparent',
		text: {
			primary: 'text-primary-600 dark:text-primary-400',
			secondary: 'text-secondary-600 dark:text-secondary-400',
			contrast: 'text-contrast-600 dark:text-contrast-400',
			base: 'text-base-600 dark:text-base-300',
		},
		hover: {
			bg: {
				primary: 'hover:bg-primary-500/20',
				secondary: 'hover:bg-secondary-500/20',
				contrast: 'hover:bg-contrast-500/20',
				base: 'hover:bg-base-500/20'
			}
		},
		active: {
      brightness: "active:brightness-75",
		},
    focus: {
      outline: {
        primary: 'focus-visible:outline-primary-700 focus-visible:dark:outline-primary-500',
        secondary: 'focus-visible:outline-secondary-700 focus-visible:dark:outline-secondary-500',
        contrast: 'focus-visible:outline-contrast-700 focus-visible:dark:outline-contrast-500',
        base: 'focus-visible:outline-base-700 focus-visible:dark:outline-base-500',
      }
    }
	};

	const sharedClasses = [
		$$slots['round-icon-button'] ? shared.padding['round-icon-button'] : shared.padding['default'],
		$$slots['start-icon'] ? shared.padding['start-icon'] : null,
		$$slots['end-icon'] ? shared.padding['end-icon'] : null,
		shared.borderRadius,
		shared.flex,
		shared.space,
		shared.transition
	];

	const variantClasses = {
		normal: [
			...sharedClasses,
			normal.bg,
			normal.text,
			normal.from[color],
			normal.to[color],
      normal.hover.brightness,
      normal.active.brightness,
      normal.focus.outline[color],
		],
		flat: [...sharedClasses, flat.text, flat.bg[color], flat.hover.brightness, flat.active.brightness, flat.focus.outline[color]],
		light: [
			...sharedClasses,
			light.bg[color],
			light.text[color],
			light.hover.bg[color],
      light.active.brightness,
      light.focus.outline[color],
		],
		outline: [
			...sharedClasses,
			outline.outline,
			outline.outlineColor[color],
			outline.text[color],
			outline.hover.bg[color],
      outline.active.brightness,
      outline.focus.outline[color],
		],
		ghost: [
			...sharedClasses,
			ghost.bg,
			ghost.text[color],
			ghost.hover.bg[color],
      ghost.active.brightness,
      ghost.focus.outline[color],
		]
	};
</script>

<button
	{disabled}
	class="{variantClasses[variant].join(' ')} {$$props.class || ''}"
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
