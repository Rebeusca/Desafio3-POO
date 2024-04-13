export abstract class Pessoa {
    private cpf: String;
    private nome: String;
    private telefone: String;

    constructor(nome: String, cpf: String, telefone: String) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    public get Nome(): String {
        return this.nome;
    }

    public set Nome(nome: String) {
        this.nome = nome;
    }  

    public get Cpf(): String {
        return this.cpf;
    }

    public set Cpf(cpf: String) {
        this.cpf = cpf;
    }

    public get Telefone(): String {
        return this.telefone;
    }

    public set Telefone(telefone: String) {
        this.telefone = telefone;
    }
}