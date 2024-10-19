import { Hono } from 'hono';

const app = new Hono();

const helloGET = app.get('/hello', () => {
	return new Response('Hello world!');
});

export default helloGET;
