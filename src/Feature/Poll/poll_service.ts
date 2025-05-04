import db from '../../Infra/db';

export class PollService {
   async getAllPolls() {
      const result = await db.query('SELECT * FROM polls');
      return result.rows;
   }

   async getAllActivePolls() {
      const result = await db.query(`
      SELECT * FROM polls 
      WHERE expires_at IS NULL OR expires_at > now()
      ORDER BY created_at DESC
    `);
      return result.rows;
   }

   async createPoll(title: string) {
      const result = await db.query(
         'INSERT INTO polls (title) VALUES ($1) RETURNING *',
         [title]
      );
      return result.rows[0];
   }
}
