<script lang="ts">
	import { resolve } from '$app/paths';
	import {  getAllData } from '$lib/er.remote';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<br />


{#each await getAllData() as item(item.id)}
   <p><a class="text-blue-500 underline" href={resolve("/data/[id]", { id: item.id.toString() })}>{item.id} - {item.title}</a></p>
{/each}