# 💱 Currency Converter

Conversor de moedas desenvolvido com HTML, CSS e JavaScript, evoluindo junto com meus estudos em desenvolvimento web.

A currency converter built with HTML, CSS, and JavaScript, growing alongside my web development studies.

https://brunohsantana-dev.github.io/currency-converter/

---

## 🇧🇷 Português

### Sobre o projeto

Este projeto começou como um exercício guiado do DevClub. A primeira versão convertia reais para dólares usando uma cotação fixa.

Depois, decidi explorar além das aulas e desenvolver novas funcionalidades com apoio de IA, buscando entender cada mudança e praticar os conceitos aprendidos. Essa etapa foi desenvolvida na branch `rogue-version`.

### O que funciona atualmente

- Seleção das moedas de origem e destino.
- Conversão entre real brasileiro, dólar americano, euro, libra esterlina e dólar australiano.
- Atualização dos nomes e das imagens das moedas ao mudar a seleção.
- Formatação monetária com `Intl.NumberFormat`.
- Validação de campo vazio, valores inválidos e números negativos.
- Cálculo da conversão ao clicar em **Convert**.

### Como a conversão funciona

O projeto utiliza **cotações fixas e ilustrativas para fins de estudo**, sem consultar valores pela internet.

Cada moeda tem um valor de referência em reais. O cálculo transforma o valor de origem em reais e depois o divide pela cotação da moeda de destino.

```text
Valor em reais = valor digitado × cotação da origem
Valor convertido = valor em reais ÷ cotação do destino
```

### Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts — Roboto
- Git e GitHub

### O que aprendi até aqui

- Estruturação de formulários com labels, inputs e selects.
- Seleção de elementos com `querySelector`.
- Leitura de valores usando `.value`.
- Manipulação de textos e imagens no HTML.
- Eventos `click` e `change` com `addEventListener`.
- Funções, parâmetros e condições.
- Objetos para organizar as cotações.
- Conversão e validação de números.
- Formatação de moedas com `Intl.NumberFormat`.
- Uso de commits e branches para registrar etapas do desenvolvimento.

### Próximos passos

Conforme eu avançar nos estudos, pretendo:

- Melhorar e testar a responsividade em celulares e tablets.
- Exibir mensagens de validação na própria página.
- Adicionar um botão para inverter as moedas.
- Atualizar a conversão quando a seleção mudar.
- Buscar cotações em uma API.
- Mostrar a data de atualização das cotações.
- Tratar carregamento e falhas de conexão.
- Organizar melhor o código e adicionar testes.

A integração com uma API ficou para uma próxima etapa, depois de estudar requisições e JavaScript assíncrono.

### Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Escolha as moedas, digite um valor e clique em **Convert**.

Nesta versão, use ponto para valores decimais, como `10.50`.

### Créditos

Projeto iniciado a partir de um exercício do DevClub e expandido durante meus estudos, com apoio de IA para explicações e desenvolvimento.

---

## 🇺🇸 English

### About the project

This project started as a guided DevClub exercise. The first version converted Brazilian reais to US dollars using a fixed exchange rate.

I then decided to go beyond the lessons and develop additional features with AI assistance, focusing on understanding each change and practicing what I learned. This stage was developed on the `rogue-version` branch.

### Current features

- Source and target currency selection.
- Conversion between Brazilian real, US dollar, euro, British pound, and Australian dollar.
- Currency names and images that update when the selection changes.
- Currency formatting with `Intl.NumberFormat`.
- Validation for empty fields, invalid values, and negative numbers.
- Conversion when the **Convert** button is clicked.

### How conversion works

The project uses **fixed, illustrative exchange rates for learning purposes**. It does not retrieve live rates from the internet.

Each currency has a reference value in Brazilian reais. The calculation converts the source amount to reais, then divides it by the target currency’s rate.

```text
Amount in BRL = entered amount × source rate
Converted amount = amount in BRL ÷ target rate
```

### Technologies used

- HTML5
- CSS3
- JavaScript
- Google Fonts — Roboto
- Git and GitHub

### What I have learned so far

- Structuring forms with labels, inputs, and selects.
- Selecting elements with `querySelector`.
- Reading values with `.value`.
- Updating text and images in the HTML.
- Handling `click` and `change` events with `addEventListener`.
- Functions, parameters, and conditional statements.
- Using objects to organize exchange rates.
- Number conversion and validation.
- Formatting currencies with `Intl.NumberFormat`.
- Using commits and branches to track development milestones.

### Next steps

As I progress through my studies, I plan to:

- Improve and test responsiveness on phones and tablets.
- Display validation messages directly on the page.
- Add a button to swap currencies.
- Update the conversion when the selection changes.
- Retrieve exchange rates from an API.
- Display when exchange rates were last updated.
- Handle loading states and connection errors.
- Improve code organization and add tests.

API integration is planned for a later stage, after I study network requests and asynchronous JavaScript.

### How to run

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Select the currencies, enter an amount, and click **Convert**.

In this version, use a period for decimal values, such as `10.50`.

### Credits

Started from a DevClub exercise and expanded during my studies, with AI assistance for explanations and development.
