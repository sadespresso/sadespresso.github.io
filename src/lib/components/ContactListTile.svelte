<script lang="ts">
	import Card from './Card.svelte';
	import Flexbox from './Flexbox.svelte';
	import Icon, { type IconData } from './Icon.svelte';
	import Spacer from './Spacer.svelte';

	export let icon: IconData;

	export let disabled = false;
	export let compact = false;
	export let href: string;

	export let flex = 'none';
</script>

{#if !disabled}
	<a {href} rel="noreferrer" target="_blank" class="ContactListTile:Container" class:disabled>
		<Card type="small" {flex}>
			<Flexbox direction="row" align="center" justify="flex-start" rowGap="0.5rem">
				<Icon {icon} />
				{#if !compact}
					<Spacer />
					<slot />
				{/if}
			</Flexbox>
		</Card>
	</a>
{:else}
	<div class="ContactListTile:Container disabled">
		<Card type="small" {flex}>
			<Flexbox direction="row" align="center" justify="flex-start" rowGap="0.5rem">
				<Icon {icon} />
				{#if !compact}
					<Spacer />
				{/if}
			</Flexbox>
		</Card>
	</div>
{/if}

<style>
	.ContactListTile\:Container {
		display: contents;
		font-weight: bold;
	}

	.ContactListTile\:Container.disabled > :global(*) {
		filter: grayscale();
		cursor: not-allowed;
	}
</style>
