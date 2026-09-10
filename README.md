💱 Currency Converter

🌐 Acesse o projeto / View live demo

Conversor de moedas com visual neon vaporwave, desenvolvido com HTML, CSS e JavaScript.

A currency converter with a neon vaporwave design, built with HTML, CSS, and JavaScript.

🇧🇷 Português

Sobre o projeto

Este projeto começou como um exercício guiado do DevClub, convertendo reais para dólares com uma cotação fixa.

Depois, decidi ir além das aulas e experimentar novas funcionalidades e uma identidade visual própria. Com apoio de IA para explicações e desenvolvimento, expandi a conversão para outras moedas, conectei a interface às seleções do usuário e criei um tema neon com detalhes em ciano e rosa.

Funcionalidades

Conversão entre cinco moedas:

Real brasileiro — BRL

Dólar americano — USD

Euro — EUR

Libra esterlina — GBP

Dólar australiano — AUD

Seleção independente da moeda de origem e destino.

Atualização dos nomes e das imagens ao trocar as moedas.

Botão para inverter origem e destino.

Recálculo ao mudar a seleção, quando o campo de valor está preenchido.

Conversão pelo botão Convert.

Formatação monetária com Intl.NumberFormat.

Validação de campo vazio, valores inválidos e números negativos.

Layout adaptável para celulares, tablets e computadores.

Ao inverter as moedas, o valor digitado é mantido e a conversão é recalculada.

Identidade visual

O layout inicial da aula ganhou uma personalização inspirada em neon vaporwave:

Fundo escuro com detalhes em ciano e rosa.

Botão principal com gradiente.

Logo neon criada com IA.

Seta em SVG.

Brilho suave nas imagens das moedas e no card principal.

Como o cálculo funciona

As cotações são fixas e ilustrativas, usadas apenas para fins de estudo. O projeto ainda não consulta uma API.

Cada moeda possui um valor de referência em reais. A conversão passa pela moeda brasileira antes de chegar ao destino:

Valor em reais = valor digitado × cotação da origem
Valor convertido = valor em reais ÷ cotação do destino

Os resultados são formatados no padrão brasileiro, com o identificador da moeda correspondente.

Tecnologias

HTML5

CSS3

JavaScript

Google Fonts — Roboto

Git e GitHub

GitHub Pages

O que pratiquei

Estruturação de campos com labels, inputs e selects.

Seleção de elementos com querySelector.

Leitura e alteração de valores com .value.

Manipulação de textos, imagens e atributos.

Eventos click e change.

Funções, parâmetros e condições.

Objetos para organizar cotações.

Conversão e validação de números.

Formatação com Intl.NumberFormat.

Estilização com gradientes, sombras e media queries.

Versionamento com commits, branches e pull requests.

Publicação de uma página com GitHub Pages.

Próximos passos

Conforme eu avançar nos estudos, pretendo:

Buscar cotações atualizadas em uma API.

Exibir a data de atualização das cotações.

Tratar carregamento e falhas de conexão.

Substituir os alertas por mensagens de validação na página.

Melhorar a entrada de valores com vírgula decimal.

Revisar a acessibilidade e testar o layout em mais dispositivos.

Organizar melhor o código e adicionar testes para os cálculos.

A integração com uma API ficou para uma próxima etapa, depois de estudar requisições e JavaScript assíncrono.

Como executar

Acesse a demonstração online ou baixe o repositório.

Para executar localmente, abra index.html no navegador.

Escolha as moedas e digite um valor.

Clique em Convert.

Nesta versão, use ponto para valores decimais, como 10.50.

Créditos

Projeto iniciado a partir de um exercício do DevClub e expandido durante meus estudos, com apoio de IA para explicações, desenvolvimento e criação da logo.

🇺🇸 English

About the project

This project started as a guided DevClub exercise, converting Brazilian reais to US dollars using a fixed exchange rate.

I then decided to go beyond the lessons and explore additional features and a visual identity of my own. With AI assistance for explanations and development, I added more currencies, connected the interface to the user’s selections, and created a neon theme with cyan and pink accents.

Features

Conversion between five currencies:

Brazilian real — BRL

US dollar — USD

Euro — EUR

British pound — GBP

Australian dollar — AUD

Independent source and target currency selection.

Currency names and images that update when selections change.

A button to swap the source and target currencies.

Automatic recalculation when a selection changes and the amount field is filled.

Conversion through the Convert button.

Currency formatting with Intl.NumberFormat.

Validation for empty fields, invalid values, and negative numbers.

Responsive layout for phones, tablets, and desktops.

Swapping currencies keeps the entered amount and recalculates the conversion.

Visual design

The original lesson layout was customized with a neon vaporwave aesthetic:

Dark background with cyan and pink accents.

A gradient primary button.

An AI-generated neon logo.

An SVG arrow.

Subtle glow effects around currency images and the main card.

How the calculation works

Exchange rates are fixed and illustrative, for learning purposes only. The project does not currently use an API.

Each currency has a reference value in Brazilian reais. The calculation converts the source amount to BRL before converting it to the target currency:

Amount in BRL = entered amount × source rate
Converted amount = amount in BRL ÷ target rate

Results use Brazilian number formatting with the appropriate currency identifier.

Technologies

HTML5

CSS3

JavaScript

Google Fonts — Roboto

Git and GitHub

GitHub Pages

What I practiced

Structuring fields with labels, inputs, and selects.

Selecting elements with querySelector.

Reading and updating values with .value.

Updating text, images, and attributes.

Handling click and change events.

Functions, parameters, and conditional statements.

Using objects to organize exchange rates.

Number conversion and validation.

Formatting with Intl.NumberFormat.

Styling with gradients, shadows, and media queries.

Version control with commits, branches, and pull requests.

Publishing a page with GitHub Pages.

Next steps

As I progress through my studies, I plan to:

Retrieve updated exchange rates from an API.

Display when exchange rates were last updated.

Handle loading states and connection errors.

Replace alerts with validation messages on the page.

Improve support for decimal comma input.

Review accessibility and test the layout on more devices.

Improve code organization and add calculation tests.

API integration is planned for a later stage, after I study network requests and asynchronous JavaScript.

How to run

Visit the live demo or download the repository.

To run locally, open index.html in your browser.

Select the currencies and enter an amount.

Click Convert.

In this version, use a period for decimal values, such as 10.50.

Credits

Started from a DevClub exercise and expanded during my studies, with AI assistance for explanations, development, and logo creation.
