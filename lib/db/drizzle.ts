import * as schema from './schema';
// Remove these imports as they're not needed if skipping DB
// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

// Mock the database client and db
export const client = null;
export const db = null;
