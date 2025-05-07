import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
   ssl: { rejectUnauthorized: false }, // sacamos esto cuando usamos base de datos local, Esa opción solo se necesita cuando usás Supabase u otra base "en la nube" que exige SSL
});

console.log('[DB] DATABASE_URL:', process.env.DATABASE_URL);

export default pool;
