<template>
	<main id="main">
		<div v-for="(item, index) in films" :key="index">
			<FilmsDetails :data="item" />
		</div>
		<LecturerBlock />
	</main>
</template>

<script>
import gql from 'graphql-tag'
import LecturerBlock from "~/components/Lecturer/Block.vue"
import FilmsDetails from "~/components/Films/FilmsDetails.vue"

const films = gql`
	query films($id: ID!) {
		films(where: {id: $id}) {
			id
			title
			description
			date
			image{
				id
				url
			}
			hero{
				id
				url
			}
			video{
				html
			}
			content {
				html
			}
		}
	}
`
export default {
	apollo: {
		films: {
			query: films,
			variables () {
				return {
					id: this.$route.params.id
				}
			}
		}
	},
	components: {
		LecturerBlock,
		FilmsDetails
	}
}
</script>