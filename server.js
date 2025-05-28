import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Adjust the path as necessary
import eventRoutes from './routes/Event.routes.js'; // Adjust the path as necessary
import errorHandler from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = YAML.load('./event.api.swagger.yaml');


app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/events', eventRoutes); // Use the event routes
app.use(errorHandler); // Use the error handler middleware

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

