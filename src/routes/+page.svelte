<script lang="ts">
	import { Send, LogOut, Trash } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-dark.css';

	marked.use(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			},
		}),
	);

	marked.options({
		mangle: false,
		headerIds: false,
	})

	type ChatMessage = {
		message: string;
		role: string;
	};

	const messages: ChatMessage[] = [
		{
			message: 'This is a chat message 1 from the llm',
			role: 'Assistant'
		},
		{
			message:
				'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quislorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis',
			role: 'User'
		},
		{
			message: `Test code block
\`\`\`
const highlight = "code";
\`\`\`
`,
			role: 'Assistant'
		},
		{
			message: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis',
			role: 'User'
		}
	];

	let savedMessages: string[] = [];

	const removeFollowingMessages = (i: number) => {
		messages.splice(i + 1, messages.length - i);
	};

	const saveMessage = (message: string) => {
		savedMessages.push(message);
		savedMessages = savedMessages;
	};

	let selection = ``;

	onMount(() => {
		// Once the component is mounted, we can access the document:
		document.addEventListener(`selectionchange`, () => {
			selection = document.getSelection()?.toString() || '';
		});
	});
</script>

<div class="flex h-full">
	<div class="flex flex-col w-full h-full space-y-4">
		<div class="flex-1 bg-gray-900 rounded-3xl flex flex-col p-8 space-y-2 overflow-auto">
			{#each messages as { message, role }, i}
				<div class="group flex items-center space-x-4">
					{#if role == 'Assistant'}
						<div class="rounded-xl p-4 bg-gray-800 w-fit">{@html marked(message)}</div>
					{:else}
						<textarea
							class="w-full h-fit rounded-xl p-4 self-end bg-gray-600"
							bind:value={messages[i].message}
							on:input={() => removeFollowingMessages(i)}
						/>
					{/if}
					<button on:click={() => saveMessage(message)}>
						<LogOut
							class="w-4 h-4 cursor-pointer hidden group-hover:block"
							on:click={() => saveMessage(message)}
						/></button
					>
				</div>
			{/each}
		</div>
		<div>
			<div class="flex w-full rounded-full py-4 px-6 bg-gray-800 text-white items-center">
				<input
					type="text"
					class="flex-1 outline-none bg-transparent text-white"
					placeholder="Type a message..."
				/>
				<Send class="w-6 h-6 cursor-pointer" />
			</div>
		</div>
	</div>

	<div class="w-full max-w-sm rounded-2xl bg-gray-950 p-8">
		<h1 class="text-muted-foreground mb-6">Notepad</h1>
		{#each savedMessages as message, i}
			<div class="bg-gray-800 rounded-xl p-4 mb-4 space-y-2 flex flex-col">
				<p>{message}</p>
				<button
					class="border p-2 rounded-md self-end"
					on:click={() => {
						savedMessages.splice(i, 1);
						savedMessages = savedMessages;
					}}
				>
					<Trash class="h-4 w-4" />
				</button>
			</div>
		{/each}
		<button
			class="border py-2 px-4 rounded-md flex items-center space-x-2"
			class:hidden={selection.toString().length == 0}
			on:click={() => {
				savedMessages = [...savedMessages, selection.toString()];
				selection = '';
			}}
			><LogOut class="h-4 w-4" />
			<p>Add selected Text</p></button
		>
	</div>
</div>
