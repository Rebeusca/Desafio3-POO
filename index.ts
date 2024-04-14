import {Funcionario} from "./classes/funcionario.js";
import {Cliente} from "./classes/cliente.js";
import {ContaCorrente} from "./classes/contaCorrente.js";
import {ContaPoupanca} from "./classes/contaPoupanca.js";
import {Endereco} from "./classes/endereco.js";

import colors from 'colors';

// Aplicação 1
// Crie dois funcionários do banco, um gerente e um atendente.
const funcionario1 = new Funcionario("Maria", "123.456.789-00", "123456789", "Gerente", 5000.00);
const funcionario2 = new Funcionario("João", "987.654.321-00", "987654321", "Atendente", 2000.00);
console.log(colors.magenta("Os funcionários ") + funcionario1.Nome + colors.magenta(" e ") + funcionario2.Nome + colors.magenta(" foram adicionados aos funcionários.\n"));

// Aplicação 2
// Crie um cliente e adicione 3 endereços a ele.
// Imprima os endereços do cliente.
const cliente = new Cliente("Ana", "111.222.333-44", "111222333");
const endereco1 = new Endereco("Rua A", "123", "Bairro 1", "Cidade 1", "Estado 1", "11111-111");
const endereco2 = new Endereco("Rua B", "456", "Bairro 2", "Cidade 2", "Estado 2", "22222-222");
const endereco3 = new Endereco("Rua C", "789", "Bairro 3", "Cidade 3", "Estado 3", "33333-333");
cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);
console.log("\n");
cliente.listarEnderecos();

// Aplicação 3
// Crie um cliente que possua uma ContaCorrente
// Efetue três depósitos de 100 nessa ContaCorrente
// Efetue um saque de 50 reais nessa ContaCorrente
// Imprima o valor do saldo dessa ContaCorrente
const clienteContaCorrente = new Cliente("Carlos", "987.654.321-00", "987654321");
const contaCorrente = new ContaCorrente(1, 0, 100.00);
contaCorrente.depositar(200);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);
console.log(colors.gray("Saldo da Conta Corrente:"), contaCorrente.calcularSaldoCorrente() + "\n");

// Aplicação 4
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 1000 nessa ContaCorrente
// Crie um cliente que possua uma ContaPoupanca
// Efetue um depósito de 1000 reais nesta ContaPoupanca
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
// Exiba o saldo das duas contas
const clienteContaCorrente2 = new Cliente("Ana", "111.222.333-44", "111222333");
const contaCorrente2 = new ContaCorrente(2, 0, 1000.00);
contaCorrente2.depositar(1000);

const clienteContaPoupanca = new Cliente("Pedro", "555.666.777-88", "555666777");
const contaPoupanca = new ContaPoupanca(1, 0.00);
contaPoupanca.depositar(1000);

contaCorrente2.transferir(contaPoupanca, 500);
console.log(colors.gray("Saldo da Conta Corrente 2:"), contaCorrente2.calcularSaldoCorrente());
console.log(colors.gray("Saldo da Conta Poupança:"), contaPoupanca.calcularSaldoPoupanca()+ "\n");

// Aplicação 5
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 300 nessa ContaCorrente
// Defina o valor do limite da ContaCorrete para 100 reais
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 100 reais nesta ContaCorrente
const clienteContaCorrente3 = new Cliente("Fernanda", "999.888.777-66", "999888777");
const contaCorrente3 = new ContaCorrente(3, 0, 0.00);
contaCorrente3.depositar(300);
contaCorrente3.definirLimite(100);

const clienteContaCorrente4 = new Cliente("Mariana", "222.333.444-55", "222333444");
const contaCorrente4 = new ContaCorrente(4, 0, 30.000);
contaCorrente4.depositar(100);

contaCorrente3.transferir(contaCorrente4, 1000);