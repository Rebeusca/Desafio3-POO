import { Conta } from "./conta.js";
import { Cliente } from "./cliente.js";

export class ContaPoupanca extends Conta {
    
    constructor(cliente: Cliente, numero: number, saldo: number) {
        super(numero, saldo, cliente);
    }
    
    // Método calcularNovoSaldo:
    // calcula o novo saldo da conta poupança.
    public calcularSaldoPoupanca(): number {
        return this.Saldo;
    }
}