<script lang="ts">
	import Twitt from '../lib/svg/birdy.svelte';
	import Insta from '../lib/svg/insta.svelte';
	import FaBoo from '../lib/svg/faBoo.svelte';

	import Wsrd from '$lib/img/wsrd.png';
	import ArtCount from '$lib/img/artCountV4.png';
	import RandReci from '$lib/img/food.png';
</script>

<!--welcome info-->

<hero-banner id="hero-banner">
	<banner-text>Lantern Light Development</banner-text>
	<banner-phrase>"Awake and busy into the lantern light, developing your dreams."</banner-phrase>

	<!--entry banner-->

	<coaButt2>
		<div class="follow">
			<a href="https://twitter.com/LanternLightDev/"> <svg><Twitt /> </svg></a>
			<a href="https://www.instagram.com/lanternlightdevelopment/"><svg> <Insta /></svg> </a>
			<a href="https://www.facebook.com/profile.php?id=100078803221612/"><svg><FaBoo /></svg> </a>
		</div>
	</coaButt2>
</hero-banner>

<section>
	<h2>I'm here to help</h2>
	<p>
		I am a local to the Kitsap County area looking to get my start by helping people in the
		community. I am here to assist people with connecting their business or personal endeavors to
		being a web presence. I love this place and want to do everything I can to help people grow to
		their biggest dreams in the ways that I can. Do not hesitate to reach out with any questions you
		may have.
	</p>
	<a href="/contact/" class="butt"
		>Reach out so we can start increasing your revenue as soon as we can.</a
	>
</section>

<section class="glassBack">
	<h2>About Me</h2>
	<p>
		I have built websites and studied web development for more than five years. For the last two
		years I have been working at a software company which led to learning how to build fully
		encompassing websites. I need to put my effort to use and help this area as much as I can.
	</p>
</section>

<section>
	<h2>Check out some of my projects:</h2>
	<article class="LR_block">
		<img src={Wsrd} alt="West Sound RD project screenshot" />
		<h3>West Sound RD (Full stack)</h3>
		<p>
			My partner asked if I could print up some name cards for her roller derby match. I had not
			made anything to be printed from the web. After messing around I figured the data for the team
			would be a great chance to connect a database to a website. The project ended up being able to
			print a selected list as name cards, it has a login system, a user level system to keep some
			people out of some places, profile info for players, warehouse management and has image
			storage for profiles or products.
		</p>
		<a class="butt" href="https://temp-rd-namelist.netlify.app/">Check it out</a>
	</article>

	<article class="LR_block_l">
		<img src={ArtCount} alt="3D counter-top store project screenshot" />
		<h3>3D counter-top store (3D)</h3>
		<p>
			I took a course on building 3D websites. This was a way for me to start to understand the
			concepts.
		</p>
		<a class="butt" href="https://artisan-countertop-v4.netlify.app/">Check it out</a>
	</article>

	<article class="LR_block">
		<img src={RandReci} alt="Table Tango project screenshot" />
		<h3>Table Tango (API calling)</h3>
		<p>
			I got tired of trying to figure out dinner. So I made a random recipe generator to get better
			at learning how to display fetched data.
		</p>
		<a class="butt" href="https://table-tango.netlify.app/">Check it out</a>
	</article>
</section>

<ender>
	<p>And if you are curious, you can click <a href="/about/">here</a> to learn about me</p>
</ender>

<!-- <p>
		Today, the material world is woven and threaded within the web. I am here to help those who need
		projection into that borderless market of today. Businesses can grow without bounds when they
		contribute to the world.
	</p>

	<p>
		I am the most productive when helping somebody succeed. Everyone deserves their little bits of
		victory. Lets bring you to new levels of expansion and growth. We can make cognizant use of data
		to further improve the performance of your product. We will work with your ideas to bring the
		change you deserve to your life and business.
	</p> -->

<!--svelte-ignore css-unused-selector -->
<style>
	/* entry banner */
	hero-banner {
		position: relative;
		height: 100vh;
		display: grid;
		background-image: url('$lib/img/LLDProfPic.png');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		z-index: 999;
	}

	banner-text {
		display: grid;
		grid-column: span 2;
		font-size: var(--f_Xxxl);
		color: var(--textMain);
		font-weight: bold;
		font-family: var(--altFont);
		margin-left: 8vw;
	}

	banner-phrase {
		display: grid;
		font-size: var(--f_Xxl);
		/* font-weight: bold; */
		margin-left: var(--marg_Xxl);
		align-self: center;
		justify-self: center;
		z-index: 999;
	}

	coaButt2 {
		display: grid;
	}

	/* 
	@media only screen and (min-width: 767px) {		
		art-banner {
			& banner-text {
				padding-top: var(--pad);
				font-size: var(--f_xxxl);
			}

			& banner-face {
				grid-row: 2;
				grid-column: 4;
				width: 50%;
				height: 80%;

				& img {
					width: 100%;
					height: 100%;
				}
			}

			coaButt2 {
				& svg {
					width: 45px;
					height: 45px;
				}
			}

			& .social {
				width: 50%;
				height: 50%;
				margin: 5% 0 0 10%;
			}
		}
	} */
</style>
