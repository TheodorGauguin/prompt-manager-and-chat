<script lang="ts">
	import { getContext } from "svelte";

  export let imageUrl: string;
  export let alt: string;
  export let aspectRatio: number = -1;

  const insideCard = getContext("insideCard");
  
  if (!insideCard) {
    throw new Error('CardImage must be used inside a Card component');
  }

</script>

{#if imageUrl}
  <img {alt} src={imageUrl} class="w-full rounded-3xl mb-6 {$$props.class || ''}" style="aspect-ratio: {aspectRatio};" />
{/if}
