# 🚗 Loja de Veículos

Sistema web para exibição e venda de veículos (carros e motos) com integração a API REST.

## 📋 Sobre o Projeto

Este projeto é uma loja virtual de veículos que exibe carros, motos e informações sobre vendedores. Os dados são carregados dinamicamente de uma API REST, proporcionando uma experiência moderna e responsiva.

### ✨ Funcionalidades

- 🚗 **Catálogo de Carros**: Exibição de carros disponíveis com foto, marca, modelo, ano, cor e preço
- 🏍️ **Catálogo de Motos**: Exibição de motos disponíveis com as mesmas informações
- 👥 **Equipe de Vendedores**: Apresentação dos vendedores com foto, nome, cargo e contato
- 📱 **Design Responsivo**: Adaptável para desktop, tablet e mobile
- 🎨 **Interface Moderna**: Design limpo com paleta azul marinho profissional
- ⚡ **Carregamento Dinâmico**: Dados carregados em tempo real da API

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização com design responsivo
- **JavaScript (Vanilla)**: Manipulação do DOM e requisições à API
- **Fetch API**: Comunicação com o backend

## 📁 Estrutura do Projeto

```
loja-veiculos/
│
├── index.html          # Estrutura HTML da página
├── style.css           # Estilos e design visual
├── script.js           # Lógica JavaScript e integração com API
└── README.md           # Documentação do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- API REST rodando em `http://10.92.199.53:3000`

### Passos para Execução

1. **Clone ou baixe o projeto**
   ```bash
   git clone <url-do-repositorio>
   cd loja-veiculos
   ```

2. **Verifique se a API está rodando**
   - Acesse `http://10.92.199.53:3000/carros` no navegador
   - Deve retornar um JSON com dados dos carros

3. **Abra o arquivo HTML**
   - Navegue até a pasta do projeto
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local (Live Server, http-server, etc.)

4. **Pronto!** 🎉
   - A página deve carregar automaticamente os dados da API

## 🔌 API - Endpoints Necessários

A aplicação espera os seguintes endpoints da API:

### GET `/carros`
Retorna lista de carros disponíveis

**Resposta esperada:**
```json
[
  {
    "marca": "Honda",
    "modelo": "Civic",
    "ano": 2023,
    "cor": "Preto",
    "preco": 120000,
    "imagem": "url_da_imagem.jpg"
  }
]
```

### GET `/motos`
Retorna lista de motos disponíveis

**Resposta esperada:**
```json
[
  {
    "marca": "Yamaha",
    "modelo": "MT-07",
    "ano": 2024,
    "cor": "Azul",
    "preco": 45000,
    "imagem": "url_da_imagem.jpg"
  }
]
```

### GET `/vendedores`
Retorna lista de vendedores

**Resposta esperada:**
```json
[
  {
    "nome": "João Silva",
    "cargo": "Vendedor Sênior",
    "email": "joao@loja.com",
    "imagem": "url_da_imagem.jpg"
  }
]
```

## ⚙️ Configuração

### Alterar URL da API

Se a API estiver em outro endereço, edite o arquivo `script.js`:

```javascript
// Linha 7 do script.js
const API_URL = 'http://SEU_SERVIDOR:PORTA';
```

### Personalizar Cores

Para alterar a paleta de cores, edite as variáveis no `style.css`:

```css
/* Cores principais do projeto */
#1a3a52  /* Azul marinho escuro */
#4a90e2  /* Azul claro */
#f0f4f8  /* Fundo cinza azulado */
```

## 🎨 Design

### Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Azul Marinho Escuro | `#1a3a52` | Header, títulos, botões |
| Azul Claro | `#4a90e2` | Destaques, preços, hover |
| Branco | `#ffffff` | Fundo das seções |
| Cinza Azulado | `#5a6c7d` | Textos secundários |
| Cinza Claro | `#f0f4f8` | Fundo geral da página |

### Layout Responsivo

- **Desktop** (>1024px): Grid de 4 colunas
- **Tablet** (768px - 1024px): Grid de 2-3 colunas
- **Mobile** (<768px): Grid de 1-2 colunas

## 🐛 Troubleshooting (Solução de Problemas)

### Os dados não aparecem

1. **Verifique o Console (F12)**
   - Pressione F12 no navegador
   - Vá na aba "Console"
   - Procure por erros em vermelho

2. **Verifique a API**
   - Acesse diretamente `http://10.92.199.53:3000/carros`
   - Confirme que retorna dados em JSON

3. **Verifique CORS**
   - Se aparecer erro de CORS, a API precisa permitir requisições do seu domínio

### As imagens não carregam

1. **Verifique as URLs**
   - Confirme que o campo `imagem` na API contém URLs válidas
   - Teste as URLs diretamente no navegador

2. **Verifique permissões**
   - Algumas imagens podem estar bloqueadas por CORS
   - Use imagens hospedadas em servidores que permitem acesso público

### Layout quebrado no mobile

1. **Limpe o cache**
   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)

2. **Verifique o viewport**
   - Confirme que a tag `<meta name="viewport">` está no HTML

## 📝 Funcionalidades JavaScript

### Funções Principais

- `buscarCarros()`: Busca e exibe carros da API
- `buscarMotos()`: Busca e exibe motos da API
- `buscarVendedores()`: Busca e exibe vendedores da API
- `formatarPreco(preco)`: Formata valores no padrão brasileiro (R$ 50.000,00)
- `comprarVeiculo(nome)`: Ação do botão "Comprar" (pode ser customizada)

### Carregamento Automático

Os dados são carregados automaticamente quando a página termina de carregar:

```javascript
window.addEventListener('DOMContentLoaded', function() {
  buscarCarros();
  buscarMotos();
  buscarVendedores();
});
```

## 🔄 Próximas Melhorias

- [ ] Sistema de carrinho de compras
- [ ] Filtros por marca, ano e preço
- [ ] Busca por nome do veículo
- [ ] Paginação dos resultados
- [ ] Modal com detalhes completos do veículo
- [ ] Formulário de contato com vendedor
- [ ] Galeria de fotos para cada veículo
- [ ] Comparador de veículos

