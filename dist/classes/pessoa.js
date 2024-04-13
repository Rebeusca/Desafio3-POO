export class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(nome) {
        this.nome = nome;
    }
    get Cpf() {
        return this.cpf;
    }
    set Cpf(cpf) {
        this.cpf = cpf;
    }
    get Telefone() {
        return this.telefone;
    }
    set Telefone(telefone) {
        this.telefone = telefone;
    }
}
