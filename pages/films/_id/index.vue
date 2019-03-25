<template>
	<main id="main">
		<div v-for="(item, index) in activeFilm" :key="index">
			<FilmsDetails :data="item" />
		</div>
		<LecturerBlock />
	</main>
</template>

<script>
import LecturerBlock from "~/components/Lecturer/Block.vue"
import FilmsDetails from "~/components/Films/FilmsDetails.vue"
export default {
	components: {
		LecturerBlock,
		FilmsDetails
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
					id: "2",
					imgSrc: "/films/hero-2.jpg",
					title: "A Harlem Mother",
					introTitle: "Life is good  until you are living it",
					introText: '"By far the most intense contribution was A Harlem Mother, the story of a woman who lost her son to gun violence. Directed by Ivana Todorovic, we are taken through the pain and heartbreak that so many parents living in Harlem have endured and continue to endure today. When the documentary ended and the credits rolled, the theatre was silent – as we struggled with the emotional journey we had just taken” Susan Peake, Review Vancouver',
					awardsList: [
						{ content: "2009 premiere at historic Maysles Cinema in Harlem, NYC" },
						{ content: "2010 Grand Prix Documentary Film Festival “Videnie” in Kemenovo in Russia" },
						{ content: "2010 Best Documentary Film Profile Mixed Messages Film Festival, New York" },
						{ content: "2010 Honorable Mention Carolina Film And Video Film Festival, Greensboro, NC" },
						{ content: "2010 Audience award Fear no Film, Utah Arts Film Festival" }
					],
					synopsisText: "In 1998, 18 year old Latron Parker made documentary about difficulties growing up in Harlem. Eights years later he was shot dead on the street. Today his mother Jean fights youth gun violence and helps other parents to survive the pain through her organization, Harlem Mothers. Weaving footage from Latron’s own film with scenes from Jean’s new life today.",
					synopsisList: [
						{ content: "+40, Selected Festivals" },
						{ content: "World Premiere at historic Maysles Cinema in Harlem" },
						{ content: "Traverse City , Michael Moore’s Festival" },
						{ content: "Rooftop Film Festival" },
						{ content: "New York Woman in Film and Television, Anthology Film Archive" },
						{ content: "Palm Springs International Shortfest" },
						{ content: "Festival de Cannes, Short Film Corner" },
						{ content: "Festival de Cannes, American Pavilion, Emerging filmmakers Showcase" },
					],
					descTitle: "Used in Media Campaign Against Gun Violence:",
					descText: "Beyond Bullets: Gun Violence in America screening in Maysles cinema, NY DCTV: A HARLEM MOTHER and BEYOND BULLETS shorts, NY",
					prodList: [
						{ content: { desc: "Featuring", name: "Jean Corber Parker" } },
						{ content: { desc: "Director and cinematographer", name: "Ivana Todorovic" } },
						{ content: { desc: "Sound recordist", name: "David Guiterrez Camps" } },
						{ content: { desc: "Editor", name: "Tijana Petrovic" } },
						{ content: { desc: "Music and sound designer", name: "Janko Radosavljevic" } },
						{ content: { desc: "Producer", name: "Ivana Todorovic and Blok productions" } },
						{ content: { desc: "Exhibition Format", name: "HDCAM, DigiBeta NTSC, DVD" } },
						{ content: { desc: "Production Format", name: "HD" } },
						{ content: { desc: "Total Runtime:", name: "13 minutes 2010 • NYC • Color" } },
					],
					siteTitle: "Harlem Mothers —",
					siteUrl: "http://harlemmotherssave.com"
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">

</style>