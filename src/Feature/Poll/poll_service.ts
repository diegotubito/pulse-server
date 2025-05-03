import db from '../../Infra/db';

export class PollService {
   async getAllPolls() {
      const result = await db.query('SELECT * FROM polls');
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
