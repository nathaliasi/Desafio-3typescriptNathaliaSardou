import { Endereco } from "./endereco.js"; 
import { Cliente } from "./cliente.js";

// console.log(pessoa1.telefone);

let endereco1 = new Endereco("00000-000", "Rua A", "123", "", "Cidade A", "UF");
//  console.log(endereco1);

let cliente1 = new Cliente("123456789", "Nathália Sardou Pereira", "22000-0000");
cliente1.vip = true; // Configura o atributo vip como true
cliente1.adicionarEndereco(endereco1);
console.log(cliente1);




