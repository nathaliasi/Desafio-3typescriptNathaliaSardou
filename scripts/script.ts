import { Cliente, Endereco} from "./cliente.js";
import { Funcionario, Cargo } from "./funcionario.js";
import { ContaCorrente, ContaPoupanca } from "./conta.js";

// endereços
let endereco1 = new Endereco("28543-987", "Rua A", "123", "ao lado do lado", "Cidade A", "RJ");
let endereco2 = new Endereco("25654-098", "Rua B", "456", "em frente a frente", "Cidade B", "SP");
let endereco3 = new Endereco("23654-098", "Rua C", "789", "atrás de trás", "Cidade C", "BH");
// APLICAÇÃO 1;
console.log("Aplicação 1:");
let cargo1 = new Cargo("Gerente");
let cargo2 = new Cargo("Atendente");
let funcionario1 = new Funcionario("123456789", "Maria Menezes", "2203-1070", 15689.00, cargo1);
let funcionario2 = new Funcionario("189234567", "João Da Silva", "2305-9872", 10689.00, cargo2);
console.log(funcionario1, funcionario2);

// APLICAÇÃO 2;
console.log("Aplicação 2:");
let cliente1 = new Cliente("123456789", "Nathália Sardou Pereira", "22000-0000");
cliente1.vip = true; // Configura o atributo vip como true
cliente1.adicionarEndereco(endereco1);
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);
console.log(cliente1);

// APLICAÇÃO 3;
console.log("Aplicação 3:");
let clienteContaCorrente1 = new Cliente("123456789", "Cliente Conta Corrente 1", "228877-0000");
clienteContaCorrente1.vip = true;
let contaCorrenteCliente1 = new ContaCorrente("11111", 0);
clienteContaCorrente1.contaCorrente = contaCorrenteCliente1;
contaCorrenteCliente1.depositar(100, "2023-07-24");
contaCorrenteCliente1.depositar(100, "2023-07-25");
contaCorrenteCliente1.depositar(100, "2023-07-26");
contaCorrenteCliente1.sacar(50, "2023-07-27");
console.log(clienteContaCorrente1);
console.log("Saldo da conta corrente:", clienteContaCorrente1.calcularSaldo());

// APLICAÇÃO 4;
console.log("Aplicação 4:");
let clienteContaCorrente2 = new Cliente("1314556789", "Cliente Conta Corrente 2", "22697-0000");
clienteContaCorrente2.vip = true;
let contaCorrenteCliente2 = new ContaCorrente("22222", 0);
clienteContaCorrente2.contaCorrente = contaCorrenteCliente2;
contaCorrenteCliente2.depositar(1000, "2023-07-26");

let clienteContaPoupanca1 = new Cliente("1966789010", "Cliente Conta Poupança 1", "55999-0000");
clienteContaPoupanca1.vip = true;
let contaPoupancaCliente1 = new ContaPoupanca("33333");
clienteContaPoupanca1.contaPoupanca = contaPoupancaCliente1;
contaPoupancaCliente1.depositar(1000, "2023-07-26");

contaCorrenteCliente2.transferir(500, "2023-07-26", contaPoupancaCliente1);
console.log("Saldo da conta corrente:", clienteContaCorrente2.calcularSaldo());
console.log("Saldo da conta poupança:", clienteContaPoupanca1.calcularSaldo());

// APLICAÇÃO 1;
console.log("Aplicação 5:");
let clienteContaCorrente3 = new Cliente("9994556789", "Cliente Conta Corrente 3", "88697-0000");
clienteContaCorrente3.vip = true;
let contaCorrenteCliente3 = new ContaCorrente("22222", 100);
clienteContaCorrente3.contaCorrente = contaCorrenteCliente3;
contaCorrenteCliente3.depositar(300, "2023-07-26");
let clienteContaCorrente4 = new Cliente("1314556789", "Cliente Conta Corrente 4", "4697-0000");
clienteContaCorrente4.vip = true;
let contaCorrenteCliente4 = new ContaCorrente("44444", 0);
clienteContaCorrente4.contaCorrente = contaCorrenteCliente4;
contaCorrenteCliente4.depositar(100, "4023-07-26");

contaCorrenteCliente3.transferir(1000, "2023-07-26", contaCorrenteCliente4);


// let contaCorrenteTeste = new Cliente("9994556789", "Cliente Conta Corrente 3", "88697-0000");
// console.log(contaCorrenteTeste.calcularSaldo());






