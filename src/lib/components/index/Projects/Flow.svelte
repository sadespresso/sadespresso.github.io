<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import Flexbox from '$lib/components/Flexbox.svelte';
	import Group from '$lib/components/Group.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import XLink from '$lib/components/XLink.svelte';
	import WrappedTranslation from '$lib/components/WrappedTranslation.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<Card type="large">
	<Flexbox direction="column" justify="space-between">
		<Group>
			<h3>
				<img id="flow-logo" src="/assets/flow.png" alt="Flow logo" width="32" />
				Flow
			</h3>
			<Spacer />
			<p class="left expand-width">
				<WrappedTranslation message={$LL.projects.projects.flow.desc()}>
					<XLink href="https://flutter.dev/">Flutter</XLink>
				</WrappedTranslation>
			</p>
		</Group>
		<Spacer />
		<Flexbox direction="column" rowGap="1rem" colGap="1rem" justify="flex-end">
			<Flexbox direction="row" colGap="1rem" rowGap="1rem" expand>
				<ContactListTile
					icon="googleplay"
					href="https://play.google.com/store/apps/details?id=mn.flow.flow?utm_source=sadespresso_web"
					flex="1">
					<span style="width: 8ch; flex-grow: 1;">Play Store</span>
				</ContactListTile>
				<ContactListTile
					icon="appstore"
					href="https://apps.apple.com/mn/app/flow-expense-tracker/id6477741670?utm_source=sadespresso_web"
					flex="1">
					<span style="width: 8ch; flex-grow: 1;">App Store</span>
				</ContactListTile>
			</Flexbox>
			<ContactListTile icon="octocat" href="https://github.com/flow-mn/flow">
				<span>Visit project GitHub</span>
			</ContactListTile>
			<ContactListTile icon="discord" href="https://discord.gg/Ndh9VDeZa4">
				<span>Join Flow Discord</span>
			</ContactListTile>
			<ContactListTile icon="buymeacoffee" href="https://buymeacoffee.com/sadespresso">
				<span>Buy me a coffee</span>
			</ContactListTile>
		</Flexbox>
	</Flexbox>
</Card>
