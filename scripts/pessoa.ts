interface iUsuario {
  autenticar(): boolean;
}

export abstract class Pessoa implements iUsuario{
  protected cpf!: string;
  protected nome!: string;
  protected telefone!: string;


  constructor(cpf: string, nome: string, telefone: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  autenticar(): boolean {
    return true; 
  }
}