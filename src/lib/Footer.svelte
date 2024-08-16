<footer>
	<p>
		Produced by <a href="https://www.lanternlightdevelopment.com/"> Lantern Light Development</a>
	</p>
</footer>

<!-- svelte-ignore css-unused-selector -->
<style>
	footer {
		background-color: var(--back_Alt);
		display: none;
		justify-content: center;
		position: relative;
		bottom: 0;
		width: 100vw;
		height: 4vh;
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--f_sm);
		margin: var(--marg);
		gap: 10px;
	}

	a {
		color: var(--back_Main);
	}

	@media only screen and (min-width: 980px) {
		p {
			font-size: var(--f_m);
		}
	}
</style>
