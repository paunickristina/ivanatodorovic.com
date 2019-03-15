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
					description: "News",
					title: "First short fiction film",
					date: "January 12",
					year: "2018"
				},
				{
					description: "Festival",
					title: "Selection committee for German International Ethnographic film festival",
					date: "March 03",
					year: "2018"
				},
				{
					description: "Master Class",
					title: "Master Class at the Serbian film center",
					date: "March 15",
					year: "2018"
				},
				{
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
	&::after {
		@include breakpoint(overPhone){
			content: '';
			display: block;
			width: 0.2rem;
			height: 100%;
			position: absolute;
			top: 0;
			left: 50%;
			// background: red;
			background-image: url("~static/border-fade.png");
			background-position: center;
			background-repeat:no-repeat;
			background-size: 100%; //check
		}
	}
	&__item {
		@include breakpoint(overPhone){
			width: 41%;
		}
		&:nth-child(1){
			position: relative;
			&::after {
				@include breakpoint(overPhone){
					content: '';
					display: block;
					width: 114rem;
					height: 0.2rem;
					position: absolute;
					bottom: 0;
					left: 0;
					background-image: url("~static/border-fade.png");
					background-position: center;
					background-repeat:no-repeat;
    			background-size: 100%; //check
				}
			}
		}
	}
}
</style>