export default () => ({
  port: parseInt(process.env.PORT) || 8080,
  logging: {
    logHeaders: process.env.LOG_HEADERS === 'true' || false,
    logRequestData: process.env.LOG_REQUEST_DATA === 'true' || false,
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 1433,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
