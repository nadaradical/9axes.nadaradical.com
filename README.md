# 9Eixos (PT) — Teste de Coordenadas Políticas

O **9Eixos** é um teste político em português que estima o teu posicionamento ideológico em **nove eixos**.  
O objetivo é simples: responder a um conjunto de afirmações e obter um retrato visual das tuas tendências políticas.

🔗 **Site oficial:** [https://9eixos.org](https://9eixos.org)

---

## Sobre o projeto

Este repositório contém a versão web estática do 9Eixos, incluindo:
- páginas do questionário;
- cálculo dos resultados;
- visualização gráfica por eixo;
- perfis de comparação política.

É um projeto leve (HTML, CSS e JavaScript), sem dependências de build obrigatórias para execução básica.

---

## Os 9 eixos ideológicos

Cada resultado é distribuído entre dois polos opostos:

1. **Separatismo** ↔ **Unitarismo**
2. **Anarquismo** ↔ **Autoritarismo**
3. **Globalismo** ↔ **Isolacionismo**
4. **Militarismo** ↔ **Pacifismo**
5. **Controlo** ↔ **Liberdade**
6. **Intervencionismo** ↔ **Livre Mercado**
7. **Secularismo** ↔ **Religioso**
8. **Progressismo** ↔ **Conservadorismo**
9. **Monoculturalismo** ↔ **Multiculturalismo**

---

## Como usar

### Online

A forma mais simples é usar a versão publicada:  
👉 [https://9eixos.org](https://9eixos.org)

### Localmente

Como o projeto é estático, podes abrir diretamente o `index.html` no browser.  
Se preferires correr com servidor local:

```bash
python3 -m http.server 8080
```

Depois abre: `http://localhost:8080`

---

## Estrutura principal

- `index.html` — página inicial
- `quiz.html` / `fullquiz.html` — versões do questionário
- `results.html` — página de resultados
- `questions.js` — perguntas e pesos
- `ideologies.js` / `parties.js` — mapeamentos ideológicos e comparações
- `style.css` — estilos globais

---

## Hospedagem e domínio

O site está hospedado como página estática e publicado no domínio personalizado:

- **Domínio:** `9eixos.org`
- **URL pública:** `https://9eixos.org`
- **Configuração de domínio:** ficheiro `CNAME`

---

## Licença

Este projeto é distribuído sob a licença **MIT**, herdada do projeto original **8values**.

Para mais detalhes, consulta o ficheiro [LICENSE](LICENSE).

---

## Créditos

- Baseado no projeto original **8values**.
- Adaptação e localização para português no contexto do 9eixos.

