<script>
	import Card from '$lib/components/Card.svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import XLink from '$lib/components/XLink.svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import WrappedTranslationMulti from '../../WrappedTranslationMulti.svelte';
</script>

<Card type="large">
	<h3>moment_dart</h3>
	<Spacer />
	<p class="expand-width left">
		<WrappedTranslationMulti message={$LL.projects.projects.moment_dart.desc()}>
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
