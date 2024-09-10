import express from "express"; // nodejs framework
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://mcbaquev3.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Your Request Hit Me!' });
});
export default app;
