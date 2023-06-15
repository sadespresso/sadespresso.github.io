import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';
import { LocalPrefs } from '$lib/prefs';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';

export const load = (async (event) => {
	// Locale now comes from the server instead of the route
	const locale = browser ? LocalPrefs.getLang() : event.data.locale;
	// But we load and set it as before
	await loadLocaleAsync(locale);
	setLocale(locale);

	if (browser) {
		LocalPrefs.setLang(locale);
	}

	return event.data;
}) satisfies LayoutLoad;
