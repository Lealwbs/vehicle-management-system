# Vehicle Management System 

## Descrição
API criada para gerenciar a utilização de veículos por motoristas em uma empresa.
Regras de negócio: Um automóvel só pode ser utilizado por um motorista por vez. 
Um motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo tempo.
A persistência de dados é feita em memória, sem um banco de dados.

## Funcionalidades
### Veículos
- **Criar um novo veículo**
- **Atualizar um veículo**
- **Excluir um veículo**
- **Buscar um veículo pelo ID**
- **Listar e filtrar veículos**

### Motoristas
- **Criar um novo motorista**
- **Atualizar um motorista**
- **Excluir um motorista**
- **Buscar um motorista pelo ID**
- **Listar e filtrar motoristas**

### Utilização de Automóveis
- **Criar um registro de utilização**
- **Finalizar uma utilização**
- **Listar todos registros de utilização**

## Como Executar o Projeto

### Pré-requisitos
- Node.js
- NPM

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Lealwbs/vehicle-management-system
   ```

2. **Acessar a pasta**
   ```bash
   cd vehicle-management-system
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor**
   ```bash
   node server.js
   ```
   
5. **A API está na porta 3000**
URL base: http://localhost:3000

## Endpoints
### Veiculos

#### **Criar Veículo:**
- **URL:** /vehicles 
- **Método:** POST
- **Body:**
```json
{
  "plate": "ABC-1234",
  "color": "Vermelho",
  "brand": "Fiat Uno"
}
```

#### **Atualizar Veículo:**
- **URL:** /vehicles/:id
- **Método:** PUT
- **Body:**
```json
{
  "plate": "DEF-5678",
  "color": "Branco",
  "brand": "FordKa"
}
```

#### **Excluir Veículo:**
- **URL:** /vehicles/:id
- **Método:** DELETE

#### **Buscar um veículo pelo ID**
- **URL:** /vehicles/:id
- **Método:** GET

#### **Listar e filtrar veículos**
- **URL:** /vehicles
- **Método:** GET
- **Body:** (Se for buscar por cor e marca)
```json
{
  "color": "Prata",
  "brand": "Honda Civic"
}
```
<hr>

### Motoristas

#### **Criar Motorista:**
- **URL:** /motorists 
- **Método:** POST
- **Body:**
```json
{
 "name": "João"
}
```

#### **Atualizar Motorista:**
- **URL:** /motorists/:id
- **Método:** PUT
- **Body:**
```json
{
  "name": "João Silva"
}
```

#### **Excluir Motorista:**
- **URL:** /motorists/:id
- **Método:** DELETE

#### **Buscar um motorista pelo ID**
- **URL:** /motorists/:id
- **Método:** GET

#### **Listar e filtrar motorista**
- **URL:** /motorists
- **Método:** GET

<hr>

### Utilizar Veículos

#### **Criar registro de utilização**
- **URL:** /usages 
- **Método:** POST
- **Body:**
```json
{
  "dateStart": "21-07-2024",
  "driverID": 1,
  "vehicleID": 1,
  "reason": "Viagem"
}
```

#### **Finalizar registro de utilização**
- **URL:** /usages/:id
- **Método:** PUT
- **Body:**
```json
{
  "dateEnd": "28-07-2024"
}
```

#### **Listar registros de utilização:**
- **URL:** /usages
- **Método:** GET

## Testes

Para garantir que todos os endpoints da API funcionem conforme o esperado, você pode executar uma série de testes. Utilize uma ferramenta de testes de API como Postman ou Thunder Client para realizar as operações que estão localizadas em ```./test/api.test.md```

## Estrutura do Projeto
```
|-- node_modules
|-- services
|   |-- motorists.js
|   |-- usages.js
|   |-- vehicles.js
|-- tests
|   |-- motorists.test.js
|   |-- usages.test.js
|   |-- vehicles.test.js
|-- server.js
|-- package.json
|-- package-lock.json
|-- README.md
```
## Teste Técnico Prático

O arquivo PDF contendo o teste técnico prático que foi realizado está disponível na raiz deste repositório. O PDF inclui todos os requisitos e instruções que foram seguidos para implementar a API.

- **Nome do Arquivo:** teste-tecnico-pratico.pdf
- **Localização:** [Clique aqui para visualizar o PDF](./Backend-TTP.pdf)

Este documento fornece o contexto completo e as especificações do teste, facilitando a compreensão do trabalho realizado.
