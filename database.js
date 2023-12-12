import pg from "pg";

const { Pool } = pg;

const client = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});
export default client;
