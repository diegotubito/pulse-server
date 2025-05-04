// server.ts
import cors from 'cors';
import express from 'express';
import pollRouter from '../Feature/Poll/poll_routes'; // Adjusted path to match potential file structure
import 'dotenv/config';



export class Server {
   private app: express.Application;

   constructor() {
      this.app = express();
      this.middleware();
      this.routes();
   }

   routes() {
      this.app.use('/api/v1', pollRouter); 
   }

   middleware() {
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.static('public'));
      this.app.use(cors()); // Habilitamos CORS para todas las rutas
   }

   start() {
      const PORT = process.env.PORT || 3666;
      this.app.listen(PORT, () => {
         console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });
   }
}
