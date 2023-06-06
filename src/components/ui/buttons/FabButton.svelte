<script lang="ts">
	import { createEventDispatcher } from "svelte";


  export let variant: "flat" | "raised" = "raised";
  export let color: "primary" | "secondary" | "contrast" | "base" = "primary";
  export let size: "small" | "normal" | "large" = "normal";

  let colorClasses = {
    primary: "bg-gradient-135 from-primary-500 to-secondary-600 hover:bg-primary-600",
    secondary: "bg-secondary-500 hover:bg-secondary-600",
    contrast: "bg-contrast-500 hover:bg-contrast-600",
    base: "bg-base-500 hover:bg-base-600",
  };

  let sizeClasses = {
    small: "w-10 h-10 rounded-xl",
    normal: "w-16 h-16 rounded-2xl",
    large: "w-24 h-24 rounded-[28px]",
  }

  let variantClasses = {
    flat: "shadow-none",
    raised: "shadow-md m-4",
  }

  const dispatch = createEventDispatcher();

	const handleClick = (e: MouseEvent) => {
		dispatch('click', e);
	};
</script>

<button class="flex flex-col justify-center items-center {colorClasses[color]} {sizeClasses[size]} {variantClasses[variant]} {$$props.class || ''}" on:click={handleClick}>
  <slot />
</button>