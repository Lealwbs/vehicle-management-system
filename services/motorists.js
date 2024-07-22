import express from "express";
const router = express.Router();

//* Classe para Cadastro de Motoristas
class Motorist{
    constructor(id, name){
        this.id = id;
        this.name= name;
    };
};

//* Persistência em memória
export const motorists = [];
export let nextMotoristID = 1 ;

//* Criar novo motorista
const createMotorist = (req, res) => {
    const {name} = req.body;
    const newMotorist = new Motorist(nextMotoristID, name)
    nextMotoristID++; //* Escolhe o próximo ID disponível
    motorists.push(newMotorist);
    res.status(201).json(newMotorist); //* 201: Item criado
};

//* Atualizar motorista
const updateMotorist = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const motorist = motorists.find(m => m.id == id);
    if (motorist) {
        motorist.name = name;
        res.json(motorist);
    } else{
        res.status(404).send('Motorist not found'); //* 404: Item not found  
    };
};

//* Deletar motorista
const deleteMotorist = (req, res) => {
    const { id } = req.params;
    const index = motorists.findIndex(m => m.id == id);
    if (index !== -1) {
        motorists.splice(index, 1);
        res.status(204).send(); //* 204: Sem conteúdo
    } else {
        res.status(404).send('Motorist not found'); //* 404: Item not found 
    }
};

//* listar motoristas
const listMotorist = (req, res) => {
    const { name } = req.body;
    let filteredMotorists = motorists;
    if (name) {
        filteredMotorists = filteredMotorists.filter(m => m.name.toLowerCase().includes(name.toLowerCase()));
    }
    res.json(filteredMotorists);
};


//* Filtrar motoristas pelo ID
const filterMotoristByID = (req, res) => {
    const { id } = req.params;
    const motorist = motorists.find(m => m.id == id);
    if (motorist) {
        res.json(motorist);
    } else {
        res.status(404).send('Motorist not found');
    }
};


router.post('/', createMotorist);
router.put('/:id', updateMotorist);
router.delete('/:id', deleteMotorist);
router.get('/', listMotorist);
router.get('/:id', filterMotoristByID);

export default router;