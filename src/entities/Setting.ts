import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

import { v4 as uuid } from "uuid"

@Entity('settings')
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    //verificar se o id está preenchido, senão, gerar um id no formato uuid
    //essa verificação é especialmente pra quando estiver trabalhando com atualização de dados, o id já vem preenchido
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { Setting };