<script>
	import Logo from '../lib/svg/logo.svelte';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let current = 0;
</script>

<div class="navbar">
	<a href="/" class="logo"><h1>Lantern Light Development</h1></a>
	<nav class:open={isMenuOpen}>
		<!--this is the main navigation menu-->
		<ul>
			<li on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
				<a class:current={current === 0} on:click={() => (current = 0)} href="/contact/">Contact</a>
			</li>
			<li on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
				<a class:current={current === 1} on:click={() => (current = 1)} href="/services/"
					>Services</a
				>
			</li>
			<li on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
				<a class:current={current === 2} on:click={() => (current = 2)} href="/reviews/">Reviews</a>
			</li>
			<li
				on:click={() => (isMenuOpen = false)}
				on:keydown={() => (isMenuOpen = false)}
				class="space"
			>
				<a class:current={current === 3} on:click={() => (current = 3)} href="/about/">About</a>
			</li>
			<li
				on:click={() => (isMenuOpen = false)}
				on:keydown={() => (isMenuOpen = false)}
				class="space"
			>
				<a class:current={current === 4} on:click={() => (current = 4)} href="/">Home</a>
			</li>
		</ul>
	</nav>
	<div class="burger" on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<svg> <Logo /></svg>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	:global(*) {
		box-sizing: border-box;
	}

	.navbar {
		background-color: $textTwo;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		position: fixed;
		height: 4rem;
		z-index: 990;
		box-shadow: $box-shadow;
		transition: transform 0.2s ease-in-out;

		a {
			text-shadow: $text_shadow;
		}
	}

	.logo {
		h1 {
			font-size: $font;
		}
	}

	@media only screen and (max-width: 767px) {
		nav {
			display: none;
		}

		nav.open {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			background-color: $backTre;
			width: 100%;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 4vh;
		list-style: none;
		font-size: $font;

		li {
			p {
				margin-top: 1vh;
				margin-bottom: 1vh;
				font-size: $f-sm;
				color: $highlight;
				text-shadow: $text_shadow;
			}
		}
	}

	.current {
		position: relative;
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: $extra;
	}

	.burger {
		height: 30px;
		width: 30px;
		aspect-ratio: 1;
		background-color: transparent;
		margin-top: 1vh;
		margin-right: 6vw;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;

		&:hover {
			cursor: pointer;
			transition: transform 0.1s ease-in-out;
			transform: scale(1.2);
		}
	}

	.burger > div {
		height: 2px;
		width: 14px;
		background-color: var(--highlight);
		position: absolute;
	}
	@media only screen and (min-width: 768px) {
		.logo {
			margin-left: 3vw;
		}

		.burger {
			display: none;
		}

		nav {
			display: block;
			position: relative;
			height: 4rem;
		}

		.navbar {
			height: 5rem;
		}

		.logo {
			margin-left: 1vw;
		}

		ul {
			flex-direction: row;
			gap: 2vw;
		}

		.space {
			margin-right: 2vw;
		}
	}
</style>
