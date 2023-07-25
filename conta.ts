class Debito {
  valor: number;
  data: string;

  constructor(valor: number, data: string) {
    this.valor = valor;
    this.data = data;
  }
}

class Credito {
  valor: number;
  data: string;

  constructor(valor: number, data: string) {
    this.valor = valor;
    this.data = data;
  }
}

export class Conta {
  numero: string;
  saldo: number;
  debitos: Debito[];
  creditos: Credito[];

  constructor(numero: string) {
    this.numero = numero;
    this.saldo = 0;
    this.debitos = [];
    this.creditos = [];
  }
  
  depositar(valor: number, data: string) {
    const credito = new Credito(valor, data);
    this.creditos.push(credito);
    this.saldo += valor;
  }

  sacar(valor: number, data: string) {
    if (this.saldo >= valor) {
      const debito = new Debito(valor, data);
      this.debitos.push(debito);
      this.saldo -= valor;
      return true;
    } else {
      return false; // Não há saldo suficiente para sacar o valor desejado
    }
  }
}

export class ContaCorrente extends Conta {
  limite: number;

  constructor(numero: string, limite: number) {
    super(numero);
    this.limite = limite;
  }

  transferir(valor: number, data: string, contaDestino: Conta) {
    const saldoTotal = this.saldo + this.limite;
    if (saldoTotal >= valor) {
      if (this.sacar(valor, data)) {
        contaDestino.depositar(valor, data);
        return true;
      }
    }
    return false; // Transferência não realizada
  }

  calcularSaldo(): number {
    return this.saldo + this.limite;
  }
}

export class ContaPoupanca extends Conta {
  calcularSaldo(): number {
    return this.saldo;
  }
}
