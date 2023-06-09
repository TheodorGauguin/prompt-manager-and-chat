<script lang="ts">
	let innerHtml = '';
	let editor: HTMLDivElement;
	let previousKeyCombination = '';

	const replaceElementWith = (
		triggeringNode: HTMLElement,
		newNodeType: string,
		keyCombinationLength: number
	) => {
		// change the node to a newNodeType
		const newElement = document.createElement(newNodeType);
		if (triggeringNode.innerHTML.slice(keyCombinationLength) !== '') {
			console.log(
				'triggeringNode.innerHTML.slice(keyCombinationLength)',
				triggeringNode.innerHTML.slice(keyCombinationLength)
			);
			newElement.innerHTML = triggeringNode.innerHTML.slice(keyCombinationLength);
		} else {
			const lineBreak = document.createElement('br');
			newElement.appendChild(lineBreak);
		}
		newElement.id = triggeringNode.id;
		triggeringNode.replaceWith(newElement);
	};

	const elementTransformShortcuts = [
		{
			keyCombination: '#',
			newNodeType: 'h1'
		},
		{
			keyCombination: '##',
			newNodeType: 'h2'
		},
		{
			keyCombination: '###',
			newNodeType: 'h3'
		},
    {
      keyCombination: '-', 
      newNodeType: 'li'
    }
	];

	let textBlocks = [
		{
			id: '1',
			type: 'h1',
			content: 'This is your Document',
			order: 0
		},
		{
			id: '2',
			type: 'p',
			content: 'Start typing here...',
			order: 1
		}
	];

	const onKeyPress = (e: KeyboardEvent) => {
		const potentialMatch = elementTransformShortcuts.find((shortcut) =>
			shortcut.keyCombination.startsWith(previousKeyCombination) || shortcut.keyCombination.startsWith(e.key)
		);
		if (potentialMatch && e.key === ' ') {
			// if type is already the same, do nothing
			const sel = window.getSelection();
			if (sel?.anchorNode?.parentElement?.nodeName.toLowerCase() === potentialMatch.newNodeType) {
        return;
			}
			e.preventDefault();
			const range = sel?.getRangeAt(0);
			if (!range) return;
			// if the cursor is at the beginning of the textblock and the target is a direct child of the editor
      console.log(range.startOffset == potentialMatch.keyCombination.length)
			if (
				range.startOffset == potentialMatch.keyCombination.length &&
				range.startContainer.parentElement?.parentElement == editor
			) {
				if (!sel?.anchorNode?.parentElement) return;
				replaceElementWith(
					sel?.anchorNode?.parentElement,
					potentialMatch.newNodeType,
					potentialMatch.keyCombination.length
				);
			}
			previousKeyCombination = '';
			return;
		}
		if (potentialMatch) {
			previousKeyCombination += e.key;
      console.log("potentialMatch", potentialMatch)
		} else {
			previousKeyCombination = '';
		}
	};

	const onInput = (e: any) => {
		// check if there are any children that has a duplicate id
		// if so, give it a new id
		const children = e.target.children;
		const ids: string[] = [];
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (ids.includes(child.id) || child.id === '') {
				child.id = Math.round(Math.random() * 100000000).toString();
			}
			ids.push(child.id);
		}
	};
</script>

<div class="p-6">
	<span>tset</span>
	<p class="title" contenteditable="true">This is your Document</p>
	<div
		contenteditable="true"
		id="editor"
		on:keypress={(e) => onKeyPress(e)}
		bind:this={editor}
		on:input={onInput}
	>
		{#each textBlocks as block}
			<svelte:element this={block.type} id={block.id}>{block.content}</svelte:element>
		{/each}
	</div>
</div>

<style lang="postcss">
	.title {
		@apply text-4xl font-black;
	}
	#editor :global(h1) {
		@apply text-4xl font-bold mt-8 mb-1 relative opacity-80;
		& + div {
			@apply mt-4;
		}
		&::before {
			content: 'h1';
			font-weight: 200;
			opacity: 0.5;
			font-size: 1rem;
			position: absolute;
			left: -1.5rem;
		}
	}
	#editor :global(h2) {
		@apply text-2xl font-semibold mt-4 mb-1 relative opacity-70;
		&::before {
			content: 'h2';
			font-weight: 200;
			opacity: 0.5;
			font-size: 1rem;
			position: absolute;
			left: -1.5rem;
		}
	}
	#editor :global(ul) {
		@apply list-disc list-inside;
	}

	#editor :global(b) {
		&::before,
		&::after {
			content: '**';
			font-weight: 200;
			opacity: 0.4;
			letter-spacing: -1px;
		}
	}

	#editor :global(i) {
		&::before,
		&::after {
			content: '*';
			font-weight: 200;
			opacity: 0.4;
			letter-spacing: -1px;
		}
	}

	#editor {
		@apply p-5;
		&:active,
		&:focus {
			outline: none;
		}
		& > *:hover {
			&::after {
				content: 'tEst';
				position: absolute;
				right: 0;
				top: 0;
				opacity: 0.5;
				@apply mb-3;
			}
		}
	}
</style>
