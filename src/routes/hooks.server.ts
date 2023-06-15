import type { AvailableLanguage } from '$lib/prefs';
import type { Handle } from '@sveltejs/kit';

export const langCookie = 'lang';

export const handle = (async ({ event, resolve }) => {
	let lang: AvailableLanguage;

	try {
		lang = (event.cookies.get(langCookie) ?? 'en') as AvailableLanguage;
	} catch (error) {
		lang = 'en';
	}

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
	return response;
}) satisfies Handle;
