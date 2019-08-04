<template>
	<main id="main">
		<section class="p-404 l">
			<h1>404</h1>
			<div class="p-404__link">
				<a href="/">Back to homepage</a>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-404 {
	& h1 {
		@include font-size(180, 200);
		text-align: center;
		margin: 10rem 0;
	}
	&__link {
		text-align: center;
		margin-bottom: 2rem;
		& a {
			@include font-size(16, 18);
			display: inline-block;
			border: 0.1rem solid $color-black;
			padding: 1rem 3rem;
			color: $color-black;
		}
	}
}
</style>