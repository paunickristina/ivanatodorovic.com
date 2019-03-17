<template>
  <header class="b-header l">
		<div class="b-header__wrapper">
			<div class="b-header__top">
				<nuxt-link class="b-header__logo" to="/">
					<svg viewBox="0 0 200 32.218">
						<path d="M0 5.126h4.209v26.785H0V5.126z" data-name="Path 1"/>
						<path d="M13.621 26.975l3.214-21.849h3.869l-4.137 26.785h-6.275L6.159 5.126h4.245z" data-name="Path 2"/>
						<path d="M35.317 31.911h-4.248l-.727-4.86h-5.165l-.727 4.86h-3.865L24.87 5.126h6.161zm-9.6-8.495h4.056L27.741 9.87z" data-name="Path 3"/>
						<path d="M41.017 12.51v19.4h-3.788V5.126h5.281l4.324 16.033V5.126h3.75v26.785H46.26z" data-name="Path 4"/>
						<path d="M67.228 31.911H62.98l-.727-4.86h-5.165l-.727 4.86h-3.865l4.286-26.785h6.16zm-9.6-8.495h4.056L59.652 9.87z" data-name="Path 5"/>
						<path d="M73.885 5.126h13.007v3.826h-4.4v22.959h-4.209V8.952h-4.4z" data-name="Path 6"/>
						<path d="M88.386 11.554c0-4.286 2.258-6.735 6.39-6.735s6.39 2.449 6.39 6.735v13.929c0 4.286-2.258 6.735-6.39 6.735s-6.39-2.449-6.39-6.735zm4.209 14.2c0 1.913.842 2.64 2.181 2.64s2.181-.727 2.181-2.64V11.286c0-1.914-.842-2.64-2.181-2.64s-2.181.727-2.181 2.64z" data-name="Path 7"/>
						<path d="M103.883 5.126h6.658c4.209 0 6.275 2.334 6.275 6.62v13.545c0 4.286-2.066 6.62-6.275 6.62h-6.658zm4.209 3.827v19.131h2.372c1.339 0 2.143-.689 2.143-2.6v-13.93c0-1.914-.8-2.6-2.143-2.6z" data-name="Path 8"/>
						<path d="M119.149 11.554c0-4.286 2.258-6.735 6.391-6.735s6.39 2.449 6.39 6.735v13.929c0 4.286-2.258 6.735-6.391 6.735s-6.391-2.449-6.391-6.735zm4.209 14.2c0 1.913.842 2.64 2.181 2.64s2.181-.727 2.181-2.64V11.286c0-1.914-.842-2.64-2.181-2.64s-2.181.727-2.181 2.64z" data-name="Path 9"/>
						<path d="M143.447 31.911a8.246 8.246 0 0 1-.382-3.291v-4.21c0-2.487-.842-3.406-2.755-3.406h-1.454v10.907h-4.209V5.126h6.352c4.362 0 6.237 2.028 6.237 6.161v2.1c0 2.755-.88 4.554-2.755 5.434 2.105.88 2.794 2.908 2.794 5.7v4.132a7.89 7.89 0 0 0 .459 3.252zm-4.592-22.959v8.227h1.645c1.569 0 2.526-.689 2.526-2.832v-2.64c0-1.913-.65-2.755-2.143-2.755z" data-name="Path 10"/>
						<path d="M149.683 11.554c0-4.286 2.257-6.735 6.391-6.735s6.39 2.449 6.39 6.735v13.929c0 4.286-2.257 6.735-6.39 6.735s-6.391-2.449-6.391-6.735zm4.209 14.2c0 1.913.842 2.64 2.182 2.64s2.181-.727 2.181-2.64V11.286c0-1.914-.842-2.64-2.181-2.64s-2.182.727-2.182 2.64z" data-name="Path 11"/>
						<path d="M171.494 26.975l3.214-21.849h3.866l-4.133 26.786h-6.275l-4.134-26.786h4.248z" data-name="Path 12"/>
						<path d="M180.525 5.126h4.209v26.785h-4.209z" data-name="Path 13"/>
						<path d="M199.999 21.924v3.559c0 4.286-2.143 6.735-6.276 6.735s-6.276-2.449-6.276-6.735V11.554c0-4.286 2.143-6.735 6.276-6.735s6.276 2.449 6.276 6.735v2.6h-3.98v-2.868c0-1.914-.841-2.64-2.181-2.64s-2.182.727-2.182 2.64v14.465c0 1.913.842 2.6 2.182 2.6s2.181-.689 2.181-2.6v-3.827z" data-name="Path 14"/>
						<path d="M198.369 0l-3.82 4.157h-2.771L194.324 0z" data-name="Path 35"/>
					</svg>
				</nuxt-link>
				<div class="b-header__trigger" @click="(menuOpened = !menuOpened),bodyOverflow()">
					<div class="b-header__trigger-icon" :class="{'active': !menuOpened}">
						<svg viewBox="0 0 23.95 15.967">
							<g id="menu" transform="translate(0 -76.5)">
								<g id="menu-2" data-name="menu" transform="translate(0 76.5)">
									<path id="Path_49" data-name="Path 49" d="M0,92.467H23.95V89.806H0Zm0-6.653H23.95V83.153H0ZM0,76.5v2.661H23.95V76.5Z" transform="translate(0 -76.5)"/>
								</g>
							</g>
						</svg>
					</div>
					<div class="b-header__trigger-icon" :class="{'active': menuOpened}">
						<svg viewBox="0 0 19.092 19.092">
							<path id="close" d="M9.546,11.667,2.121,19.092,0,16.97,7.425,9.546,0,2.121,2.121,0,9.546,7.425,16.97,0l2.121,2.121L11.667,9.546l7.425,7.425L16.97,19.092Z"/>
						</svg>
					</div>
				</div>
			</div>
			<div class="b-header__menu" :class="{'active': menuOpened}">
				<nav class="b-header__menu-nav">
					<ul>
						<nuxt-link tag="li" to="/" :class="{'active': home}">Home</nuxt-link>
						<nuxt-link tag="li" to="/films" :class="{'active': films}">Films</nuxt-link>
						<nuxt-link tag="li" to="/lecturer" :class="{'active': lecturer}">Lecturer</nuxt-link>
						<nuxt-link tag="li" to="/bio" :class="{'active': bio}">Bio</nuxt-link>
						<nuxt-link tag="li" to="/news/1" :class="{'active': news}">News</nuxt-link>
						<nuxt-link tag="li" to="/contact" :class="{'active': contact}">Contact</nuxt-link>
					</ul>
				</nav>
				<h2>DOCUMENTARY FILMMAKER WITH PASSION FOR SOCIAL CHANGE.</h2>
			</div>
		</div>
		
	</header>
</template>

<script>
export default {
	data(){
		return {
			menuOpened: false
		}
	},
	computed: {
		home() {
			return this.$route.path === '/'
    },
		films() {
			return this.$route.path.startsWith('/films')
    },
		lecturer() {
			return this.$route.path.startsWith('/lecturer')
    },
		bio() {
			return this.$route.path.startsWith('/bio')
    },
		news() {
      return this.$route.path.startsWith('/news')
    },
		contact() {
     	return this.$route.path.startsWith('/contact')
    }
	},
	methods: {
		bodyOverflow(){
			document.body.classList.toggle('fixed')
		}
	}
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/base/_base.scss';
	.b-header {
		&.l {
			padding: 0;
			@include breakpoint(overPhone){
				padding: 0 15rem;
			}
		}
		&__wrapper {
			@include breakpoint(overPhone){
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				padding: 5.2rem 0 0;
				// margin-bottom: 17rem; //check!
			}
		}
		&__top {
			background: $color-white;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 3.2rem 2rem;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 101;
			@include breakpoint(overPhone){
				position: static;
				width: 18.5rem;
				padding: 0;
			}
		}
		&__logo {
			width: 20rem;
			height: 3.3rem;
			cursor: pointer;
			@include breakpoint(overPhone){
				width: 18.5rem;
				height: 3rem;
			}
			& svg {
				width: 100%;
				height: 100%;;
			}
		}
		&__trigger {
			width: 2.4rem;
			height: 1.6rem;
			@include breakpoint(overPhone){
				display: none;
			}
			& svg {
				width: 100%;
				height: 100%;;
			}
			&-icon {
				display: none;
				&.active {
					display: block;
				}
			}
		}
		& h2 {
			position: relative;
			@include font-size(40, 40);
			@include line-height(43, 43);
			margin-bottom: 4.5rem;
			@include breakpoint(overPhone){
				display: none;
			}
		}
		&__menu {
			position: fixed;
			top: 9.7rem;
			background: $color-white;
			padding: 0 2rem;
			overflow-y: auto;
			height: calc(100vh - 9.7rem);
			z-index: 100;
			display: none;
			@include breakpoint(overPhone){
				position: static;
				display: block;
				height: auto;
				padding: 0;
			}
			&.active {
				display: block;
			}
			&-nav {
				@include font-size(16, 16);
				letter-spacing: 0.05em;
				padding: 3.4rem 0 3.6rem;
				margin-bottom: 4.4rem;
				border-bottom: 2px solid rgba(219, 219, 219, 0.7);
				@include breakpoint(overPhone){
					border-bottom: 0;
					padding: 0;
					margin: 0;
				}
				&::before {
					content: '';
					display: block;
					position: absolute;
					bottom: -0.8rem;
					left: 0;
					width: 7.2rem;
					height: 1.6rem;
					background-image: linear-gradient(to right, $color-white, rgba(255, 255, 255, 0));
					@include breakpoint(overPhone){
						display: none;
					}
				}
				&::after {
					content: '';
					display: block;
					position: absolute;
					bottom: -0.8rem;
					right: 0;
					width: 7.2rem;
					height: 1.6rem;
					background-image: linear-gradient(to left, $color-white, rgba(255, 255, 255, 0));
					@include breakpoint(overPhone){
						display: none;
					}
				}
				& ul {
					@include breakpoint(overPhone){
						display: flex;
						justify-content: space-between;
					}
					& li {
						padding: 1rem 0;
						@include breakpoint(overPhone){
							padding: 0;
							margin: 0 1.1rem;
							cursor: pointer;
						}
						&:last-child {
							@include breakpoint(overPhone){
								margin: 0;
							}
						}
						&.active {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
</style>