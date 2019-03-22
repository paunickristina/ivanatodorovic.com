<template>
	<article class="b-news-item">
		<div class="b-news-item__wrapper c-border">
			<h2 class="b-news-item__title">{{ data.title }}</h2>
			<div class="b-news-item__img">
				<img src="~assets/img/news/news-2.jpg" alt="">
			</div>
			<div class="b-news-item__body">
				<h2>{{ data.title }}</h2>
				<p class="b-news-item__desc">{{ data.description }}</p>
				<p class="b-news-item__date">{{ data.date }} — {{ data.year }}</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: ["data"]
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-news-item {
	&__wrapper {
		// display: grid;
		position: relative;
		padding: 0 0 5.3rem 0;
		margin-bottom: 5.6rem;
		@include breakpoint(overPhone){
			display: grid;
			padding: 0 0 5.8rem 0;
			grid-column-gap: 10.6%;
			grid-template-columns: 49% 40%;
			align-items: center;
		}
	}
	& h2 {
		@include font-size(30, 30);
		@include line-height(34, 35);
		letter-spacing: 0;
		margin-bottom: 1.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 0;
		}
	}
	&__title {
		@include breakpoint(overPhone){
			display: none;
		}
	}
	&__img {
		margin-bottom: 1.9rem;
		@include breakpoint(overPhone){
			margin-bottom: 0;
			// grid-row: 1 / span 10;
		}
		& img {
			width: 100%;
		}
	}
	&__body {
		// display: grid;
		@include breakpoint(overPhone){
			// margin-top: 7rem;
			// display: flex;
			// padding: 5rem 0;
			// flex-wrap: wrap;
			// align-items: center;
		}
		& h2 {
			display: none;
			// @include font-size(30, 30);
			// @include line-height(34, 35);
			// letter-spacing: 0;
			// order: 1;
			// margin-bottom: 1.6rem;
			// grid-row-start: 1;
			@include breakpoint(overPhone){
				display: block;
				margin-bottom: 4.9rem;
				// margin-top: 10.4rem;
				// order: 2;
				// grid-column-start: 2;
				// grid-row: 3;
				// margin-top: 4rem;
				// grid-row-start: 1;
				// margin: 10.5rem 0 0;
			}
		}
	}
	
	&__desc {
		@include font-size(14, 14);
		@include line-height(22, 22);
		letter-spacing: 0;
		margin-bottom: 2.1rem;
		color: $color-gray;
		// order: 2;
		// order: 2;
		@include breakpoint(overPhone){
			margin-bottom: 4.8rem;
			padding-right: 10%;
			// grid-column-start: 2;
			// grid-row: 5;
			// grid-row-start: 1;
			// margin: 18.9rem 5rem 0 0;
		}
	}
	&__date {
		@include font-size(16, 16);
		letter-spacing: 0.05em;
		// order: 2;
		@include breakpoint(overPhone){
			// grid-column-start: 2;
			// grid-row: 7;
			// margin-top: 2rem;
			// grid-row-start: 1;
			// margin-top: 28rem;
		}
	}

	// &__wrapper {
	// 	display: grid;
	// 	position: relative;
	// 	padding: 0 0 5.3rem 0;
	// 	@include breakpoint(overPhone){
	// 		padding: 0 0 5.8rem 0;
	// 		grid-column-gap: 10.6%;
	// 		grid-template-columns: 49% 40%;
	// 	}
	// }
	// &__img {
	// 	order: 2;
	// 	margin-bottom: 1.9rem;
	// 	@include breakpoint(overPhone){
	// 		margin-bottom: 0;
	// 		grid-row: 1 / span 10;
	// 	}
	// 	& img {
	// 		width: 100%;
	// 	}
	// }
	// & h2 {
	// 	@include font-size(30, 30);
	// 	@include line-height(34, 35);
	// 	letter-spacing: 0;
	// 	order: 1;
	// 	margin-bottom: 1.6rem;
	// 	@include breakpoint(overPhone){
	// 		order: 2;
	// 		grid-column-start: 2;
	// 		grid-row: 3;
	// 		margin-top: 4rem;
	// 		// grid-row-start: 1;
	// 		// margin: 10.5rem 0 0;
	// 	}
	// }
	// &__desc {
	// 	@include font-size(14, 14);
	// 	@include line-height(22, 22);
	// 	letter-spacing: 0;
	// 	margin-bottom: 2.1rem;
	// 	color: $color-gray;
	// 	order: 2;
	// 	@include breakpoint(overPhone){
	// 		grid-column-start: 2;
	// 		grid-row: 5;
	// 		// grid-row-start: 1;
	// 		// margin: 18.9rem 5rem 0 0;
	// 	}
	// }
	// &__date {
	// 	@include font-size(16, 16);
	// 	letter-spacing: 0.05em;
	// 	order: 2;
	// 	@include breakpoint(overPhone){
	// 		grid-column-start: 2;
	// 		grid-row: 7;
	// 		// margin-top: 2rem;
	// 		// grid-row-start: 1;
	// 		// margin-top: 28rem;
	// 	}
	// }
}
</style>