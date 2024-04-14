export class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    get Numero() {
        return this.numero;
    }
    set Numero(numero) {
        this.numero = numero;
    }
    get Saldo() {
        return this.saldo;
    }
    set Saldo(saldo) {
        this.saldo = saldo;
    }
    // Método sacar:
    // cria um objeto do tipo Debito vinculado à conta que está sofrendo o saque.
    sacar(valor) {
        if (valor <= this.saldo) {
            const debito = new Debito(this);
            debito.executar(valor);
            console.log('Saque efetuado com sucesso!\n');
        }
        else {
            console.log('Saldo insuficiente para saque.\n');
        }
    }
    // Método depositar:
    // cria um objeto do tipo Credito vinculado à conta que está recebendo o depósito.
    depositar(valor) {
        const credito = new Credito(this);
        credito.executar(valor);
        console.log('Depósito efetuado com sucesso!\n');
    }
    consultarSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo}\n`);
    }
}
// Implementação das operações de crédito e débito(composição):
class Credito {
    constructor(conta) {
        this.conta = conta;
    }
    executar(valor) {
        if (valor > 0) {
            this.conta.Saldo += valor;
            console.log((`Crédito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`).cyan);
        }
        else {
            console.log(("O valor do crédito deve ser maior que zero.\n").red);
        }
    }
}
class Debito {
    constructor(conta) {
        this.conta = conta;
    }
    executar(valor) {
        if (valor > 0) {
            if (valor <= this.conta.Saldo) {
                this.conta.Saldo -= valor;
                console.log((`Débito de R$ ${valor} realizado na conta ${this.conta.Numero}. Novo saldo: R$ ${this.conta.Saldo}`).cyan);
            }
            else {
                console.log(("Saldo insuficiente.\n").red);
            }
        }
        else {
            console.log(("O valor do débito deve ser maior que zero.\n").yellow);
        }
    }
}
