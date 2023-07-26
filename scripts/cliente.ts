import { Pessoa } from "./pessoa.js";
import { ContaCorrente, ContaPoupanca } from "./conta.js";

export class Cliente extends Pessoa {
  vip: boolean = false;
  enderecos!: Endereco[];
  contaCorrente?:ContaCorrente;
  contaPoupanca?:ContaPoupanca;

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

  calcularSaldo(): number | undefined {
    if (this.contaCorrente) {
      return this.contaCorrente.calcularSaldo();
    } else if (this.contaPoupanca) {
      return this.contaPoupanca.calcularSaldo();
    } else { 
      console.log("Cliente não possui conta");
    }
  }
}
export class Endereco {
  cep!: string;
  logradouro!: string;
  numero!: string;
  complemento!: string;
  cidade!: string;
  uf!: string;

  constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.uf = uf;
  }
}
