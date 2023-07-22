import { Pessoa } from "./pessoa.js";
import { Endereco } from "./endereco.js";

export class Cliente extends Pessoa {
  vip: boolean = false;
  enderecos!: Endereco[];

  constructor(cpf: string, nome: string, telefone: string) {
    super(cpf, nome, telefone);
    this.vip = false;
    this.enderecos = [];
  }

  adicionarEndereco(endereco: Endereco): void {
    this.enderecos.push(endereco);
  }

  listarEnderecos(): Endereco[] {
    return this.enderecos;
  }

  // public get _vip(): boolean{
  //   return this.vip;
  // }

  // public set _vip(value:boolean){
  //   this.vip = value;
  // }
}

