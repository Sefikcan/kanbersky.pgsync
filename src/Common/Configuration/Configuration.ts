export default () => ({
    PORT: process.env.PORT || 3000,
    STAGE: process.env.STAGE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME || 'postgres',
    DB_PASSWORD: process.env.PASSWORD || 'postgres',
    DB_DATABASE: process.env.DB_DATABASE || 'postgres',
});