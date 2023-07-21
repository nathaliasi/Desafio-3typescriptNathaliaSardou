var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "_cpf", {
        // constructor(cpf: string, nome: string, telefone: string) {
        //   this.cpf = cpf;
        //   this.nome = nome;
        //   this.telefone = telefone;
        // }
        get: function () {
            return this.cpf;
        },
        set: function (value) {
            this.cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "_nome", {
        get: function () {
            return this.nome;
        },
        set: function (value) {
            this.nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "_telefone", {
        get: function () {
            return this.telefone;
        },
        set: function (value) {
            this.telefone = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
export { Pessoa };
