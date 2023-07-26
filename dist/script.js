import { Endereco } from "./endereco.js";
import { Cliente } from "./cliente.js";
import { Funcionario, Cargo } from "./funcionario.js";
import { ContaCorrente } from "./conta.js";
// console.log(pessoa1.telefone);
var endereco1 = new Endereco("28543-987", "Rua A", "123", "ao lado do lado", "Cidade A", "RJ");
var endereco2 = new Endereco("25654-098", "Rua B", "456", "em frente a frente", "Cidade B", "SP");
var endereco3 = new Endereco("23654-098", "Rua C", "789", "atrás de trás", "Cidade C", "BH");
var cargo1 = new Cargo("Gerente");
var cargo2 = new Cargo("Atendente");
var funcionario1 = new Funcionario("123456789", "Maria Menezes", "2203-1070", 15689.00, cargo1);
var funcionario2 = new Funcionario("189234567", "João Da Silva", "2305-9872", 10689.00, cargo2);
console.log(funcionario1, funcionario2);
var cliente1 = new Cliente("123456789", "Nathália Sardou Pereira", "22000-0000");
cliente1.vip = true; // Configura o atributo vip como true
cliente1.adicionarEndereco(endereco1);
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);
console.log(cliente1);
var clienteContaCorrente1 = new Cliente("123456789", "Cliente Conta Corrente", "228877-0000");
clienteContaCorrente1.vip = true;
var contaCorrenteCliente1 = new ContaCorrente("11111", 0);
clienteContaCorrente1.contaCorrente = contaCorrenteCliente1;
contaCorrenteCliente1.depositar(100, "2023-07-24");
contaCorrenteCliente1.depositar(100, "2023-07-25");
contaCorrenteCliente1.depositar(100, "2023-07-26");
contaCorrenteCliente1.sacar(50, "2023-07-27");
console.log(clienteContaCorrente1);
console.log("Saldo da conta corrente:", clienteContaCorrente1.calcularSaldo());
// let minhaContaCorrente = new ContaCorrente("12345", 1000);
// minhaContaCorrente.depositar(500, "2023-07-24");
// console.log("Saldo da conta corrente:", minhaContaCorrente.calcularSaldo());
// let minhaContaPoupanca = new ContaPoupanca("67890");
// minhaContaPoupanca.depositar(1000, "2023-07-24");
// console.log("Saldo da conta poupança:", minhaContaPoupanca.calcularSaldo()); // 1000
// minhaContaCorrente.transferir(300, "2023-07-25", minhaContaPoupanca);
// console.log("Novo saldo da conta corrente:", minhaContaCorrente.calcularSaldo()); // 200
// console.log("Novo saldo da conta poupança:", minhaContaPoupanca.calcularSaldo()); // 1300
