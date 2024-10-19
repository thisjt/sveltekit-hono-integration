import { Hono } from 'hono';

const app = new Hono();

const hiGET = app.get('/hi', () => {
	return new Response('Hi there!');
});

export default hiGET;
