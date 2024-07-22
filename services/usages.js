import express from "express";
import { motorists } from './motorists.js';
import { vehicles } from './vehicles.js';
const router = express.Router();

//* Classe para Utilização de um Automóvel
class Usage{
    constructor(id, dateStart, dateEnd, driverID, vehicleID, reason ){
        this.id = id;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.driverID = driverID;
        this.vehicleID = vehicleID;
        this.reason = reason;
    };
};

//* Persistência em memória
const usages = [];
let nextID = 1;

//* Iniciar Registro
const createUsage = (req, res) => {
    const { dateStart, driverID, vehicleID, reason } = req.body;
    const dateEnd = "--/--/--";
    
    //* Motorista existe?
    const motorist = motorists.find(m => m.id == driverID);
    if (!motorist) {return res.status(404).send('Driver not found');};

    //* Veículo existe?
    const vehicle = vehicles.find(v => v.id == vehicleID);
    if (!vehicle) {return res.status(404).send('Vehicle not found');};

    //* Motorista já usa um veículo?
    const isMotoristUsingVehicle = usages.some(u => u.driverID == driverID && u.dateEnd == "--/--/--");
    if (isMotoristUsingVehicle) {return res.status(400).send('Motorist is already using a vehicle');};

    //* Veiculo já tá sendo utilizado?
    const isVehicleBeingUsed = usages.some(u => u.vehicleID == vehicleID && u.dateEnd == "--/--/--");
    if (isVehicleBeingUsed) {return res.status(400).send('Vehicle is already in use');};

    const newUsage = new Usage(nextID++, dateStart, dateEnd, driverID, vehicleID, reason);
    usages.push(newUsage);
    res.status(201).json(newUsage); //* 201: Item criado
};




//* Encerrar Registro
const endUsage = (req, res) => {
    const { id} = req.params;
    const {dateEnd} = req.body;
    const usage = usages.find(u => u.id == id);
    if (usage) {
        usage.dateEnd = dateEnd;
        res.json(usage);
    } else{
        res.status(404).send('Usage does not exist'); //* 404: Item not found  
    };
};


//* listar Registros
const listUsage = (req, res) => {
    res.json(usages);
};


router.post('/', createUsage);
router.put('/:id', endUsage);
router.get('/', listUsage);

export default router;