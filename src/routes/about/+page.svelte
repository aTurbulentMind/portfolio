<body>
	<img class="face" src="img/myFace.jpg/" alt="its my face" />

	<h1>Joel Rivers</h1>

	<p>
		Age: 32
		<br />
		Hobbies: Spinning poi, making music, making fancy food, adventure in both urban and forest areas
		and some backpacking.
	</p>

	<p>
		I am a thirty-two year old from Western Washington. My family has been in the area for a few
		generations by now. With a new branch carried by my two little best friends. The area and
		community of Washington make it easy to live here and never leave. Travel is fun but home is on
		the waters of the Puget Sound.
	</p>

	<p>
		I picked up website development a few years ago. While working in a retail store, I spent down
		time learning about building a new website for the shop. Something magic happened and I easily
		found myself addicted. One realm of learning bled into another. As the wealth of knowledge grew,
		so did the intrest in more. I've done it for fun, but I want to use my skills to help people who
		need it.
	</p>

	<img src="img/nature2.jpg/" alt="sunrays cast though morning fog" />

	<p>
		I do spend some time with fun things like going to concerts or playing video games. To get away
		and reset the brain hiking and backpacking is a nice escape from being immersed in technology.
		There is something magic living in the wild serenity of the Pacific Northwest.
	</p>

	<img src="img/nature1.jpg/" alt="a sunny day on top of a mountain at a lake. It is serene" />

	<p>
		Or to unwind I may be caught spinning fire. As the world surrounding me slows at the crackling
		flint stored in the bic. The rush of endorphins pumping through the veins to the endpoints of
		each extremity. Within microseconds, the combustion seranades my soul with zen. The most
		prominent feeling of "this is peace" that I can access without a four hour trek.
	</p>

	<iframe
		class="vid"
		width="560"
		height="315"
		style="margin-bottom: 120px;"
		src="https://www.youtube.com/embed/zEs79S5yTr0?controls=0/"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</body>

<style lang="scss">
	@import '../src/lib/basecamp';

	img {
		width: 80%;
		margin: 0 10%;
		border-radius: 4px;
	}

	ul {
		list-style: none;
		margin: 7%;
		font-size: 2.25vw;
	}

	.vid {
		max-width: 99%;
	}

	@media (min-width: 700px) {
		.face {
			width: 35%;
			margin: 4% 35%;
		}
	}
</style>
