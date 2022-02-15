<template>
	<div class="blog-card-wrap">
		<div class="blog-cards container">
			<div class="toggle-edit">
				<span>Toggle to edit post</span>
				<input type="checkbox" v-model="editPost">
			</div>

			<BlogCard v-for="(post, index) in blogPosts" :key="index" :post="post" />
		</div>
	</div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'

export default {
	name: 'Blogs',
	components: {
		BlogCard
	},
	computed: {
		blogPosts() {
			return this.$store.state.blogPosts
		},
		editPost: {
			get() {
				return this.$store.state.editPost
			},
			set(payload) {
				this.$store.commit('toggleEditPost', payload)
			}
		}
	},
	beforeDestroy() {
		return this.$store.commit('toggleEditPost', false)
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="scss" scoped>
.blog-cards {
	position: relative;

	.toggle-edit {
		display: flex;
		align-items: center;
		position: absolute;
		top: -70px;
		right: 0;

		span {
			margin-right: 16px;
		}
	}

	input[type="checkbox"] {
	position: relative;
	border: none;
	background: #fff;
	width: 80px;
	height: 30px;
	-webkit-appearance: none;
	outline: none;
	border-radius: 20px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
	}

	input[type="checkbox"]:before {
		content: '';
		width: 30px;
		height: 30px;
		background: #303030;
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 20px;
		transform: scale(1.1);
		transition: 750ms ease all;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
	}

	input:checked[type="checkbox"]:before {
		background: #fff;
		left: 52px;
	}
}
</style>