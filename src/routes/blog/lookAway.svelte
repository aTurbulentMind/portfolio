<body>
	<h1>Look Away!</h1>

	<img class="cent" src="/blogPic/lookingAway/three.png" alt="screenshot of an error" />

	<p>
		A bunch of random words of excitement could grab your attention as fast as a car wreck. But are
		those catchy things worth the energy? Especially if it's false or fabricated. There was a time
		when I needed to be busy and working sixteen hours of the day. If I did not I would attack
		myself for not doing enough. I tried to write code every single day. It gets a bit repetitive. I
		would beat me up over doing research or trying a different language. I spent so many days
		feeling like I just did not do enough. If I went more than a day without opening the code I felt
		worthless.
	</p>
	<p>
		I love to do more than just stare at the code though. The investigation, the color scheme, the
		font or SVG's. Checking out design styles or making 3d objects are all part of what a website
		is. So doing those things are still dev actions to me. As long as I'm looking at marketing
		techniques or whatever it may be, I try to relate it or use it to benefit my knowledge base. I
		made six images to be converted into SVG. I have done it before, but I need a refresher. I think
		that there is a way to use Figma to transform and image into and SVG.
	</p>
	<p>
		This is such a great example of why I wanted to start blogging. Because I want to document the
		things that I learn. I want account to look back and see how far I have come. That is even just
		a little win. I deserve to celebrate any win. It feels like they are so much harder to come by
		these days. So I relish in the few I capture.
	</p>
	<p>
		So, with almost any image I edit, I do so in a free open source program called GIMP. It may not
		be Photoshop, but it is as powerful as I need it to be. I create the image for example I will
		use this knife.
	</p>
	<img src="/blogPic/wayExtreme/one.png" alt="digital drawing of a knife" />
	<p>
		In Gimp it is as easy as shift + o to select by color. I had a hiccup because at first my image
		was spread amongst layers so it could not see the separate colors. After flattening the image to
		one layer I was able to select by color. Here in the top left menu scroll to the selection tab
		and select selection to path.
	</p>
	<p>
		If it is not open or available you may have to add a paths toolbox. In that paths toolbox you
		can export the path. After selecting that option, you can save as an SVG. From GIMP we switch
		over to the website Figma. Shout-out to this site. This is an awesome solution to low-code
		questions. And there is an option to see the code for what you create so you can hardcode it
		into your own CSS. Fire.
	</p>
	<img class="cent" src="/blogPic/lookingAway/two.png" alt="screenshot of an error" />
	<p>
		In Figma we have a few more steps. You have to add your SVG by dragging the file into the Figma
		workspace. Here you can color or add effects like a drop shadow. Then export as an SVG.
	</p>
	<p>
		I took a couple minutes thinking about how to add that SVG file. Instead of playing with sizing
		to make it work I remembered that you can drag an SVG file into VS code and it will display the
		math of the SVG instead of the image it makes. So tight.
	</p>
	<p>
		It works mostly seamlessly. Out of the six images I made, I seem to have two that are a weird
		size. I tried changing the size and shape or viewbox. No nothing. Just a little tiny knife.
		Let's Duckduckgo on a quest. There has to be some kind of simple answer to why this looks all
		messed up. A whole lot of nothing helped. So I went back to the drawing board and turned the
		image 90 degree's. Then in the code I turned the SVG 90 and pow. Hits in just the right spot.
		This is a janky line of code. While I would not support it or suggest it, I cant argue it
		working.
	</p>

	<img class="cent" src="/blogPic/lookingAway/one.png" alt="little plant growing" />
</body>

<style lang="scss">
	@import '../src/routes/_components.scss';
	@import 'guts';
</style>
