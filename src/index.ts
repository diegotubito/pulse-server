import {Server} from './Server/Server'; // Adjusted path to match potential file structure

import 'dotenv/config';

const server = new Server();
server.start();
