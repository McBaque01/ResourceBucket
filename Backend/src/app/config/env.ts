import dotenv from "dotenv"

dotenv.config()


export const env = {
    Port: process.env.PORT || "PORT_NUMBER",
    Host: process.env.HOST || "LOCAL_HOST",
  };