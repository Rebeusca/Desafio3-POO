import {Conta} from "./conta";

export class ContaPoupanca extends Conta {
    private juros: number = 0.05;
    
    constructor(numero: number, saldo: number) {
        super(numero, saldo);
    }
    
    // Método calcularNovoSaldo:
    // calcula o novo saldo da conta poupança, aplicando o juros de 5%.
    public calcularNovoSaldo(): void {
        this.Saldo += this.Saldo * this.juros;
        console.log('Novo saldo: R$ ' + this.Saldo);
    }
}