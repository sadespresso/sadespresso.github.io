<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';

	export let onClick: (() => void) | undefined = undefined;
	export let vertical = false;
</script>

<div class="NavBar:Links" class:vertical>
	<a class="single" on:click={onClick} href="#home">{$LL.home[0]()}</a>
	<a class="single" on:click={onClick} href="#projects">{$LL.projects[0]()}</a>
	<a class="single" on:click={onClick} href="#contact">{$LL.contact[0]()}</a>
</div>

<style>
	.NavBar\:Links {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		column-gap: 2rem;
		row-gap: 1rem;
	}

	.NavBar\:Links.vertical {
		flex-direction: column;
	}

	.NavBar\:Links.vertical > * {
		display: inline-block;

		width: 100%;
		padding: 1rem 1.5rem;

		border-radius: 1rem;

		font-weight: bold;

		background-color: var(--color-accent);
		color: var(--color-primary);
	}
</style>
