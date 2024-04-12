import {Pessoa} from "./pessoa";

export class Funcionario extends Pessoa {
    private salario: number;
    private cargo: string[] = [];

    constructor(nome: string, cargo: string) {
        super();
        this.adicionarCargo(cargo);
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
        console.log('Cargos do funcionário: ');
        this.cargo.forEach(cargo => {
            console.log(cargo);
        });
    }
}