import { Conta } from "./conta.js";
export class ContaPoupanca extends Conta {
    constructor(numero, saldo) {
        super(numero, saldo);
    }
    // Método calcularNovoSaldo:
    // calcula o novo saldo da conta poupança.
    calcularSaldoPoupanca() {
        return this.Saldo;
    }
}
