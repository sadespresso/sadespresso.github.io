<script lang="ts">
	import type { GlobalValues } from '$lib/css';

	export let direction: 'row' | 'column' = 'row';

	export let expand: boolean | undefined = undefined;

	export let inline: boolean | undefined = undefined;

	export let align: GlobalValues | 'center' | 'stretch' | 'flex-start' | 'flex-end' = 'initial';
	export let justify:
		| GlobalValues
		| 'center'
		| 'stretch'
		| 'flex-start'
		| 'flex-end'
		| 'space-around'
		| 'space-between'
		| 'space-evenly' = 'initial';
	export let wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';
	export let rowGap = 'unset';
	export let colGap = 'unset';
	export let flex = 'none';
</script>

<div
	class:expand
	class:inline
	style="flex-direction:{direction};align-items:{align};justify-content:{justify};flex-wrap:{wrap};row-gap:{rowGap};column-gap:{colGap};flex:{flex}">
	<slot />
</div>

<style>
	div {
		display: flex;
	}

	div.expand {
		width: 100%;
		height: 100%;
	}

	div.inline {
		display: inline-flex;
	}
</style>
