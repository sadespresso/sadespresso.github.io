<script lang="ts">
	import Icon, { type IconData } from './Icon.svelte';

	export let icon: IconData;
	export let classNames = '';

	export let fontSize = '1.5rem';
</script>

<button on:click on:dblclick style="font-size:{fontSize}" class={classNames}>
	<Icon {icon} />
</button>

<style>
	button {
		padding: 0;
		margin: 0;
		border: none;
		border-radius: 50%;
		background-color: transparent;
	}

	button:focus-visible {
		outline: 2px solid var(--color-primary);
	}
</style>
