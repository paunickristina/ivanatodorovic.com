<template>
	<article class="c-news">
		<nuxt-link class="c-news__wrapper" tag="div" :to="{ name: 'news-id', params: { id: data.id }}">
			<p class="c-news__desc">{{ data.description }}</p>
			<h2>{{ data.title }}</h2>
			<div class="c-news__bottom">
				<p class="c-news__date">{{ data.date}} — {{ data.year }}</p>
				<div class="c-news__link c-link">
					more
					<span>
						<svg viewBox="0 0 21.933 17.521">
							<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
							<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
						</svg>
					</span>
				</div>
			</div>
		</nuxt-link>
	</article>
</template>

<script>
export default {
	props: ["data"]
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.c-news {
	position: relative;
	padding: 4.9rem 0 4.8rem;
	@include font-size(16, 16);
	letter-spacing: 0.05em;
	@include breakpoint(overPhone){
		padding: 7.6rem 0 8.6rem;
	}
	&__wrapper {
		@include breakpoint(overPhone){
			cursor: pointer;
		}
		&:hover .c-link span {
			@include breakpoint(overPhone){
				-webkit-transform: translateX(1rem);
				transform: translateX(1rem);
			}
		}
	}
	& h2 {
		@include font-size(30, 30);
		letter-spacing: 0.05em;
		@include line-height(34, 35);
		padding-right: 1rem;
		margin-bottom: 4.2rem;
	}
	&__desc {
		font-style: italic;
		text-transform: capitalize;
		margin-bottom: 6.4rem;
		@include breakpoint(overPhone){
			
		}
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		@include breakpoint(overPhone){
			padding-right: 27%;
		}
	}
}
</style>