<body>
	<h1>Contact:</h1>

	<div class="follow">
		<a href="https://twitter.com/LanternLightDev/">Twitter(X)</a>
		<a href="https://www.instagram.com/lanternlightdevelopment/">Instagram</a>
		<a href="https://www.facebook.com/profile.php?id=100078803221612/">Facebook</a>
	</div>

	<container>
		<form action="https://formsubmit.co/joelkrivers@gmail.com" method="POST">
			<wrapper>
				<box>
					<input type="text" name="name" id="name" required />
					<label for="fname">First & Last Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="email" id="email" required />
					<input
						type="hidden"
						name="_next"
						value="https://www.lanternlightdevelopment.com/contact"
					/>
					<label for="email">Email</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="tel" id="tel" required />
					<label for="tel">Preferred communication</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<input type="text" name="comp" id="comp" required />
					<label for="comp">Company/Entity Name</label>
				</box>
			</wrapper>

			<wrapper>
				<box>
					<textarea id="mes" required />
					<label for="mes">Comments or Questions:</label>
				</box>
			</wrapper>

			<button type="submit">Submit</button>
		</form>
	</container>
</body>

<!--svelte-ignore css-unused-selector -->
<style lang="scss">
	@import '../src/lib/basecamp';
	* {
		box-sizing: border-box;
	}

	container {
		form {
			margin-bottom: 10vh;
		}
	}
</style>
