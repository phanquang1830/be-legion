import express from 'express'
import dotenv from 'dotenv'
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import eventRouter from './routes/event.routes.js'
import { notFound, errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 3000 

const swaggerDocument = YAML.load("./event-api.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  explorer: true,
  swaggerOptions: {
    defaultModelsExpandDepth: 2, // 👈 cho hiện mô tả chi tiết field
    defaultModelExpandDepth: 2,
    docExpansion: "none", // hoặc "list", hoặc "full"
  }
}))


app.use(express.json())

app.use('/api/events', eventRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

