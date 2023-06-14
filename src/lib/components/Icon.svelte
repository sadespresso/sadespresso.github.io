<script context="module" lang="ts">
	export type IconData =
		| 'facebook'
		| 'instagram'
		| 'location'
		| 'octocat'
		| 'twitter'
		| 'web'
		| 'appstore'
		| 'playstore'
		| 'pub-dot-dev'
		| 'email';
</script>

<script lang="ts">
	export let icon: IconData;
	export let size = 2;

	$: style = `font-size: ${size}rem`;
</script>

{#if icon == 'playstore'}
	<img src="/assets/playstore.svg" alt="Google Play Store small logo" {style} />
{:else if icon == 'pub-dot-dev'}
	<img src="/assets/pub-dot-dev.svg" alt="pub.dev small logo" {style} />
{:else}
	<i class="sadespresso-icons" {style}>
		{icon}
	</i>
{/if}

<style>
	img {
		width: 1em;
		height: 1em;
	}
</style>
