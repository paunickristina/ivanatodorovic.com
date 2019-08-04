<template>
	<main id="main">
		<div class="p-films-det">
			<p class="p-films-det__desc l">Films</p>
			<section class="p-films-det__hero l">
				<div class="p-films-det__hero-img">
					<img :src="data.hero.url" alt="">
				</div>
				<div class="p-films-det__hero-text">
					<h1>{{ data.title }}</h1>
				</div>
			</section>
			<section v-if="data.video.html" class="p-films-det__video l">
				<div class="p-films-det__video-holder">
					<div v-html="data.video.html" class="p-films-det__video-wrap"></div>
				</div>
			</section>
			<section class="p-films-det__content l">
				<div v-html="data.content.html"></div>
			</section>
		</div>
	</main>
</template>

<script>
export default {
	props: ["data"]
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-films-det {
	@include font-size(16, 16);
	@include line-height(24, 25);
	letter-spacing: 0.05em;
	padding: 6.4rem 0 10.5rem 0;
	@include breakpoint(overPhone){
		padding: 16.1rem 0 19.6rem 0;
	}
	&__desc {
		@include font-size(22, 30);
		letter-spacing: 0.05em;
		font-style: italic;
		text-transform: capitalize;
		color: $color-red;
		margin-bottom: 6.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 7rem;
		}
	}
	&__hero {
		position: relative;
		margin-bottom: 9.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 27.8rem;
		}
		&-img {
			height: 19.2rem;
			overflow: hidden;
			@include breakpoint(overPhone){
				height: 65rem;
			}
			& img {
				width: 100%;
			}
		}
		&-text {
			@include font-size(30, 100);
			@include line-height(34, 96);
			letter-spacing: 0;
			font-weight: bold;
			position: absolute;
			left: 2rem;
			top: 14.3rem;
			background: $color-white;
			width: 31.4rem;
			padding: 1.3rem 2rem 0.5rem 0;
			background: $color-white;
			@include breakpoint(overPhone){
				width: 99.8rem;
				padding: 3.3rem 3rem 0 0;
				left: 14.8rem;
				top: 57rem;
			}
		}
	}
	&__content {
		@include breakpoint(overPhone){
			padding: 0 63rem 0 15rem;
		}
		& /deep/ h3 {
			letter-spacing: 0.01em;
			font-weight: bold;
			margin-bottom: 2.4rem;
			@include breakpoint(overPhone){
				text-transform: uppercase;
			}
		}
		& /deep/ h4 {
			letter-spacing: 0.01em;
			font-weight: bold;
			margin-bottom: 2.4rem;
		}
		& /deep/ h5 {
			letter-spacing: -0.02em;
			font-weight: bold;
			margin: 0 0 2rem 1.4rem;
			@include breakpoint(overPhone){
				margin: -5rem 0 0.5rem 5.7rem;
			}
		}
		& /deep/ p {
			letter-spacing: 0em;
			color: $color-gray;
			margin-bottom: 7.6rem;
			& strong {
				font-weight: bold;
				color: $color-black;
			}
			& a {
				color: $color-link-blue;
			}
		}
		& /deep/ ul {
			color: $color-gray;
			margin-bottom: 7.6rem;
			@include breakpoint(overPhone){
				margin-bottom: 6.7rem;
			}
			& li {
				position: relative;
				letter-spacing: 0em;
				list-style: none;
				padding-left: 1.4rem;
				margin-bottom: 1.7rem;
				@include breakpoint(overPhone){
					padding-left: 5.7rem;
					margin-bottom: 0.5rem;
				}
				&::before {
					content: '';
					display: block;
					width: 0.42rem;
					height: 0.42rem;
					border-radius: 50%;
					background: $color-black;
					position: absolute;
					top: 0.9rem;
					left: -0.1rem;
					@include breakpoint(overPhone){
						left: 4.1rem;
					}
				}
			}
		}
		& /deep/ ol {
			list-style: none;
			color: $color-gray;
			letter-spacing: 0em;
			margin-bottom: 7.9rem;
			@include breakpoint(overPhone){
				margin-bottom: 7.1rem;
			}
			& strong {
				font-weight: 400;
				color: $color-black;
			}
			& a {
				color: $color-link-blue;
			}
		}
	}
	&__video {
		&-holder {
			width: 33.5rem;
			margin-bottom: 6rem;
			@include breakpoint(overPhone){
				width: 61.4rem;
				margin-bottom: 7.5rem;
			}
		}
		&-wrap {
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 56.27198%;
			& /deep/ iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			& /deep/ p {
				display: none;
			}
		}
	}
}
</style>