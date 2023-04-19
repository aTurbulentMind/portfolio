<script>
	import Twitt from './svg/birdy.svelte';
	import Insta from './svg/insta.svelte';
	import FaBoo from './svg/faBoo.svelte';
</script>

<div class="footer">
	<h1>L<br /> L<br /> D</h1>
	<footBox>
		<ul
			style="grid-row: 2;
						grid-column: 2;"
		>
			<li><a href="/">HOME</a></li>
			<!--<li><a href="/">CALL</a></li>-->
			<li><a href="/contact/">CONTACT</a></li>
			<li><a href="/services/">SERVICES</a></li>
		</ul>
	</footBox>
	<footBox>
		<ul>
			<li><a href="/reviews/">REVIEWS</a></li>
			<li><a href="/about/">ABOUT</a></li>
		</ul>
	</footBox>
	<footBox>
		<socBox>
			<a href="/https://www.facebook.com/profile.php?id=100078803221612/"><svg> <FaBoo /></svg></a>
			<a href="https://twitter.com/LanternLightDev/"><svg> <Twitt /> </svg></a>
			<a href="https://www.instagram.com/lanternlightdevelopment/"><svg> <Insta /></svg></a>
		</socBox>
	</footBox>
</div>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	.footer {
		display: grid;
		width: 100vw;
		background: $gradient;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		z-index: 999;
		position: relative;
		text-shadow: $text_shadow;

		color: $extra;

		footBox {
			margin: 8% 0 0 0;
			h1 {
				display: grid;
				grid-row: 1;
				grid-column: 1;
				margin: $marg;
				padding: $pad;
				font-size: $f-sm;
			}

			ul {
				display: grid;
				grid-row: 2;
				grid-column: 2;
				position: relative;
				margin: 5% 3% -8% 10%;
				list-style: none;

				li {
					margin: $marg;
					padding: $pad_sm;

					a {
						color: $extra;
						font-size: $font;
					}
				}
			}
		}

		socBox {
			display: flex;
			margin: 0 60%;
			svg {
				display: flex;
				flex-direction: column;
				background: $textMain;
				color: $backMain;
				border-radius: 50%;
				margin: $marg $marg_xl;
				padding: $marg;
				width: 10vw;
				height: 10vh;

				&:hover {
					@include butts;
				}
			}
		}
	}

	@media (min-width: 780px) {
		//foots
		.footer {
			margin-bottom: 0;
		}
	}
</style>
