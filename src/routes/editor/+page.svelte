<script lang="ts">
	let innerHtml = '';
  let editor: HTMLDivElement;

	let textBlocks = [
		{
			id: "1",
			type: 'h1',
			content: 'This is your Document',
			order: 0
		},
		{
			id: "2",
			type: 'p',
			content: 'Start typing here...',
			order: 1
		}
	];

	const onKeyPress = (e: KeyboardEvent) => {
		if (e.key === '*') {
      // if nothing is selected, return
      const sel = window.getSelection();
      console.log(sel)
      if (!sel || sel.anchorOffset === sel.focusOffset || editor.contains(sel.anchorNode) === false) {
        console.log('no selection or selection not inside editor')
        return;
      };
      e.preventDefault();
      // warp the selected text in an <em> tag, without using the deprecated execCommand
      const range = sel?.getRangeAt(0);

      console.log(range)

      if (range.startContainer.nodeName == "EM" && range.endContainer.nodeName == "EM" && range.startContainer == range.endContainer) {
        console.log('already wrapped in em. unwrapping...')
        // remove wrapping em and all spans inside of selection
        const em = range.startContainer;
        const text = em.textContent;
        const parent = em.parentNode;
        if (!parent) return;
        if (!text) return;
        const textNode = document.createTextNode(text);
        parent.insertBefore(textNode, range.startContainer);
        parent.removeChild(em);
        // unwrap all spans inside of selection (if any)
        /*const spans = parent.querySelectorAll('span');
        spans.forEach(span => {
          const text = span.textContent;
          if (!text) return;
          const textNode = document.createTextNode(text);
          parent.insertBefore(textNode, span);
          parent.removeChild(span);
        })*/
        range.setStart(textNode, 0);
        range.setEnd(textNode, text.length);
        sel?.removeAllRanges();
        sel?.addRange(range);
        return;
      }

      // if the parent of the selection is an em but the startContainer and endContainer are text, wrap the text in a span
      if (range.startContainer.nodeName == "#text" && range.endContainer.nodeName == "#text" && range.startContainer.parentNode?.nodeName == "EM" && range.endContainer.parentNode?.nodeName == "EM") {
        console.log('selection is inside an em. escaping with a span...')
        // end the em tag at the start of the selection and start a new one at the end of the selection
        const em = range.startContainer.parentNode;
        const parentText = em.textContent;
        const parent = em.parentNode;
        if (!em || !parentText || !parent) return;
        // take the text before the selection and wrap it in an em
        const textBefore = parentText.substring(0, range.startOffset);
        const textBeforeNode = document.createTextNode(textBefore);
        const emBefore = document.createElement('em');
        emBefore.appendChild(textBeforeNode);
        parent.insertBefore(emBefore, em);
        // take the text after the selection and wrap it in an em
        const textAfter = parentText.substring(range.endOffset);
        const textAfterNode = document.createTextNode(textAfter);
        const emAfter = document.createElement('em');
        emAfter.appendChild(textAfterNode);
        console.log(range.endContainer)
        console.log(range.endContainer.nextSibling)
        parent.insertBefore(emAfter, em.nextSibling);
        // insert selection as text node in between the two ems
        const text = sel?.toString() || '';
        const textNode = document.createTextNode(text);
        parent.insertBefore(textNode, emAfter);
        // remove the original em
        parent.removeChild(em);
      range?.selectNodeContents(textNode);
      sel?.removeAllRanges();
      sel?.addRange(range);
        return;
      }

      const em = document.createElement('em');
      em.innerText = sel?.toString() || '';
      range?.deleteContents();
      range?.insertNode(em);
      range?.selectNodeContents(em);
      sel?.removeAllRanges();
      sel?.addRange(range);
		}
	};

  const onInput = (e: any)  => {
    // check if there are any children that has a duplicate id
    // if so, give it a new id
    const children = e.target.children;
    const ids: string[] = [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (ids.includes(child.id)) {
        child.id = Math.round(Math.random() * 100000000).toString();
      }
      ids.push(child.id);
    }
  }
</script>

<div class="p-6">
  <span>tset</span>
	<p class="title" contenteditable="true">This is your Document</p>
	<div contenteditable="true" id="editor" on:keypress={(e) => onKeyPress(e)} bind:this={editor} on:input={onInput}>
		{#each textBlocks as block}
			<svelte:element id="{block.id}" this={block.type}>{block.content}</svelte:element>
		{/each}
	</div>
</div>

<style lang="postcss">
	.title {
		@apply text-4xl font-black;
	}
	h1 {
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
	h2 {
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
	ul {
		@apply list-disc list-inside;
	}

	strong {
		&::before,
		&::after {
			content: '**';
			font-weight: 200;
			opacity: 0.5;
		}
	}

	em {
		&::before,
		&::after {
			content: '*';
			font-weight: 200;
			opacity: 0.5;
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
  span {
    font-style: normal;
  }
</style>
