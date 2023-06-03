<script>
	import { Plus, PlusCircle, Send, Share } from 'lucide-svelte';
import Button from './../../components/ui/Button.svelte';
</script>

<h1 class="text-4xl mt-12 mb-6 text-bold">No icons</h1>
<div class="flex space-x-4 items-center">
	<p>Default:</p>
	<Button>Button</Button>
	<p>Flat:</p>
	<Button variant="flat">Button</Button>
	<p>Light:</p>
	<Button variant="light">Button</Button>
	<p>Outline:</p>
	<Button variant="outline">Button</Button>
	<p>Ghost:</p>
	<Button variant="ghost">Button</Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">With icons</h1>
<div class="flex space-x-4 items-center">
	<p>Default:</p>
	<Button><PlusCircle class="w-4 h-4" slot="start-icon" />Button</Button>
	<p>Flat:</p>
	<Button variant="flat">Button<Send class="w-4 h-4" slot="end-icon" /></Button>
	<p>Light:</p>
	<Button variant="light">Button<Send class="w-4 h-4" slot="end-icon" /><Share class="w-4 h-4" slot="start-icon" /></Button>
	<p>Outline:</p>
	<Button variant="outline"><PlusCircle class="w-4 h-4" slot="start-icon" />Button</Button>
	<p>Ghost:</p>
	<Button variant="ghost">Button<Send class="w-4 h-4" slot="end-icon" /></Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">Icon buttons</h1>
<div class="flex space-x-4 items-center">
  <p>Default:</p>
  <Button><Plus class="w-6 h-6" slot="round-icon-button" /></Button>
  <p>Flat:</p>
  <Button variant="flat"><Plus class="w-6 h-6" slot="round-icon-button" /></Button>
  <p>Light:</p>
  <Button variant="light"><Plus class="w-6 h-6" slot="round-icon-button" /></Button>
  <p>Outline:</p>
  <Button variant="outline"><Plus class="w-6 h-6" slot="round-icon-button" /></Button>
  <p>Ghost:</p>
  <Button variant="ghost"><Plus class="w-6 h-6" slot="round-icon-button" /></Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">Disabled</h1>
<div class="flex space-x-4 items-center">
  <p>Default:</p>
  <Button disabled>Button</Button>
  <p>Flat:</p>
  <Button variant="flat" disabled>Button</Button>
  <p>Light:</p>
  <Button variant="light" disabled>Button</Button>
  <p>Outline:</p>
  <Button variant="outline" disabled>Button</Button>
  <p>Ghost:</p>
  <Button variant="ghost" disabled>Button</Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">Secondary</h1>
<div class="flex space-x-4 items-center">
  <p>Default:</p>
  <Button color="secondary">Button</Button>
  <p>Flat:</p>
  <Button variant="flat" color="secondary">Button</Button>
  <p>Light:</p>
  <Button variant="light" color="secondary">Button</Button>
  <p>Outline:</p>
  <Button variant="outline" color="secondary">Button</Button>
  <p>Ghost:</p>
  <Button variant="ghost" color="secondary">Button</Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">Contrast</h1>
<div class="flex space-x-4 items-center">
  <p>Default:</p>
  <Button color="contrast">Button</Button>
  <p>Flat:</p>
  <Button variant="flat" color="contrast">Button</Button>
  <p>Light:</p>
  <Button variant="light" color="contrast">Button</Button>
  <p>Outline:</p>
  <Button variant="outline" color="contrast">Button</Button>
  <p>Ghost:</p>
  <Button variant="ghost" color="contrast">Button</Button>
</div>

<h1 class="text-4xl mt-12 mb-6 text-bold">Base</h1>
<div class="flex space-x-4 items-center">
  <p>Default:</p>
  <Button color="base">Button</Button>
  <p>Flat:</p>
  <Button variant="flat" color="base">Button</Button>
  <p>Light:</p>
  <Button variant="light" color="base">Button</Button>
  <p>Outline:</p>
  <Button variant="outline" color="base">Button</Button>
  <p>Ghost:</p>
  <Button variant="ghost" color="base">Button</Button>
</div>

<div class="flex justify-center items-center">

<Button color="primary">Test</Button>
<Button variant="outline" color="base">Test</Button>
</div>