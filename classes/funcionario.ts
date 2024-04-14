import {Pessoa} from "./pessoa.js";

export class Funcionario extends Pessoa {
    private salario: number;
    private cargo: string[] = [];

    constructor(nome: string, cpf: string, telefone: string, cargo: string, salario: number) {
        super(nome, cpf, telefone);
        this.adicionarCargo(cargo);
        this.salario = salario;
    }

    public get Salario(): number {
        return this.salario;
    }

    public set Salario(salario: number) {
        this.salario = salario;
    }

    public get Cargo(): string[] {
        return this.cargo;
    }

    public set Cargo(cargo: string[]) {
        this.cargo = cargo;
    }

    public adicionarCargo(cargo: string): void {
        this.cargo.push(cargo);
    }

    public listarCargos(): void {
        console.log(('Cargos do funcionário: ').green);
        this.cargo.forEach(cargo => {
            console.log(cargo);
        });
    }
}