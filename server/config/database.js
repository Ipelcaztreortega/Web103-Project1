import pg from 'pg';

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
}

// Create a new instance of the Pool object
export const pool = new pg.Pool(config);

