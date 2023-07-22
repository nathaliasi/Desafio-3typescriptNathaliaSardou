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
import { Pessoa } from "./pessoa.js";
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.vip = false;
        _this.vip = false;
        _this.enderecos = [];
        return _this;
    }
    Cliente.prototype.adicionarEndereco = function (endereco) {
        this.enderecos.push(endereco);
    };
    Cliente.prototype.listarEnderecos = function () {
        return this.enderecos;
    };
    return Cliente;
}(Pessoa));
export { Cliente };
