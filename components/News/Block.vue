<template>
  <section class="b-news l">
		<div v-for="(item, index) in items" :key="index">
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

<style>

</style>
