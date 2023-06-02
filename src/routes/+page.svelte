<script lang="ts">
	import { Send, LogOut, Trash, Share } from 'lucide-svelte';
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
			}
		})
	);

	marked.options({
		mangle: false,
		headerIds: false
	});

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
		},
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
		},
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
		},
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

	const resizeToFit = (e: any) => {
		const target = e.target;
		target.style.height = 'auto';
		target.style.height = target.scrollHeight + 'px';
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
		const allTextAreas = document.getElementsByTagName('textarea');
		for (let i = 0; i < allTextAreas.length; i++) {
			resizeToFit({ target: allTextAreas[i] });
		}
	});
</script>

<div class="flex h-full">
	<div class="flex flex-col w-full h-full space-y-4">
		<div class="rounded-full bg-base-800 w-full p-8 flex relative">
			<div class="absolute inset-0 flex justify-center items-center">
				<span class="text-xl">This Chat is a test Chat.</span>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center justify-center">
				<button class="w-16 h-12 flex items-center justify-center"><Share class="w-6 h-6" /></button
				>
			</div>
		</div>
		<div class="flex-1 rounded-3xl flex flex-col px-8 space-y-4 overflow-auto">
			{#each messages as { message, role }, i}
				<div class="group flex items-center space-x-4">
					{#if role == 'Assistant'}
						<div class="flex flex-col w-full p-4 space-y-4">
							<div class="flex justify-between">
								<p class="text-contrast-600">{role}</p>
								<button on:click={() => saveMessage(message)}>
									<LogOut
										class="w-4 h-4 cursor-pointer hidden group-hover:block"
										on:click={() => saveMessage(message)}
									/></button
								>
							</div>
							<div>{@html marked(message)}</div>
						</div>
					{:else}
						<div class="flex flex-col w-full p-4 space-y-4 rounded-xl bg-base-900">
							<div class="flex justify-between">
								<p class="text-primary-600 flex-grow">{role}</p>
								<button on:click={() => saveMessage(message)}>
									<LogOut
										class="w-4 h-4 cursor-pointer hidden group-hover:block"
										on:click={() => saveMessage(message)}
									/></button
								>
							</div>
							<textarea
								class="w-full bg-base-900 resize-none"
								bind:value={messages[i].message}
								on:input={(e) => {
									removeFollowingMessages(i);
									resizeToFit(e);
								}}
							/>
						</div>
					{/if}
				</div>
			{/each}
		</div>
		<div class="px-8">
			<div class="flex w-full rounded-full ps-6 pe-2 bg-base-800 text-white items-center">
				<input
					type="text"
					class="flex-1 outline-none bg-transparent text-white py-4"
					placeholder="Type a message..."
				/>
				<button class="bg-gradient-to-br from-primary-600 to-secondary-700 p-3 m-1 rounded-full"
					><Send class="w-4 h-4" /></button
				>
			</div>
		</div>
	</div>

	<div class="w-full h-full overflow-auto max-w-sm rounded-2xl p-8 font-handwritten space-y-4">
		<h1 class="text-foreground-muted mb-4">Notepad</h1>
		{#each savedMessages as message, i}
			<div class="bg-base-950 flex flex-col group relative">
				<p class="group-hover:blur-sm">{message}</p>
				<button
					class="absolute w-full h-full hidden group-hover:flex items-center justify-center"
					on:click={() => {
						savedMessages.splice(i, 1);
						savedMessages = savedMessages;
					}}
				>
					<Trash class="h-8 w-8" />
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
