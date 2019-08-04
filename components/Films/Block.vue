<template>
	<section class="b-films l">
		<div class="b-films__wrapper">
			<p class="b-films__desc">Upcoming Films</p>
			<h2 class="b-films__title" v-if="!$apollo.queries.films.loading">{{ firstFilm.title }}</h2>
			<div class="b-films__films">
				<nuxt-link v-for="(item, index) in films" :key="index" tag="div" :to="{ name: 'films-id', params: { id: item.id }}" class="b-films__film">
					<div class="b-films__film-item">
						<div class="b-films__film-item-img">
							<img :src="item.image.url" alt="">
						</div>
						<div class="b-films__film-item-title">
							<h3>{{ item.title }}</h3>
						</div>
						<p>{{ item.description }}</p>
					</div>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
import gql from 'graphql-tag'
const films = gql`
	query films {
		films(orderBy: createdAt_DESC, where: {tag: "upcoming"}) {
			id
			title
			description
			image{
				id
				url
			}
		}
	}
`
export default {
	apollo: {
		films: {
			query: films
		}
	},
	computed: {
		firstFilm(){
			return this.films[0]
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
	&__film {
		&:nth-of-type(1){
			margin-bottom: 3.1rem;
			@include breakpoint(overPhone){
				cursor: pointer;
			}
			& .b-films__film-item {
				&-img {
					margin-bottom: 1.1rem;
					@include breakpoint(overPhone){
						margin-bottom: 1.6rem;
						height: 45.6rem;
						overflow: hidden;
					}
					& img {
						width: 100%;
						height: 30rem;
						object-fit: cover;
						@include breakpoint(overPhone){
							height: auto;
							object-fit: none;
						}
					}
				}
				&-title {
					display: none;
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
		&:nth-of-type(2),
		&:nth-of-type(3) {
			margin-bottom: 3rem;
			@include breakpoint(overPhone){
				margin-bottom: 3.9rem;
			}
			& .b-films__film-item {
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
		&:nth-of-type(3){
			@include breakpoint(overPhone){
				grid-row-start: 2;
				grid-column-start: 2;
			}
		}
	}
}
</style>