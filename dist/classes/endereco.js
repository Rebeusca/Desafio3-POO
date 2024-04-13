export class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }
    get Cep() {
        return this.cep;
    }
    set Cep(cep) {
        this.cep = cep;
    }
    get Logradouro() {
        return this.logradouro;
    }
    set Logradouro(logradouro) {
        this.logradouro = logradouro;
    }
    get Numero() {
        return this.numero;
    }
    set Numero(numero) {
        this.numero = numero;
    }
    get Complemento() {
        return this.complemento;
    }
    set Complemento(complemento) {
        this.complemento = complemento;
    }
    get Cidade() {
        return this.cidade;
    }
    set Cidade(cidade) {
        this.cidade = cidade;
    }
    get Uf() {
        return this.uf;
    }
    set Uf(uf) {
        this.uf = uf;
    }
}
