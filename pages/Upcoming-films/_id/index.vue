<template>
	<main id="main">
		<div v-for="(item, index) in activeFilm" :key="index">
			<UpcomingFilm :data="item" />
		</div>
		<LecturerBlock />
	</main>
</template>

<script>
import LecturerBlock from "~/components/Lecturer/Block.vue"
import UpcomingFilm from "~/components/Films/UpcomingFilm.vue"
export default {
	components: {
		UpcomingFilm,
		LecturerBlock
	},
	computed: {
		activeFilm() {
			return this.items.filter((u) => {
				return u.id == this.$route.params.id
			})
		}
	},
	data(){
		return {
			items: [
				{
					id: "1",
					imgSrc: "/films/up-hero-1.jpg",
					title: "Adem's Island",
					introTitle: "13 minutes, documentary film",
					introText: "On a small river island, near Belgrade, a man in his seventies lives while trying to overcome sadness after the loss of his daughter.",
					partTitle: "Protagonist",
					partList: [
						{ content: "Adem Rizvanović" }
					],
					creditList: [
						{ content: { desc: "Director - producer", name: "Ivana Todorović" } },
						{ content: { desc: "Cinematographer", name: "Masa Drndić" } },
						{ content: { desc: "Sound", name: "Radisa Cvetković" } },
						{ content: { desc: "Editor", name: "Marija Kovačina" } },
						{ content: { desc: "Sound designer", name: "Ivan Antić" } },
						{ content: { desc: "Color correction", name: "Milica Drakulić" } },
						{ content: { desc: "Graphic designer", name: "Nebojša Petrović" } },
						{ content: { desc: "Production house", name: "Blok Film" } },
						{ content: { desc: "Country", name: "Serbia" } }
					],
					techList: [
						{ content: { name: "Duration", desc: "13 min" } },
						{ content: { name: "Resolution", desc: "4K" } },
						{ content: { name: "Aspect ratio", desc: "16:9" } },
						{ content: { name: "Format", desc: "DCP" } },
						{ content: { name: "Sound", desc: "stereo" } },
					]
				},
				{
					// id: "2",
					// imgSrc: "",
					// title: "Women of the National Front",
					// introTitle: "",
					// introText: "",
					// partList: [
					// 	{ content: "" }
					// ],
					// creditList: [
					// 	{ content: { desc: "", name: "" } }
					// ],
					// techList: [
					// 	{ content: { name: "", desc: "" } }
					// ]
				},
				{
					id: "3",
					imgSrc: "/films/up-hero-2.jpg",
					title: "When I'm at home",
					introTitle: "16 minutes,  fiction film",
					introText: " Marija is coming back home to face her childhood trauma.",
					partTitle: "Actors",
					partList: [
						{ content: "Milica Stefanović" },
						{ content: "Dragana Varagić" },
						{ content: "Radivoje Čupić" },
						{ content: "Sara Dinić" }
					],
					creditList: [
						{ content: { desc: "Director", name: "Ivana Todorović" } },
						{ content: { desc: "Script", name: "Melina Pota" } },
						{ content: { desc: "Story", name: "Ivana Todorović" } },
						{ content: { desc: "Assistant director", name: "Duško Stanivuk" } },
						{ content: { desc: "DP", name: "Milica Drakulić" } },
						{ content: { desc: "1st assistant of camera", name: "Marija Momić" } },
						{ content: { desc: "2nd assistant of camera", name: "Djordje Stojiljković" } },
						{ content: { desc: "Focus puller", name: "Jovana Radovanović, Gaffer Zoran Perić " } },
						{ content: { desc: "Color correction", name: "Milica Drakulić" } },
						{ content: { desc: "Sound recording", name: "Dimitrije Dragojević" } },
						{ content: { desc: "Boom operator", name: "Boris Mijatović" } },
						{ content: { desc: "Sound design", name: "Milan Mihajlović" } },
						{ content: { desc: "Editor", name: "Tamara Kostić" } },
						{ content: { desc: "Supervisor of editing", name: "Milina Trišić" } },
						{ content: { desc: "Assistant editor", name: "Marija Jelušić" } },
						{ content: { desc: "Costume design", name: "Milica Radovanović" } },
						{ content: { desc: "Production design", name: "Emilija Orlić" } },
						{ content: { desc: "Assistants of production design", name: "Tihomir Topalov, Nemanja Luković" } },
						{ content: { desc: "Producer", name: "Tijana Drakulić" } },
						{ content: { desc: "Assitant of production", name: "Dragana Jakovljević" } },
						{ content: { desc: "Film mentor", name: "Stefan Arsenijrević" } }
					],
					descTitle: "Production Faculty of Dramatic Arts,Blok Film, Belgrade, Serbia.",
					techList: [
						{ content: { name: "Duration", desc: "16 min" } },
						{ content: { name: "Resolution", desc: "4K" } },
						{ content: { name: "Aspect ratio", desc: "16:9" } },
						{ content: { name: "Format", desc: "DCP" } },
						{ content: { name: "Sound", desc: "stereo" } },
					]
				}
			]
		}
	}
}
</script>

<style>

</style>