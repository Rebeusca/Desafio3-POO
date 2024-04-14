import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, telefone) {
        super(nome, cpf, telefone);
        this.enderecos = [];
        this.vip = false;
        this.autenticar();
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
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
        console.log(("Endereço adicionado ao cliente.").magenta);
    }
    removerEndereco(endereco) {
        this.enderecos = this.enderecos.filter(enderecoFiltrado => enderecoFiltrado !== endereco);
        console.log(("Endereço removido.").red);
    }
    // listar endereços:
    // deve imprimir no console todos os endereços vinculados àquele cliente.
    listarEnderecos() {
        console.log(('Endereços do cliente: ').magenta);
        this.enderecos.forEach(endereco => {
            console.log(endereco);
        });
    }
    // Método autenticar:
    // verifica se o cliente foi autenticado com sucesso.
    autenticar() {
        console.log("Cliente autenticado com sucesso.".green);
        return true;
    }
}
