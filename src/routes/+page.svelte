<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Contact from '$lib/components/index/Contact.svelte';
	import Footer from '$lib/components/index/Footer.svelte';
	import Projects from '$lib/components/index/Projects.svelte';
	import Salut from '$lib/components/index/Salut.svelte';
</script>

<svelte:head>
	<title>Hi, sadespresso here!</title>
</svelte:head>

<NavBar />

<main>
	<Salut />
	<Projects />
	<Contact />
	<Footer />
</main>
