<script>
	import Card from '$lib/components/Card.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import ContactListTile from '$lib/components/ContactListTile.svelte';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<Card flex="1" type="large">
	<h3>cuko</h3>
	<Spacer />
	<p class="expand-width left">
		{$LL.projects.projects.cuko.desc()}
	</p>
	<Spacer />
	<ContactListTile icon="web" href="~" disabled>work in progress</ContactListTile>
</Card>
