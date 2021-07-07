import ServerInit from './server';
import { Logger } from 'tslog';

async function start(): Promise<void>
{
    const server = new ServerInit();
    await server.start();
    const graceful = async () =>
    {
        await server.stop();
        process.exit(0);
    };

    process.on('SIGTERM', graceful);
    process.on('SIGINT', graceful);
}

start()
    .catch(err =>
    {
        const log = new Logger({ name: 'Main', displayFunctionName: false });
        log.error(err);
    });
