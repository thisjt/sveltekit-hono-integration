import { Hono } from 'hono';
import helloGET from './routes/hello/GET';
import hiGET from './routes/hi/GET';

const app = new Hono();

const routes = [helloGET, hiGET];

routes.forEach((route) => app.route('/api', route));

export default app;
