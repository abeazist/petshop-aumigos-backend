import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import 'dotenv/config';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

export const db = drizzle(pool);
