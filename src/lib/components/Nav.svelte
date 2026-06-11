<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navItems, siteTitle } from '$lib/config';

	type NavRoute = '/' | '/cours' | '/blog' | '/tags' | '/publications' | '/a-propos';

	const visibleItems = navItems.filter((item) => !item.hidden);
	let pathname = $derived(page.url.pathname);
	const withBase = (route: NavRoute) => resolve(route);
	const normalizePath = (path: string) =>
		path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
	const isCurrentRoute = (route: NavRoute) => {
		const current = normalizePath(pathname);
		const target = normalizePath(withBase(route));

		return route === '/' ? current === target : current === target || current.startsWith(`${target}/`);
	};
</script>

<nav aria-label="Navigation principale">
	<a class="logo" href={withBase('/')} aria-label="Accueil">
		<img src={asset('/images/amik.svg')} alt={siteTitle} height="60" />
	</a>
	<ul>
		{#each visibleItems as item (item.route)}
			<li>
				<a
					href={withBase(item.route as NavRoute)}
					aria-current={isCurrentRoute(item.route as NavRoute) ? 'page' : undefined}
				>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul a {
		color: var(--theme-color-title);
		font-weight: bold;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	ul a:hover,
	ul a:focus-visible {
		opacity: 0.7;
	}

	ul a[aria-current='page'] {
		text-decoration: underline;
	}
</style>