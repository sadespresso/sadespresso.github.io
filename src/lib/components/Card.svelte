<script lang="ts">
	export let type: 'large' | 'medium' | 'small';

	export let flex = 'none';
</script>

<div class="Card {type}" style="flex:{flex}">
	<slot />
</div>

<style>
	.Card {
		background-color: var(--color-accent);
		text-align: left;
	}

	.Card :global(h1),
	.Card :global(h2),
	.Card :global(h3),
	.Card :global(h4),
	.Card :global(h5),
	.Card :global(h6) {
		text-align: center;
	}

	.Card :global(.Card) {
		background-color: var(--color-background);
	}

	.Card.large {
		padding: 2rem;
		border-radius: 4rem;
	}

	.Card.medium {
		padding: 1rem;
		border-radius: 2rem;
	}

	.Card.small {
		padding: 1rem;
		border-radius: 1rem;
	}
</style>
