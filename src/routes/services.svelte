<body>
	<h1>Prices</h1>
	<img src="img/money.png/" alt="" />
	<p>
		The price of the product varies between the scope of the project. I'm an economic human and
		always attempt to give people the best product I can for what they request. Just remember that
		cheap things are not always good and good things are not always cheap.
	</p>

	<priceBox>
		<offer>
			<h2>Simple build.</h2>
			<p>
				You preferably know what you want, the color scheme you prefer, the features would you like
				and the site is static or light functionality.
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

	<h1>Services</h1>

	<h2>UI/UX</h2>
	<img src="img/UI.png/" alt="" />
	<p>
		The user interface is how the human interacts with a computer, website, enviroment or
		application. A well designed UI provides the user an experience that is easy and natural, in
		turn causing the user to question what they have been missing until now. &nbsp; &nbsp; &nbsp;
	</p>

	<img src="img/UX.png/" alt="" />
	<p>
		UX is derived from the entire experience of the time spent at your site. How the culture around
		you or your product feels, and how it aligns with the material in front of them. "UX is
		concerned with the entire process of acquiring and integrating a product, including aspects of
		branding, design, usability and function." &nbsp; &nbsp; &nbsp;
	</p>

	<h2>Development</h2>
	<img src="img/devoooo.png/" alt="" />
	<p>
		Through direct communication we can develop a conduit to the connected community of the
		internet. Development is the whole of the process. Connecting the UI/UX, design and actual
		product is the focus of development. We will turn your future sucess into the steps of today
		through the tried and true practice of hard work.
	</p>

	<h2>Website redesign</h2>
	<img src="img/weby.png/" alt="" />
	<p>
		It is easy to have built it and let it be. Before you know it, five years have passed. Now what
		was great seems stale and in need of a refresh. Let's talk about bringing your site into the
		future.
	</p>

	<h2>Graphic design</h2>
	<img src="img/desiggy.png/" alt="" />
	<p>
		The process of graphic design is the interconnected bridge between the art and means of
		dispersal to communicate the ideas of your entity. Great design works with a variety of media
		tools in order to inspire a particular bracket. Video, audio, images and typography are the
		backbone of graphic design. &nbsp; &nbsp; &nbsp;
	</p>

	<h2>Search Engine Optimization</h2>
	<img src="img/paper.png/" alt="" />
	<p>
		SEO is the process of getting your website to the top page of search engines. To quote Wikipedia
		"(SEO) is the process of improving the quality and quantity of website traffic to a website or a
		web page from search engines." Studies show people will probably not make it to the second page
		of a search engine. So let's get you visable to the world.
	</p>

	<br />
</body>

<style lang="scss">
	@import 'components';

	priceBox {
		display: grid;
		grid-template-columns: 1fr;
		margin-right: 8%;

		offer {
			@include glassBack;
			margin: 4%;
			color: $backgroundMain;

			&:hover {
				box-shadow: $mainShadow;
				transition: $transitSpeed;
			}
		}
	}

	.social {
		img {
			margin-bottom: -30px;
		}
	}

	p {
		margin: 5% 10% 10% 20%;
	}

	img {
		max-width: 8%;
		margin: 0 0 -13% 8%;
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
	}
</style>
