<body>
	<h1>moreAndMoreAndMoreAndMore</h1>

	<img src="/blogPic/notSprite/one.jpg" alt="feet up camping next to a waterfall" />

	<p>
		Two days to get away. We left Saturday in the early side of the afternoon. We returned in the
		evening on Monday. I felt the same level of a refresh as I do after an acid trip. Like the world
		is brand new again. That whatever was compounding layers of micro stresses became a bit weaker.
		From a psychedelic trip, it can last weeks. Easily shrugging off tiny problems. I hoped this
		step away would hold a little while and I could make it a week at least without falling into a
		spiral. I got forty hours.
	</p>
	<p>
		Our journey took us a few minutes south of Quincy in eastern Washington. Just over the mountains
		a bit and nestled nicely on the Columbia River. Getting out of the fiberglass horse was twenty
		degrees warmer than our green side of the mountains. And so much more dry. We started inside a
		layer of canyon. The hike took us along the left side of a ridge. To our right were vast rolling
		hills and a gorge that is the Columbia River.
	</p>
	<img src="/blogPic/notSprite/two.jpg" alt="sunset at the waterfall" />
	<p>
		The flat grade and smooth contour to the hillside made for an easy hike. That is not quite what
		we are used to, but I'll take it. We have so many steep inclines on this side. The hours spent
		climbing hills are multiplied in difficulty with that 30-pound pack. Whether a zero-degree grade
		or a nearly vertical hike, I want it. No. I need it. I need to be outside and away from
		everything that is society. I need to be disconnected for chunks of time. I have to not see the
		news or think of a line of code. We as a species lived in the caves and holes much longer than
		we have built homes. Seeing and feeling how far we have grown helps me appreciate our world on a
		new level.
	</p>
	<p>
		This week was a bit easier than the last few to start. This wonderful zen vibe just felt so
		good. I wish it could have lasted the whole week. Just gotta keep pushing through right? So back
		to the old grind. I had upgraded cons site to have a loader for anytime someone gets a bit of
		lag on their data to any page. That was not so bad. I found two videos that broke down how to
		use stores to create said loader. A concept I came across claimed that you won't need any
		loading screen as long as it does not take more than 500 ms. And with the way svelte should
		work, the page is loaded by the person there before you.
	</p>
	<img src="/blogPic/notSprite/three.jpg" alt="sunset in a valley" />
	<p>
		I learned a bit about "stores" in svelte and I learned or relearned about the css property
		"inset". Inset works for positioning. It is a holder for the properties top, right, bottom and
		left. I love finding surprises like that. Simple little things here and there that improve that
		quality of life. It makes development that much better.
	</p>
	<p>
		It made me want to see how much svelte can do. Most of the time I learn things it can be
		difficult for me to find applications or use for them. Maybe it then falls into that 80/20 rule
		which states we only use 80% of our toolbelt 20% of the time. When I argue that against my
		unused skills I feel a bit better. The sense that if I need the info, it's living somewhere in
		my head. I can think of that usefulness when dealing with everyday coding. I come to a problem
		and realize I already have an answer. There needs to be a sense of balance between these two
		sides. If I don’t do things that challenge me I feel like I am coasting by. But if I feel like
		all I am doing is painting the wall with my annoyance then I won't want to code. What a
		compelling dichotomy.
	</p>
	<img src="/blogPic/notSprite/fourteen.png" alt="rubber duck art" />
	<p>
		I can't get it. I tried to get it to work most of the day and can't get the page to open up. All
		it displays is a Netlify 404 page. The build shows that it works. Netlify shows that it is
		deployed. And still no luck. I'm not super worried. It is just an upgraded version with the
		loader. Cons page won't die without it. But it would be nice to understand what's going on. It's
		why it seems to grow increasingly apparent to complete even side projects or simple tasks to hit
		walls to learn your way overI came across a menu tutorial and it used CSS to create a faux 3d
		directory. It inspired me to make a real 3d menu. The icons could go from flat SVG to showing
		their dimension when selected. Maybe bounce around a little. Or a little 3d house that opens the
		door on hover. I keep ending back up at 3d site ideas. Making little 3d animations for the
		background and on-click functions. Or how can I make something better with 3d assets? Have to
		get to it early. There will be a craze for it, so why not do cool shit early. Each time I strap
		the headset to my face and lose the world I am reminded of how it will be in the future.
	</p>
	<p>
		I see people lost in escapism as it is. I don’t blame them even a little bit. I am one o them.
		When I look around at the world there is a sense of impending doom. I can't tell if it is real
		or if the media is just doing its job better than ever. I want it to just be the television. I
		want to run. I want it to be scare tactics. It doesn’t feel like it though. The insane cost of
		housing, the rising cost of food or gas, and the politics of the world feel like everything is
		on fire. If it is, it's way the fuck out of my control. That makes the withdrawal within reach.
		It makes disconnection palpable. Why be in this world when you can be a god in another.
	</p>
	<img src="/blogPic/notSprite/five.jpg" alt="of a dry valley" />
	<p>
		So I see people diving into VR sooner than later. We will grow an entire generation uninterested
		in the material world around them in trade for bits of binary. It's sad because it feels like we
		will orchestrate our dystopian future. That we won't try to look away from it because humans are
		like water in the search for the path of least resistance. Is it unethical to want to capitalize
		on our future personal shared prisons?
	</p>

	<p>Here is a couple extra photos from hiking this weeked.</p>

	<div class="gridShot">
		<div class="box a"><img src="/blogPic/notSprite/four.jpg" alt="" /></div>
		<div class="box b"><img src="/blogPic/notSprite/six.jpg" alt="" /></div>
		<div class="box c"><img src="/blogPic/notSprite/seven.jpg" alt="" /></div>
		<div class="box d"><img src="/blogPic/notSprite/eight.jpg" alt="" /></div>
		<div class="box e"><img src="/blogPic/notSprite/nine.jpg" alt="" /></div>
		<div class="box f"><img src="/blogPic/notSprite/ten.jpg" alt="" /></div>
		<div class="box g"><img src="/blogPic/notSprite/eleven.jpg" alt="" /></div>
		<div class="box h"><img src="/blogPic/notSprite/twelve.jpg" alt="" /></div>
		<div class="box i"><img src="/blogPic/notSprite/thirteen.jpg" alt="" /></div>
	</div>
</body>

<style lang="scss">
	@import '../src/routes/_components.scss';
	@import 'guts';

	.gridShot {
		width: 100vh;
		display: grid;
		grid-auto-flow: dense;
		grid-template: '1fr 1fr 1fr 1fr 1fr' 33.33vh '1fr 1fr 1fr 1fr 1fr' 33.33vh '1fr 1fr 1fr 1fr 1fr' 33.33vh;
		gap: 15px;
		overflow-y: hidden;
		margin: 0 4% 2% 6%;

		.box {
			position: relative;

			img {
				margin: 0 0 0 -5%;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.a {
			grid-row: span 2;
		}

		.b,
		.f,
		.h,
		.j {
			grid-column: span 2;
		}
	}

	@media (max-width: 991px) {
		.gridShot {
			grid-template: '1fr 1fr 1fr' 250px '1fr 1fr 1fr' 250px '1fr 1fr 1fr ' 250px '1fr 1fr 1fr' 250px '1fr 1fr 1fr ' 250px;
		}
	}

	@media (max-width: 768px) {
		.gridShot {
			grid-template: '1fr 1fr' 250px '1fr 1fr' 250px '1fr 1fr ' 250px '1fr 1fr' 250px '1fr 1fr' 250px '1fr 1fr' 250px '1fr 1fr' 250px;
		}

		.h {
			grid-column: span 1;
		}
	}

	@media (min-width: 750px) {
		.gridShot {
			width: 90%;
			margin-left: 10%;
		}
	}
</style>
