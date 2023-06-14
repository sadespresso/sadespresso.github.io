<script>
	import Card from '../../Card.svelte';
	import ContactListTile from '../../ContactListTile.svelte';
	import Spacer from '../../Spacer.svelte';
	import XLink from '../../XLink.svelte';
</script>

<Card flex="1" type="large">
	<h3>moment_dart</h3>
	<Spacer />
	<p class="full-width left">
		A zero-dependency Dart library for DateTime. Similar popular library would be <XLink href="https://momentjs.com/"
			>moment.js</XLink>
	</p>
	<Spacer />
	<ContactListTile icon="pub-dot-dev" href="https://pub.dev/packages/moment_dart">See on pub.dev</ContactListTile>
</Card>
