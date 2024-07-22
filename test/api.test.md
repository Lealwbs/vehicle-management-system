# 1. Teste para criar um novo veículo
- **Método:** POST
- **URL:** http://localhost:3000/vehicles
- **Body:**
```json
{
  "plate": "ABC-1234",
  "color": "Vermelho",
  "brand": "Fiat Uno"
}
```
- **Resultado Esperado:** Status 201, Corpo da resposta deve incluir "plate": "ABC-1234"

# 2. Teste para criar um novo veículo 2
- **Método:** POST
- **URL:** http://localhost:3000/vehicles
- **Body:**
```json
{
  "plate": "DEF-5678",
  "color": "Azul",
  "brand": "Kombi"
}
```
- **Resultado Esperado:** Status 201, Corpo da resposta deve incluir "plate": "DEF-5678"

# 3. Teste para atualizar um veículo
- **Método:** PUT
- **URL:** http://localhost:3000/vehicles/1
- **Body:**
```json
{
  "plate": "ABC-1234",
  "color": "Branco",
  "brand": "Ford Ka"
}
```
- **Resultado Esperado:** Status 200, Corpo da resposta deve incluir "plate": "ABC-1234"

# 4. Teste para buscar um veículo pelo ID
- **Método:** GET
- **URL:** http://localhost:3000/vehicles/2
- **Resultado Esperado:** Status 200, Corpo da resposta deve incluir "id": 2

# 5. Teste para listar todos os veículos
- **Método:** GET
- **URL:** http://localhost:3000/vehicles
- **Resultado Esperado:** Status 200, Corpo da resposta deve ser um array

# 6. Teste para listar os veículos por marca e cor
- **Método:** GET
- **URL:** http://localhost:3000/vehicles
- **Body:**
```json
{
  "color": "Branco",
  "brand": "Ford Ka"
}
```
- **Resultado Esperado:** Status 200, Corpo da resposta deve ser um array

# 7. Teste para criar um novo motorista
- **Método:** POST
- **URL:** http://localhost:3000/motorists
- **Body:**
```json
{
  "name": "João"
}
```
- **Resultado Esperado:** Status 201, Corpo da resposta deve incluir "name": "João"

# 8. Teste para criar um novo motorista 2
- **Método:** POST
- **URL:** http://localhost:3000/motorists
- **Body:**
```json
{
  "name": "Pedro"
}
```
- **Resultado Esperado:** Status 201, Corpo da resposta deve incluir "name": "João"

# 9. Teste para atualizar um motorista
- **Método:** PUT
- **URL:** http://localhost:3000/motorists/1
- **Body:**
```json
{
  "name": "João Silva"
}
```
- **Resultado Esperado:** Status 200, Corpo da resposta deve incluir "name": "João Silva"



# 10. Teste para buscar um motorista pelo ID
- **Método:** GET
- **URL:** http://localhost:3000/motorists/1
- **Resultado Esperado:** Status 200, Corpo da resposta deve incluir "id": 1

# 11. Teste para listar todos os motoristas
- **Método:** GET
- **URL:** http://localhost:3000/motorists
- **Resultado Esperado:** Status 200, Corpo da resposta deve ser um array

# 12. Teste para listar todos os motoristas filtrando pelo nome
- **Método:** GET
- **URL:** http://localhost:3000/motorists
- **Body:**
```json
{
  "name": "Pedro"
}
```
- **Resultado Esperado:** Status 200, Corpo da resposta deve ser um array

# 13. Teste para criar um registro de utilização
- **Método:** POST
- **URL:** http://localhost:3000/usages
- **Body:**
```json
{
  "dateStart": "21/07/2024",
  "driverID": 1,
  "vehicleID": 1,
  "reason": "Viagem"
}
```
- **Resultado Esperado:** Status 201, Corpo da resposta deve incluir  "dateStart": "21/07/2024"


# 14. Teste para listar todos os registros de utilização
- **Método:** GET
- **URL:** http://localhost:3000/usages
- **Resultado Esperado:** Status 200, Corpo da resposta deve ser um array

# 15. Teste para verificar que um motorista não pode usar mais de um veículo
- **Método:** POST
- **URL:** http://localhost:3000/usages
- **Body:**
```json
{
  "dateStart": "21/07/2024",
  "driverID": 1,
  "vehicleID": 2,
  "reason": "Viagem 2"
}
```
- **Resultado Esperado:** Status 400, Corpo da resposta deve indicar erro de validação

# 16. Teste para verificar que um veículo não pode ser utilizado por mais de um motorista ao mesmo tempo
- **Método:** POST
- **URL:** http://localhost:3000/usages
- **Body:**
```json
{
  "dateStart": "21/07/2024",
  "driverID": 2,
  "vehicleID": 1,
  "reason": "Viagem"
}
```
- **Resultado Esperado:** Status 400, Corpo da resposta deve indicar erro de validação

# 17. Teste para finalizar um registro de utilização
- **Método:** PUT
- **URL:** http://localhost:3000/usages/1
- **Body:**
```json
{
  "dateEnd": "22/07/2024"
}
```
- **Resultado Esperado:** Status 200, Corpo da resposta deve incluir "dateEnd": "22/07/2024"

# 18. Teste para excluir um veículo
- **Método:** DELETE
- **URL:** http://localhost:3000/vehicles/1
- **Resultado Esperado:** Status 204

# 19. Teste para excluir um motorista
- **Método:** DELETE
- **URL:** http://localhost:3000/motorists/2
- **Resultado Esperado:** Status 204