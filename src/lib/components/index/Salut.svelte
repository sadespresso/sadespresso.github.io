<script>
	import Section from '../Section.svelte';
	import Spacer from '../Spacer.svelte';
</script>

<Section id="home">
	<img src="/assets/memoji.png" alt="Memoji version of Batmend Ganbaatar" />
	<Spacer v={2} />
	<p>Hi! I'm Batmend Ganbaatar,<br />an aspiring young software developer</p>
</Section>

<style>
	img {
		width: 12rem;
		height: 12rem;
	}

	p {
		font-size: 1.2rem;
	}
</style>
