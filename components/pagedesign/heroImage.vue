<template>
	<div id="hero-image">
		<div class="shadow"></div>
		<h1 v-if="overlayText">{{ overlayText }}</h1>
		<img :src="imagePath" :alt="altText" />
	</div>
</template>
<script setup lang="ts">
const { imagePath, altText, overlayText, objectPosition = 'center center' } = defineProps<HeroImageProps>();

export type HeroImageProps = {
	imagePath: string,
	altText?: string,
	overlayText?: string
	objectPosition?: string
}


</script>
<style scoped>
#hero-image {
	width: 100%;
	height: 480px;
	position: relative;
	overflow: hidden;
	border-radius: 15px;
}

h1 {
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	left: 65px;
	color: white;
	font-size: 60px;
	font-weight: bold;
	width: 500px;
	line-height: 70px;
	z-index: 3;
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: v-bind(objectPosition);
	transform-origin: center center;
	transform: scale(1.5);
}

.shadow {
	z-index: 1;
	width: 100%;
	border-radius: 15px;
	height: 480px;
	position: absolute;
	-webkit-box-shadow: inset 200px 10px 152px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: inset 200px 10px 152px 0px rgba(0, 0, 0, 0.75);
	box-shadow: inset 200px 10px 152px 0px rgba(0, 0, 0, 0.75);
}

@media screen and (max-width: 1280px){
	img {
		transform: scale(1);
		object-position: center center;
	}

	#hero-image {
		height: 300px;
	}

	h1 {
		font-size: 40px;
		line-height: 50px;
		width: 300px;
		left: 40px;
	}
	
}

</style>
