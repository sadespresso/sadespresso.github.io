import { redirect } from '@sveltejs/kit';
import { langCookie } from './hooks.server';
import { detectLocale } from '$lib/i18n/i18n-util';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	// Using a GET var "lang" to change locale
	const newLocale = event.url.searchParams.get(langCookie);
	if (newLocale) {
		event.cookies.set(langCookie, newLocale, { path: '/' });
		event.url.searchParams.delete(langCookie);
		// Redirect to remove the GET var
		throw redirect(303, event.url.toString());
	}

	// Get the locale from the cookie
	const locale = detectLocale(() => [event.cookies.get(langCookie) ?? 'en']);
	return { locale };
}) satisfies LayoutServerLoad;
