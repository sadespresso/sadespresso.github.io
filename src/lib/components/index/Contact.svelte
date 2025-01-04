<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import Flexbox from '$lib/components/Flexbox.svelte';
	import Section from '$lib/components/Section.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<Section id="contact">
	<span slot="title">{$LL.contact.title()}</span>

	<Flexbox direction={'column'} rowGap="1rem">
		<ContactListTile icon="email" href="mailto:batmend@gege.mn">batmend@gege.mn</ContactListTile>
		<ContactListTile icon="octocat" href="https://github.com/sadespresso">sadespresso</ContactListTile>
		<ContactListTile icon="instagram" href="https://www.instagram.com/sadespresso/">sadespresso</ContactListTile>
		<ContactListTile icon="bsky" href="https://bsky.app/profile/sadespresso.gege.mn"
			>sadespresso.gege.mn</ContactListTile>
		<ContactListTile icon="facebook" href="https://www.facebook.com/sadespress0/">sadespress0</ContactListTile>
		<Spacer v={2} />
		<blockquote>
			{$LL.contact.coffeeInvitation()}
		</blockquote>
	</Flexbox>
</Section>

<style>
	blockquote {
		display: inline-block;

		color: var(--color-foreground-soft);

		font-size: small;
		font-weight: 600;
	}
</style>
