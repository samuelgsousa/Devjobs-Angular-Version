import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

export function app() {
    const server = express();
    const serverDistFolder = resolve(dirname(fileURLToPath(import.meta.url)), 'dist/Devjobs');
    const indexHtml = join(serverDistFolder, 'index.server.html');
    const commonEngine = new CommonEngine();

    server.set('view engine', 'html');
    server.set('views', serverDistFolder);

    // Serve static files from the same output folder
    server.use(express.static(serverDistFolder, {
        maxAge: '1y',
        index: false, // Disable index.html to prevent conflicts
    }));

    // All regular routes use the Angular engine
    server.get('*', (req, res, next) => {
        const { protocol, originalUrl, baseUrl, headers } = req;
        commonEngine
            .render({
                bootstrap,
                documentFilePath: indexHtml,
                url: `${protocol}://${headers.host}${originalUrl}`,
                publicPath: serverDistFolder,
                providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
            })
            .then((html) => res.send(html))
            .catch((err) => next(err));
    });

    return server;
}

function run() {
    const port = process.env.PORT || 4000;
    const server = app();

    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

run();
