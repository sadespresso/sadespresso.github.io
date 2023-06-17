<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import IconButton from './IconButton.svelte';
	import Links from './NavBar/Links.svelte';
	import { writable } from 'svelte/store';
	import Modal, { bind, type ModalState } from './Modal.svelte';

	const modalShown = writable<ModalState>(null);

	const hideModal = () => {
		$modalShown = null;
	};

	const showModal = () => {
		$modalShown = bind(Links, { vertical: true, onClick: hideModal });
	};
</script>

<nav class="viewboxPadded">
	<Links />
	<span class="mobile">
		{$LL.home.hi()}
	</span>
	<IconButton classNames="mobile" icon={'web'} on:click={showModal} />
</nav>

<Modal bind:show={$modalShown}>
	<!--  -->
</Modal>

<style>
	nav {
		z-index: 1;

		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		font-family: 'Gnomon*', sans-serif;
		font-size: var(--navbar-font-size);
		line-height: var(--navbar-font-size);
		padding: var(--navbar-vertical-padding) var(--viewbox-padding-horizontal);

		background-color: var(--color-accent);
		color: var(--color-primary);

		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	nav > :global(.mobile) {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		nav > :global(*) {
			display: none !important;
		}
		nav > :global(.mobile) {
			display: initial !important;
		}

		nav {
			justify-content: space-between;
		}
	}
</style>
