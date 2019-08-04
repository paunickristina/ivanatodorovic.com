<template>
	<article class="b-news-item">
		<div class="b-news-item__wrapper c-border">
			<h2 class="b-news-item__title">{{ data.title }}</h2>
			<div class="b-news-item__img">
				<img :src="data.image.url" alt="">
			</div>
			<div class="b-news-item__body">
				<h2>{{ data.title }}</h2>
				<p class="b-news-item__desc">{{ data.description }}</p>
				<p class="b-news-item__date">{{ getDate(data.date) }}</p>
			</div>
		</div>
	</article>
</template>

<script>
import { getDate } from "~/plugins/custom.js";
export default {
	props: ["data"],
	methods: {
		getDate
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-news-item {
	&__wrapper {
		position: relative;
		padding: 0 0 5.3rem 0;
		margin-bottom: 5.6rem;
		@include breakpoint(overPhone){
			display: grid;
			padding: 0 0 5.6rem 0;
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
		}
		& img {
			width: 100%;
		}
	}
	&__body {
		& h2 {
			display: none;
			@include breakpoint(overPhone){
				display: block;
				margin-bottom: 4.9rem;
			}
		}
	}
	
	&__desc {
		@include font-size(14, 14);
		@include line-height(22, 22);
		letter-spacing: 0;
		margin-bottom: 2.1rem;
		color: $color-gray;
		@include breakpoint(overPhone){
			margin-bottom: 4.8rem;
			padding-right: 10%;
		}
	}
	&__date {
		@include font-size(16, 16);
		letter-spacing: 0.05em;
	}
}
</style>