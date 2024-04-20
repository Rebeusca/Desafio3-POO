import { Cliente } from "./cliente";

class Credito {
    public valor: number;
    public data: Date;

    constructor(private conta: Conta, valor: number, data: Date) {
        this.valor = valor;
        this.data = new Date();
    }

    public executar(valor: number): void {
        if (valor > 0) {
            this.conta.Saldo += valor;
            console.log((`Crédito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`).cyan);
        } else {
            console.log(("O valor do crédito deve ser maior que zero.\n").red);
        }
    }
}

class Debito {
    public valor: number;	
    public data: Date;

    constructor(private conta: Conta, valor: number, data: Date) {
        this.valor = valor;
        this.data = new Date();
    }

    public executar(valor: number): void {
        if (valor > 0) {
            if (valor <= this.conta.Saldo) {
                this.conta.Saldo -= valor;
                console.log((`Débito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`).cyan);
            } else {
                console.log(("Saldo insuficiente.\n").red);
            }
        } else {
            console.log(("O valor do débito deve ser maior que zero.\n").yellow);
        }
    }
}

export abstract class Conta {
    private numero: number;
    private saldo: number;
    public cliente: Cliente;

    constructor(numero: number, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    get Numero(): number {
        return this.numero;
    }

    set Numero(numero: number) {
        this.numero = numero;
    }

    get Saldo(): number {
        return this.saldo;
    }

    set Saldo(saldo: number) {
        this.saldo = saldo;
    }

    // Método sacar:
    // cria um objeto do tipo Debito vinculado à conta que está sofrendo o saque.
    public sacar(valor: number, data: Date): void {
        if (valor <= this.Saldo) {
            const debito = new Debito(this, valor, data);
            debito.executar(valor);
            console.log('Saque efetuado com sucesso!\n');
        } else {
            console.log('Saldo insuficiente para saque.\n');
        }
    }

    // Método depositar:
    // cria um objeto do tipo Credito vinculado à conta que está recebendo o depósito.
    public depositar(valor: number, data: Date): void {
        const credito = new Credito(this, valor, data);
        credito.executar(valor);
        console.log('Depósito efetuado com sucesso!\n');
    }

    public consultarSaldo(): void {
        console.log(`Saldo atual: R$ ${this.Saldo}\n`);
    }
}