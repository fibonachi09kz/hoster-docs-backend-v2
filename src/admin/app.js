import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/logo.svg';
import favicon from './extensions/favicon.svg';
import { ru } from './extensions/translation';
const addDataToAlgolia = require('./extensions/algolia/algolia-index');

const config = {
	auth: {
		logo: AuthLogo,
	},
	head: {
		favicon: favicon,
	},
	menu: {
		logo: MenuLogo,
	},
	locales: ['ru'],
	translations: {
		ru: ru
	},
	tutorials: false,
	notifications: { releases: false },
};

const bootstrap = async (app) => {
	console.log(app)
	await addDataToAlgolia();
};

export default {
	config,
	bootstrap,
};
