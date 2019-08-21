<template>
	<main id="main">
		<section class="p-media l"  v-if="!$apollo.queries.films.loading && !$apollo.queries.newses.loading">
			<p class="p-media__desc">All films and news</p>
			<div class="p-media__item" v-for="(item, index) in allMedia" :key="index">
				<FilmsItem :data="item" v-if="item.__typename == 'Film'" />
				<NewsItem :data="item" v-else />
			</div>
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import gql from 'graphql-tag'
import FilmsItem from "~/components/Films/FilmsItem.vue"
import NewsItem from "~/components/News/NewsItem.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"

const films = gql`
	query films {
		films(where: {tag: null}) {
			id
			title
			date
			image{
				id
				url
			}
			createdAt
		}
	}
`
const newses = gql`
	query newses {
		newses {
			id
			title
			description
			date
			image{
				id
				url
			}
			createdAt
		}
	}
`
export default {
	data(){
		return {
			media: []
		}
	},
	apollo: {
		$loadingKey: 'loading',
		films: {
			query: films
		},
		newses: {
			query: newses
		}
	},
	components: {
    FilmsItem,
    NewsItem,
		LecturerBlock
	},
	computed: {
		allMedia() {
			this.media = this.films.concat(this.newses)
			this.media = this.media.sort(function(a, b){
				return new Date(b.createdAt) - new Date(a.createdAt)
			})
			return this.media
		},
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-media {
	padding-top: 10.7rem;
	@include breakpoint(overPhone){
		padding-top: 15.7rem;
	}
	&__desc {
		@include font-size(22, 30);
		letter-spacing: 0.05em;
		font-style: italic;
		color: $color-red;
		margin-bottom: 6.6rem;
	}
	&__item {
		&:last-of-type {
			margin-bottom: 11rem;
			@include breakpoint(overPhone){
				margin-bottom: 31.2rem;
			}
		}
	}
}
</style>