export abstract class Pessoa {
    private cpf: String;
    private nome: String;
    private telefone: String;

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