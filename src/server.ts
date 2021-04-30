import express from "express";

const app = express();

/** MÉTODOS HTTPS
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica. ex: usuário alterar senha
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  });
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));