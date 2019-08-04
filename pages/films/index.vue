<template>
	<main id="main">
		<section class="p-films l">
			<p class="p-films__desc">Films</p>
			<div class="p-films__item" v-for="(item, index) in films" :key="index">
				<FilmsItem :data="item" />
			</div>
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import gql from 'graphql-tag'
import FilmsItem from "~/components/Films/FilmsItem.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"

const films = gql`
	query films {
		films(orderBy: createdAt_DESC, where: {tag: null}) {
			id
			title
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
		films: {
			query: films
		}
	},
	components: {
    FilmsItem,
		LecturerBlock
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-films {
	padding-top: 10.7rem;
	@include breakpoint(overPhone){
		padding-top: 15.7rem;
	}
	&__desc {
		@include font-size(22, 30);
		letter-spacing: 0.05em;
		font-style: italic;
		color: $color-red;
		text-transform: capitalize;
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