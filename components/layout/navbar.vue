<template>
	<nav id="navbar" :class="{ shadow: isScrolledOutOfView }">
		<div class="container">
			<div>
				<div id="logo">
					<nuxt-link to="/">
						<img src="/images/vossestein_weblogo.png" alt="Vosstestein Logo" />
					</nuxt-link>
				</div>
				<div id="router-links">
					<template v-for="route in routes" :key="route.path">
						<v-menu v-if="route.submenu" open-on-hover open-on-click>
							<template v-slot:activator="{ props }">
								<a :class="{ 'router-link-active' : subMenuIsActive(route.name) }" v-bind="props"> {{ route.name }} </a>
							</template>
							<v-list>
								<v-list-item v-for="(subroute, index) in route.submenu"
									:key="index" :value="index"
									class="custom-list-item"
									@click="() => router.push(subroute.path)"
									>
									<NuxtLink :to="subroute.path">
										{{ subroute.name }}
									</NuxtLink>
								</v-list-item>
							</v-list>
						</v-menu>
						<nuxt-link v-else :to="route.path">{{ route.name }}</nuxt-link>
					</template>
				</div>
			</div>
		</div>
	</nav>
</template>
<script setup lang="ts">

const router = useRouter();

const solutionsSubmenu = [
	{ name: 'Laadpaal thuis', path: '/laadpalen' },
	{ name: 'Laadpaal voor bedrijven', path: '/laadpaal-voor-bedrijven' },
	{ name: 'Energie opslag', path: '/energie-opslag' },
];

const routes = [
	{ name: 'Wie wij zijn', path: '/wie-wij-zijn' },
	{ name: 'Elektrotechniek', path: '/elektrotechniek' },
	{ name: 'Energieoplossingen', path: '/energieoplossingen', submenu: solutionsSubmenu },
	{ name: 'Zonne energie', path: '/zonne-energie' },
	{ name: 'Werken bij', path: '/werken-bij' },
	{ name: 'Contact', path: '/contact' }
];

let isScrolledOutOfView = ref(false);

const subMenuIsActive = (routeName: string) => {
	return routes.find(route => route.name === routeName)?.submenu?.some(subroute => router.currentRoute.value.path === subroute.path);
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
#navbar>div>div {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 35px 0px;
}

#logo img {
	height: 51px;
}

#navbar div a,
.custom-list-item a {
	font-weight: 600;
	letter-spacing: 0.8px;
	color: var(--dark-blue);
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 35px;
	cursor: pointer;
}

#navbar div #router-links a.router-link-active,
.custom-list-item a.router-link-active{
	text-decoration: underline;
	text-decoration-color: var(--dark-blue);
	text-decoration-thickness: 2px;
}

#navbar div a:last-of-type {
	margin-right: 0;
}

#navbar {
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 99;
}

#navbar.shadow {
	box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
