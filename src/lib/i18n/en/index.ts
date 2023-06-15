import type { BaseTranslation } from '../i18n-types';

const en = {
	home: {
		0: 'home',
		title: 'Home',
		hello: "Hi! I'm Batmend Ganbaatar,\nan aspiring young software developer.",
		basedIn: 'Ulaanbaatar, Mongolia'
	},
	projects: {
		0: 'projects',
		title: 'My work',
		projects: {
			gegeeGuitar: {
				title: 'Gegee Guitar',
				desc: 'Gegee Guitar is a guitar tab platform inspired by <> 🎸. Anyone can upload guitar tabs. Available on web, Android, and iOS. Built /w <> (backend), <> (mobile), <> (web).'
			},
			moment_dart: {
				desc: 'A zero-dependency Dart library for DateTime. Similar popular library would be <> 🕒.'
			},
			cuko: {
				desc: 'A time expenditure tracker. Generates comprehensive time usage reports for later analysis. Additionally offers attendance tracking, planner (wip) for teams'
			}
		}
	},
	contact: {
		0: 'contact',
		title: 'Contact me',
		coffeeInvitation: 'If you wanna grab coffee, hit me up on any of my socials.'
	},
	footer: {
		rights: `All rights reserved • ${new Date().getFullYear()}`
	}
} satisfies BaseTranslation;

export default en;
