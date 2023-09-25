<script>
	import Card from '$lib/components/Card.svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import Flexbox from '$lib/components/Flexbox.svelte';
	import Group from '$lib/components/Group.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import XLink from '$lib/components/XLink.svelte';
	import WrappedTranslationMulti from '$lib/components/WrappedTranslationMulti.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<Card type="large">
	<Flexbox direction="column" justify="space-between">
		<Group>
			<h3>Gegee Guitar</h3>
			<Spacer />
			<p class="left expand-width">
				<WrappedTranslationMulti message={$LL.projects.projects.gegeeGuitar.desc()}>
					<svelte:fragment slot="1"
						><XLink href="https://www.ultimate-guitar.com/">Ultimate Guitar</XLink></svelte:fragment>
					<svelte:fragment slot="2"><XLink href="https://firebase.google.com/">Firebase</XLink></svelte:fragment>
					<svelte:fragment slot="3"><XLink href="https://flutter.dev/">Flutter</XLink></svelte:fragment>
					<svelte:fragment slot="4"><XLink href="https://svelte.dev/">Svelte</XLink></svelte:fragment>
				</WrappedTranslationMulti>
			</p>
		</Group>
		<Spacer />
		<Flexbox direction="column" rowGap="1rem" colGap="1rem" justify="flex-end">
			<ContactListTile icon="web" href="https://guitar.gege.mn/">
				<span>Visit web app</span>
			</ContactListTile>
			<Flexbox direction="row" colGap="1rem" rowGap="1rem" expand>
				<ContactListTile
					icon="playstore"
					href="https://play.google.com/store/apps/details?id=mn.theirontnt.gegeeguitar"
					flex="1">
					<span style="width: 8ch">Play Store</span>
				</ContactListTile>
				<ContactListTile
					icon="appstore"
					href="https://apps.apple.com/mn/app/%D0%B3%D1%8D%D0%B3%D1%8D%D1%8D-%D0%B3%D0%B8%D1%82%D0%B0%D1%80/id1603042832?platform=iphone"
					flex="1">
					<span style="width: 8ch">App Store</span>
				</ContactListTile>
			</Flexbox>
		</Flexbox>
	</Flexbox>
</Card>
