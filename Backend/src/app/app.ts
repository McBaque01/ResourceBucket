import express from "express"; // nodejs framework

import cors from "cors"
import { Request, Response } from "express";

const app = express();
app.use(express.json());

interface corsvalues {
    origin: string[],
    methods:string[],
    credentials: boolean,
    optionsSuccessStatus: number,
}
  
app.use(cors (<corsvalues>{
    origin: ["http://localhost:5173", "https://mcbaquev3.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}))

    

app.get('/', (req: Request, res: Response) =>{
    res.status(200).json({ message: 'Your Request Hit Me!' });
})



export default app;