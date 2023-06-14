<script lang="ts">
	import ContactListTile from '../ContactListTile.svelte';
	import Flexbox from '../Flexbox.svelte';
	import Section from '../Section.svelte';
</script>

<Section id="contact">
	<span slot="title">Contact me</span>

	<Flexbox direction={'column'} rowGap="1rem">
		<ContactListTile icon="octocat" href="https://github.com/sadespresso">sadespresso</ContactListTile>
		<ContactListTile icon="instagram" href="https://www.instagram.com/yourstepbf/">yourstepbf</ContactListTile>
		<ContactListTile icon="twitter" href="https://twitter.com/sadespresso_">sadespresso_</ContactListTile>
		<ContactListTile icon="facebook" href="https://www.facebook.com/sadespress0/">sadespress0</ContactListTile>
	</Flexbox>
</Section>
