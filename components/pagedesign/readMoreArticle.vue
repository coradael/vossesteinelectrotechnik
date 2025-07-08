<template>
	<div class="read-more-article">
		<div class="read-more-article-image">
			<img :src="imagePath" :alt="altText" />
		</div>
		<div class="read-more-article-text">
			<h3>{{ title }}</h3>
			<p>{{ articleText }}</p>
			<defaultButton :to="articlePath" text="Lees meer" />
		</div>
	</div>

</template>
<script lang="ts" setup>
import defaultButton from '../ui/defaultButton.vue';

defineProps<ReadMoreArticleProps>();

export type ReadMoreArticleProps = {
	title: string;
	imagePath: string;
	altText: string;
	articleText: string;
	articlePath: string;
}

</script>
<style scoped>
.read-more-article {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 120px;
	height: 464px;
	width: 100%;
}

.read-more-article-image {
	height: 100%;
	width: 48%;
}

.read-more-article-image img {
	object-fit: cover;
	border-radius: 8px;
	height: 100%;
	width: 100%;
}

.read-more-article-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 48%;
	height: 100%;
}

.read-more-article-text h3 {
	color: var(--dark-blue);
	font-size: 36px;
	margin-bottom: 32px;
}

.read-more-article-text p {
	color: var(--dark-blue);
	font-size: 20px;
	margin-bottom: 32px;
}

@media screen and (max-width: 1280px){
	.read-more-article {
		flex-direction: column;
		padding: 0 20px;
		height: auto;
	}

	.read-more-article-text {
		width: 100%;
		align-items: center;
		text-align:center;
	}

	.read-more-article-text p{
		font-size: 16px;
	}

	.read-more-article-image {
		width: 100%;
		height: 250px;
	}
	.read-more-article-text h3 {
		font-size: 28px;
		margin: 20px 0;
		text-align: center;
	}
}

</style>
