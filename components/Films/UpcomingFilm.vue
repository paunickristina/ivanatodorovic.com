<template>
	<main id="main">
		<div class="p-up-films">
			<p class="p-up-films__desc l">Upcoming Films</p>
			<section class="p-up-films__hero l">
				<div class="p-up-films__hero-img">
					<img :src="data.imgSrc" alt="">
				</div>
				<div class="p-up-films__hero-text">
					<h1>{{ data.title }}</h1>
				</div>
			</section>
			<section class="p-up-films__text l">
				<div class="p-up-films__text-wrap p-up-films__text-wrap--intro">
					<h4>{{ data.introTitle }}</h4>
					<p>Synopsis: <span>{{ data.introText }}</span></p>
				</div>
				<div class="p-up-films__text-wrap">
					<h4>{{ data.partTitle }}:</h4>
					<ul>
						<li v-for="(item, index) in data.partList" :key="index">{{ item.content }}</li>
					</ul>
				</div>
				<div class="p-up-films__text-wrap">
					<h4>Credit:</h4>
					<ul class="p-up-films__text-credit">
						<li v-for="(item, index) in data.creditList" :key="index">{{ item.content.desc }}: <span>{{ item.content.name }}</span></li>
					</ul>
					<h4 class="p-up-films__text-desc">{{ data.descTitle }}</h4>
				</div>
				<div class="p-up-films__text-wrap">
					<h4>Technical Specifications:</h4>
					<ul class="p-up-films__text-tech">
						<li v-for="(item, index) in data.techList" :key="index">{{ item.content.name }}: <span>{{ item.content.desc }}</span></li>
					</ul>
				</div>
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
.p-up-films {
	@include font-size(16, 16);
	@include line-height(24, 25);
	letter-spacing: 0.05em;
	padding: 6.4rem 0 13.2rem 0;
	@include breakpoint(overPhone){
		padding: 16.1rem 0 18.7rem 0;
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
			margin-bottom: 19.7rem;
		}
		&-img {
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
	&__text {
		@include breakpoint(overPhone){
			padding-right: 63rem;
		}
		&-wrap {
			margin-bottom: 7.4rem;
			@include breakpoint(overPhone){
				margin-bottom: 6.9rem;
			}
			& h4 {
				letter-spacing: 0.01em;
				font-weight: bold;
				margin-bottom: 2.4rem;
			}
			& p {
				letter-spacing: 0em;
				color: $color-gray;
			}
			& ul {
				color: $color-gray;
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
			&--intro {
				& p {
					& span {
						color: $color-black;
					}
				}
			}
			& .p-up-films__text-tech,
				.p-up-films__text-credit {
				& li {
					padding-left: 0;
					margin-bottom: 0.4rem;
					&::before {
						display: none;
					}
				}
			}
		}
		&-tech {
			& span {
				color: $color-black;
				letter-spacing: -0.03em;
				font-weight: bold;
			}
		}
		&-credit {
			& span {
				color: $color-black;
				letter-spacing: -0.03em;
				font-weight: bold;
			}
		}
		&-desc {
			margin-top: 1.8rem;
		}
	}
}
</style>