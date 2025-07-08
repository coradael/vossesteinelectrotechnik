<template>
	<swiper :grabCursor="true" slidesPerView="auto" :spaceBetween="spaceBetween">
		<swiper-slide v-for="slide, idx in slides" :key="idx">
			<div class="shadow"></div>
			<img :src="slide.imagePath" :alt="`Vossestein Slider ${slide.title}`" />
			<div class="content">
				<img class="icon" v-if="slide.icon" :src="`/images/vossestein_icon_${slide.icon}.svg`"></img>
				<span class="slide-title">{{ slide.title }}</span>
			</div>
		</swiper-slide>

		<swiper-slide>
		</swiper-slide>
	</swiper>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const { slides } = defineProps<{ slides: SwiperSlideProps[] }>();

export type SwiperSlideProps = {
	icon?: 'elektra' | 'zon' | 'batterij' | 'service';
	title: string;
	imagePath: string;
}

const spaceBetween = computed(() => {
	if (window?.innerWidth < 1280) {
		return 16;
	} else {
		return 24;
	}
})

onMounted(() => {
	window.addEventListener('resize', () => {
		Swiper.value?.update();
	});
});



</script>
<style scoped>
.swiper-slide {
	height: 464px;
	width: 464px;
	border-radius: 15px;
}

.content {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 40px;
}

.shadow {
	width: 464px;
	height: 464px;
	left: 0;
	border-radius: 15px;
	position: absolute;
	-webkit-box-shadow: inset 15px -100px 152px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: inset 15px -100px 152px 0px rgba(0, 0, 0, 0.75);
	box-shadow: inset 15px -100px 152px 0px rgba(0, 0, 0, 0.75);
}

.icon {
	z-index: 1;
	margin-bottom: 18px;
	height: 67.5px;
}

.swiper-slide img:not(.icon) {
	width: 100%;
	height: 100%;
	border-radius: 15px;
	object-fit: cover;
}

.swiper-slide .slide-title {
	width: 300px;
	font-size: 36px;
	color: white;
	font-weight: bold;
	z-index: 1;
	line-height: 1;
}

@media screen and (max-width: 1280px) {
	.swiper-slide {
		height: 300px;
		width: 300px;
	}

	.content {
		padding: 20px;
	}

	.shadow {
		width: 300px;
		height: 300px;
	}

	.swiper-slide .slide-title {
		font-size: 24px;
		width: 200px;
	}
}
</style>
