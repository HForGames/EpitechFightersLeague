import adapter from '@sveltejs/adapter-static';


const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : "/EpitechFightersLeague",
		}
	}
};

export default config;