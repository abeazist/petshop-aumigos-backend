import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/schema.js',   // arquivo onde ficam suas tabelas
    out: './drizzle',            // onde migrations serão geradas
    dbCredentials: {
    url: process.env.DATABASE_URL, // string do Neon
  },
});
