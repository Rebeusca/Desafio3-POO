import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone) {
        super(nome, cpf, telefone);
        this.enderecos = [];
        this.vip = false;
    }
    get Vip() {
        return this.vip;
    }
    set Vip(vip) {
        this.vip = vip;
    }
    get Enderecos() {
        return this.enderecos;
    }
    set Enderecos(enderecos) {
        this.enderecos = enderecos;
    }
    autenticar() {
        return true;
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    removerEndereco(endereco) {
        this.enderecos = this.enderecos.filter(enderecoFiltrado => enderecoFiltrado !== endereco);
    }
    // listar endereços:
    // deve imprimir no console todos os endereços vinculados àquele cliente.
    listarEnderecos() {
        console.log('Endereços do cliente: ');
        this.enderecos.forEach(endereco => {
            console.log(endereco);
        });
    }
}
