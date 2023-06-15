<script lang="ts">
	import Spacer from './Spacer.svelte';

	export let id: string;
	export let fullHeight = false;
</script>

<section {id} class="viewboxPadded" class:fullHeight>
	{#if $$slots.title}
		<h2>
			<slot name="title">Lorem Ipsum</slot>
		</h2>
		<Spacer v={2} />
	{/if}
	<slot />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		width: 100%;

		text-align: center;

		/* height: var(--page-height); */
	}

	.fullHeight {
		height: var(--page-height);
	}
</style>
