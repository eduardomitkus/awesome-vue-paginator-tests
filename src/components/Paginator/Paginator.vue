<template>
	<div>
		<button class="paginator_previous-btn" @click="previousPage"></button>
		<button class="paginator_next-btn" @click="nextPage"></button>
	</div>
	
</template>

<script>
export default {
	data () {
		return {
			currentPage: 1
		}
	},
	methods: {
		nextPage() {
			this.currentPage += 1
		},
		previousPage() {
			this.currentPage -= 1
		},
	}
}
</script>
