API Reservas de casa

Tecnologias:
- NodeJs
- MongoDB


Objetivo:
- Registro de Email
- Registro de Casa
- Update de Casas
- Delete de Casas
- Reserva de Casas


Rotas Get:
  Existem 3 tipos de get dentro do projeto:
- Get /House:

Isso é uma forma de encontrar casas desejada, sendo preciso passar no parametro query o status sendo ele true para casas que estão livres e false para casas ja reservadas.
- Get /show:

Será feito uma busca de todas as casas registradas pelo user_id do usuario, onde esse user_id é pego pelo req.header.
- Get /reserva:

Será feito uma busca de todas as casas reservadas pelo user_id do usuario, onde esse user_id é pego pelo req.header.

Routas Post:
- Post /session:

Será enviado pelo req.body a informação do email, que será registrado no banco de dados para login utilizando o user_id, existindo um validação no processo sendo ela se o email ja esta sendo utilizado por algum outro user_id.
- Post /house:

Sera enviado pelo req.body as seguintes informações: "house, valor e status" e tambem será pego do req.header o seu user_id, e nisso existirá validações, sobre as entrega dos valores e a existencia do user_id e logo após sera criado o Registro da Casa.
   
  
  
