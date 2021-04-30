import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/** MÉTODOS HTTPs
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica. ex: usuário alterar senha
 */

/** 
 * Tipos de parâmetros
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e Buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => quando passamos objetos dentro das nossas requisições 
 * 
*/
routes.post("/settings", async (request, response) => {
  const { chat, username } = request.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  //criando um objeto(settings) dentro de uma tabela utilizando typeorm
  //primeiro criar uma representação desse objeto 
  //segundo de fato salvar esse objeto
  const settings = settingsRepository.create({
    chat,
    username
  })

  await settingsRepository.save(settings);

  return response.json(settings);
})

export { routes };