<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import WrappedTranslationMulti from '../../WrappedTranslationMulti.svelte';
	import { PUBLIC_BUILD_TIME_MOMENT_DART_DOWNLOAD_COUNT } from '$env/static/public';

	let downloadsCount = parseInt(PUBLIC_BUILD_TIME_MOMENT_DART_DOWNLOAD_COUNT ?? '8700');

	const humanizeCount = (count: number): string => {
		if (count >= 1e6) {
			return `~${(count / 1e6).toFixed(1)}m`;
		}
		if (count >= 1e3) {
			return `~${(count / 1e3).toFixed(1)}k`;
		}
		return count.toString();
	};

	const formattedDownloadsCount = humanizeCount(downloadsCount);
</script>

<Card type="large">
	<h3>moment_dart</h3>
	<Spacer />
	<p class="expand-width left">
		<WrappedTranslationMulti message={$LL.projects.projects.moment_dart.desc()}>
			<span slot="1">{formattedDownloadsCount}</span>
		</WrappedTranslationMulti>
	</p>
	<Spacer />
	<ContactListTile icon="octocat" href="https://github.com/sadespresso/moment_dart">
		<span>{$LL.projects.seeOnGitHub()}</span>
	</ContactListTile>
	<Spacer />
	<ContactListTile icon="pub-dot-dev" href="https://pub.dev/packages/moment_dart"
		>{$LL.projects.seeOnPubDev()}</ContactListTile>
</Card>
