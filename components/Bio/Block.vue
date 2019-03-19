<template>
	<section class="b-bio l">
		<div class="b-bio__wrapper">
			<p class="b-bio__desc">Bio</p>
			<h1>DOCUMENTARY FILMMAKER WITH PASSION FOR SOCIAL CHANGE.</h1>
			<p class="b-bio__intro">Ivana Todorovic is a filmmaker and lecturer from Belgrade, Serbia. For her BA Thesis in Ethnology and Anthropology at University of Belgrade, she made her first short documentary film. After a one month course at Ateliers Varan in Belgrade, she went on to get a Graduate Certificate in Documentary Media studies in New York City. She later received an MA in Fiction Film at The Faculty of Dramatic Arts in Belgrade.</p>
			<nuxt-link to="/bio" tag="div" class="b-bio__link">
				<div class="c-link">
					more
					<span>
						<svg viewBox="0 0 21.933 17.521">
							<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
							<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
						</svg>
					</span>
				</div>
			</nuxt-link>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-bio {
	@include font-size(16, 16);
	@include breakpoint(overPhone){
		position: relative;
	}
	&__wrapper {
		padding-bottom: 18.2rem;
		@include breakpoint(overPhone){
			width: 70%;
			padding-bottom: 0;
			margin-bottom: 31.7rem;
		}
	}
	& h1 {
		font-weight: bold;
		@include font-size(40, 100);
		@include line-height(43, 107);
		margin-bottom: 1.4rem;
		letter-spacing: 0.05em;
		@include breakpoint(overPhone){
			letter-spacing: 0.045em;
			margin: 0 0 1.7rem -0.4rem;
		}
	}
	&__desc {
		font-style: italic;
		text-transform: capitalize;
		margin-bottom: 6.4rem;
		letter-spacing: 0.05em;
		@include breakpoint(overPhone){
			margin-bottom: 6.7rem;
		}
	}
	&__intro {
		color: $color-gray;
		margin-bottom: 3.5rem;
		letter-spacing: 0em;
		@include line-height(24, 25);
		@include breakpoint(overPhone){
			padding-right: 17%;
		}
	}
	&__link {
		text-align: left;
    display: flex;
		justify-content: flex-end;
		@include breakpoint(overPhone){
			position: absolute;
			bottom: 0.5rem;
			right: 27.6rem;
			cursor: pointer;
		}
		&:hover .c-link span {
			@include breakpoint(overPhone){
				-webkit-transform: translateX(1rem);
				transform: translateX(1rem);
			}
		}
	}
}
</style>