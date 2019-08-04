<template>
	<main id="main">
		<section class="p-news l">
			<p class="p-news__desc">News</p>
			<div v-if="!$apollo.queries.newses.loading">
				<div class="p-news__item" v-for="(article, index) in activeNews" :key="index">
					<NewsItem :data="article" />
				</div>
				<div class="p-news__item" v-for="(article, index) in inactiveNews" :key="'A'+ index">
					<NewsItem :data="article" />
				</div>
			</div>
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import gql from 'graphql-tag'
import NewsItem from "~/components/News/NewsItem.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"

const newses = gql`
	query newses {
		newses(orderBy: createdAt_DESC) {
			id
			title
			description
			date
			image{
				id
				url
			}
		}
	}
`
export default {
	apollo: {
		$loadingKey: 'loading',
		newses: {
			query: newses
		}
	},
	components: {
    NewsItem,
		LecturerBlock
	},
	computed: {
		activeNews() {
			return this.newses.filter((u) => {
				return u.id == this.$route.params.id
			})
		},
		inactiveNews() {
			return this.newses.filter((u) => {
				return u.id != this.$route.params.id
			})
		}
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-news {
	padding-top: 10.8rem;
	@include breakpoint(overPhone){
		padding-top: 15.7rem;
	}
	&__desc {
		@include font-size(22, 30);
		letter-spacing: 0.05em;
		font-style: italic;
		color: $color-red;
		text-transform: capitalize;
		margin-bottom: 6.4rem;
	}
	&__item {
		&:last-of-type {
			margin-bottom: 12.2rem;
			@include breakpoint(overPhone){
				margin-bottom: 23.2rem;
			}
		}
	}
}
</style>