import { Conta } from "./conta.js";
export class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limite) {
        super(numero, saldo, cliente);
        this.limite = limite;
    }
    get Limite() {
        return this.limite;
    }
    set Limite(limite) {
        this.limite = limite;
    }
    get Saldo() {
        return super.Saldo;
    }
    set Saldo(saldo) {
        super.Saldo = saldo;
    }
    // Método transferir:
    // verifica se a conta de origem possui saldo suficiente para a transferência e
    // realiza a transferência para a conta de destino.
    transferir(contaDestino, valor) {
        if (valor <= this.Saldo + Number(this.Limite)) {
            this.Saldo -= valor;
            contaDestino.Saldo += valor;
            console.log(('Transferência efetuada com sucesso!\n').cyan);
        }
        else {
            console.log(('Saldo insuficiente para transferência.\n').red);
        }
    }
    // Método calcularSaldo:
    // retorna a soma de todos os créditos e subitraído pela soma de
    // todos os débitos. Após, soma o valor do limite. Ao final, retorna o valor.
    calcularSaldoCorrente() {
        return this.Saldo;
    }
    definirLimite(limite) {
        this.Limite = limite;
    }
}
