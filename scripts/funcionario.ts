import { Pessoa } from "./pessoa.js";


export class Funcionario extends Pessoa{
  salario: number;
  cargo: Cargo;

  constructor(cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo) {
    super(cpf, nome, telefone);
    this.salario = salario;
    this.cargo = cargo;
  }
}

export class Cargo{
  cargo: string;

  constructor(cargo: string){
    this.cargo = cargo;
  }
}