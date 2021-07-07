import './configs/dotenv';
import { Logger } from 'tslog';
import { expressInit } from './configs/express';
import { Application } from 'express';
import * as http from 'http';
import { Server } from 'typescript-rest';

export default class ServerInit
{
    private PORT: number = process.env.PORT ? +process.env.PORT : 3000;

    private Log: Logger;

    private readonly App: Application;

    private server: http.Server;

    constructor()
    {
        this.Log = new Logger({ name: 'Server', displayFunctionName: false });
        this.App = expressInit();
        Server.loadServices(this.App, '../../libs/**/controllers/*', __dirname);
    }

    public async start()
    {
        return new Promise<boolean>((resolve) =>
        {
            this.server = this.App.listen(this.PORT, () =>
            {
                this.Log.info(`server is running on PORT ${this.PORT}`);
                Server.getPaths().forEach(value =>
                {
                    this.Log.info(value);
                });
            });

            return resolve(true);
        });
    }

    public async stop(): Promise<boolean>
    {
        return new Promise<boolean>((resolve) =>
        {
            if (this.server)
            {
                this.server.close();
                this.Log.warn('server closed');

                return resolve(true);
            }

            this.Log.warn('server closed');

            return resolve(true);
        });
    }
}
