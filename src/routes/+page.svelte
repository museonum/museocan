<script lang="ts">
	import { resolve } from '$app/paths';
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
	<meta name="description" content={config.siteDescription} />
</svelte:head>

<header>
	<h1>Séminaire de muséologie canadienne</h1>
	<p>Bienvenue à la cohorte 2026 !</p>
</header>

<ul>
	<li><a href={resolve('/cours/calendrier')}>Calendrier synoptique</a></li>
	<li><a href={resolve('/cours/msl6800-plan')}>MSL6800 – Séminaire intégrateur</a></li>
	<li><a href={resolve('/cours/msl6529-plan')}>MSL6529 – Muséologie numérique</a></li>
	<li><a href={resolve('/cours/msl6700-plan')}>MSL6700 – Travail dirigé</a></li>
</ul>
