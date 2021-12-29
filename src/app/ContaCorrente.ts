import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia: number;
    _cliente: Cliente;
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }
    constructor(agencia: number, cliente: Cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor: number) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor: number) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
    tranferir(valor: number, conta: ContaCorrente) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
