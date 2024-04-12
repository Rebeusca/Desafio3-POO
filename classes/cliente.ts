import {Pessoa} from "./pessoa";
import {Endereco} from "./endereco";

export class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[] = [];

    constructor(nome: string, cpf: string) {
        super();
        this.Nome = nome;
        this.Cpf = cpf;

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

    autenticar(): boolean {
        console.log('Autenticando cliente...');
        return true;
    }

    public adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    public removerEndereco(endereco: Endereco): void {
        this.enderecos = this.enderecos.filter(enderecoFiltrado => enderecoFiltrado !== endereco);
    }

    // listar endereços:
    // deve imprimir no console todos os endereços vinculados àquele cliente.
    public listarEnderecos(): void {
        console.log('Endereços do cliente: ');
        this.enderecos.forEach(endereco => {
            console.log(endereco);
        });
    }  
}

// Interface para autenticação de usuários:
interface IUsuario {
    autenticar(): boolean;
}