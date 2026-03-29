<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { getData, updateData } from '$lib/er.remote';
	let { params } = $props();

	const data = $derived(await getData({ id: Number(params.id) }));
</script>


<!-- This form error -->
<form {...updateData}>
	<Input {...updateData.fields.id.as('number')} value={params.id} type="hidden" />
	<Input {...updateData.fields.title.as('text')} value={data?.title} />
	<button type="submit">Update</button>
</form>


<!-- This form works -->
<form {...updateData}>
    <input {...updateData.fields.id.as('number')} value={data?.id} type="hidden"/>
	<input {...updateData.fields.title.as('text')} value={data?.title} />
	<button type="submit">Update</button>
</form>
