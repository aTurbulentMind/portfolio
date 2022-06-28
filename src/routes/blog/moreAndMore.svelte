<body>
	<h1>moreAndMoreAndMoreAndMore</h1>

	<img src="/blogPic/moreandmoreandmore/one.png" alt="digital logo idea. lantern inside a screen" />

	<p>
		I feel some sort of way working into this week. One side is excited to just be alive. The other
		is oppressed by my thoughts. Feeling like I am treading water. It’s a bottomless void as cold as
		the ether of deep space. All while the zone above the water is sweltering chaos. Panic and
		peace. Surreal yet simulated. Hopeful of failure and afraid of losing. I wonder why I want to
		get up sometimes more than not. There are so many ways I should take care of myself and none of
		them get acted on. I just want to act out.
	</p>
	<p>
		I do though. Maybe it's for attention. Because being in trouble is one of the only ways anyone
		would look at me growing up. Told me I am not worth winning for years and now looking at it, how
		much is self-sabotage. No matter how I get there, being in trouble feels like my path. I don’t
		want it. Hell, when I was young I had to learn the hard way how to keep the cuffs off. I want to
		have more motivation to do things in life. I feel stunted. I remember working toward my dream
		all day every day with no interest to stop moving. Now it feels like my body is just in motion.
		No quest or path or anything like that. Just moving.
	</p>
	<img src="/blogPic/moreandmoreandmore/two.png" alt="digital" />
	<p>Am I burnt out or am I jaded? What is the difference?</p>

	<p>
		After listening to a podcast last night about burnout I am pretty sure I am burnt the fuck out.
		The lack of interest in the things I used to care about. The lack of motivation to get out of
		bed or even try. It feels blurry between the line between depression and burnout. I am going to
		have to investigate the difference. I think when I am depressed I just don’t want to be alive.
		That grows and weakens in interest day to day. The burnout is not wanting to do the things I
		care about. Not feel like there is any worth to the time I spend in progression.
	</p>
	<p>
		I have to take some kind of steps to get better. Would be great if they involved being more
		productive. It feels so difficult to know I can be better. Like it just won't happen. I wish
		that I could afford some mental health care. But if I could pay that cost, would I need it?
		Would I be on the edge of my willingness to live if I did not struggle? Is the grass greener or
		is it just a filter?
	</p>
	<img src="/blogPic/moreandmoreandmore/three.png" alt="digital" />
	<p>
		I can't say for sure. I can say it looks awfully nice over there. I know everyone has problems,
		but I feel like not worrying about every dollar makes a world of change. Is it like a
		relationship? Where people feel like they need someone next to them so they can finally be
		happy. When in fact they need to learn how to be happy as they are? Is that a bunch of shit fed
		to us from the rich? A kind of poverty Stockholm syndrome? A way to cope with the crippling
		anxiety of being without. We simplify our trauma with "I'm not as broke as X country" or "my
		life is not as bad as Y". are these just more mechanisms to cope with the trauma? Or are they
		fluid in the bottled-up emotions that make us so sick?
	</p>
	<p>
		There is this idea to do less already forming. How do I do that? It will probably be forcing
		myself outside after work. Whether that is walking or working in the yard. Painting and art.
		Making music. I need to form a list of things that I like to do a lot. I can add some things to
		that list that I have never done yet want. We may not drive a whole lot. Gas is currently 5.50
		in most places. I have to do something.
	</p>
	<img src="/blogPic/moreandmoreandmore/four.png" alt="digital" />
	<p>
		I did not learn anything this week code related. Just barely had the energy to do much. Most of
		the time was spent doing SVG. Worked on Con's site a bit. I don’t have a lot of input for any
		type of education. Still not good. Still getting that sick feeling when I think about life.
		Still wanting to have people around me while not having the interest in trying to have
		relationships is difficult. I want to reach out. Every time I do it feels like nobody reaches
		back. I think about going to social media. That does not feel like it provides the sense of
		satisfaction that I'm craving. This is affecting my life and it feels like it is becoming
		unmanageable. Is this the point people seek help? I probably should but I won't. Back to the "if
		I could afford a shrink I would".
	</p>
	<img src="/blogPic/moreandmoreandmore/five.png" alt="digital" />

	<p>Here is a couple extra photos from hiking this weeked.</p>

	<div class="gridShot">
		<div class="box a"><img src="/blogPic/moreandmoreandmore/seven.jpg" alt="digital" /></div>
		<div class="box b"><img src="/blogPic/moreandmoreandmore/eight.jpg" alt="digital" /></div>
		<div class="box c"><img src="/blogPic/moreandmoreandmore/nine.jpg" alt="digital" /></div>
		<div class="box d"><img src="/blogPic/moreandmoreandmore/ten.jpg" alt="digital" /></div>
		<div class="box e"><img src="/blogPic/moreandmoreandmore/eleven.jpg" alt="digital" /></div>
		<div class="box f"><img src="/blogPic/moreandmoreandmore/twelve.jpg" alt="digital" /></div>
	</div>
</body>

<style lang="scss">
	@import '../src/routes/_components.scss';
	@import 'guts';

	.gridShot {
		width: 100%;
		display: grid;
		grid-auto-flow: dense;
		grid-template: '1fr 1fr 1fr 1fr 1fr' 33.33vh '1fr 1fr 1fr 1fr 1fr' 33.33vh '1fr 1fr 1fr 1fr 1fr' 33.33vh;
		gap: 15px;
		overflow-y: hidden;
		margin-bottom: 2%;

		.box {
			position: relative;

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
