import pg from 'pg'
import dotenv from 'dotenv'

// Database Configuration -----------------------------------------------------------------------//
dotenv.config();

const {Pool} = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

export const db = connection;


