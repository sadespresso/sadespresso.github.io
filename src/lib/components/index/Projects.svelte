<script>
	import LL from '$lib/i18n/i18n-svelte';
	import Section from '$lib/components/Section.svelte';
	import Cuko from './Projects/Cuko.svelte';
	import GegeeGuitar from './Projects/GegeeGuitar.svelte';
	import MomentDart from './Projects/MomentDart.svelte';
</script>

<Section id="projects">
	<span slot="title">{$LL.projects.title()}</span>

	<div class="gridbox">
		<GegeeGuitar />
		<MomentDart />
		<Cuko />
	</div>
</Section>

<style>
	.gridbox {
		display: grid;

		grid-template-areas:
			'GegeeGuitar moment_dart'
			'GegeeGuitar cuko';
		grid-template-columns: 1fr 1fr;

		gap: 2rem;
	}

	.gridbox > :global(*) {
		flex: 1 0;
	}

	.gridbox > :global(*):nth-child(1) {
		grid-area: GegeeGuitar;
	}
	.gridbox > :global(*):nth-child(2) {
		grid-area: moment_dart;
	}
	.gridbox > :global(*):nth-child(3) {
		grid-area: cuko;
	}

	@media only screen and (max-width: 768px) {
		.gridbox {
			grid-template-areas:
				'GegeeGuitar'
				'moment_dart'
				'cuko';
			grid-template-columns: 1fr;
		}
	}
</style>
