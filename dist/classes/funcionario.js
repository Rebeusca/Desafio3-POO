import { Pessoa } from "./pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, cpf, telefone, cargo, salario) {
        super(nome, cpf, telefone);
        this.cargo = [];
        this.adicionarCargo(cargo);
        this.salario = salario;
    }
    get Salario() {
        return this.salario;
    }
    set Salario(salario) {
        this.salario = salario;
    }
    get Cargo() {
        return this.cargo;
    }
    set Cargo(cargo) {
        this.cargo = cargo;
    }
    adicionarCargo(cargo) {
        this.cargo.push(cargo);
    }
    listarCargos() {
        console.log(('Cargos do funcionário: ').green);
        this.cargo.forEach(cargo => {
            console.log(cargo);
        });
    }
}
