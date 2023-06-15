<script>
	import LL from '$lib/i18n/i18n-svelte';
</script>

<nav class="viewboxPadded">
	<a class="single" href="#home">{$LL.home[0]()}</a>
	<a class="single" href="#projects">{$LL.projects[0]()}</a>
	<a class="single" href="#contact">{$LL.contact[0]()}</a>
</nav>

<style>
	nav {
		z-index: 1;

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		font-family: 'Gnomon*', sans-serif;
		font-size: var(--navbar-font-size);
		line-height: var(--navbar-font-size);
		padding: var(--navbar-vertical-padding) var(--viewbox-padding-horizontal);

		background-color: var(--color-accent);

		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
