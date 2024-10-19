import app from '$api';

export async function handle({ event, resolve }) {
	const pathname = event.url.pathname;
	let response;

	if (pathname.split('/')[1] === 'api') {
		response = await app.fetch(event.request);
	} else {
		response = await resolve(event);
	}

	return response;
}
