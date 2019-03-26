<template>
	<main id="main">
		<section class="p-contact l">
			<div class="p-contact__wrapper">
				<p class="p-contact__desc">Contact</p>
				<h1>Documentary filmmaker with passion for social change.</h1>
				<div class="p-contact__text">
					<h3>E-mail:</h3>
					<a href="mailto:info@ivanatodorovic.com" target="_blank" rel="noreferrer noopener" class="p-contact__mail">info@ivanatodorovic.com</a>
					<h3>LinkedIn</h3>
					<a href="http://rs.linkedin.com/pub/ivana-todorovic/33/561/415" class="p-contact__link" target="_blank">http://rs.linkedin.com/pub/ivana-todorovic/33/561/415</a>
					<h3>Flickr</h3>
					<a href="http://flickr.com/photos/131018622@N03" class="p-contact__link" target="_blank">http://flickr.com/photos/131018622@N03</a>
					<h3>IMDB</h3>
					<a href="http://imdb.com/name/nm0865394" class="p-contact__link" target="_blank">http://imdb.com/name/nm0865394</a>
					<h3>Vimeo</h3>
					<a href="http://vimeo.com/ivanatodorovic" class="p-contact__link" target="_blank">http://vimeo.com/ivanatodorovic</a>
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
.p-contact {
	&__wrapper {
		@include font-size(16, 16);
		@include line-height(24, 25);
		letter-spacing: 0.05em;
		padding-top: 10.5rem;
		margin-bottom: 18.8rem;
		@include breakpoint(overPhone){
			padding-top: 16rem;
			margin-bottom: 21.2rem;
		}
	}
	&__desc {
		@include font-size(30, 30);
		color: $color-red;
		font-style: italic;
		margin-bottom: 7rem;
		@include breakpoint(overPhone){
			letter-spacing: 0.05em;
			margin-bottom: 8.2rem;
		}
	}
	& h1 {
		@include font-size(40, 100);
		@include line-height(43, 96);
		letter-spacing: 0;
		margin-bottom: 5.2rem;
		@include breakpoint(overPhone){
			width: 70%;
			margin-bottom: 8.9rem;
		}
	}
	&__text {
		@include font-size(16, 16);
		@include line-height(24, 24);
		& h3 {
			letter-spacing: 0;
			margin-bottom: 1.3rem;
			@include breakpoint(overPhone){
				margin-bottom: 1.5rem;
			}
		}
	}
	&__mail {
		display: block;
		color: $color-link-blue;
		letter-spacing: 0;
		margin-bottom: 4.2rem;
		@include breakpoint(overPhone){
			margin-bottom: 6.6rem;
		}
	}
	&__link {
		display: block;
		color: $color-link-blue;
		letter-spacing: 0;
		margin-bottom: 4.3rem;
		@include breakpoint(overPhone){
			margin-bottom: 6.8rem;
		}
	}
}
</style>