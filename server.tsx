import { Application, Router } from 'https://deno.land/x/oak@v7.3.0/mod.ts';
import { ReactDOMServer, React } from './deps/deps.ts';
import App from './components/App.tsx';

const app = new Application();
const port: number = 8080;
const router = new Router();

router.get('/', (context) => {
	context.response.body = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
	<title>Deno React Demo</title>
</head>
<body >
	<noscript>Enable JavaScript to run this application.</noscript>
	<div id="root">${ReactDOMServer.renderToString(<App />)}
	</div>
</body>
</html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`server is running on port: ${port}`);