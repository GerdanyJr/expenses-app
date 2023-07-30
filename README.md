# Rastreador de Despesas em React

## Funcionamento
Este é um aplicativo React que permite rastrear despesas. Ele possui os seguintes componentes:

## Expenses
Componente principal que exibe as despesas, permitindo filtrar por ano e mostrando um gráfico com os gastos mensais.

## Recursos

1. Exibir lista de despesas.
2. Filtrar despesas por ano.
3. Gráfico de gastos mensais.
4. ExpenseItem
5. Exibe uma única despesa com título, valor e data.
6. Fornece um menu suspenso para filtrar as despesas por ano.
7. Mostra um gráfico de barras com os gastos mensais para o ano selecionado.

## Uso
+ Ao iniciar o aplicativo, ele exibe as despesas para o ano padrão '2020'.
+ Use o menu suspenso em ExpensesFilter para filtrar despesas por ano.
+ ExpensesChart apresenta um gráfico com o total dos gastos mensais.
+ Cada despesa é representada por ExpenseItem, mostrando título, valor e data.

Como instalar

1. Clone este repositório

```bash
git clone git@github.com:GerdanyJr/expenses-app.git
```

2. Navegue até o diretório do repositório

```bash
git cd expenses-app
```

3. Instale as dependências necessárias

```bash
npm install
```

4. Execute a aplicação

```bash
npm run dev
```

5. Abra o seu navegador e vá para a url localhost:5173