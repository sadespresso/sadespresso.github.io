import type { BaseTranslation } from '../i18n-types';

const en = {
	home: {
		0: 'home',
		title: 'Home',
		hi: 'welcome',
		hello: "Hi! I'm Batmend Ganbaatar,\nan aspiring young software developer.",
		basedIn: 'Ulaanbaatar, Mongolia'
	},
	projects: {
		0: 'projects',
		title: 'My work',
		seeOnPubDev: 'See on pub.dev',
		seeOnGitHub: 'Visit project on GitHub',
		projects: {
			gegeeGuitar: {
				title: 'Gegee Guitar',
				desc: 'Gegee Guitar is a guitar tab platform inspired by <><> 🎸. Anyone can upload guitar tabs. Available on web, Android, and iOS.'
			},
			flow: {
				title: 'Flow',
				desc: 'Free and open-source, cross-platform expense tracker prioritizes user experience and privacy. ~3.5k downloads. Built with <><> and love.'
			},
			moment_dart: {
				desc: 'A zero-dependency Dart library for DateTime. <><> downloads/mo.'
			}
		}
	},
	contact: {
		0: 'contact',
		title: 'Contact me',
		coffeeInvitation: 'If you wanna grab coffee, hit me up on any of my socials ✌️✌️'
	},
	footer: {
		rights: `All rights reserved • ${new Date().getFullYear()}`
	}
} satisfies BaseTranslation;

export default en;
