<script>
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<body>
	<Nav />
	<slot />

	<Footer />
</body>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';
</style>
