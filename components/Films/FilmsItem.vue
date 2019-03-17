<template>
	<article class="b-film">
		<div class="b-film__wrapper c-border">
			<div class="b-film__body c-border">
				<h2>{{ data.title }}</h2>
				<div class="b-film__img">
					<img :src="data.imgSrc" alt="">
				</div>
				<div class="b-film__bottom">
					<p class="b-film__date">{{ data.date }} — {{ data.year }}</p>
					<a class="b-film__link c-link" href="">
						more
						<span>
							<svg viewBox="0 0 21.933 17.521">
								<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
								<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
							</svg>
						</span>
					</a>
				</div>
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
.b-film {
	&__wrapper {
		position: relative;
		padding-bottom: 7.5rem;
		margin-bottom: 5.3rem;
		@include breakpoint(overPhone){
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 0;
			border-bottom: 0;
			margin-bottom: 5.5rem;
		}
	}
	& h2 {
		@include font-size(30, 30);
		@include line-height(34, 35);
		letter-spacing: 0.05em;
		margin-bottom: 2.2rem;
	}
	&__body {
		@include breakpoint(overPhone){
			position: relative;
			width: 36%;
			padding-bottom: 5.5rem;
			cursor: pointer;
		}
		&.c-border {
			@include breakpoint(phone){
				border: 0;
				&::before, ::after {
					display: none;
				}
			}
		}
		&:hover .c-link span {
			@include breakpoint(overPhone){
				-webkit-transform: translateX(1rem);
				transform: translateX(1rem);
			}
		}
	}
	&__img {
		margin-bottom: 1.9rem;
		@include breakpoint(overPhone){
			margin-bottom: 2.3rem;
		}
		& img {
			width: 100%;
		}
	}
	&__bottom {
		@include font-size(16, 16);
		position: absolute;
		bottom: 5.5rem;
		left: 0;
		letter-spacing: 0.05em;
		display: flex;
		justify-content: space-between;
		@include breakpoint(overPhone){
			position: static;
			padding-right: 6.6rem;
		}
	}
	&__link {
		display: none;
		@include breakpoint(overPhone){
			display: flex;
		}
	}
}
</style>