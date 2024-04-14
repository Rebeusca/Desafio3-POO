
# Desafio 3 - Aplicação com POO

Repositório destinado ao desafio 3 da residência em desenvolvimento de software da iUUL, que consiste em criar uma aplicação com POO.


## Tecnologias usadas
<div style="display: inline_block">
    <img align="center" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    .
    <img align="center" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
</div>

## Requisitos
1. Criação das Classes Abstratas Conta e Pessoa..
2. Criação da interface IUsuario que deve retornar apenas true.
3. Criação das Classes Concretas: todas as demais classes. Algumas delas possuem relacionamento de herança com as classes abstratas existentes no modelo.
-  Método listarEnderecos() da classe Cliente: o método deve imprimir no console todos os endereços armazenados para um cliente.
- Método depositar() da classe Conta: cria um objeto do tipo Credito vinculado à conta que está recebendo o depósito.
- Método sacar() da classe Conta: cria um objeto do tipo Debito vinculado à conta que está sofrendo o saque. (conta não pode ter saldo negativo além do seu limite).
- Método transferir() da classe ContaCorrente: retira dinheiro da conta corrente de origem e envia para uma conta destino (a conta não pode ter saldo negativo além do seu limite).
- Método calcularSaldo() da ContaPoupanca: retorna a soma de todos os créditos e subitraído pela soma de todos os débitos.
- Método calcularSaldo() da ContaCorrente: retorna a soma de todos os créditos e subitraído pela soma de todos os débitos. Após, soma o valor do limite. Ao final, retorna o valor.
4. Criação dos Relacionamento entre Classes.

## Rodando os testes

Para compilar use o seguinte comando no terminal:

```bash
  npm run build
```

Em seguida, para rodar os as aplicações do index, rode:

```bash
  npm run start
```


## Autores

- [Rebeca Amorim](https://www.github.com/Rebeusca)

