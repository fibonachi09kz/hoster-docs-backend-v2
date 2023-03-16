import AuthLogo from './extensions/logo.svg';
import MenuLogo from './extensions/logo.svg';
import favicon from './extensions/favicon.svg';


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
	locales: [
		'ru'
	],
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
