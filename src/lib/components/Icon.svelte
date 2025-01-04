<script context="module" lang="ts">
	export type IconData =
		| 'facebook'
		| 'instagram'
		| 'location'
		| 'octocat'
		| 'bluesky'
		| 'bsky'
		| 'discord'
		| 'web'
		| 'menu'
		| 'appstore'
		| '🐨'
		| 'kofi'
		| 'googleplay'
		| 'pub-dot-dev'
		| 'email';
</script>

<script lang="ts">
	export let icon: IconData;
	export let size = 2;

	$: style = `font-size: ${size}rem; font-family: 'sadespresso-Icons' !important;`;
</script>

{#if icon == 'pub-dot-dev'}
	<img src="/assets/pub-dot-dev.svg" alt="pub.dev small logo" {style} />
{:else}
	<span class="sadespresso-icons" {style}>
		{icon}
	</span>
{/if}

<style>
	img {
		width: 1em;
		height: 1em;
	}

	span {
		font-style: normal !important;
		font-weight: normal !important;
	}
</style>
