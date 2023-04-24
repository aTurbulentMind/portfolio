<script>
	import Twitt from '../lib/svg/birdy.svelte';
	import Insta from '../lib/svg/insta.svelte';
	import FaBoo from '../lib/svg/faBoo.svelte';
</script>

<body>
	<div class="art-banner" id="art-banner">
		<div class="art-banner-bg" />
		<div class="banner-text">Lantern Light Development</div>
		<!--	<div class="banner-face"><img src="img/porffy.png/" alt="my face" /></div>-->
		<div class="banner-phrase">"Awake into the lanterns light developing your dreams."</div>

		<!--entry banner-->

		<div class="coaButt2">
			<div class="follow">
				<a href="https://twitter.com/LanternLightDev/"> <svg><Twitt /> </svg></a>
				<a href="https://www.instagram.com/lanternlightdevelopment/"><svg> <Insta /></svg> </a>
				<a href="https://www.facebook.com/profile.php?id=100078803221612/"><svg><FaBoo /></svg> </a>
			</div>
		</div>
	</div>

	<!--welcome info-->

	<h1>I'm here to help</h1>
	<p>
		Today, the material world is woven and threaded within the web. I am here to help those who need
		projection into the borderless market of today. Businesses can grow without bounds when they
		contribute to the world.
	</p>

	<p>
		I am the most productive when helping somebody succeed. Everyone deserves their little bits of
		victory. Lets bring you to new levels of expansion and growth. We can make cognizant use of data
		to further improve the performance of your product. We will work with your ideas to bring the
		change you deserve to your life and business.
	</p>

	<h3 class="butt">
		<a href="/contact/">Contact me.</a>
	</h3>

	<!--Completed work-->
	<a href="/testim/">
		<h2>Check out some completed projects:</h2>
	</a>
	<!--card-->
	<div class="comp_block">
		<img src="img/shoppo.png" alt="" />
		<div class="comp_title"><h2>Random Store</h2></div>

		<div class="comp_body">
			<p>I built this page to learn about making an online storefront.</p>

			<a href="https://sky-high-shop-test.netlify.app/">Check it out</a>
		</div>
	</div>
	<!--end-->
	<!--card-->
	<div class="comp_block_l">
		<img class="img_l" src="img/food.png" alt="" />
		<div class="comp_title_l"><h2>Table Tango</h2></div>

		<div class="comp_body_l">
			<p>
				I got tired of trying to figure out dinner. So I made a random recipe generator to get
				better at learning how to display fetched data.
			</p>

			<a href="https://table-tango.netlify.app/">Check it out</a>
		</div>
	</div>
	<!--end-->
	<!--card-->
	<div class="comp_block">
		<img src="img/counterToppy.png" alt="" />
		<div class="comp_title"><h2>Artistic Artisan Counters</h2></div>

		<div class="comp_body">
			<p>
				Laurie at AAC had no website at all. I used it as a first attempt to add 3d objects to a
				page.
			</p>

			<a href="https://superfancycounterbuild.netlify.app/">Check it out</a>
		</div>
	</div>
	<!--end-->

	<!--contact-->

	<h3 class="butt"><a href="/contact/"> Contact</a></h3>
	<br />
	<container>
		<form action="https://formsubmit.co/joelkrivers@gmail.com" method="POST">
			<wrapper>
				<box>
					<input type="text" name="name" id="name" required />
					<label for="fname">First & Last Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="email" id="email" required />
					<input
						type="hidden"
						name="_next"
						value="https://www.lanternlightdevelopment.com/contact"
					/>
					<label for="email">Email</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="tel" id="tel" required />
					<label for="tel">Preferred communication</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="comp" id="comp" required />
					<label for="comp">Company/Entity Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<textarea id="mes" required />
					<label for="mes">Comments or Questions:</label>
				</box>
			</wrapper>

			<button type="submit">Submit</button>
		</form>
	</container>

	<div class="funny_space">
		<br /> <br /> <br /> <br /><br /> <br />
	</div>
</body>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';

	body {
		overflow-x: hidden;
	}

	//entry banner

	.art-banner {
		height: 100vh;
		display: grid;
		background: $backMain;
		grid-template-columns: 20px 1fr 1fr 1fr 20px;
		grid-template-rows: 20px 1fr 1fr 1fr 20px;
		margin: 5px 0 0 5px;
		z-index: 999;

		a {
			font-size: 3vw;
			z-index: 999;
		}
	}

	.art-banner-bg {
		background-image: url(/img/LLDProfPic.png);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		grid-column: 1 / -1;
		grid-row: 1 / -1;

		z-index: 999;

		img {
			width: 105%;
		}
	}

	.banner-text {
		font-size: 7vw;
		font-weight: bold;
		font-family: $secondaryFont;
		letter-spacing: 3px;
		grid-column: 2 / span 2;
		grid-row: 2 /* no need to type one*/;
		align-self: center;
		justify-self: center;
		z-index: 999;
		margin-left: 8vw;
	}

	.banner-face {
		grid-row: 2;
		grid-column: 4;
		border: 1px dashed $highlight;
		border-radius: 50%;
		width: 100%;
		height: 85%;

		img {
			width: 100%;
			height: 100%;
			opacity: 1;
			border-radius: 50%;
		}
	}

	.banner-phrase {
		font-size: 3vw;
		font-weight: bold;
		margin-left: 2vw;
		letter-spacing: 3px;
		grid-column: 2 / span 2;
		grid-row: 3;
		align-self: center;
		justify-self: center;
		z-index: 999;
	}

	.coaButt2 {
		display: grid;
		align-self: center;
		justify-self: center;
		grid-column: 4;
		grid-row: 4;
		margin: 10%;
		width: fit-content;
		border-radius: 10px;
		z-index: 999;
		padding: 2%;
		background-color: transparent;

		svg {
			width: 20px;
			height: 20px;
			z-index: 999;
			margin: 0 1vw;
		}
	}

	//completed work block

	@media (max-width: 768px) {
		.art-banner {
			grid-template-columns: 20px 1fr 1fr 1fr 60px;
			grid-template-rows: 20px 1fr 1fr 1fr 70px;
		}

		.butt {
			position: relative;
			margin-left: 25vw;
		}

		.coaButt2 {
			grid-column: 1;
			grid-row: 4;
			width: 10vw;

			a {
				margin: 2%;
			}
		}
	}

	@media only screen and (min-width: 780px) {
		//banner page
		.art-banner {
			.banner-text {
				padding-top: $pad;
				font-size: $f-xxxl;
			}

			.banner-face {
				grid-row: 2;
				grid-column: 4;
				width: 50%;
				height: 80%;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.coaButt2 {
				svg {
					width: 45px;
					height: 45px;
				}
			}

			.social {
				width: 50%;
				height: 50%;
				margin: 5% 0 0 10%;
			}
		}
	}
</style>
