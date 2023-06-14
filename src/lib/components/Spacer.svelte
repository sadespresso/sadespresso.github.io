<script lang="ts">
	/** Vertical space (rem) */
	export let v = 1;
	/** Horizontal space (rem) */
	export let h = 1;

	export let expand = false;
</script>

<div style="width:{h}rem;height:{v}rem" class:expand />

<style>
	div.expand {
		flex: 1 0;
		min-width: 100%;
		min-height: 100%;
	}
</style>
