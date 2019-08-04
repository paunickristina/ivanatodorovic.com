<template>
	<article class="b-film">
		<nuxt-link tag="div" :to="{ name: 'films-id', params: { id: data.id }}" class="b-film__wrapper c-border">
			<h2 class="b-film__title">{{ data.title }}</h2>
			<div class="b-film__img">
				<img :src="data.image.url" alt="">
			</div>
			<div class="b-film__details">
				<h2>{{ data.title }}</h2>
				<div class="b-film__details-wrap">
					<p class="b-film__date">{{ getDate(data.date) }}</p>
					<div class="b-film__link c-link">
						more
						<span>
							<svg viewBox="0 0 21.933 17.521">
								<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
								<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</nuxt-link>
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
.b-film {
	&__wrapper {
		position: relative;
		padding-bottom: 7.5rem;
		margin-bottom: 5.3rem;
		@include breakpoint(overPhone){
			display: grid;
			padding: 0 0 5.6rem 0;
			grid-column-gap: 10.6%;
			grid-template-columns: 49% 40%;
			align-items: center;
			margin-bottom: 5.5rem;
			cursor: pointer;
		}
		&:hover .c-link span {
			@include breakpoint(overPhone){
				-webkit-transform: translateX(1rem);
				transform: translateX(1rem);
			}
		}
	}
	&__title {
		@include breakpoint(overPhone){
			display: none;
		}
	}
	& h2 {
		@include font-size(30, 30);
		@include line-height(34, 35);
		letter-spacing: 0;
		margin-bottom: 2.2rem;
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
	&__details {
		@include font-size(16, 16);
		position: absolute;
		bottom: 5.5rem;
		left: 0;
		width: 100%;
		letter-spacing: 0.05em;
		@include breakpoint(overPhone){
			position: static;
			padding-right: 6.6rem;
		}
		&-wrap {
			display: flex;
			justify-content: space-between;
			@include breakpoint(overPhone){
				width: 88%;
			}
		}
		& h2 {
			display: none;
			@include breakpoint(overPhone){
				display: block;
				margin-bottom: 5.4rem;
			}
		}
	}
}
</style>