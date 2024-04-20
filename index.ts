import {Funcionario} from "./classes/funcionario.js";
import {Cliente} from "./classes/cliente.js";
import {ContaCorrente} from "./classes/contaCorrente.js";
import {ContaPoupanca} from "./classes/contaPoupanca.js";
import {Endereco} from "./classes/endereco.js";

import colors from 'colors';

// Aplicação 1
// Crie dois funcionários do banco, um gerente e um atendente.
console.log(colors.blue("Aplicação 1:"));
const funcionario1 = new Funcionario("Maria", "123.456.789-00", "123456789", "Gerente", 5000.00);
const funcionario2 = new Funcionario("João", "987.654.321-00", "987654321", "Atendente", 2000.00);
console.log(colors.magenta("Os funcionários ") + funcionario1.Nome + colors.magenta(" e ") + funcionario2.Nome + colors.magenta(" foram adicionados aos funcionários.\n"));

// Aplicação 2
// Crie um cliente e adicione 3 endereços a ele.
// Imprima os endereços do cliente.
console.log(colors.blue("Aplicação 2:"));
const cliente = new Cliente("Ana", "111.222.333-44", "111222333");
const endereco1 = new Endereco("Rua A", "123", "Bairro 1", "Cidade 1", "Estado 1", "11111-111");
const endereco2 = new Endereco("Rua B", "456", "Bairro 2", "Cidade 2", "Estado 2", "22222-222");
const endereco3 = new Endereco("Rua C", "789", "Bairro 3", "Cidade 3", "Estado 3", "33333-333");
cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);

cliente.listarEnderecos();
console.log("\n");

// Aplicação 3
// Crie um cliente que possua uma ContaCorrente
// Efetue três depósitos de 100 nessa ContaCorrente
// Efetue um saque de 50 reais nessa ContaCorrente
// Imprima o valor do saldo dessa ContaCorrente
console.log(colors.blue("Aplicação 3:"));
const clienteContaCorrente = new Cliente("Carlos", "987.654.321-00", "987654321");
const contaCorrente = new ContaCorrente(clienteContaCorrente, 1, 0, 100);
contaCorrente.depositar(200, new Date("2024-03-02"));
contaCorrente.depositar(100, new Date("2024-03-02"));
contaCorrente.depositar(100, new Date("2024-03-02"));
contaCorrente.sacar(50, new Date("2024-03-02"));
console.log(colors.gray("Saldo da Conta Corrente:"), contaCorrente.calcularSaldoCorrente() + "\n");

// Aplicação 4
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 1000 nessa ContaCorrente
// Crie um cliente que possua uma ContaPoupanca
// Efetue um depósito de 1000 reais nesta ContaPoupanca
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
// Exiba o saldo das duas contas
console.log(colors.blue("Aplicação 4:"));
const clienteContaCorrente2 = new Cliente("Ana", "111.222.333-44", "111222333");
const contaCorrente2 = new ContaCorrente(clienteContaCorrente2, 2, 0, 1000.00);
contaCorrente2.depositar(1000, new Date("2024-03-02"));

const clienteContaPoupanca = new Cliente("Pedro", "555.666.777-88", "555666777");
const contaPoupanca = new ContaPoupanca(clienteContaPoupanca, 1, 0.00);
contaPoupanca.depositar(1000, new Date("2024-03-02"));

contaCorrente2.transferir(contaPoupanca, 500);

console.log(colors.gray("Saldo da Conta Corrente:"), contaCorrente2.calcularSaldoCorrente());
console.log(colors.gray("Saldo da Conta Poupança:"), contaPoupanca.calcularSaldoPoupanca() + "\n");

// Aplicação 5
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 300 nessa ContaCorrente
// Defina o valor do limite da ContaCorrete para 100 reais
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 100 nessa ContaCorrente
// Tente efetuar uma transferência de 1000 reais da primeira
// ContaCorrente para a segunda ContaPoupanca
console.log(colors.blue("Aplicação 5:"));
const clienteContaCorrente3 = new Cliente("Maria", "123.456.789-00", "123456789");
const contaCorrente3 = new ContaCorrente(clienteContaCorrente3, 3, 0, 0);
contaCorrente3.depositar(300, new Date("2024-03-02"));
contaCorrente3.definirLimite(100);

const clienteContaCorrente4 = new Cliente("João", "987.654.321-00", "987654321");
const contaCorrente4 = new ContaCorrente(clienteContaCorrente4, 4, 0, 0);
contaCorrente4.depositar(100, new Date("2024-03-02"));

contaCorrente3.transferir(contaCorrente4, 1000);