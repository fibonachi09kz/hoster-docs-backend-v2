import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/logo.svg';
import favicon from './extensions/favicon.svg';
import { ru } from './extensions/translation';

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

const bootstrap = (app) => {
	console.log(app)
};

export default {
	config,
	bootstrap,
};
