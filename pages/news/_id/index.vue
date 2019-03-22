<template>
	<main id="main">
		<section class="p-news l">
			<p class="p-news__desc">News</p>
			<div class="p-news__item" v-for="(item, index) in activeNews" :key="index">
				<NewsItem :data="item" />
			</div>
			<div class="p-news__item" v-for="(item, index) in inactiveNews" :key="index">
				<NewsItem :data="item" />
			</div>
			<!-- <div class="p-news__item" v-for="(item, index) in activeNews" :key="index">
				<ArticleItem :data="item" />
			</div>
			<div class="p-news__item" v-for="(item, index) in inactiveNews" :key="index">
				<ArticleItem :data="item" />
			</div> -->
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import ArticleItem from "~/components/News/ArticleItem.vue"
import NewsItem from "~/components/News/NewsItem.vue"
import LecturerBlock from "~/components/Lecturer/Block.vue"
export default {
	components: {
    ArticleItem,
    NewsItem,
		LecturerBlock
  },
	computed: {
		activeNews() {
			return this.items.filter((u) => {
				return u.id == this.$route.params.id
			})
		},
		inactiveNews() {
			return this.items.filter((u) => {
				return u.id != this.$route.params.id
			})
		},
	},
	data(){
		return {
			items: [
				{
					id: "1",
					title: "First short fiction film",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "With a great crew, we shot a film about a girl brave enough to face her uncle who sexualy abused her when she was a child."
				},
				{
					id: "2",
					title: "Selection committee for German International Ethnographic film festival",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "In this beautful house for five days, we watched approximately 500 films and chose the best ones for the upcoming German International Ethnographic Film Festival, held in Koblenc from May 13-19th."
				},
				{
					id: "3",
					title: "Master Class at the Serbian film center",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "I held a master class with think DOKSRBIJA, a weekend workshop."
				},
				{
					id: "4",
					title: "Two 7 day workshopin kulturwissenschaft an der uni Koblenc — Germany",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "It was a pleasure working with 13 students to make their own short documentary films."
				},
				{
					id: "5",
					title: "A night of films at an alternative cinema with the film maestro, Zelimir Zilnik and myself",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "It was a pleasure and an honor to be alongside Zelimir Zilnik and discuss our films together."
				},
				{
					id: "6",
					title: "Fixer for the documentary film “Speak so I can hear you” by Marija Stojnic",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "“Speak so I can hear you“ is a film about Radio Beograd, oldest radio station in Belgrade and its listeners."
				},
				{
					id: "7",
					title: "Selection committee for the documentary film projects for the Serbian film center",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "With my four colleges, we were chose the best autour documentary films to get funding by Serbian Film Center grant."
				},
				{
					id: "8",
					title: "The film of Ivana Todorovic: a retrospective",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "In a old theatre called “Dorcolsko Narodno Pozoriste” in Belgrade, the films “When I was a Boy, I was a girl”, “Rapresent” and “Everyday life of Roma Children from Blok 71” were screened in front of a audience. With Q&A after."
				},
				{
					id: "9",
					title: "Creative mentorship program",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "I’m part of a new generation of The Creative Mentorship program in Belgrade."
				},
				{
					id: "10",
					title: "In editing room with new film “Adem’s Island”",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "With Marija Kovacina, an editor, in the editing process of the new short documentary “Adems Island.”"
				},
				{
					id: "11",
					title: "Shooting the film “Adem’s Island”",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "With my team, Masa Drndic DP and Radisa Cvetkovic sound."
				},
				{
					id: "12",
					title: "Selection committee for Roma film archive in Budampest",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "I was chosen to be a member of the selection committee to choose films about Roma for the first ever Roma Film Archive."
				},
				{
					id: "13",
					title: "A new curated series featuring short documentary films funded in part through Kickstarter",
					imgSrc: "~assets/img/news/news-2.jpg",
					date: "January 12",
					year: "2018",
					description: "I was chosen to be a member of the selection committee to choose films about Roma for the first ever Roma Film Archive."
				}
			]
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
				margin-bottom: 25.6rem;
			}
		}
	}
}
</style>