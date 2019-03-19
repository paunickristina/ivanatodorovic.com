<template>
	<section class="b-footer l">
		<div class="b-footer__wrapper">
			<p class="b-footer__top" @click="scrollToTop(200)"><span>back to top</span></p>
			<p>© 2019. <span>After</span> all rights reserved</p>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		scrollToTop(scrollDuration){
			var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    	},15);
		}
	}
}
</script>

<style scoped lang="scss">
@import '~assets/scss/base/_base.scss';
.b-footer {
	&__wrapper {
		text-align: center;
		padding: 2.6rem 0 1.3rem;
		border-top: 1px solid $color-light-gray;
		@include breakpoint(overPhone){
			display: flex;
			justify-content: space-between;
			padding: 3.5rem 0 7.5rem;
		}
	}
	&__top {
		margin-bottom: 6.4rem;
		display: inline-block;
		@include breakpoint(overPhone){
			margin-bottom: 0;
			order: 1;
			cursor: pointer;
		}
	}
	& p {
		@include font-size(16, 16);
		letter-spacing: 0em;
		& span {
			font-weight: bold;
		}
	}
}
</style>