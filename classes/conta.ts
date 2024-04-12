export abstract class Conta {
    private numero: number;
    private saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
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
    public sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log('Saque efetuado com sucesso!');
            const debito = new Debito(this);
            debito.executar(valor);
        } else {
            console.log('Saldo insuficiente para saque.');
        }
    }

    // Método depositar:
    // cria um objeto do tipo Credito vinculado à conta que está recebendo o depósito.
    public depositar(valor: number): void {
        this.saldo += valor;
        console.log('Depósito efetuado com sucesso!');
        const credito = new Credito(this);
        credito.executar(valor);
    }

    public consultarSaldo(): void {
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }
}

// Interface para operações de crédito e débito:
interface Operacao {
    executar(valor: number): void;
}

// Implementação das operações de crédito e débito(composição):
class Credito implements Operacao {
    private conta: Conta;

    constructor(conta: Conta) {
        this.conta = conta;
    }

    public executar(valor: number): void {
        if (valor > 0) {
            this.conta.Saldo += valor;
            console.log(`Crédito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`);
        } else {
            console.log("O valor do crédito deve ser maior que zero.");
        }
    }
}

class Debito implements Operacao {
    private conta: Conta;

    constructor(conta: Conta) {
        this.conta = conta;
    }

    public executar(valor: number): void {
        if (valor > 0) {
            if (valor <= this.conta.Saldo) {
                this.conta.Saldo -= valor;
                console.log(`Débito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`);
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("O valor do débito deve ser maior que zero.");
        }
    }
}