<template>
  <section class="b-news l">
		<div class="b-news__item" v-for="(item, index) in items" :key="index">
			<Item :data="item" />
		</div>
	</section>
</template>

<script>
import Item from "~/components/News/Item"
export default {
	components: {
		Item
	},
	data(){
		return {
			items: [
				{
					id: "1",
					description: "News",
					title: "First short fiction film",
					date: "January 12",
					year: "2018"
				},
				{
					id: "2",
					description: "Festival",
					title: "Selection committee for German International Ethnographic film festival",
					date: "March 03",
					year: "2018"
				},
				{
					id: "3",
					description: "Master Class",
					title: "Master Class at the Serbian film center",
					date: "March 15",
					year: "2018"
				},
				{
					id: "4",
					description: "Workshops",
					title: "Two 7 day workshopin kulturwissenschaft an der uni Koblenc — Germany",
					date: "March 15",
					year: "2018"
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-news {
	@include breakpoint(overPhone){
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	&__item {
		@include breakpoint(overPhone){
			width: 50%;
		}
		&:nth-child(even){
			@include breakpoint(overPhone){
				padding-left: 9%;
			}
		}
		&:nth-child(1){
			@include breakpoint(overPhone){
				position: relative;
				border-bottom: 0.1rem solid rgba(219, 219, 219, 0.7);
				border-right: 0.1rem solid rgba(219, 219, 219, 0.7);
			}
			&::before {
				@include breakpoint(overPhone){
					content: '';
					display: block;
					position: absolute;
					bottom: -0.8rem;
					left: 0;
					width: 7.2rem;
					height: 1.6rem;
					background-image: linear-gradient(to right, $color-white, rgba(255, 255, 255, 0));
				}
			}
			&::after {
				@include breakpoint(overPhone){
					content: '';
					display: block;
					position: absolute;
					top: 0;
					right: -0.8rem;
					width: 1.6rem;
					height: 7.2rem;
					background-image: linear-gradient(to bottom, $color-white, rgba(255, 255, 255, 0));
				}
			}
		}
		&:nth-child(4){
			@include breakpoint(overPhone){
				position: relative;
				transform: translate(-0.1rem, -0.1rem);
				border-top: 0.1rem solid rgba(219, 219, 219, 0.7);
				border-left: 0.1rem solid rgba(219, 219, 219, 0.7);
			}
			&::before {
				@include breakpoint(overPhone){
					content: '';
					display: block;
					position: absolute;
					top: -0.8rem;
					right: 0;
					width: 7.2rem;
					height: 1.6rem;
					background-image: linear-gradient(to left, $color-white, rgba(255, 255, 255, 0));
				}
			}
			&::after {
				@include breakpoint(overPhone){
					content: '';
					display: block;
					position: absolute;
					bottom: 0;
					left: -0.8rem;
					width: 1.6rem;
					height: 7.2rem;
					background-image: linear-gradient(to top, $color-white, rgba(255, 255, 255, 0));
				}
			}
		}
	}
}
</style>