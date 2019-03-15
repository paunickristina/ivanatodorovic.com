<template>
	<article class="b-art-news l">
		<div class="b-art-news__wrapper">
			<div class="b-art-news__body">
				<h2>First short fiction film</h2>
				<div class="b-art-news__img">
					<img src="~assets/img/news/news-1.jpg" alt="">
				</div>
				<div class="b-art-news__bottom">
					<p class="b-art-news__date">January 12 — 2018</p>
					<a class="b-art-news__link c-link" href="">
						more
						<span>
							<svg viewBox="0 0 21.933 17.521">
								<path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
								<path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<div class="b-art-news__text">
				<p>With a great crew, we shot a film about a girl brave enough to face her uncle who sexualy abused her when she was a child.</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-art-news {
	&__wrapper {
		position: relative;
		padding-bottom: 9.4rem;
		@include breakpoint(overPhone){
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	& h2 {
		@include font-size(30, 30);
		@include line-height(34, 35);
		letter-spacing: 0.05em;
		margin-bottom: 2.2rem;
	}
	&__body {
		@include breakpoint(overPhone){
			width: 36%;
		}
	}
	&__img {
		margin-bottom: 1.9rem;
		@include breakpoint(overPhone){
			margin-bottom: 2.3rem;
		}
		& img {
			width: 100%;
		}
	}
	&__bottom {
		position: absolute;
		bottom: 5.4rem;
		left: 0;
		@include font-size(16, 16);
		letter-spacing: 0.05em;
		display: flex;
		justify-content: space-between;
		@include breakpoint(overPhone){
			position: static;
			padding-right: 6.6rem;
		}
	}
	&__link {
		display: none;
		@include breakpoint(overPhone){
			display: flex;
		}
	}
	&__text {
		@include font-size(14, 14);
		@include line-height(22, 22);
		letter-spacing: 0em;
		color: $color-gray;
		@include breakpoint(overPhone){
			width: 49.6%;
			padding-right: 14%;
		}
	}
}
</style>