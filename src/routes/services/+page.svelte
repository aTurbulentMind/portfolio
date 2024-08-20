<script>
	import Ui_svg from '../../lib/svg/ui_svg.svelte';
	import Ux_svg from '../../lib/svg/ux_svg.svelte';
	import Devo from '../../lib/svg/devo.svelte';
	import Web_red from '../../lib/svg/web_red.svelte';
	import Grafi from '../../lib/svg/grafi.svelte';
	import Seo from '../../lib/svg/seo.svelte';
</script>

<body>
	<h1>Services:</h1>

	<p>
		The price of the product varies between the scope of the project. I'm an economic human and
		always attempt to give people the best product I can to exceed expectations.
	</p>

	<priceBox>
		<offer>
			<h2>Simple build.</h2>
			<p>
				You know what you want, the color scheme you prefer, the features you would like and the
				site is static or has very light functionality.
			</p>
		</offer>
		<offer>
			<h2>Moderate action.</h2>
			<p>
				You have an idea of your plan and general idea, but not quite sure of what you want and need
				a bit of guidance.
			</p>
		</offer>
		<offer>
			<h2>I'll handle it.</h2>
			<p>
				You want to get a site up and running, but not sure how to put the jumble of brilliant ideas
				together or make it happen. We can talk our way through it as a team.
			</p>
		</offer>
	</priceBox>

	<h2>Production</h2>

	<div class="grid">
		<div class="card">
			<svg><Ui_svg /></svg>

			<div class="card-title">UI</div>

			<div class="card-body">
				The user interface is how the human interacts with a computer, website, environment or
				application. A well designed UI provides the user an experience that is easy and natural, in
				turn giving the user a comfortable and enjoyable visit.<br />
			</div>
		</div>

		<div class="card">
			<svg><Ux_svg /></svg>

			<div class="card-title">UX</div>

			<div class="card-body">
				UX is derived from the entire experience of the time spent at your site. How the culture
				around you or your product feels, and how it aligns with the material in front of them. UX
				is concerned with the entire process of acquiring and integrating a product, including
				aspects of branding, design, usability and function. <br />
			</div>
		</div>

		<div class="card">
			<svg><Devo /></svg>

			<div class="card-title">Development</div>

			<div class="card-body">
				Through direct communication we can develop a conduit to the connected community of the
				internet. Development is the whole of the process. Connecting the UI/UX, design and actual
				product. We will turn your future success into the steps of today through the tried and true
				practice of hard work. <br />
			</div>
		</div>

		<div class="card">
			<svg><Web_red /></svg>

			<div class="card-title">Website Redesign</div>

			<div class="card-body">
				It is easy to have built it and let it be. Before you know it, ten years have passed. Now
				what was great seems stale and in need of a refresh. Let's talk about bringing your site
				into the future. <br />
			</div>
		</div>
	</div>

	<br />
</body>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';

	priceBox {
		display: grid;
		grid-template-columns: 1fr;

		offer {
			@include glassBack;
			margin: 4%;
			color: $textMain;

			&:hover {
				box-shadow: $mainShadow;
				transition: $tSpeed;
			}
		}
	}

	.grid {
		.card {
			svg {
				width: 100%;
				margin: 0;
				border-radius: $rad;
			}
		}
	}

	@media only screen and (min-width: 740px) {
		priceBox {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (min-width: 980px) {
		priceBox {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
