import express from 'express'
import dotenv from "dotenv";
import cors from "cors"
import { dbConnection } from './dbConfig/dbconnect.js';
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoutes.js'


const app = express();
//configure env file
dotenv.config();
// config database 
dbConnection()
const port = process.env.PORT || 5000


// global middlewares use for all routes
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//test get api
app.use("/test", (req, res) => {
    res.send(`Server is running on port no ${port}`);
})

app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port} ........`)
})


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});