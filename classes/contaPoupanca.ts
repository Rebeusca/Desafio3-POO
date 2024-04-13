import {Conta} from "./conta.js";

export class ContaPoupanca extends Conta {
    
    constructor(numero: number, saldo: number) {
        super(numero, saldo);
    }
    
    // Método calcularNovoSaldo:
    // calcula o novo saldo da conta poupança.
    public calcularSaldoPoupanca(): number {
        return this.Saldo;
    }
}