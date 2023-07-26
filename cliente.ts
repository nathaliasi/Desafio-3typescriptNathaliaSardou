import { Pessoa } from "./pessoa.js";
import { Endereco } from "./endereco.js";
import { Conta, ContaCorrente, ContaPoupanca } from "./conta.js";

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
      return undefined; // Cliente não possui nenhuma conta associada
    }
  }
}

