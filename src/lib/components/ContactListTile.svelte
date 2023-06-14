<script lang="ts">
	import Card from './Card.svelte';
	import Flexbox from './Flexbox.svelte';
	import Icon, { type IconData } from './Icon.svelte';
	import Spacer from './Spacer.svelte';

	export let icon: IconData;

	export let compact = false;
	export let href: string;

	export let flex = 'none';
</script>

<a {href} rel="noreferrer" target="_blank">
	<Card type="small" {flex}>
		<Flexbox direction="row" align="center" rowGap="0.5rem">
			<Icon {icon} />
			{#if !compact}
				<Spacer />
				<slot />
			{/if}
		</Flexbox>
	</Card>
</a>
