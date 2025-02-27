import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.local'
})

if (typeof process.env.XATA_DATABASE_URL !== 'string') {
    throw new Error('XATA_DATABASE_URL is not defined or not a string');
}

export default defineConfig({
    out: './db/migrations',
    schema: './db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.XATA_DATABASE_URL,
    },
});
