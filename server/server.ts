import express, { type Express, Request, Response } from "express";
import bodyParser from "body-parser";
import mainRouter from "./routes";

const app: Express = express();
const PORT: number = 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRouter);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
