<template>
	<main id="main">
		<section class="p-films l">
			<p class="p-films__desc">Films</p>
			<div class="p-films__item" v-for="(item, index) in items" :key="index">
				<FilmsItem :data="item" />
			</div>
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import FilmsItem from "~/components/Films/FilmsItem.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"
export default {
	components: {
    FilmsItem,
		LecturerBlock
  },
	data(){
		return {
			items: [
				{
					id: "1",
					title: "When I Was a Boy, I Was a Girl",
					imgSrc: "/films/films-1.jpg",
					date: "January 12",
					year: "2018"
				},
				{
					id: "2",
					title: "A Harlem Mother",
					imgSrc: "/films/films-2.jpg",
					date: "January 12",
					year: "2018"
				},
				{
					id: "3",
					title: "Everyday Life of Roma Children from Block 71",
					imgSrc: "/films/films-3.jpg",
					date: "January 12",
					year: "2018"
				},
				{
					id: "4",
					title: "Rapresent",
					imgSrc: "/films/films-4.jpg",
					date: "January 12",
					year: "2018"
				}
			]
		}
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