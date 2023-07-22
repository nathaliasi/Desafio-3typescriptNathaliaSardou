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
  // public get _cep(): string{
  //   return this.cep;
  // }
  // public set _cep(value:string){
  //   this.cep = value;
  // }

  // public get _logradouro(): string{
  //   return this.logradouro;
  // }
  // public set _logradouro(value:string){
  //   this.logradouro = value;
  // }

  // public get _numero(): string{
  //   return this.numero;
  // }
  // public set _numero(value:string){
  //   this.numero = value;
  // }

  // public get _complemento(): string{
  //   return this.complemento;
  // }
  // public set _complemento(value:string){
  //   this.complemento = value;
  // }

  // public get _cidade(): string{
  //   return this.cidade;
  // }
  // public set _cidade(value:string){
  //   this.cidade = value;
  // }

  // public get _uf(): string{
  //   return this.uf;
  // }
  // public set _uf(value:string){
  //   this.uf = value;
  // }
}
