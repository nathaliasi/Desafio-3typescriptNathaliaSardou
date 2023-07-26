var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, nome, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
    }
    Pessoa.prototype.autenticar = function () {
        return true;
    };
    return Pessoa;
}());
export { Pessoa };
