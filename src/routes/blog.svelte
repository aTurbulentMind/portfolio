<body>
	<h1>The Empty Account Articles</h1>

	<articles>
		<a href="/blog/lifeHppanes/">
			<article>
				<h2>life Hppanes 07/18/22</h2>

				<img src="/blogPic/lifeHappened/one.png" alt="computer lit by a lantern" />
			</article>
		</a>

		<a href="/blog/itsNotSprite/">
			<article>
				<h2>Sprite? 07/11/22</h2>

				<img src="/blogPic/notSprite/one.jpg" alt="feet up camping next to a waterfall" />
			</article>
		</a>

		<a href="/blog/getLost/">
			<article>
				<h2>Get Lost 07/05/22</h2>

				<img src="/blogPic/goGetLost/one.png" alt="burnt out or jaded?" />
			</article>
		</a>

		<a href="/blog/moreAndMore/">
			<article>
				<h2>MoreAndMore... 06/27/22</h2>

				<img
					src="/blogPic/moreandmoreandmore/one.png"
					alt="digital logo idea. lantern inside a screen"
				/>
			</article>
		</a>

		<a href="/blog/lookAway/">
			<article>
				<h2>Look Away! 06/21/22</h2>

				<img src="/blogPic/wayExtreme/three.png" alt="digital drawing of a chainsaw" />
			</article>
		</a>

		<a href="/blog/extremophile/">
			<article>
				<h2>Extremophile 06/13/22</h2>

				<img src="/blogPic/wayExtreme/one.png" alt="digital drawing of a knife" />
			</article>
		</a>

		<a href="/blog/lostLostNotFound/">
			<article>
				<h2>Dont read this 06/07/22</h2>

				<img src="/blogPic/lostnotFound/one.png" alt="bread sandwich" />
			</article>
		</a>

		<a href="/blog/urSandwich/">
			<article>
				<h2>You're a sandwich! 5/31/22</h2>

				<img src="/blogPic/urASandwich/one.jpg" alt="cat sitting funny" />
			</article>
		</a>

		<a href="/blog/mrmasonry/">
			<article>
				<h2>Masonry? 5/23/22</h2>

				<img src="/blogPic/mrMasonry/five.jpg" alt="snow covered mountain range" />
			</article>
		</a>

		<a href="/blog/dustbite/">
			<article>
				<h2>Another one bites the dust 5/16/22</h2>

				<img src="/blogPic/dustbite/six.jpg" alt="rugrat meme about socialist idea" />
			</article>
		</a>

		<a href="/blog/sizeMatters/">
			<article>
				<h2>Size matters... 5/9/22</h2>

				<img src="/blogPic/sizeMatters/onethree.png" alt="completed deploy" />
			</article>
		</a>

		<a href="/blog/inspirationthroughinspiring/">
			<article>
				<h2>Inspiration Through inspiring 5/2/22</h2>

				<img src="/blogPic/inspirationThroughInspiring/insp.jpg" alt="sitting siamese cat" />
			</article>
		</a>

		<a href="/blog/yourawizard/">
			<article>
				<h2>You're a wizard!? 4/25/22</h2>

				<img src="/img/wiz.jpg" alt="sitting siamese cat" />
			</article>
		</a>

		<a href="/blog/whoru/">
			<article>
				<h2>Who r U? 4/18/22</h2>

				<img src="/img/mixed2.png" alt="mixed face happy and sad" />
			</article>
		</a>

		<a href="/blog/gottaStart/">
			<article>
				<h2>Gotta start. 4/11/22</h2>

				<img src="/img/carfive.jpg" alt="damage to my car from an accident" />
			</article>
		</a>
	</articles>
</body>

<style lang="scss">
	@import 'components';

	articles {
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		contain: content;
		gap: 3%;
		margin: 8%;

		article {
			@include glassBack();
			border: solid 1px purple;
		}

		img {
			max-height: 100%;
			max-width: 100%;
			margin-bottom: -3%;
		}
	}
</style>
