<script lang="ts">
	import { AwesomeGraphQLClient } from 'awesome-graphql-client';
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	async function fetchWallpapers() {
		const client = new AwesomeGraphQLClient({
			endpoint: 'https://api-us-east-1.graphcms.com/v2/ckyfblxtg0otr01z3h6a24a60/master',
		});

		type Wallpaper = {
			name: string;
			slug: string;
			asset: {
				url: string;
			};
		};

		const { wallpapers } = await client.request<{ wallpapers: Wallpaper[] }>(`
			{
				wallpapers {
					name
					slug
					asset {
						url
					}
				}
			}
		`);

		return wallpapers;
	}

	let fetchTask = fetchWallpapers();

	onMount(() => {
		const typing = new TypeIt('#typedout', {
			strings: ['23 Aaron'],
			speed: 50,
			afterComplete: (instance) => instance.destroy(true),
		});

		typing.go();
	});
</script>

<div class="container-fluid hero-jumbo">
	<div class="image-container">
		<img
			src="https://github.com/23Aaron.png"
			width="100"
			height="100"
			class="d-inline-block align-top logo"
			alt=""
		/>
	</div>
	<div>
		<h1>
			<span id="typedout" style="display: inline-block; font-family: monospace;"> </span>
		</h1>
	</div>
	<div>
		<p class="lead hero-subtext">This is a small collection of my work and online presence to date.</p>
	</div>
</div>

<div class="col-12 text-center project-header">
	<h2>Here is a list of places you can see my work in action.</h2>
</div>

<!--Socials-->
<div class="container mt-2">
	<div class="row">
		<div class="col-md-4 col-12">
			<ul class="list-unstyled">
				<li class="icons">
					<picture>
						<source srcset="/images/Github-night.png" media="(prefers-color-scheme: dark)" />
						<img src="/images/Github-day.png" alt="GitHub" height="33px" />
					</picture>
					<div class="media-body socials">
						<h5 class="mt-0 mb-1"><a href="https://www.github.com/23aaron" target="_blank">GitHub</a></h5>
						Here you can find code for my Discord bots, and where I will be hosting current & future projects.
					</div>
				</li>
			</ul>
		</div>
		<div class="col-md-4 col-12">
			<ul class="list-unstyled">
				<li class="icons">
					<picture>
						<source srcset="/images/Discord-night.png" media="(prefers-color-scheme: dark)" />
						<img src="/images/Discord-day.png" alt="Discord" height="33px" />
					</picture>
					<div class="media-body socials">
						<h5 class="mt-0 mb-1"><a href="https://discord.gg/qEeppkm" target="_blank">Discord</a></h5>
						Come and hang out with me in my personal discord server. Ask questions about my work or projects,
						or just chill.
					</div>
				</li>
			</ul>
		</div>
		<div class="col-md-4 col-12">
			<ul class="list-unstyled">
				<li class="icons">
					<picture>
						<source srcset="/images/twitter-night.png" media="(prefers-color-scheme: dark)" />
						<img src="/images/twitter-day.png" alt="Twitter" height="33px" />
					</picture>
					<div class="media-body socials">
						<h5 class="mt-0 mb-1"><a href="https://twitter.com/23aaron_" target="_blank">Twitter</a></h5>
						Twitter is the place to check to see when I'm working on something new, or to see updates for my
						current projects.
					</div>
				</li>
			</ul>
		</div>
	</div>
	<hr />
</div>

<div class="container-fluid">
	<div>
		<div class="col-12 text-center">
			<h2 class="project-header">Latest Work</h2>
		</div>
	</div>
	<div class="projects">
		<div class="row">
			<div class="col-md-6 col-12 my-4 text-center">
				<img class="img-fluid icon" src="/images/Taurine.png" alt="Taurine" height="200" width="200" />
				<h4><a href="https://taurine.app" target="_blank">Taurine</a></h4>
				<h6>
					I designed and implemented the logo, UI and website for Taurine, making use of the Procursus
					bootstrap and libhooker, an all new hooking library designed with modern firmwares in mind.
				</h6>
			</div>
			<div class="col-md-6 col-12 my-4 text-center">
				<img class="img-fluid icon" src="/images/betelguese.png" alt="Betelguese" height="200" width="200" />
				<h4><a href="https://github.com/23Aaron/Betelguese">Betelguese</a></h4>
				<h6>
					Betelguese is a program co-maintained by me and <a href="https://twitter.com/hbkirb" target="_blank"
						>Adam Demasi</a
					> which allows you to use the Procursus bootstrap and libhooker library on your checkra1n-jailbroken
					device with a single click!
				</h6>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col-12 my-4 text-center">
				<img class="img-fluid icon" src="/images/Flashback.png" alt="FlashBack" height="200" width="200" />
				<h4><a href="https://chariz.com/get/flashback" target="_blank">FlashBack</a></h4>
				<h6>
					I assisted <a href="https://twt.mpg13.co" target="_blank">Micah</a> (the main developer of FlashBack)
					with a visual overhaul of FlashBack with some upgrades to functionality too. The redesigned FlashBack
					app now also contains a handy guide on how to use the app.
				</h6>
			</div>
			<div class="col-md-6 col-12 my-4 text-center">
				<img class="img-fluid icon" src="/images/tb.png" alt="TalkBoard" height="200" width="200" />
				<h4><a href="https://talkboard.live">TalkBoard</a></h4>
				<h6>
					This is a podcast organised and hosted by me and <a
						href="https://twitter.com/arm64e"
						target="_blank">cynder</a
					>
					about jailbreaking and other tech related subjects. Available on
					<a href="https://podcasts.apple.com/gb/podcast/talkboard/id1469760640" target="_blank">Apple</a>
					and
					<a
						href="https://open.spotify.com/show/1sCjmMpUDqnJNU54KwRf2Z?si=HTa815wcTX-bzqYVqqZDBQ"
						target="_blank">Spotify</a
					>. Official <a href="https://patreon.com/TalkBoard" target="_blank">Patreon</a> and
					<a href="https://discord.gg/jPtvbWV" target="_blank">Discord</a> links! The show is on hiatus, but hopefully
					back soon!
				</h6>
			</div>
		</div>
	</div>

	<div>
		<div class="col-12 text-center">
			<h2 class="project-header">Wallpapers</h2>
		</div>
	</div>
	<div class="container text-center">
		<div class="row">
			{#await fetchTask then wallpapers}
				{#each wallpapers as wallpaper}
					<div class="col-md-4 my-2">
						<div class="card">
							<img src="{wallpaper.asset.url}" alt="{wallpaper.name}" class="card-img-top" />
							<div class="card-body">
								<h6 class="card-title">{wallpaper.name}</h6>
								<a href="{wallpaper.asset.url}" class="btn btn-primary btn-download" download>
									<svg class="down-arrow" viewBox="0 0 81 81">
										<path
											d="m40.7285 80.63867c21.8262 0 39.8926-18.06637 39.8926-39.89257 0-21.7773-18.1152-39.8926-39.9414-39.8926s-39.84376 18.1153-39.84376 39.8926c0 21.8262 18.06636 39.89257 39.89256 39.89257zm0-18.26167c-1.2207 0-2.1973-.4395-3.2715-1.5137l-13.5254-13.7695c-.7324-.7813-1.0742-1.6114-1.0742-2.7344 0-2.1485 1.5625-3.7598 3.711-3.7598 1.123 0 2.1484.4883 2.7832 1.1719l4.1504 4.4433 3.5644 4.5899-.3906-9.1309v-18.5058c0-2.295 1.709-3.9063 4.0527-3.9063 2.2949 0 4.0527 1.6113 4.0527 3.9063v18.5058l-.4394 9.1309 3.6133-4.6387 4.1504-4.3945c.6836-.6836 1.6601-1.1719 2.7832-1.1719 2.1484 0 3.7597 1.6113 3.7597 3.7598 0 1.123-.4394 1.9531-1.123 2.7344l-13.5254 13.7695c-.9766 1.0254-2.002 1.5137-3.2715 1.5137z"
										></path>
									</svg>
									Download
								</a>
							</div>
						</div>
					</div>
				{/each}
			{/await}
		</div>
	</div>

	<div class="container text-center">
		<h2>Friends' Projects</h2>
		<p>Below is a small collection of stuff that I think is cool, made by some cool people I know!</p>
	</div>
	<div class="container-fluid">
		<div class="row text-center">
			<div class="col-md-6 my-4 text-center">
				<img class="icon" src="/images/chariz.svg" alt="" />
				<a href="https://chariz.com" target="_blank"><h3>Chariz</h3></a>
				<h6 class="friend-text">
					Chariz is an awesome jailbreak repo run by my friends <a
						href="https://twitter.com/hbkirb"
						target="_blank">Adam</a
					>
					and <a href="https://twitter.com/aarnavtale" target="_blank">Aarnav</a>, and it's a one stop shop
					for awesome packages to breathe new life into your jailbroken iOS device, with cool tweaks and
					themes! <a href="https://repo.chariz.com" target="_blank">Check it out!</a>
				</h6>
			</div>
			<div class="col-md-6 my-4 text-center">
				<img src="/images/streamticker.png" class="icon" alt="" />
				<a href="https://streamticker.bot" target="_blank"><h3>StreamTicker</h3></a>
				<h6 class="friend-text">
					StreamTicker is a Discord bot developed by my friends <a
						href="https://twitter.com/laf0nd"
						target="_blank">Jack</a
					>
					and <a href="https://twitter.com/alistaiiiir" target="_blank">Alistair</a> that allows you to get
					realtime statistics about anything online. It pulls data from Twitter, Twitch, YouTube and many
					more! <a href="https://streamticker.bot/invite" target="_blank">Add it to your Discord!</a>
				</h6>
			</div>
		</div>
	</div>
</div>

<div class="support">
	<h2 class="get-in-touch">Need to get in touch?</h2>
	<br />
	<div class="container mt-2">
		<div class="row">
			<div class="col-md-4 col-12">
				<ul class="list-unstyled">
					<li class="media">
						<a href="https://discord.gg/qEeppkm" class="contact-box media-body socials">
							<i class="discord fab fa-discord support-icon"></i>
							<p class="support-card-title">Discord</p>
							<h5 class="caption">Join the server!</h5>
						</a>
					</li>
				</ul>
			</div>
			<div class="col-md-4 col-12">
				<ul class="list-unstyled">
					<li class="media">
						<a href="https://twitter.com/23Aaron_" class="contact-box media-body socials">
							<i class="twitter fab fa-twitter support-icon"></i>
							<p class="support-card-title">Twitter</p>
							<h5 class="caption">DM me on Twitter!</h5>
						</a>
					</li>
				</ul>
			</div>
			<div class="col-md-4 col-12">
				<ul class="list-unstyled">
					<li class="media">
						<a href="mailto:support@23aaron.com" class="contact-box media-body socials">
							<i class="email fas fa-envelope support-icon"></i>
							<p class="support-card-title">Email</p>
							<h5 class="caption">Send me an email!</h5>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	@media (prefers-color-scheme: dark) {
		.contact-box,
		.card {
			background-color: #141414 !important;
			color: #ffffff !important;
		}

		.contact-box {
			box-shadow: 0 1px 5px 0 rgba(175, 175, 175, 0), 0 1px 5px 0 rgba(175, 175, 175, 0),
				0 1px 5px 0 rgba(175, 175, 175, 0), 0 1px 5px 0 rgba(175, 175, 175, 0) !important;
			transition: background-color 200ms ease-out !important;
		}

		.contact-box:hover {
			color: #ffffff;
			background-color: #1c1c1c !important;
			box-shadow: 0 1px 15px 0 rgba(175, 175, 175, 0), 0 1px 15px 0 rgba(175, 175, 175, 0),
				0 1px 15px 0 rgba(175, 175, 175, 0), 0 1px 15px 0 rgba(175, 175, 175, 0) !important;
		}

		.icon {
			box-shadow: 0 1px 10px 0 rgba(175, 175, 175, 0), 0 1px 10px 0 rgba(175, 175, 175, 0),
				0 1px 10px 0 rgba(175, 175, 175, 0), 0 1px 10px 0 rgba(175, 175, 175, 0) !important;
			transition: box-shadow 200ms ease-out;
		}

		.icon:hover {
			box-shadow: 0 1px 40px 0 rgba(175, 175, 175, 0), 0 1px 40px 0 rgba(175, 175, 175, 0),
				0 1px 40px 0 rgba(175, 175, 175, 0), 0 1px 40px 0 rgba(175, 175, 175, 0) !important;
		}

		br {
			border-top: 1px solid rgba(0, 0, 0, 0.1);
		}

		hr {
			border-top: 1px solid rgba(0, 0, 0, 0.1);
		}
	}

	@media (max-width: 540px) {
		.contact-box {
			padding-left: 20px;
			padding-right: 20px;
		}
	}

	.friend-text {
		padding-left: 15px;
		padding-right: 15px;
	}

	.hero-jumbo {
		background: linear-gradient(340deg, #ff7b01, #7736bf);
		background-size: 1000% 1000%;

		-webkit-animation: hero-gradient 10s ease infinite;
		-moz-animation: hero-gradient 10s ease infinite;
		animation: hero-gradient 10s ease infinite;

		color: white !important;

		margin-top: 56px !important;
		margin-bottom: 2rem;

		padding-top: 5rem;
		padding-bottom: 5rem;
	}

	.hero-subtext {
		color: ghostwhite !important;
		text-align: center !important;
	}

	@keyframes navbar-in {
		from {
			-webkit-backdrop-filter: saturate(100%) blur(0px);
			backdrop-filter: saturate(100%) blur(0px);
			background-color: transparent;
		}
		50% {
			-webkit-backdrop-filter: saturate(120%) blur(10px);
			backdrop-filter: saturate(120%) blur(10px);
		}
		to {
			-webkit-backdrop-filter: saturate(180%) blur(20px);
			backdrop-filter: saturate(180%) blur(20px);
		}
	}

	@keyframes navbar-out {
		from {
			-webkit-backdrop-filter: saturate(180%) blur(20px);
			backdrop-filter: saturate(180%) blur(20px);
		}
		50% {
			-webkit-backdrop-filter: saturate(120%) blur(10px);
			backdrop-filter: saturate(120%) blur(10px);
		}
		to {
			-webkit-backdrop-filter: saturate(100%) blur(0px);
			backdrop-filter: saturate(100%) blur(0px);
			background-color: transparent;
		}
	}

	@-webkit-keyframes hero-gradient {
		0% {
			background-position: 0% 51%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 51%;
		}
	}
	@-moz-keyframes hero-gradient {
		0% {
			background-position: 0% 51%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 51%;
		}
	}
	@keyframes hero-gradient {
		0% {
			background-position: 0% 51%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 51%;
		}
	}

	.icon {
		border-radius: 20%;
		margin-bottom: 20px;
		max-height: 200px;
		max-width: 200px;
		object-fit: contain;
		box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1),
			0 1px 10px 0 rgba(0, 0, 0, 0.1);
		transition: box-shadow 200ms ease-out;
	}

	.icon:hover {
		box-shadow: 0 1px 40px 0 rgba(0, 0, 0, 0.15), 0 1px 40px 0 rgba(0, 0, 0, 0.15), 0 1px 0px 0 rgba(0, 0, 0, 0.15),
			0 1px 20px 0 rgba(0, 0, 0, 0.15);
	}

	.logo {
		border-radius: 100%;
	}

	h1 {
		text-align: center;
	}

	.image-container {
		display: flex;
		justify-content: center;
	}

	.projects {
		padding-bottom: 30px;
	}

	.project-header {
		padding-bottom: 2rem;
	}

	.support-card-title {
		font-weight: 300;
	}

	.support-icon {
		font-size: 50px;
	}

	.support {
		text-align: center;
	}

	.socials {
		padding-left: 10px;
	}

	.contact-box {
		background-color: #fefeff;
		border-radius: 20px;
		font-size: 16px;
		font-weight: 600;
		min-width: 180px;
		min-height: 140px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		text-align: center;
		box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.05),
			0 1px 5px 0 rgba(0, 0, 0, 0.05);
		transition: box-shadow 200ms ease-out;
		color: #000000;
	}

	.contact-box:hover {
		color: #000000;
		background-color: #f9f9fa;
		box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.15), 0 1px 15px 0 rgba(0, 0, 0, 0.15), 0 1px 15px 0 rgba(0, 0, 0, 0.15),
			0 1px 15px 0 rgba(0, 0, 0, 0.15);
	}

	.btn-download {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding: 10px 20px;
		max-height: 40px;
		line-height: 1em;
		border-radius: 8px;
		font-weight: 600;
		display: inline-flex;
	}

	.down-arrow {
		display: inline-block;
		position: relative;
		width: 1em;
		height: 1em;
		fill: currentColor;
		vertical-align: text-top;
		margin-right: 0.2rem;
	}

	.icons {
		display: flex;
		align-items: flex-start;
	}

	.contact-box:link {
		text-decoration: none;
	}

	.contact-box:visited {
		text-decoration: none;
	}

	.contact-box:hover {
		text-decoration: none;
	}

	.contact-box:active {
		text-decoration: none;
	}

	.discord {
		color: #7289da;
	}

	.twitter {
		color: #00acee;
	}

	.email {
		color: #037bff;
	}

	.card {
		border-radius: 2em;
	}

	.card-img-top {
		border-radius: calc(2em + 1px);
	}
</style>
