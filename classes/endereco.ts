export class Endereco {
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private uf: string;

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    get Cep(): string {
        return this.cep;
    }

    set Cep(cep: string) {
        this.cep = cep;
    }

    get Logradouro(): string {
        return this.logradouro;
    }

    set Logradouro(logradouro: string) {
        this.logradouro = logradouro;
    }

    get Numero(): string {
        return this.numero;
    }

    set Numero(numero: string) {
        this.numero = numero;
    }

    get Complemento(): string {
        return this.complemento;
    }

    set Complemento(complemento: string) {
        this.complemento = complemento;
    }

    get Cidade(): string {
        return this.cidade;
    }

    set Cidade(cidade: string) {
        this.cidade = cidade;
    }

    get Uf(): string {
        return this.uf;
    }

    set Uf(uf: string) {
        this.uf = uf;
    }
}