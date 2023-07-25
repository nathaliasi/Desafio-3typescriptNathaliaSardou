import { Endereco } from "./endereco.js"; 
import { Cliente } from "./cliente.js";
import { Funcionario, Cargo } from "./funcionario.js";
import { ContaCorrente, ContaPoupanca } from "./conta.js";


// console.log(pessoa1.telefone);

let endereco1 = new Endereco("28543-987", "Rua A", "123", "ao lado do lado", "Cidade A", "RJ");
let endereco2 = new Endereco("25654-098", "Rua B", "456", "em frente a frente", "Cidade B", "SP");
let endereco3 = new Endereco("23654-098", "Rua C", "789", "atrás de trás", "Cidade C", "BH");

let cargo1 = new Cargo("Gerente");
let cargo2 = new Cargo("Atendente");
let funcionario1 = new Funcionario("123456789", "Maria Menezes", "2203-1070", 15689.00, cargo1);
let funcionario2 = new Funcionario("189234567", "João Da Silva", "2305-9872", 10689.00, cargo2);
console.log(funcionario1, funcionario2);



let cliente1 = new Cliente("123456789", "Nathália Sardou Pereira", "22000-0000");
cliente1.vip = true; // Configura o atributo vip como true
cliente1.adicionarEndereco(endereco1);
cliente1.adicionarEndereco(endereco2);
cliente1.adicionarEndereco(endereco3);
console.log(cliente1);




// let minhaContaCorrente = new ContaCorrente("12345", 1000);
// minhaContaCorrente.depositar(500, "2023-07-24");
// console.log("Saldo da conta corrente:", minhaContaCorrente.calcularSaldo());
// let minhaContaPoupanca = new ContaPoupanca("67890");
// minhaContaPoupanca.depositar(1000, "2023-07-24");
// console.log("Saldo da conta poupança:", minhaContaPoupanca.calcularSaldo()); // 1000
// minhaContaCorrente.transferir(300, "2023-07-25", minhaContaPoupanca);
// console.log("Novo saldo da conta corrente:", minhaContaCorrente.calcularSaldo()); // 200
// console.log("Novo saldo da conta poupança:", minhaContaPoupanca.calcularSaldo()); // 1300





