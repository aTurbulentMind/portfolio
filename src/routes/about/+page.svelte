<!-- Done-ish -->

<script>
	import ItsMe from '$lib/img/myFace.jpg';
	import Nature1 from '$lib/img/nature1.jpg';
	import Nature2 from '$lib/img/nature1.jpg';
</script>

<img class="face" src={ItsMe} alt="its my face" />

<h1>Joel Rivers</h1>

<p>
	I am a thirty-four year old from Western Washington.The Kitsap area and community of Washington
	make it easy to live here and never leave. Travel is fun but home is the forest surrounding the
	Puget Sound.
</p>

<img src={Nature1} alt="a sunny day on top of a mountain at a lake. It is serene" />

<p>
	I picked up website development a few years ago. While working in a retail store. I spent down
	time learning about building a new website for the shop. Something magic happened and I easily
	found myself addicted. One realm of learning bled into another. As the wealth of knowledge grew,
	so did the interest in learning more. I've done it for fun, but I want to use my skills to help
	people who need it.
</p>

<p>
	I do spend some time with fun things like going to concerts or playing video games. To get away
	and reset the brain. Hiking and backpacking is another nice escape from being immersed in
	technology. There is something magic living in the wild serenity of the Pacific Northwest.
</p>

<img src={Nature2} alt="sunrays cast though morning fog" />

<!--svelte-ignore css-unused-selector -->
<style>
	img {
		width: 80%;
		margin: 0 10%;
	}

	@media (min-width: 700px) {
		.face {
			width: 35%;
			margin: 4% 35%;
		}
	}
</style>
