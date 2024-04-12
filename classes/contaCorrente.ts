import {Conta} from "./conta";

export class ContaCorrente extends Conta {
    private limite: number;

    constructor(numero: number, saldo: number, limite: number) {
        super(numero, saldo);
        this.limite = limite;
    }

    public get Limite(): number {
        return this.limite;
    }

    public set Limite(limite: number) {
        this.limite = limite;
    }

    public get Saldo(): number {
        return super.Saldo;
    }

    public set Saldo(saldo: number) {
        super.Saldo = saldo;
    }

    // Método transferir:
    // verifica se a conta de origem possui saldo suficiente para a transferência e
    // realiza a transferência para a conta de destino.
    public transferir(contaDestino: ContaCorrente, valor: number): void {
        if (valor <= this.Saldo + Number(this.Limite)) {
            this.Saldo -= valor;
            contaDestino.Saldo += valor;
            console.log('Transferência efetuada com sucesso!');
        } else {
            console.log('Saldo insuficiente para transferência.');
        }
    }

    // Método calcularSaldo:
    // retorna a soma de todos os créditos e subitraído pela soma de
    // todos os débitos. Após, soma o valor do limite. Ao final, retorna o valor.
    public calcularSaldo(): number {
        return this.Saldo + Number(this.Limite);
    }

    public definirLimite(limite: number): void {
        this.Limite = limite;
    }
}