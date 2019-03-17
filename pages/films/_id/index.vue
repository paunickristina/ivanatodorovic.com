<template>
	<main id="main">
		<div class="p-films-det">
			<p class="p-films-det__desc l">Films</p>
			<section class="p-films-det__hero l">
				<div class="p-films-det__hero-img">
					<img src="/films/films-1.jpg" alt="">
				</div>
				<div class="p-films-det__hero-text">
					<h1>A Harlem Mother</h1>
				</div>
			</section>
			<section class="p-films-det__text l">
				<div class="p-films-det__text-wrap">
					<h4>Life is good  until you are living it</h4>
					<p>“By far the most intense contribution was A Harlem Mother, the story of a woman who lost her son to gun violence. Directed by Ivana Todorovic, we are taken through the pain and heartbreak that so many parents living in Harlem have endured and continue to endure today. When the documentary ended and the credits rolled, the theatre was silent – as we struggled with the emotional journey we had just taken” Susan Peake, Review Vancouver</p>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Awards:</h4>
					<ul>
						<li>2009 premiere at historic Maysles Cinema in Harlem, NYC</li>
						<li>2010 Grand Prix Documentary Film Festival “Videnie” in Kemenovo in Russia</li>
						<li>2010 Best Documentary Film Profile Mixed Messages Film Festival, New York</li>
						<li>2010 Honorable Mention Carolina Film And Video Film Festival, Greensboro, NC</li>
						<li>2010 Audience award Fear no Film, Utah Arts Film Festival</li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Synopsis:</h4>
					<p>In 1998, 18 year old Latron Parker made documentary about difficulties growing up in Harlem. Eights years later he was shot dead on the street. Today his mother Jean fights youth gun violence and helps other parents to survive the pain through her organization, Harlem Mothers. Weaving footage from Latron’s own film with scenes from Jean’s new life today.</p>
					<ul>
						<li>+40, Selected Festivals</li>
						<li>World Premiere at historic Maysles Cinema in Harlem</li>
						<li>Traverse City , Michael Moore’s Festival</li>
						<li>Rooftop Film Festival</li>
						<li>New York Woman in Film and Television, Anthology Film Archive</li>
						<li>Palm Springs International Shortfest</li>
						<li>Festival de Cannes, Short Film Corner</li>
						<li>Festival de Cannes, American Pavilion, Emerging filmmakers Showcase</li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Used in Media Campaign Against Gun Violence:</h4>
					<p>Beyond Bullets: Gun Violence in America screening in Maysles cinema, NY <br> DCTV: A HARLEM MOTHER and BEYOND BULLETS shorts, NY</p>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Production Notes:</h4>
					<ul class="p-films-det__text-note">
						<li>Featuring: <span>Jean Corber Parker</span></li>
						<li>Director and cinematographer: <span>Ivana Todorovic</span></li>
						<li>Sound recordist: <span>David Guiterrez Camps</span></li>
						<li>Editor: <span>Tijana Petrovic</span></li>
						<li>Music and sound designer: <span>Janko Radosavljevic</span></li>
						<li>Producer: <span>Ivana Todorovic and Blok productions</span></li>
						<li>Exhibition Format: <span>HDCAM, DigiBeta NTSC, DVD</span></li>
						<li>Production Format: <span>HD</span></li>
						<li>Total Runtime: <span>13 minutes 2010 • NYC • Color</span></li>
					</ul>
				</div>
				<div class="p-films-det__text-wrap">
					<h4>Important website:</h4>
					<div class="p-films-det__text-link">
						<p>Harlem Mothers —</p>
						<a href="http://harlemmotherssave.com" target="_blank">http://harlemmotherssave.com</a>
					</div>
				</div>
			</section>
		</div>
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
.p-films-det {
	@include font-size(16, 16);
	@include line-height(24, 25);
	letter-spacing: 0.05em;
	padding: 16.6rem 0 10.5rem 0;
	@include breakpoint(overPhone){
		padding: 16.9rem 0 21.6rem 0;
	}
	&__desc {
		letter-spacing: 0.05em;
		font-style: italic;
		text-transform: capitalize;
		margin-bottom: 6.2rem;
	}
	&__hero {
		position: relative;
		margin-bottom: 9.4rem;
		@include breakpoint(overPhone){
			margin-bottom: 19.8rem;
		}
		&-img {
			& img {
				width: 100%;
			}
		}
		&-text {
			@include font-size(30, 100);
			@include line-height(34, 96);
			letter-spacing: 0.05em;
			font-weight: bold;
			position: absolute;
			left: 2rem;
			bottom: 0;
			background: $color-white;
			height: 4.8rem;
			@include breakpoint(overPhone){
				left: 14.8rem;
				bottom: 3.3rem;
			}
			& h1 {
				padding: 1.3rem 2rem 0.5rem 0;
				@include breakpoint(overPhone){
					background: lightcoral;
					padding: 3.3rem 6.3rem 0 0;
				}
			}
		}
	}
	&__text {
		@include breakpoint(overPhone){
			padding-right: 63rem;
		}
		&-wrap {
			margin-bottom: 7.7rem;
			@include breakpoint(overPhone){
				margin-bottom: 7rem;
			}
			& h4 {
				letter-spacing: 0.01em;
				font-weight: bold;
				margin-bottom: 2.4rem;
			}
			& p {
				letter-spacing: 0em;
				color: $color-gray;
			}
			& ul {
				color: $color-gray;
				& li {
					position: relative;
					letter-spacing: 0em;
					list-style: none;
					padding-left: 1.4rem;
					margin-bottom: 1.7rem;
					@include breakpoint(overPhone){
						padding-left: 5.7rem;
						margin-bottom: 0.5rem;
					}
					&::before {
						content: '';
						display: block;
						width: 0.42rem;
						height: 0.42rem;
						border-radius: 50%;
						background: $color-black;
						position: absolute;
						top: 0.9rem;
						left: -0.1rem;
						@include breakpoint(overPhone){
							left: 4.1rem;
						}
					}
				}
			}
			& .p-films-det__text-note {
				& li {
					padding-left: 0;
					margin-bottom: 0;
					&::before {
						display: none;
					}
				}
			}
		}
		&-note {
			& span {
				color: $color-black;
				letter-spacing: -0.03em;
				font-weight: bold;
			}
		}
		&-link {
			& a {
				letter-spacing: 0em;
				color: $color-link-blue;
			}
		}
	}
}
</style>