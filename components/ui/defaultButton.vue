<template>
	<button v-ripple @click="handleClick(to)">
		{{ text }}
	</button>
</template>
<script setup lang="ts">

defineProps<ButtonProps>();

export type ButtonProps = {
	to: string;
	text: string;
}

const router = useRouter();

const handleClick = (to: string) => {
	router.push(to);
}


</script>
<style scoped>
button {
	text-transform: uppercase;
	background-color: var(--main-blue);
	color: white;
	border-radius: 8px;
	width: 262px;
	height: 48px;
}

@media (max-width: 1280px) {
	button {
		font-size: 16px;
		height: 40px;
	}
}

</style>
