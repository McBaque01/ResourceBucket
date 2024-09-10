import app from './app/app.js';
import dotenv from "dotenv"

import { env } from './app/config/env.js';

dotenv.config()

const startServer = async () => {
    try {
    
      const server = app.listen(env.Port, async () => {
        console.log(`Server is working!`);
        console.log(`Server running at ${env.Host}${env.Port}`);
    
      });
  
      server.on('error', (err) => {
        console.error('Server error:', err);
      });
    } catch (error) {
      console.error('Failed to connect to the database:', error);
      process.exit(1); // Exit the process with failure
    }
  };


startServer();