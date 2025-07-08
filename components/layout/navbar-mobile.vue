<template>
	<nav id="navbar" :class="{ shadow: isScrolledOutOfView }">
		<div class="container" id="bar">
			<div id="logo" @click="closeMenu">
				<nuxt-link to="/">
					<img src="/images/vossestein_weblogo.png" alt="Vossestein Logo" />
				</nuxt-link>
			</div>
			<div id="menu-toggle" @click="toggleMenu">
				<v-icon>{{ isMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
			</div>
			<div v-if="isMenuOpen" id="mobile-router-links">
				<div class="container">
					<nuxt-link @click='closeMenu' v-for="route in routes" :key="route.path" :to="route.path">
						{{ route.name }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const routes = [
	{ name: 'Wie wij zijn', path: '/wie-wij-zijn' },
	{ name: 'Elektrotechniek', path: '/elektrotechniek' },
	{ name: 'Zonne energie', path: '/zonne-energie' },
	{ name: 'Laadpaal thuis', path: '/laadpalen' },
	{ name: 'Laadpaal voor bedrijven', path: '/laadpaal-voor-bedrijven' },
	{ name: 'Energie opslag', path: '/energie-opslag' },
	{ name: 'Werken bij', path: '/werken-bij' },
	{ name: 'Contact', path: '/contact' }
];

let isScrolledOutOfView = ref(false);
let isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
	isMenuOpen.value = false;
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
	isScrolledOutOfView.value = window.scrollY > 250;
};

</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

#navbar {
	position: sticky;
	top: 0;
	background-color: white;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 99;
}

#logo img {
	height: 35px;
}

#menu-toggle {
	cursor: pointer;
}

#mobile-router-links {
	background-color: white;
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
}

#mobile-router-links .container{
	display: flex;
	flex-direction: column;
	align-items: center;
}



#mobile-router-links a {
	font-weight: 600;
	letter-spacing: 0.8px;
	color: var(--dark-blue);
	text-decoration: none;
	text-transform: uppercase;
	margin: 15px 0;
	font-size: 16px;
}

#navbar.shadow {
	box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
}
</style>
