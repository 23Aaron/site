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
											d="M30.9294524,80 L68.851998,80 C72.8746917,80 75.9050321,78.990201 77.9430192,76.9706029 C79.9810064,74.9510048 81,71.9614682 81,68.001993 L81,29.8953662 C81,25.935891 79.9810064,22.9463544 77.9430192,20.9267564 C75.9050321,18.9071583 72.8746917,17.8973592 68.851998,17.8973592 L30.9294524,17.8973592 C26.8801184,17.8973592 23.8431179,18.9005149 21.8184509,20.9068261 C19.7937839,22.9131374 18.7814504,25.9093174 18.7814504,29.8953662 L18.7814504,68.001993 C18.7814504,71.9614682 19.7937839,74.9510048 21.8184509,76.9706029 C23.8431179,78.990201 26.8801184,80 30.9294524,80 Z M0,50.3039362 C0,54.2368377 1.0123335,57.2130875 3.03700049,59.2326856 C5.06166749,61.2522837 8.09866798,62.2620827 12.148002,62.2620827 L13.426739,62.2620827 L13.426739,29.8953662 C13.426739,26.2282013 14.1193883,23.1057964 15.5046867,20.5281515 C16.8899852,17.9505066 18.8880118,15.9774124 21.4987667,14.608869 C24.1095215,13.2403255 27.2530834,12.5560538 30.9294524,12.5560538 L62.4183522,12.5560538 L62.4183522,11.998007 C62.4183522,8.03853181 61.3926986,5.04899518 59.3413912,3.02939711 C57.2900839,1.00979904 54.2797237,0 50.3103108,0 L12.148002,0 C8.12530834,0 5.09496793,1.00315562 3.05698076,3.00946687 C1.01899359,5.01577811 0,8.01195815 0,11.998007 L0,50.3039362 Z M31.4489393,48.9486796 C31.4489393,47.9123069 31.7819438,47.0619498 32.4479526,46.3976084 C33.1139615,45.7332669 33.9664529,45.4010962 35.0054267,45.4010962 L46.4341391,45.4010962 L46.4341391,34.040857 C46.4341391,33.0044843 46.7538234,32.1541272 47.3931919,31.4897857 C48.0325604,30.8254443 48.8584114,30.4932735 49.8707449,30.4932735 C50.9363592,30.4932735 51.7955106,30.8188009 52.4481993,31.4698555 C53.100888,32.1209101 53.4272324,32.9779106 53.4272324,34.040857 L53.4272324,45.4010962 L64.8959053,45.4010962 C65.9348791,45.4010962 66.7807104,45.7332669 67.4333991,46.3976084 C68.0860878,47.0619498 68.4124322,47.9123069 68.4124322,48.9486796 C68.4124322,49.9584787 68.0794277,50.7889055 67.4134188,51.4399601 C66.74741,52.0910148 65.9082388,52.4165421 64.8959053,52.4165421 L53.4272324,52.4165421 L53.4272324,63.8166418 C53.4272324,64.8264408 53.100888,65.663511 52.4481993,66.3278525 C51.7955106,66.992194 50.9363592,67.3243647 49.8707449,67.3243647 C48.8584114,67.3243647 48.0325604,66.992194 47.3931919,66.3278525 C46.7538234,65.663511 46.4341391,64.8264408 46.4341391,63.8166418 L46.4341391,52.4165421 L35.0054267,52.4165421 C33.9664529,52.4165421 33.1139615,52.0910148 32.4479526,51.4399601 C31.7819438,50.7889055 31.4489393,49.9584787 31.4489393,48.9486796 Z" id="Shape"
										></path>
									</svg>
									Open In New Tab
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
