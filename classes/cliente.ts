import {Pessoa} from "./pessoa.js";
import {Endereco} from "./endereco.js";

import colors from 'colors';

export class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[] = [];

    constructor(nome: string, cpf: string, telefone: string) {
        super(nome, cpf, telefone);
        this.vip = false;
        this.autenticar();
    }

    public get Vip(): boolean {
        return this.vip;
    }
    
    public set Vip(vip: boolean) {
        this.vip = vip;
    }
    
    public get Enderecos(): Endereco[] {
        return this.enderecos;
    }
    
    public set Enderecos(enderecos: Endereco[]) {
        this.enderecos = enderecos;
    }

    public adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
        console.log(("Endereço adicionado ao cliente.").magenta);
    }

    public removerEndereco(endereco: Endereco): void {
        this.enderecos = this.enderecos.filter(enderecoFiltrado => enderecoFiltrado !== endereco);
        console.log(("Endereço removido.").red);
    }

    // listar endereços:
    // deve imprimir no console todos os endereços vinculados àquele cliente.
    public listarEnderecos(): void {
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

// Interface para autenticação de usuários:
interface IUsuario {
    autenticar(): boolean;
}