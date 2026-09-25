# 💱 Currency Converter

A responsive currency converter built with vanilla JavaScript, featuring multiple currencies, input validation, currency swapping and formatted results.

🔗 **Live Demo:**  
https://brunohsantana-dev.github.io/currency-converter/

---

## About the project

This project started as a guided JavaScript exercise and was expanded into a more complete currency conversion interface.

The original version converted Brazilian reais to US dollars using a fixed exchange rate. I extended it to support multiple currencies, independent source and target selections, currency swapping, validation and responsive behavior.

The visual identity was also redesigned with a neon / vaporwave-inspired interface.

> Exchange rates in this version are fixed and used for learning purposes. The application does not currently connect to a live currency API.

---

## ✨ Key features

- Conversion between BRL, USD, EUR, GBP and AUD
- Independent source and target currency selection
- Currency swap button
- Automatic recalculation when selections change
- Dynamic currency names and images
- Input validation
- Currency formatting with `Intl.NumberFormat`
- Responsive layout for desktop and mobile

---

## ⚙️ How it works

Each currency has a fixed reference value based on Brazilian reais.

The application first converts the entered amount to BRL and then converts that value into the selected target currency.

**Calculation:**

`Amount in BRL = entered amount × source rate`

`Converted amount = amount in BRL ÷ target rate`

The result is then formatted with `Intl.NumberFormat` using the appropriate currency identifier.

---

## 🧠 What I practiced

- DOM manipulation
- Event handling
- Functions and parameters
- Conditional logic
- Objects
- Form inputs and selects
- Input validation
- Number conversion
- `Intl.NumberFormat`
- Dynamic content updates
- Responsive CSS
- Git and GitHub workflow
- Deployment with GitHub Pages

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

No JavaScript frameworks or libraries were used.

---

## 🎨 Design

The original exercise interface was redesigned with a neon vaporwave-inspired visual style using:

- Dark backgrounds
- Cyan and magenta accents
- Gradient elements
- Glow effects
- Custom currency visuals

The goal was to take a simple JavaScript exercise and turn it into a more complete and visually consistent web experience.

---

## 📌 Project scope

This is a learning project built during my JavaScript studies.

The current version intentionally uses fixed exchange rates. A future version may explore live exchange-rate data after I progress further into APIs and asynchronous JavaScript.

AI tools were used as support for explanations, development guidance and visual asset creation while I built and expanded the project.

---

<details>
<summary><strong>🇧🇷 Sobre o projeto em português</strong></summary>

<br>

**Currency Converter** é um conversor de moedas desenvolvido durante meus estudos de JavaScript.

O projeto começou como um exercício guiado de conversão entre real e dólar e depois foi expandido para suportar cinco moedas:

- Real brasileiro — BRL
- Dólar americano — USD
- Euro — EUR
- Libra esterlina — GBP
- Dólar australiano — AUD

Também foram adicionados seleção independente das moedas, inversão entre origem e destino, validações, atualização dinâmica da interface e layout responsivo.

As cotações utilizadas nesta versão são fixas e ilustrativas. O projeto ainda não utiliza uma API de câmbio em tempo real.

O projeto foi desenvolvido com HTML, CSS e JavaScript puro.

</details>

---

## 👨‍💻 Author

**Bruno Santana**

[LinkedIn](https://www.linkedin.com/in/brunohsantana) · [GitHub](https://github.com/brunohsantana-dev)
