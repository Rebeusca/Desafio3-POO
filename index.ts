import {Funcionario} from "./classes/funcionario";
import {Cliente} from "./classes/cliente";
import {ContaCorrente} from "./classes/contaCorrente";
import {ContaPoupanca} from "./classes/contaPoupanca";
import {Endereco} from "./classes/endereco";

// Aplicação 1
// Crie dois funcionários do banco, um gerente e um atendente.
const gerente = new Funcionario("João", "Gerente");
const atendente = new Funcionario("Maria", "Atendente");

// Aplicação 2
// Crie um cliente e adicione 3 endereços a ele
// Imprima os endereços deste cliente
const cliente = new Cliente("José", "123.456.789-00");
const endereco1 = new Endereco("12345-678", "Rua A", "123", "Centro", "São Paulo", "SP");
const endereco2 = new Endereco("98765-432", "Avenida X", "456", "Jardim", "São Paulo", "SP");
const endereco3 = new Endereco("54321-876", "Travessa B", "789", "Vila", "São Paulo", "SP");
cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);
console.log("Endereços do cliente:", cliente.listarEnderecos());

// Aplicação 3
// Crie um cliente que possua uma ContaCorrente
// Efetue três depósitos de 100 nessa ContaCorrente
// Efetue um saque de 50 reais nessa ContaCorrente
// Imprima o valor do saldo dessa ContaCorrente
const clienteContaCorrente = new Cliente("Carlos", "987.654.321-00");
const contaCorrente = new ContaCorrente(1, 0, 100.00);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);
console.log("Saldo da Conta Corrente:", contaCorrente.consultarSaldo());

// Aplicação 4
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 1000 nessa ContaCorrente
// Crie um cliente que possua uma ContaPoupanca
// Efetue um depósito de 1000 reais nesta ContaPoupanca
// Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
// Exiba o saldo das duas contas
const clienteContaCorrente2 = new Cliente("Ana", "111.222.333-44");
const contaCorrente2 = new ContaCorrente(2, 0, 1000.00);
contaCorrente2.depositar(1000);

const clienteContaPoupanca = new Cliente("Pedro", "555.666.777-88");
const contaPoupanca = new ContaPoupanca(1, 1500.00);
contaPoupanca.depositar(1000);

contaCorrente2.sacar(500);
contaPoupanca.depositar(500);
console.log("Saldo da Conta Corrente 2:", contaCorrente2.consultarSaldo());
console.log("Saldo da Conta Poupança:", contaPoupanca.consultarSaldo());

// Aplicação 5
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 300 nessa ContaCorrente
// Defina o valor do limite da ContaCorrete para 100 reais
// Crie um cliente que possua uma ContaCorrente
// Efetue um depósito de 100 reais nesta ContaCorrente
const clienteContaCorrente3 = new Cliente("Fernanda", "999.888.777-66");
const contaCorrente3 = new ContaCorrente(3, 0, 0.00);
contaCorrente3.depositar(300);
contaCorrente3.definirLimite(100);

const clienteContaCorrente4 = new Cliente("Mariana", "222.333.444-55");
const contaCorrente4 = new ContaCorrente(4, 0, 30.000);
contaCorrente4.depositar(100);

// Tentativa de transferência
contaCorrente3.sacar(1000);