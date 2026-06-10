import type { PageLoad } from './$types';

import * as config from '$lib/config';

import { loadPublishedCours } from '$lib/utilities/loadPublishedCours';
import { getTagSummaries } from '$lib/utilities/tags';

export const load: PageLoad = async () => {
	const allPosts = await loadPublishedCours();
	const posts = allPosts.slice(0, config.postsPerPage).map((post) => ({
		slug: post.slug,
		title: post.metadata.title,
		date: post.metadata.date,
		author: post.metadata.author,
		readingTime: post.metadata.readingTime,
		tags: post.metadata.tags
	}));
	const tags = getTagSummaries(allPosts);

	return {
		posts,
		tags,
		metadata: {
			title: 'Blog',
			description: 'Liste des posts'
		}
	};
};
