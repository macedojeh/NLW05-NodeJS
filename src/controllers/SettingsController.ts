import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {

  async create(request: Request, response: Response) {
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
  }
}

export { SettingsController }
