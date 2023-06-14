<script>
	import Card from '../../Card.svelte';
	import ContactListTile from '../../ContactListTile.svelte';
	import Flexbox from '../../Flexbox.svelte';
	import Group from '../../Group.svelte';
	import Spacer from '../../Spacer.svelte';
	import XLink from '../../XLink.svelte';
</script>

<Card flex="1" type="large">
	<Flexbox direction="column" justify="space-between">
		<Group>
			<h3>Gegee Guitar</h3>
			<Spacer />
			<p class="left expand-width">
				Gegee Guitar is a guitar tab platform inspired by
				<XLink href="https://www.ultimate-guitar.com/">Ultimate Guitar</XLink>. Anyone can upload guitar tabs. Available
				on web, Android, and iOS. Built /w <XLink href="https://firebase.google.com/">Firebase</XLink> (backend), <XLink
					href="https://flutter.dev/">Flutter</XLink> (mobile), <XLink href="https://svelte.dev/">Svelte</XLink> (web).
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
					<span>Play Store</span>
				</ContactListTile>
				<ContactListTile
					icon="appstore"
					href="https://apps.apple.com/mn/app/%D0%B3%D1%8D%D0%B3%D1%8D%D1%8D-%D0%B3%D0%B8%D1%82%D0%B0%D1%80/id1603042832?platform=iphone"
					flex="1">
					<span>App Store</span>
				</ContactListTile>
			</Flexbox>
		</Flexbox>
	</Flexbox>
</Card>
