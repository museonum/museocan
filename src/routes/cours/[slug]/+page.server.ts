import type { EntryGenerator } from './$types';

import { loadPublishedCours } from '$lib/utilities/loadPublishedCours';

export const entries: EntryGenerator = async () => {
	const allPosts = await loadPublishedCours();

	return allPosts.map((post) => ({ slug: post.slug }));
};
