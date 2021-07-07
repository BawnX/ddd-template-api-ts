import express from 'express';
import { corsOptions } from './cors';
import morganBody from 'morgan-body';

export const expressInit = () =>
{
    const app: express.Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(corsOptions([ '*' ]));

    morganBody(app, {theme: 'dracula', dateTimeFormat: 'utc'});
    return app;
};
