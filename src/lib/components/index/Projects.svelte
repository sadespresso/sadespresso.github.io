<script>
	import LL from '$lib/i18n/i18n-svelte';
	import Flexbox from '$lib/components/Flexbox.svelte';
	import Section from '$lib/components/Section.svelte';
	import Cuko from './Projects/Cuko.svelte';
	import GegeeGuitar from './Projects/GegeeGuitar.svelte';
	import MomentDart from './Projects/MomentDart.svelte';
</script>

<Section id="projects">
	<span slot="title">{$LL.projects.title()}</span>

	<Flexbox direction={'row'} rowGap="2rem" colGap="2rem" expand>
		<GegeeGuitar />
		<Flexbox direction={'column'} rowGap="2rem" colGap="2rem" flex="1">
			<MomentDart />
			<Cuko />
		</Flexbox>
	</Flexbox>
</Section>
