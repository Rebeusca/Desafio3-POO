export class Endereco {
    private cep: String;
    private logradouro: String;
    private numero: String;
    private complemento: String;
    private cidade: String;
    private uf: String;

    constructor(cep: String, logradouro: String, numero: String, complemento: String, cidade: String, uf: String) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    get Cep(): String {
        return this.cep;
    }

    set Cep(cep: String) {
        this.cep = cep;
    }

    get Logradouro(): String {
        return this.logradouro;
    }

    set Logradouro(logradouro: String) {
        this.logradouro = logradouro;
    }

    get Numero(): String {
        return this.numero;
    }

    set Numero(numero: String) {
        this.numero = numero;
    }

    get Complemento(): String {
        return this.complemento;
    }

    set Complemento(complemento: String) {
        this.complemento = complemento;
    }

    get Cidade(): String {
        return this.cidade;
    }

    set Cidade(cidade: String) {
        this.cidade = cidade;
    }

    get Uf(): String {
        return this.uf;
    }

    set Uf(uf: String) {
        this.uf = uf;
    }
}