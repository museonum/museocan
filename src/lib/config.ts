/**
 * Shared site values.
 *
 * Update this file with your own values.
 **/

export const siteTitle = 'Séminaire de muséologie canadienne';
export const siteDescription = 'Site compagnon pour le séminaire de muséologie canadienne ';
export const siteURL = 'https://museonum.github.io/museocan';
export const siteLink = 'https://museonum.github.io/museocan';
export const siteAuthor = 'Emmanuel Château-Dutier';
export const contactInfo = 'emmanuel.chateau.dutier@umontreal.ca';

// Optional author directory used to resolve profile links from IDs.
// Recommended: keep key and slug identical unless you need a separate internal ID.
export const authorProfiles: Record<
	string,
	{
		slug: string;
		name?: string;
		href?: string;
		orcidId?: string;
		zoteroUsername?: string;
		zoteroUserId?: number;
		forgeService?: string;
		forgeUsername?: string;
	}
> = {
	emchateau: {
		slug: 'emchateau',
		name: 'Emmanuel Chateau-Dutier',
		href: '/auteurs/emchateau',
		orcidId: '0000-0003-4092-4569',
		zoteroUsername: 'emchateau',
		zoteroUserId: 4883,
		forgeService: 'codeberg',
		forgeUsername: 'emchateau'
	},
	ouvroir: {
		slug: 'ouvroir',
		name: 'Ouvroir',
		href: '/auteurs/ouvroir'
	}
};

// Posts shown per page on the main blog index
export const postsPerPage = 10;

// Zotero citation settings (global)
export const zoteroCitationStyle = 'chicago-note-bibliography';
export const zoteroCitationLocale = 'fr-FR';
export const zoteroReferenceContent: 'bib' | 'citation' = 'bib';

// Main navigation menu (also used in footer and mobile nav)
// 'hidden' is optional: omitted or false means visible by default
export const navItems = [
	{
		title: 'Accueil',
		route: '/',
		hidden: true // Hide this item from menus
	},
	{
		title: 'Cours',
		route: '/cours'
		// hidden omitted = visible by default
	},
	{
		title: 'Blog',
		route: '/blog'
		// hidden omitted = visible by default
	},
	{
		title: 'Tags',
		route: '/tags'
		// hidden omitted = visible by default
	},
	{
		title: 'À propos',
		route: '/a-propos'
		// hidden omitted = visible by default
	}
];
