import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n/i18n-svelte';

export const prerender = true;

export const load = (async (event) => {
	// const locale = LocalPrefs.getLang();

	// await loadLocaleAsync(locale);
	setLocale('en');

	// LocalPrefs.setLang(locale);

	return event.data;
}) satisfies LayoutLoad;
