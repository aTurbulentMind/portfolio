<script>
	import Logo_Svg from '$lib/svg/logo.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let current = 0;
</script>

<div class="navbar">
	<nav class:open={isMenuOpen}>
		<ul>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 1} on:click={() => (current = 1)} href="/reviews/"
						>Reviews</a
					>
				</button>
			</li>

			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 2} on:click={() => (current = 2)} href="/contact/"
						>Contact</a
					>
				</button>
			</li>

			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 3} on:click={() => (current = 3)} href="/about/">About</a>
				</button>
			</li>

			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 4} on:click={() => (current = 4)} href="/services"
						>Services</a
					>
				</button>
			</li>

			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 6} on:click={() => (current = 6)} href="/">Home</a>
				</button>
			</li>
		</ul>
	</nav>
	<button on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<div class="burger">
			<svg> <Logo_Svg /></svg>
		</div>
	</button>
</div>

<style>
	.navbar {
		background: var(--gradient);
		width: 100vw;
		display: flex;
		position: fixed;
		top: 0;
		justify-content: space-between;
		height: fit-content;
		transition: var(--transit);
		border-bottom: 2px solid var(--highlight);
		box-shadow: var(--mainShadow);
		z-index: 950;
	}

	.navbar button {
		all: unset;
	}

	.navbar a {
		color: var(--textMain);
		transition: var(--transit);
	}

	.navbar a:hover,
	.navbar a:focus {
		color: var(--grabber);
		text-shadow: var(--box_Light);
	}

	.navbar ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	.navbar ul li {
		padding: 3% 0;
	}

	.navbar ul li button {
		all: unset;
		cursor: pointer;
	}

	.navbar .burger {
		display: flex;
		height: fit-content;
		width: 100%;
		margin: 1vh 2vw;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			transition: transform 0.1s ease-in-out;
		}

		& svg {
			width: 10vw;
			height: 10vh;
		}
	}

	nav {
		display: none;
	}

	nav.open {
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--gradientFlip);
		width: 100vw;
		border-top: 2px solid var(--highlight);
		box-shadow: var(--box_Shadow);
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--highlight);
		box-shadow: 0 0 10px rgba(255, 119, 169, 0.8);
	}

	/* Laptop styles */
	@media only screen and (min-width: 1024px) {
		nav {
			display: flex;
		}

		.navbar {
			height: 4rem;
		}

		.navbar .burger {
			display: none;
		}

		.navbar ul {
			flex-direction: row-reverse;
			gap: 2rem;
			margin: 0 15vw;
		}
	}

	/* Larger screens */
	@media only screen and (min-width: 1440px) {
		.navbar ul {
			gap: 3rem;
			margin: 0 22vw;
		}
	}
</style>
