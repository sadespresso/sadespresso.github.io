<script context="module" lang="ts">
	export type ModalState = null | Component | undefined;

	export const bind = bindModal;
</script>

<script lang="ts">
	import Modal, { bind as bindModal } from 'svelte-simple-modal';
	import type { Component } from 'svelte-simple-modal/types/Modal.svelte';

	export let show: ModalState = undefined;
</script>

<Modal
	bind:show
	closeButton={false}
	unstyled={true}
	classBg="Modal-Bg"
	classCloseButton="Modal-CloseButton"
	classContent="Modal-Content"
	classWindow="Modal-Window"
	classWindowWrap="Modal-WindowWrap">
	<slot>
		<!--  -->
	</slot>
</Modal>

<style>
	:global(.Modal-Bg) {
		background-color: rgba(0, 0, 0, 0.54);
		backdrop-filter: blur(4px);

		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: 50;
	}
	:global(.Modal-CloseButton) {
		display: none;
	}
	:global(.Modal-Content) {
		padding: 2rem;
	}
	:global(.Modal-Window) {
		position: relative;
		z-index: 52;

		border-radius: 1rem;

		background-color: var(--color-background);
		color: var(--color-foreground);

		max-width: 60vw;
		max-height: 80vh;

		overflow-x: hidden;
		overflow-y: auto;
	}
	:global(.Modal-WindowWrap) {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 51;
	}
	@media only screen and (max-width: 768px) {
		:global(.Modal-Window) {
			max-width: 90vw;
		}
	}
</style>
