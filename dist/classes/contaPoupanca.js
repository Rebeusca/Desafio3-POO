import { Conta } from "./conta.js";
export class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo) {
        super(numero, saldo, cliente);
    }
    // Método calcularNovoSaldo:
    // calcula o novo saldo da conta poupança.
    calcularSaldoPoupanca() {
        return this.Saldo;
    }
}
