import express from "express";
import vehicleRoutes from './services/vehicles.js';
import motoristsRoutes from './services/motorists.js';
import usageRoutes from './services/usages.js';

const port = 3000;
const app = express();
app.use(express.json())

app.use('/vehicles', vehicleRoutes);
app.use('/motorists', motoristsRoutes);
app.use('/usages', usageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 

