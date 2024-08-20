<div class=" head_Line">
	<h1>Services:</h1>
</div>

<p>
	The price of the product varies between the scope of the project. I'm an economic human and always
	attempt to give people the best product I can to exceed expectations.
</p>

<priceBox>
	<offer>
		<h2>Simple</h2>
		<p>
			You know what you want, the color scheme you prefer, the features you would like and the site
			is static or has very light functionality.
		</p>
	</offer>

	<offer>
		<h2>Moderate</h2>
		<p>
			You have an idea of your plan and general idea, but not quite sure of what you want and need a
			bit of guidance.
		</p>
	</offer>

	<offer>
		<h2>I'll handle it.</h2>
		<p>
			You want to get a site up and running, but not sure how to put the jumble of brilliant ideas
			together or make it happen. We can talk our way through it as a team.
		</p>
	</offer>

	<offer>
		<h2>Static Build.</h2>
		<p>
			These pages are simple and non-dynamic. Think of restuarants, law offices or dentistry. They
			don't really need to be updated frequently.
		</p>
		<p>$600 - $1500</p>
	</offer>

	<offer>
		<h2>Dynamic Build.</h2>
		<p>
			These types of sites are something you change regularly. These are spaces like blogs or a page
			for a photographer. These take a bit more work and will take more support than a static build.
		</p>
		<p>$1000 - $3000(or more)</p>
	</offer>

	<offer>
		<h2>Full Stack Build.</h2>
		<p>
			These are projects that have a big ol structure to them. You have a big idea and want people
			to be able to log in, or sell things or handle an amount of data. This is for your pages and
			inventory that change dynamically. This is also where you might even build it into a phone or
			computer application.
		</p>
		<p>$2000 - $5000(or more)</p>
	</offer>
</priceBox>

<h2>Production Steps</h2>

<ul class="steps">
	<li>Planning</li>
	<p>
		We can talk our way through it as a team. We will work our way through building the idea of your
		website
	</p>
	<li>Design</li>
	<p>
		The color, layout, and design of your website will be created after deep consideration to how
		you want to be expressed.
	</p>
	<li>Development</li>
	<p>
		This is the phase of building your website from nothing. We want everything to be as you want
		it.
	</p>
	<li>Testing</li>
	<p>
		This is where we will begin to test across different screens, platforms and browsers to make
		sure everything is crisp, pixel perfect and as bug free as possible.
	</p>
	<li>Deployment</li>
	<p>
		This is where DR Frankenstein screams about the creation coming to life. Your site will become a
		living thing at this point.
	</p>
	<li>Support</li>
	<p>
		Support will continue for free for the first year for anything that comes up that we did not
		think of. Not sure it would be possible to think of everything at once. Amazon did not become
		the giant it is without fine tuning
	</p>
	<li>Management</li>
	<p>
		We can take it a step further than simple and start tracking and managing data to get an even
		deeper connection to those who find their way to your space.
	</p>
</ul>

<!--svelte-ignore css-unused-selector -->
<style>
	priceBox {
		display: grid;
		grid-template-columns: 1fr;

		& offer {
			margin: 4%;
			color: var(--textMain);
			background: var(--backTre);
		}
	}

	.steps {
		margin-left: 20vw;
	}

	@media only screen and (min-width: 766px) {
		priceBox {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (min-width: 1024px) {
		priceBox {
			width: 100vw;
			margin-left: 2.5vw;
		}

		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
