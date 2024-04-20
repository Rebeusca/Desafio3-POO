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
    get Enderecos() {
        return this.enderecos.slice();
    }
    set Enderecos(enderecos) {
        this.enderecos = enderecos;
    }
    adicionarEndereco(endereco) {
        const arrayEnderecos = this.Enderecos;
        arrayEnderecos.push(endereco);
        this.Enderecos = arrayEnderecos;
        console.log(("Endereço adicionado ao cliente.").magenta);
    }
    removerEndereco(endereco) {
        if (this.Enderecos.length > 1) {
            const arrayEnderecos = this.Enderecos.filter(enderecoFiltrado => enderecoFiltrado !== endereco);
            console.log(("Endereço removido.").red);
        }
        else {
            console.log(("O cliente deve possuir ao menos um endereço.").red);
        }
    }
    // listar endereços:
    // deve imprimir no console todos os endereços vinculados àquele cliente.
    listarEnderecos() {
        console.log(('Endereços do cliente: ').magenta);
        this.Enderecos.forEach(endereco => {
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
