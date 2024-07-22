import express from "express";
const router = express.Router();

//* Classe para Cadastro de Veículos
class Vehicle{
    constructor(id, plate, color, brand){
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    };
};

//* Persistência em memória
export const vehicles = [];
export let nextVehicleID = 1; //vehicles.length + 1

//* Criar novo veículos
const createVehicle = (req, res) => {
    const { plate, color, brand } = req.body;
    const newVehicle = new Vehicle(nextVehicleID, plate, color, brand);
    nextVehicleID++; //* Escolhe o próximo ID disponível
    vehicles.push(newVehicle);
    res.status(201).json(newVehicle); //* 201: Item criado
};

//* Atualizar veículos
const updateVehicle = (req, res) => {
    const { id } = req.params;
    const { plate, color, brand } = req.body;
    const vehicle = vehicles.find(v => v.id == id);
    if (vehicle) {
        vehicle.plate = plate;
        vehicle.color = color;
        vehicle.brand = brand;
        res.json(vehicle);
    } else{
        res.status(404).send('Vehicle not found');
    };
};

//* Deletar veículos
const deleteVehicle = (req, res) => {
    const { id } = req.params;
    const index = vehicles.findIndex(v => v.id == id);
    if (index !== -1) {
        vehicles.splice(index, 1);
        res.status(204).send(); //* 204: Sem conteúdo
    } else {
        res.status(404).send('Vehicle not found');
    }
};

//* listar veículos
const listVehicle = (req, res) => {
    const { color, brand } = req.body;
    let filteredVehicles = vehicles;
    if (color) {
        filteredVehicles = filteredVehicles.filter(v => v.color === color);
    }
    if (brand) {
        filteredVehicles = filteredVehicles.filter(v => v.brand === brand);
    }
    res.json(filteredVehicles);
};

//* Filtrar veículos
const filterVehicleByID = (req, res) => {
    const { id } = req.params;
    const vehicle = vehicles.find(v => v.id == id);
    if (vehicle) {
        res.json(vehicle);
    } else {
        res.status(404).send('Vehicle not found');
    }
};

router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
router.get('/', listVehicle);
router.get('/:id', filterVehicleByID);

export default router;