<template>
	<section class="b-films l">
		<div class="b-films__wrapper">
			<p class="b-films__desc">Upcoming Films</p>
			<h2 class="b-films__title">{{ main.title }}</h2>
			<div class="b-films__films">
				<nuxt-link tag="div" :to="{ name: 'upcoming-films-id', params: { id: main.id }}" class="b-films__main">
					<div class="b-films__main-img">
						<picture>
							<source media="(min-width: 768px)" :srcset="main.imgSrcDesk">
							<img :src="main.imgSrc" alt="">
						</picture>
					</div>
					<p>{{ main.description }}</p>
				</nuxt-link>
				<nuxt-link tag="div" :to="{ name: 'upcoming-films-id', params: { id: sec.id }}" class="b-films__sec">
					<div class="b-films__sec-item">
						<div class="b-films__sec-item-img">
							<picture>
								<source media="(min-width: 768px)" :srcset="sec.imgSrcDesk">
								<img :src="sec.imgSrc" alt="">
							</picture>
						</div>
						<div class="b-films__sec-item-title">
							<h3>{{ sec.title }}</h3>
						</div>
						<p>{{ sec.description }}</p>
					</div>
				</nuxt-link>
				<nuxt-link tag="div" :to="{ name: 'upcoming-films-id', params: { id: third.id }}" class="b-films__sec third">
					<div class="b-films__sec-item">
						<div class="b-films__sec-item-img">
							<picture>
								<source media="(min-width: 768px)" :srcset="third.imgSrcDesk">
								<img :src="third.imgSrc" alt="">
							</picture>
						</div>
						<div class="b-films__sec-item-title">
							<h3>{{ third.title }}</h3>
						</div>
						<p>{{ third.description }}</p>
					</div>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return {
			main: {
				id: "1",
				title: "Adems Island",
				description: "A father living on a small river island with his dog, while trying to cope with grief after the loss of his daughter. Supported by Film Center Serbia.",
				imgSrc: "/home-films/island.jpg",
				imgSrcDesk: "/home-films/island-desk.jpg"
			},
			sec: {
				id: "2",
				title: "Women of the National Front",
				description: "Women of the National Front” takes the audience through the inner and visual experience of patients undergoing various gynecological interventions in a daily hospital in Belgrade, Serbia.Through the form of a film essay the viewer is introduced to the intimate world of women, their fears, their anxieties, their loves and solidarity.",
				imgSrc: "/home-films/women.jpg",
				imgSrcDesk: "/home-films/women-desk.jpg"
			},
			third: {
				id: "3",
				title: "When I’m at home",
				description: "Marija is coming home to face her uncle and childhood trauma.",
				imgSrc: "/home-films/home.jpg",
				imgSrcDesk: "/home-films/home-desk.jpg"
			}
		}
	},
	methods: {
		changeSecFilm(){
			let windowWidth = document.documentElement.clientWidth
			let title = this.main.title
			let description = this.main.description

			this.main.title = this.sec.title
			this.main.description = this.sec.description
			this.sec.title = title
			this.sec.description = description
			if(windowWidth < 768){
				let imgSrc = this.main.imgSrc
				
				this.main.imgSrc = this.sec.imgSrc
				this.sec.imgSrc = imgSrc
			}
			else {
				let imgSrcDesk = this.main.imgSrcDesk
				
				this.main.imgSrcDesk = this.sec.imgSrcDesk
				this.sec.imgSrcDesk = imgSrcDesk
			}
		},
		changeThirdFilm(){
			let windowWidth = document.documentElement.clientWidth
			let title = this.main.title
			let description = this.main.description

			this.main.title = this.third.title
			this.main.description = this.third.description
			this.third.title = title
			this.third.description = description
			if(windowWidth < 768){
				let imgSrc = this.main.imgSrc
				
				this.main.imgSrc = this.third.imgSrc
				this.third.imgSrc = imgSrc
			}
			else {
				let imgSrcDesk = this.main.imgSrcDesk
				
				this.main.imgSrcDesk = this.third.imgSrcDesk
				this.third.imgSrcDesk = imgSrcDesk
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-films {
	&__wrapper {
		padding: 13rem 0 10.9rem 0;
		@include breakpoint(overPhone){
			padding: 23rem 0 27.2rem 0;
		}
	}
	&__films {
		@include breakpoint(overPhone){
			display: grid;
			grid-template-columns: 81rem 29rem;
			grid-template-rows: 20.8rem 20.8rem;
			grid-gap: 4rem;
		}
	}
	&__desc {
		@include font-size(22, 30);
		color: $color-red;
		letter-spacing: 0.05em;
		font-style: italic;
		text-transform: capitalize;
		margin-bottom: 6.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 6.4rem;
		}
	}
	&__title {
			@include font-size(40, 100);
			@include line-height(45, 115);
			letter-spacing: 0.05em;
			margin-bottom: 0.2rem;
			@include breakpoint(overPhone){
				letter-spacing: 0;
				margin-bottom: 0rem;
				width: 81rem;
			}
		}
	&__main {
		margin-bottom: 3.1rem;
		@include breakpoint(overPhone){
			cursor: pointer;
		}
		&-img {
			margin-bottom: 1.1rem;
			@include breakpoint(overPhone){
				margin-bottom: 1.6rem;
				height: 45.6rem;
				overflow: hidden;
			}
			& img {
				width: 100%;
			}
		}
		& p {
			@include font-size(14, 14);
			@include line-height(22, 22);
			letter-spacing: 0em;
			color: $color-gray;
			@include breakpoint(overPhone){
				width: 60%;
			}
		}
	}
	&__sec {
		margin-bottom: 3rem;
		@include breakpoint(overPhone){
			margin-bottom: 3.9rem;
		}
		&.third {
			@include breakpoint(overPhone){
				grid-row-start: 2;
				grid-column-start: 2;
			}
		}
		&-item {
			position: relative;
			@include breakpoint(overPhone){
				cursor: pointer;
			}
			&-title {
				position: absolute;
				top: 10.4rem;
				left: -0.1rem;
				z-index: 1;
				background: $color-white;
				width: 25rem;
				height: 4.8rem;
				padding: 1.8rem 0 0 0.2rem;
				@include breakpoint(overPhone){
					top: auto;
					bottom: -0.8rem;
					padding: 1.6rem 0 0 0;
				}
				& h3 {
					@include font-size(16, 16);
					font-weight: 400;
					letter-spacing: 0.05em;
				}
			}
			&-img {
				position: relative;
				width: 100%;
				height: 15.2rem;
				overflow: hidden;
				@include breakpoint(overPhone){
					height: 20.8rem;
				}
				& img {
					width: 100%;
					position: absolute;
					top: -5rem;
					@include breakpoint(overPhone){
						top: 0;
					}
				}
			}
			& p {
				display: none;
			}
		}
	}
}
</style>