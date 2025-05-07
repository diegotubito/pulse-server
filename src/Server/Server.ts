// server.ts
import express from 'express';
import pollRouter from '../Feature/Poll/poll_routes'; // Adjusted path to match potential file structure
import 'dotenv/config';
import cors from 'cors';


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
       console.log("[Middleware] Registering CORS");
      this.app.use(cors());
   }

   start() {
      const PORT = process.env.PORT || 3666;
      this.app.listen(PORT, () => {
         console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });
   }
}
