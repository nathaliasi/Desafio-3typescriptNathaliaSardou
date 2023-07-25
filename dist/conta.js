var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    return Debito;
}());
var Credito = /** @class */ (function () {
    function Credito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    return Credito;
}());
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this.numero = numero;
        this.saldo = 0;
        this.debitos = [];
        this.creditos = [];
    }
    Conta.prototype.depositar = function (valor, data) {
        var credito = new Credito(valor, data);
        this.creditos.push(credito);
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor, data) {
        if (this.saldo >= valor) {
            var debito = new Debito(valor, data);
            this.debitos.push(debito);
            this.saldo -= valor;
            return true;
        }
        else {
            return false; // Não há saldo suficiente para sacar o valor desejado
        }
    };
    return Conta;
}());
export { Conta };
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, limite) {
        var _this = _super.call(this, numero) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.transferir = function (valor, data, contaDestino) {
        var saldoTotal = this.saldo + this.limite;
        if (saldoTotal >= valor) {
            if (this.sacar(valor, data)) {
                contaDestino.depositar(valor, data);
                return true;
            }
        }
        return false; // Transferência não realizada
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        return this.saldo + this.limite;
    };
    return ContaCorrente;
}(Conta));
export { ContaCorrente };
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.calcularSaldo = function () {
        return this.saldo;
    };
    return ContaPoupanca;
}(Conta));
export { ContaPoupanca };
