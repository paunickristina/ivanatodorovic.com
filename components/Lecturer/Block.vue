<template>
	<section class="b-lecturer l">
		<nuxt-link to="/lecturer" tag="div" class="b-lecturer__wrapper">
			<p class="b-lecturer__desc">Lecturer</p>
			<h2>Master Classes / practical hands-on workshops</h2>
			<div class="b-lecturer__link c-link">
				more
				<span>
					<svg viewBox="0 0 21.933 17.521">
						<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
						<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
					</svg>
				</span>
			</div>
		</nuxt-link>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-lecturer {
	@include font-size(16, 16);
	letter-spacing: 0.05em;
	&__wrapper {
		padding-bottom: 7.3rem;
		@include breakpoint(overPhone){
			width: 40%;
			padding-bottom: 0;
			margin-bottom: 7.5rem;
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
		@include line-height(34, 34);
		letter-spacing: 0.05em;
		margin-bottom: 4.2rem;
		@include breakpoint(overPhone){
			margin-bottom: 5rem;
		}
	}
	&__desc {
		font-style: italic;
		text-transform: capitalize;
		margin-bottom: 6.4rem;
		@include breakpoint(overPhone){
			
		}
	}
}
</style>