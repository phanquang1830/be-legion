import express from 'express'
import dotenv from 'dotenv'
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import eventRouter from './routes/event.routes.js'
import { notFound, errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000 

const swaggerDocument = YAML.load("./event-api.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.use('/api/events', eventRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

