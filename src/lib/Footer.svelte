<script>
	import Twitt from './svg/birdy.svelte';
	import Insta from './svg/insta.svelte';
	import FaBoo from './svg/faBoo.svelte';
</script>

<div class="footer">
	<footBox>
		<ul>
			<li><a href="/">HOME</a></li>
			<li><a href="/contact/">CONTACT</a></li>
			<li><a href="/services/">SERVICES</a></li>
		</ul>
		<ul>
			<li><a href="/reviews/">REVIEWS</a></li>
			<li><a href="/about/">ABOUT</a></li>
			<!--		<li><a href="/test/">test</a></li>-->
		</ul>
	</footBox>
	<!--
	<footBox>
		<socBox>
			<a href="/https://www.facebook.com/profile.php?id=100078803221612/"><svg> <FaBoo /></svg></a>
			<a href="https://twitter.com/LanternLightDev/"><svg> <Twitt /> </svg></a>
			<a href="https://www.instagram.com/lanternlightdevelopment/"><svg> <Insta /></svg></a>
		</socBox>
	</footBox>-->
</div>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import 'basecamp';

	.footer {
		display: flex;
		width: 100vw;
		background: $gradient;
		z-index: 999;
		text-shadow: $text_shadow;
		color: $extra;
		transition: transform 0.2s ease-in-out;
		justify-content: space-between;
		align-items: center;
		height: fit-content;

		footBox {
			margin: 8% 0 0 0;

			ul {
				width: 100vw;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				list-style: none;

				li {
					margin: $qtr_marg;
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
			a {
				font-size: 1vh;
				flex-direction: row;
				margin: 0 $marg;
				Svg {
					width: 10vw;
				}
			}
		}
	}

	@media (min-width: 780px) {
		//foots
		.footer {
			margin-bottom: 0;
			footBox {
				ul {
					li {
						a {
							font-size: $f-lg;
						}
					}
				}
			}

			socBox {
				a {
					Svg {
						width: 15vw;
					}
				}
			}
		}
	}
</style>
