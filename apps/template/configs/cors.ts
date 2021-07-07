import cors from 'cors';

export const corsOptions = (allowedOrigins: Array<string>) =>
{
    const options: cors.CorsOptions = {
        origin: allowedOrigins
    };

    return cors(options);
};
