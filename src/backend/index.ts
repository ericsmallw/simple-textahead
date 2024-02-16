import express, { Express, Request, Response } from "express";
import cors from "cors";


const app: Express = express();
const port = process.env.PORT || 3000;

// Define the CORS options
const corsOptions = {
  origin: ['http://127.0.0.1:8000', 'http://localhost:8000'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

app.use("/states", require("./routes/states-route"));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});