<script>
	import Section from '$lib/components/Section.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<Section id="home" fullHeight>
	<img src="/assets/memoji.png" alt="Memoji version of Batmend Ganbaatar" />
	<Spacer v={2} />
	<p class="center">
		{$LL.home.hello()}
	</p>
	<p>
		📍
		{$LL.home.basedIn()}
	</p>
	<Spacer v={4} />
</Section>

<style>
	:global(#home) {
		margin: auto 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	img {
		width: 12rem;
		height: 12rem;
	}

	p {
		font-size: 1.2rem;
	}
</style>
