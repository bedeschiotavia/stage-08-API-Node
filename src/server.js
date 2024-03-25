const express = require ("express")

const app = express()

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params
  
  response.send(`Message ID: ${id}.
  User: ${user}
  `)
})

app.get("/users", (request, response) =>{
  const { page, limit } = request.query

  response.send(`Página: ${page} | Limite: ${limit}`)
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`))