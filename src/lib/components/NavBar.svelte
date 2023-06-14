<nav class="viewboxPadded">
	<a class="single" href="#home">home</a>
	<a class="single" href="#projects">projects</a>
	<a class="single" href="#contact">contact</a>
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
