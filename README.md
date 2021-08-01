# Rodar projeto localhost

Apontar a env `MONGODB_URI` para uma connection string valida do mongo (pode ser localhost rodando com container)
Instalar as dependencias com o `yarn`;
Utilizar o comando `yarn dev` para subir o servidor;

## Como usar

Deixei duas rotas funcionais para testes:

```
*GET* http://localhost:5000/api/healthcheck
```

```
*POST* http://localhost:5000/api/users/register

*BODY:*
{
	"email": "teste@teste.com",
	"username": "Teste",
	"password": "123456"
}
```

## Outras informações

Copiei o template [desse repo](https://github.com/app-generator/api-server-nodejs) e fiz algumas modificações.
Ele integrava com o SQLite. Mantive esse código ainda caso queiramos no Hackaton utilizar algo em banco relacional. Porem fiz uma configuração com o `mongoose`, e o servidor que está subindo está conectando apenas com o mongo.

Caso não formos usar o SQLite, posso deletar o código relacionado a ele depois. Por hora ta comentando.

A configuração está bem simples com TypeScript, TypeORM, Mongoose e Joi para validar schema de rotas (acho bem legal). No mais fiquem a vontade para modificarem.