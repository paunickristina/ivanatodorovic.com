<template>
	<main id="main">
		<section class="p-bio l">
			<div class="p-bio__wrapper">
				<p class="p-bio__desc">Bio</p>
				<h1>Documentary filmmaker with passion for social change.</h1>
				<div class="p-bio__text">
					<div class="p-bio__intro">
						<p>Ivana Todorovic is a filmmaker and lecturer from Belgrade, Serbia. For her BA Thesis in Ethnology and Anthropology at University of Belgrade, she made her first short documentary film. After a one month course at Ateliers Varan in Belgrade, she went on to get a Graduate Certificate in Documentary Media studies in New York City. She later received an MA in Fiction Film at The Faculty of Dramatic Arts in Belgrade.</p>
						<p>Ivana’s work tackles complex issues that deal with the cycles of abuse and recovery. Her intimate and emotional films deal with such issues as gender and sexuality, homelessness, the education of Roma children in squatter settlements around Belgrade and youth gun violence in New York City. Currently, she is in production and postproduction with three new films; a film dealing with facing sexual abuse in the family, a film dealing with the grief over the death of a loved one and a final film, dealing with relation between emotions and pain in female bodies.</p>
						<p>Ivana’s films have been screened at prestigious film festivals worldwide, including at the 63rd Berlinale Shorts, IFF Rotterdam, the Traverse City Film Festival, Palm Springs Shorts among others. She has won awards in Serbia, Kosovo, Italy, Canada, Greece, The UK and the US, and her films have appeared at venues such as the Anthology Film Archive, the Cultura Contemporiana Barcelona and on the New York Times homepage as part of the made with Kickstarter series.</p>
						<p>Ivana works as a lecturer and her lectures have been included as part of the TEDxAUK program in Pristina. When not making films or lecturing, Ivana teaches and conducts film workshops for aspiring documentarians.</p>
						<p>Ivana directed one episode for “Everyday life Hero” for Al Jazeera Balkans with the pro.ba production from Sarajevo. She has selected films for the Belgrade Short Films and Documentary Film Festival-Martovski; German International Ethnographic Film Festival; STIFF from Rijeka, Croatia; Ethnographic International Film Festival from Belgrade, Serbia. She was also on the Jury at Dokufest, Prizren, Kosovo; Ethnofilm in Rovinj, Croatia and Europe in Heart, Heinrich-Boll Stiftung, Brussels.</p>
					</div>
					<div class="p-bio__list">
						<h3>Awards</h3>
						<ul>
							<li>2013 BEST BALKAN DOCUMENTARY FILM at Dokufest, Prizren, Kosovo for “When I was a boy, I was a girl”</li>
							<li>2013 BEST CINEMATIC ACHIEVEMENT AWARD  at Thess </li>
							<li>International Shorts Film Festival, Greece for “When I was a boy, I was a girl”2013</li>
							<li>BEST SHORT DOCUMENTARY FILM at South Eastern European Film Festival, Los Angeles for “When I was a boy, I was a girl”</li>
							<li>2013  SEEfest NO LIMIT AWARD, a special category recognizing a film from the region that deals with the subject of LGBT human rights for “When I was a boy, I was a girl”</li>
							<li>2013 BEST NATIONAL DOCUMENTARY FILM at Belgrade’s Documentary and Shorts Film Festival, Serbia for “When I was a boy, I was a girl”</li>
							<li>2011 AUDIENCE AWARD at Fear no Film, Utah Arts Film Festival for “A Harlem Mother”</li>
							<li>2011 AUDIENCE AWARD BEST STORY FILM AWARD at FILM FOR PEACE Festival, Italy for “Rapresent”</li>
							<li>2010  BEST DOCUMENTARY FILM PROFILE at the Mixed Messages Film Festival, New York for “A Harlem Mother”</li>
							<li>2010 HONORABLE MENTION at Carolina Film And Video Film Festival in Greensboro, NC for “A Harlem Mother”</li>
							<li>2010 GRAND PRIX award at the Videnie film Festival in Russia for “A Harlem mother”</li>
							<li>2009 BEST NATIONAL AWARD at International Festival of Ethnological Film in Belgrade, Serbia for “Rapresent”</li>
							<li>2007 BEST SHORT FILM AWARD at Human Rights Film Festival, Montreal for “Everyday Life of Roma Children from Block”</li>
							<li>2007 SPECIAL MENTION at Ethnographic International film Festival, Belgrade for “ Everyday life of Roma children from Block 71”</li>
						</ul>
					</div>
					<div class="p-bio__list">
						<h3>+ 100 Festival Screening </h3>
						<ul>
							<li>Berlinale  Shorts  competition, screening of “ When I was a boy, I was a girl”</li>
							<li>Sarajevo Film Festival, screening of “When I was a boy, I was a girl”</li>
							<li>Traverse City Film Festival, screening of “A Harlem Mother”</li>
							<li>Palm Springs Int. ShortFest, screening of “A Harlem Mother”</li>
							<li>Rotterdam International Film Festival, screening of “Rapresent”</li>
							<li>Milano Film Festival, screening of “Everyday life of Roma children from Block 71”</li>
						</ul>
					</div>
					<div class="p-bio__list">
						<h3>+ 20 Place of Culture</h3>
						<ul>
							<li>Frauen Museum Hittisiau, Austria, screening of “ When I was a boy, I was a girl”</li>
							<li>Sarajevo Film Festival, screening of “When I was a boy, I was a girl”</li>
							<li>International Institute of Social History, Amsterdam, screening of “Rapresent” and   “Everyday Life of Roma Children from Block 71”</li>
							<li>Maysles Cinema, NYC screening “A Harlem Mother”</li>
							<li>DCTV: A HARLEM MOTHER and BEYOND BULLETS shorts, NYC</li>
							<li>Anthology Film Archive , New York Woman in Film and Television,  screening of “A Harlem Mother”</li>
							<li>Centre de Cultura Contemporiana de Barcelona, screening of “Rapresent” and “Everyday Life of Roma Children from Block 71”</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<LecturerBlock />
	</main>
</template>

<script>
import LecturerBlock from "~/components/Lecturer/Block.vue"
export default {
	components: {
		LecturerBlock
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-bio {
	&__wrapper {
		@include font-size(16, 16);
		@include line-height(24, 25);
		letter-spacing: 0;
		padding-top: 10.5rem;
		margin-bottom: 18.2rem;
		@include breakpoint(overPhone){
			width: 70%;
			padding-top: 16.2rem;
			margin-bottom: 31.1rem;
		}
	}
	&__desc {
		@include font-size(30, 30);
		font-style: italic;
		color: $color-red;
		margin-bottom: 7rem;
		@include breakpoint(overPhone){
			margin-bottom: 8.1rem;
		}
	}
	& h1 {
		@include font-size(40, 100);
		@include line-height(43, 96);
		letter-spacing: 0.0em;
		margin-bottom: 1.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 3.1rem;
		}
	}
	&__text {
		@include breakpoint(overPhone){
			padding-right: 24%;
		}
	}
	&__intro {
		color: $color-gray;
		margin-bottom: 7.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 8.5rem;
		}
		& p {
			margin-bottom: 2.4rem;
		}
	}
	&__list {
		margin-bottom: 7.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 8.3rem;
		}
		& h3 {
			margin-bottom: 2.2rem;
			@include breakpoint(overPhone){
				margin-bottom: 2.5rem;
			}
		}
		& ul {
			@include line-height(22, 24);
			color: $color-gray;
			& li {
				position: relative;
				list-style: none;
				letter-spacing: 0em;
				padding-left: 2.4rem;
				margin-bottom: 1.5rem;
				@include breakpoint(overPhone){
					padding-left: 5.7rem;
					margin-bottom: 1.9rem;
				}
				&::before {
					content: '';
					display: block;
					width: 0.42rem;
					height: 0.42rem;
					border-radius: 50%;
					position: absolute;
					top: 0.9rem;
					left: -0.1rem;
					background: $color-black;
					@include breakpoint(overPhone){
						top: 0.9rem;
						left: 4.2rem;
					}
				}
			}
		}
	}
}
</style>