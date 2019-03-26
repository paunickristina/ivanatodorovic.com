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
					id: "1",
					imgSrc: "/films/hero-1.jpg",
					title: "When I Was a Boy, I Was a Girl",
					videoSrc: "https://player.vimeo.com/video/69492608",
					introTitle: "“EVERYONE DESERVES HAPPINESS IN LIFE …HAPPINESSS”",
					introText: '“Ja kada sam bila klinac, bila sam klinka (When I Was a Boy, I Was a Girl) is an impressive documentary from Serbia. Finally, no clichés about sex workers! Ivana Todorovic portrays her transsexual friend who gives her very special, unpretentious access. A very intimate view, that gets very close. These are the films that we need in order to get closer to people who are so far from us.” Maike Mia Hohne ,program curator of Berlinale Shorts',
					awardsList: [
						{ content: "2013 premier at Berlin International Film Festival, Berlinale Shorts competition" },
						{ content: "2013 Cinematic Achievement Award, Thess International Shorts Film Festival, Solun" },
						{ content: "2013 Best Balkan Documentary Film, Dokufest, Prizren" },
						{ content: "2013 Best Short Film, South Eastern European Film Festival, LA" },
						{ content: "2013 Best National Documentary Film, Belgrade Shorts and Documentary Film Festival" },
						{ content: "Film was included as one of the 11 best short films in the history of Sarajevo Film Festival to be screened at Doc Alliance" },
					],
					synopsisText: "Goca is a transvestite in Belgrade, the capital city of a country where organizing or participating in a gay pride parade is forbidden. She is raising a daughter who is actually her niece. Although her very young boyfriend doesn’t respect he, Goca still loves him and manages to retain her sunny, open-minded nature. She risks her life to earn money for the family. On her thirty-ninth birthday she decides to celebrate her coming-out on stage in front of a live audience. And so she tells them the story of her life: “ When I was a boy, I was a girl”. The text in this cabaret was written by Goca herself and playwright Olga Dimitrijevic. Few months after film was made Goca started to work as an activist for transsexual issue in Serbia and has founded Association Hestija.",
					synopsisFest: "+40, Selected Festivals:",
					synopsisList: [
						{ content: "Sarajevo Film Festival, Bosnia" },
						{ content: "Santo Domingo Outfest, Dominican Republic" },
						{ content: "This Human World Film Festival, Austria" },
						{ content: "Guanajuato International Film Festival, San Miguel de Allende, Mexico" }
					],
					descTitle: "Film screened at various LGBTQ events.",
					prodList: [
						{ content: { desc: "Featuring", name: "Goca" } },
						{ content: { desc: "Directed and shoot", name: "by Ivana Todorovic" } },
						{ content: { desc: "Edited", name: "Jelena Maksimovic" } },
						{ content: { desc: "Music", name: "Drasko Adzic" } },
						{ content: { desc: "Text in cabare written", name: "by Olga Dimitrijevic and Goca" } },
						{ content: { desc: "Poster Design", name: "Academic Film Center, Students Cultural City and Ivana Todorovic" } },
						{ content: { desc: "Produced", name: "HDCAM, DigiBeta NTSC, DVD" } },
						{ content: { desc: "Total Runtime", name: "30 minutes 2013 • Serbia • Color" } },
						{ content: { desc: "Subtitles", name: "In Serbian with English subtitles" } },
						{ content: { desc: "Exhibition Format", name: "HDCAM, DigiBeta NTSC, DVD" } },
						{ content: { desc: "Production Format", name: "HD" } },
						{ content: { desc: "supported", name: "by Serbian Film Center, Fund Zenska Rekonstrukcija, Heartefact Fund" } },
					]
				},
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
					synopsisFest: "+40, Selected Festivals:",
					synopsisList: [
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
						{ content: { desc: "Total Runtime", name: "13 minutes 2010 • NYC • Color" } },
					],
					siteTitle: "Harlem Mothers —",
					siteUrl: "http://harlemmotherssave.com"
				},
				{
					id: "3",
					imgSrc: "/films/hero-3.jpg",
					title: "EVERYDAY LIFE OF ROMA CHILDREN FROM BLOCK 71",
					introTitle: "GOD LIVES ON THE MOON",
					introText: '“There are 600 squatter settlements in Serbia, the inhabitants of which are mostly of Roma origin. Of these, 105 are in Belgrade with a further 17 in New Belgrade. This young filmmaker has gained remarkable access to one of these settlements and shows the everyday life of the Stankovic family: A Roma family who live behind the skyscrapers of Block 71 in New Belgrade. This is a documentary full of optimism and warmth, and a strong counter to the negative images usually associated with the Roma population.” – London International Documentary Festival',
					awardsList: [
						{ content: "premiere at Gottingen Ethnographic International Film Festival, Germany" },
						{ content: "2007 Best Short Film Award, Human Rights Film Festival, Montreal 2007" },
						{ content: "2007 Special Jury Award, International Film Festival of Ethnological Film, Belgrade" }
					],
					synopsisText: "There are 600 squatter settlements in Serbia, the inhabitants of which are mostly of Roma origin. Of there, 105 are in Belgrade with seventeen more in New Belgrade. Here, Ivana Todorovic documents the life of the Stankovic family who migrated from Southern Serbia in search of better opportunities. Provided with few social services, their living conditions are rough and the children work to help support their family. An intimate windiw into Serbian Roma culture, the documentary sheds light on the intricacies of Roma customs and their amalgamation of cultural influences- from Roma and Serbian culture to Hispanic pop culture. Remarkably resilient, funny and optimistic, the children speak openly about their hopes and dreams, including educational opportunities from which they are often excluded. Charming and informative, the documentary brings an alternative and very human view of the often-beleaguered and impoverished Roma.",
					synopsisFest: "+30, Selected Festivals:",
					synopsisList: [
						{ content: "World premiere at Gottingen International Film Festival, Germany" },
						{ content: "International Documentary Film Festival, Volda, Norway," },
						{ content: "DOCUPOLIS, International Documentary Film Festival, Barcelona, Milano Film Festival, Italy" },
						{ content: "Royal Anthropological Institute International Festival of Ethnographic Film, UK" },
						{ content: "New York City Roma Gypsy Film Festival" }
					],
					descTitle: "Film is used as part of the educational curriculum in primary and high schools in Serbia and in university classroom education and NGOs around the globe.",
					prodList: [
						{ content: { desc: "Featuring", name: "family Stankovic" } },
						{ content: { desc: "Director and cinematographer", name: "Ivana Todorovic" } },
						{ content: { desc: "Editor", name: "Neda Spasojevic" } },
						{ content: { desc: "Producer", name: "Academic Film Center, Student’s House Cultural City" } },
						{ content: { desc: "Exhibition Format", name: "HDCAM, DigiBeta, DVD" } },
						{ content: { desc: "Production Format", name: "HD" } },
						{ content: { desc: "Total Runtime", name: "33 minutes 2008 • Belgrade • Color" } },
						{ content: { desc: "Distributed by", name: "DER http://www.der.org/films/everyday-life-of-roma-children.html" } },
					]
				},
				{
					id: "4",
					imgSrc: "/films/hero-4.jpg",
					title: "RAPRESENT",
					introTitle: "ITS A BAD FEELING HURTING SOMEBODY ELSE IF YOU CAN HURT YOURSELF",
					introText: '“A rare totally authentic, no nonsense documentary etude of the highest order about a young, self-destructive graffiti artists living in the streets of Belgrade, homeless, but never hungry; there is a heartbreaking thing or two to be learned about eating food from garbage containers and telling it with disarming honesty and yes, even charm, straight to the camera. Not to be missed!” – curator of SEEFest,LA',
					awardsList: [
						{ content: "2009 premiere at London International Documentary Film Festival LIDF" },
						{ content: "2009 Best Serbian Documentary Film, XVIII International Festival of Ethnological Film Belgrade Serbia" },
						{ content: "2010 Best Story Film, FILM FOR PEACE Festival, Italy" }
					],
					synopsisText: "“Bojan (aka RAPRESENT) is an orphan in his late teens living on the streets of Belgrade. Graffiti art and hip hop present for him a means of escape from the harsh reality of homelessness and drug addiction that has become his life. He tells us his story over the discarded leftovers of a child’s birthday cake that he finds in a dumpster. Over the course of the film, this small gesture grows into something symbolic, namely a symbolic picture of lost childhood; not just Bojan’s, but of a generation that grew up in the shadow of the Yugoslav wars. Bojan died of a heroin overdose six months after the film was made. He was just 21 years old.The film is a memorial to Bojan Radanov and his generation as well as a testament to the soul’s yearning for a better life even in the midst of societal apathy, abandonment, and crippling addiction. “Rapresent” is Bojan’s story, told his way, and in the end is the heartbreaking record of a life cut too short too soon.” BOJAN RAPRESENT (29.05.1988-11.06.2009)",
					synopsisFest: "+30, Selected Festivals:",
					synopsisList: [
						{ content: "Rotterdam Film Festival" },
						{ content: "South Easter European Film Festival, LA" },
						{ content: "NXNE Film @ Music Festival, Toronto" },
						{ content: "International Woman’s Film Festival, Cologne, Germany" },
						{ content: "Canary Wharf Film Festival, London , UKt" }
					],
					descTitle: "Film is used in educational settings in Serbia and anthropology seminars worldwide.",
					prodList: [
						{ content: { desc: "Featuring", name: "Bojan Radanov Rapresent" } },
						{ content: { desc: "Director and cinematographer", name: "Ivana Todorovic" } },
						{ content: { desc: "Editor", name: "Goran Mijic/music: Milos Dobric" } },
						{ content: { desc: "Sound designer", name: "Milan Milosavljevicc" } },
						{ content: { desc: "Producer", name: "Academic Film Center, Student’s House Cultural Center and Ivana Todorovic" } },
						{ content: { desc: "Exhibition Format", name: "HDCAM, DigiBeta, DVD" } },
						{ content: { desc: "Production Format", name: "HD" } },
						{ content: { desc: "Total Runtime", name: "33 minutes 2008 • Belgrade • Color" } },
					]
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">

</style>