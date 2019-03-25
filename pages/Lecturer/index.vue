<template>
	<main id="main">
		<section class="p-lect l">
			<div class="p-lect__wrapper">
				<p class="p-lect__desc">Lecturer</p>
				<h1>Master Classes / practical hands-on workshops</h1>
				<div class="p-lect__text">
					<p class="p-lect__intro">How to make an intimate emotional short film working as a one-person band? (or as the cinematographer, director, and producer)<br>
					Masterclass’ consist of Ivana showing parts of her films and explaining methods of her work.<br>
					7-day practical hands-on filmmaking workshops are an intense film experience where students go through the process of making their own short film.<br>
					Master classes and workshops are suitable for universities, film festivals, cultural centers and NGOs.</p>
					<p class="p-lect__mail">Please schedule or request a syllabus at <span>info@ivanatodorovic.com</span></p>
					<div class="p-lect__quote">
						<p>“Ivana was so inspiring! She was a bundle of heartfelt energy and willing to share so much of herself. When she left, all of my students said they hoped to one day be like her. They (and I) will never forget when Ivana came to AUBG.”,<br><span>Filmmaker/Professor Melody Gilbert, American University in Bulgaria</span></p>
						<p>“My experiences in this workshop were eyes-opening. I was tired in the evenings of hard work we had to do and at the same time satisfied as I’ve never been before. I found “it”, I felt “this is it”, this is what I want to do for the rest of this great life! “<br><span>Anna Scholl, master student, Universität Koblenz-Landau.</span></p>
					</div>
					<h3>Previous talks, workshops and master classes:</h3>
					<ul class="p-lect__list">
						<li>Institut für Kulturwissenschaft, Universität Koblenz-Landau, Germany</li>
						<li>Free Zone Junior, Free Zone Film Festival, Belgrade, Serbia</li>
						<li>Student’s City, Cultural Center, Belgrade, Serbia</li>
						<li>Social Sciences and Humanities Seminar, Science Center, Petnica, Serbia</li>
						<li>Kino Kabare, Festival Interqalactique de l’image alternative 2014, Brest, France</li>
						<li>Faculty of Media and Communication, Belgrade, Serbia</li>
						<li>TEDxAUK, Pristina,Kosovo</li>
						<li>Heinrich-Boll Stiftung European Union, Brussels, Belgium</li>
						<li>Documentary Club, American University, Blagoevgrad, Bulgaria</li>
						<li>School for Visual Anthropology, Belgrade, Serbia</li>
						<li>Migration Citizenship Education, Berlin, Germany</li>
						<li>Kino Klub Split, Split, Croatia</li>
						<li>Supetar Super Film Festival, Brac, Croatia</li>
						<li>Gypsy/Roma Human Rights Film Festival, New York City, USA International Institute of Social History, Graz, Austria</li>
					</ul>
					<a href="https://youtu.be/nMeUkddLEDg" class="p-lect__link" target="_blank">https://youtu.be/nMeUkddLEDg</a>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.p-lect {
	&__wrapper {
		@include font-size(16, 16);
		@include line-height(24, 25);
		letter-spacing: 0.05em;
		padding-top: 10.9rem;
		margin-bottom: 12.1rem;
		@include breakpoint(overPhone){
			padding-top: 16rem;
			margin-bottom: 16.6rem;
		}
	}
	& h1 {
		@include font-size(40, 100);
		@include line-height(43, 96);
		letter-spacing: 0;
		margin-bottom: 1.1rem;
		@include breakpoint(overPhone){
			width: 90%;
			margin-bottom: 1.5rem;
		}
	}
	&__desc {
		@include font-size(22, 30);
		color: $color-red;
		font-style: italic;
		margin-bottom: 6.6rem;
		@include breakpoint(overPhone){
			letter-spacing: 0.07em;
			margin-bottom: 8.2rem;
		}
	}
	&__text {
		@include breakpoint(overPhone){
			width: 55%;
		}
	}
	&__intro {
		color: $color-gray;
		letter-spacing: 0em;
		margin-bottom: 1.6rem;
		@include breakpoint(overPhone){
			margin-bottom: 1.6rem;
		}
	}
	&__mail {
		margin-bottom: 9.6rem;
		letter-spacing: 0em;
		@include breakpoint(overPhone){
			margin-bottom: 12.9rem;
		}
		& span {
			font-weight: bold;
		}
	}
	&__quote {
		position: relative;
		letter-spacing: 0em;
		padding: 2rem 0 2rem 2.1rem;
		border-left: 2px solid rgba(219, 219, 219, 0.7);
		@include breakpoint(overPhone){
			padding: 3.1rem 0 3.1rem 3.9rem;
		}
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: -0.8rem;
			height: 7.2rem;
			width: 1.6rem;
			background-image: linear-gradient(to bottom, $color-white, rgba(255, 255, 255, 0));
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: -0.8rem;
			height: 7.2rem;
			width: 1.6rem;
			background-image: linear-gradient(to top, $color-white, rgba(255, 255, 255, 0));
		}
		& p {
			margin-bottom: 1.2rem;
			@include breakpoint(overPhone){
				margin-bottom: 3.5rem;
			}
		}
		& span {
			display: inline-block;
			@include font-size(14, 14);
			@include line-height(19, 24);
			font-style: italic;
			color: $color-gray;
			margin-top: 0.9rem;
		}
	}
	& h3 {
		@include line-height(20, 24);
		letter-spacing: 0em;
		padding-right: 10rem;
		margin: 8.6rem 0 3.4rem;
		@include breakpoint(overPhone){
			margin: 8.8rem 0 2.6rem;
		}
	}
	&__list {
		@include line-height(22, 22);
		color: $color-gray;
		margin-bottom: 9.4rem;
		@include breakpoint(overPhone){
			margin-bottom: 7.2rem;
		}
		& li {
			position: relative;
			list-style: none;
			letter-spacing: 0em;
			padding-left: 2.4rem;
			margin-bottom: 1.3rem;
			@include breakpoint(overPhone){
				padding-left: 5.7rem;
				margin-bottom: 0.8rem;
			}
			&::before {
				content: '';
				display: block;
				width: 0.42rem;
				height: 0.42rem;
				border-radius: 50%;
				position: absolute;
				top: 0.7rem;
				left: -0.1rem;
				background: $color-black;
				@include breakpoint(overPhone){
					top: 0.9rem;
					left: 4.2rem;
				}
			}
		}
	}
	&__link {
		font-style: italic;
		letter-spacing: 0em;
		color: $color-link-blue;
	}
}
</style>
