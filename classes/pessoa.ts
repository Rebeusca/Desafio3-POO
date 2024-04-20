export abstract class Pessoa {
    private cpf: string;
    private nome: string;
    private telefone: string;

    constructor(nome: string, cpf: string, telefone: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    public get Nome(): string {
        return this.nome;
    }

    public set Nome(nome: string) {
        this.nome = nome;
    }  

    public get Cpf(): string {
        return this.cpf;
    }

    public set Cpf(cpf: string) {
        this.cpf = cpf;
    }

    public get Telefone(): string {
        return this.telefone;
    }

    public set Telefone(telefone: string) {
        this.telefone = telefone;
    }
}