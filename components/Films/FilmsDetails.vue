<template>
	<main id="main">
		<div class="p-films-det">
			<p class="p-films-det__desc l">Films</p>
			<section class="p-films-det__hero l">
				<div class="p-films-det__hero-img">
					<img :src="data.imgSrc" alt="">
				</div>
				<div class="p-films-det__hero-text">
					<h1>{{ data.title }}</h1>
				</div>
			</section>
			<section class="p-films-det__text l">
				<div class="p-films-det__text-wrap">
					<h4>{{ data.introTitle }}</h4>
					<p>{{ data.introText }}</p>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Awards:</h4>
					<ul>
						<li v-for="(item, index) in data.awardsList" :key="index">{{ item.content }}</li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap p-films-det__text-wrap--syn">
					<h4>Synopsis:</h4>
					<p>{{ data.synopsisText}}</p>
					<ul>
						<li v-for="(item, index) in data.synopsisList" :key="index">{{ item.content }}</li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>{{ data.descTitle }}</h4>
					<p>{{ data.descText }}</p>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Production Notes:</h4>
					<ul class="p-films-det__text-note">
						<li v-for="(item, index) in data.prodList" :key="index">{{ item.content.desc }}: <span>{{ item.content.name }}</span></li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Important website:</h4>
					<div class="p-films-det__text-link">
						<p>{{ data.siteTitle }}</p>
						<a :href="data.siteUrl" target="_blank">{{ data.siteUrl }}</a>
					</div>
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
		margin-bottom: 9.4rem;
		@include breakpoint(overPhone){
			margin-bottom: 19.8rem;
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
			height: 4.8rem;
			@include breakpoint(overPhone){
				left: 14.8rem;
				top: 57rem;
			}
			& h1 {
				background: $color-white;
				padding: 1.3rem 4.4rem 0.5rem 0;
				@include breakpoint(overPhone){
					padding: 3.3rem 6.3rem 0 0;
				}
			}
		}
	}
	&__text {
		@include breakpoint(overPhone){
			padding-right: 63rem;
		}
		&-wrap {
			margin-bottom: 7.7rem;
			@include breakpoint(overPhone){
				margin-bottom: 7rem;
			}
			&--syn {
				& p {
					margin-bottom: 2.4rem;
				}
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
			& .p-films-det__text-note {
				& li {
					padding-left: 0;
					margin-bottom: 0;
					&::before {
						display: none;
					}
				}
			}
		}
		&-note {
			& span {
				color: $color-black;
				letter-spacing: -0.03em;
				font-weight: bold;
			}
		}
		&-link {
			& a {
				letter-spacing: 0em;
				color: $color-link-blue;
			}
		}
	}
}
</style>