<template>
	<footer class="footer-background">
		<div class="container">
			<div class="footer-content">
				<div class="section" id="company">
					<img src="/public/images/vossestein_weblogo_white.png" alt="Vossestein Logo" />
					<div class="company-address">
						<span>Portengen 74</span>
						<span>3628EG Kockengen</span>
					</div>
					<div class="contact-info">
						<span>0346 - 700 285</span>
						<a
							href="mailto:info@vossesteinelektrotechniek.nl">info@vossesteinelektrotechniek.nl</a>
					</div>
				</div>
				<div class="section" id="specialisations">
					<div>
						<span class="footer-title">Specialisaties</span>
					</div>
					<div>
						<nuxt-link to="/elektrotechniek">Elektrotechniek</nuxt-link>
						<nuxt-link to="/zonne-energie">Zonne-energie</nuxt-link>
						<nuxt-link to="/laadpalen">Laadpalen</nuxt-link>
						<nuxt-link to="/energie-opslag">Thuisbatterij</nuxt-link>
					</div>
				</div>
				<div class="section" id="external-links">
					<a href="https://www.technieknederland.nl/" target="_blank">
						<img src="/public/images/logo-tn-lid-van-tn-diap-m-.png"
							alt="Lid van Techniek Nederland logo" />
					</a>
					<a href="https://zoeken-mijn.s-bb.nl/Home/Details?LeerbedrijfId=100486077"
						target="_blank">
						<img src="/public/images/erkend_leerbedrijf-300x164.png"
							alt="Erkend leerbedrijf logo" />
					</a>

				</div>
			</div>
		</div>
	</footer>
</template>
<script setup lang="ts">
</script>
<style scoped>
.footer-background {
	background-color: var(--dark-blue);
}

.footer-content {
	background-color: var(--dark-blue);
	color: white;
	padding: 110px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 20px;
}

.section {
	display: flex;
	flex-direction: column;
	width: 20%;
	height: 250px;
}

#company img {
	width: 100%;
	margin-bottom: auto;
}

#company .company-address {
	margin: 0 0 30px 0px;
	display: flex;
	flex-direction: column;
}

#company .contact-info {
	display: flex;
	flex-direction: column;
}

#company .contact-info a {
	color: white;
	text-decoration: none;
}

#company .contact-info a:hover {
	text-decoration: underline;
}

#specialisations {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

#specialisations .footer-title {
	font-weight: 600;
	margin-bottom: 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding-top: 35px;
}

#specialisations div {
	display: flex;
	flex-direction: column;
}

#specialisations div a {
	color: white;
	text-decoration: none;
	margin-bottom: 10px;
}

#specialisations div a:hover {
	text-decoration: underline;
}

#specialisations div a:last-of-type {
	margin-bottom: 0;
}

#external-links {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}

#external-links img {
	max-width: 100%;
	max-height: 120px;
}

@media (max-width: 1280px) {
	.footer-content {
		padding: 60px;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
		text-align: center;
	}

	.section {
		width: 100%;
		margin-bottom: 20px;
		align-items: center;
		height: auto;
	}

	#company img {
		max-width: 150px;
		margin-bottom: 20px;
	}

	#specialisations,
	#external-links {
		align-items: center;
	}

	#specialisations .footer-title,
	#specialisations div a {
		text-align: center;
	}

	#external-links img {
		max-width: 150px;
		margin: 10px 0;
	}
}
</style>
