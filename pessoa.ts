export abstract class Pessoa{
   cpf!: string;
   nome!: string;
   telefone!: string;


  constructor(cpf: string, nome: string, telefone: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  // public get _cpf(): string{
  //   return this.cpf;
  // }
  // public set _cpf(value:string){
  //   this.cpf = value;
  // }

  // public get _nome(): string{
  //   return this.nome;
  // }
  // public set _nome(value:string){
  //   this.nome = value;
  // }

  // public get _telefone(): string{
  //   return this.telefone;
  // }
  // public set _telefone(value:string){
  //   this.telefone = value;
  // }
}