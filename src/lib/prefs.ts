export const availableLanguages = ['en', 'mn'] as const;
export type AvailableLanguage = (typeof availableLanguages)[number];
export const availableThemes = ['auto', 'light', 'dark'] as const;
export type AvailableTheme = (typeof availableThemes)[number];
export class LocalPreferences {
	private static instance: LocalPreferences;

	public static getInstance(): LocalPreferences {
		if (!LocalPreferences.instance) {
			LocalPreferences.instance = new LocalPreferences();
		}

		return LocalPreferences.instance;
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	private static KEY_LANG = 'lang';

	setLang(value: string) {
		try {
			window.localStorage.setItem(LocalPreferences.KEY_LANG, value);
		} catch (error) {
			// Silent fail
			console.error('[LocalPreferences] Failed to set language due to:\n' + error);
		}
	}

	public availableLanguagesNames: Record<AvailableLanguage, string> = {
		en: 'English 🇬🇧',
		mn: 'Монгол хэл 🇲🇳'
	};

	getLang(): AvailableLanguage {
		const value = window.localStorage.getItem(LocalPreferences.KEY_LANG)?.substring(0, 2);

		if (value && (availableLanguages as readonly string[]).includes(value)) {
			return value as AvailableLanguage;
		}

		this.setLang(availableLanguages[0]);

		return this.getLang();
	}
}

export const LocalPrefs = LocalPreferences.getInstance();
