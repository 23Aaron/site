<script>
	import '../app.scss';
</script>

<nav class="navbar navbar-light fixed-top fancy">
	<div class="container">
		<a class="navbar-brand" href="/">
			<picture>
				<source srcset="/images/home-night.svg" media="(prefers-color-scheme: dark)" />
				<img src="/images/home.svg" alt="Home" height="28px" />
			</picture>
		</a>
	</div>
</nav>

<slot />

<footer class="text-center">
	<div class="container">
		<div class="row">
			<hr>
			<div class="col-12">
				<p>A 23 Aaron site.</p>
			</div>
		</div>
	</div>
</footer>

<style>
	@media (prefers-color-scheme: dark) {
		.navbar-light .navbar-brand {
			color: #ddd;
		}

		.navbar-light .navbar-brand:hover {
			color: #f5f5f5;
		}

		.navbar.fancy {
			-webkit-backdrop-filter: saturate(180%) blur(20px);
			backdrop-filter: saturate(180%) blur(20px);
			background-color: rgba(14, 14, 14, 0.589) !important;
		}
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

	.navbar {
		animation-name: navbar-in;
		animation-duration: 0.7s;
		animation-fill-mode: forwards;
		animation-iteration-count: 1;
	}

	.navbar {
		transition: all ease-in-out 0.7s;
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		backdrop-filter: saturate(180%) blur(20px);
		background-color: rgba(255, 255, 255, 0.7);
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
</style>
