const express = require('express');
const dotenv = require('dotenv');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors'); 

const eventRouter = require('./routes/event.routes.js');
const { notFound, errorHandler } = require('./middlewares/error.middleware.js');

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
app.use(cors());

app.use('/api/events', eventRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

