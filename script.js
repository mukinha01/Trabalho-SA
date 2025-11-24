/* ========================================
   LOJA DE VEÍCULOS - JAVASCRIPT
   Funções para buscar e exibir dados da API
   ======================================== */

// URL base da API - altere aqui se o servidor mudar
const API_URL = 'http://10.92.199.53:3000';

/* ----------------------------------------
   FUNÇÃO PARA BUSCAR E EXIBIR CARROS
   ---------------------------------------- */
function buscarCarros() {
  // Faz requisição para a API de carros
  fetch(`${API_URL}/carros`)
    .then((res) => res.json()) // Converte resposta para JSON
    .then((data) => {
      
      // Seleciona a div onde os carros serão exibidos
      let listaCarros = document.getElementById('lista-carros');
      
      // Limpa o conteúdo anterior (remove "Carregando...")
      listaCarros.innerHTML = '';

      // Verifica se existem carros para exibir
      if (data.length === 0) {
        listaCarros.innerHTML = '<p class="loading">Nenhum carro disponível no momento.</p>';
        return;
      }

      // Loop: para cada carro retornado pela API
      data.forEach(carro => {
        
        // Cria uma div para o card do carro
        let card = document.createElement('div');
        card.className = 'produto'; // Adiciona classe CSS
        
        // Monta o HTML do card com os dados do carro
        card.innerHTML = `
         <div class="img" style="background-image: url('${carro.imagem}'); background-size: cover; background-position: center;"></div>
          <p class="nome-produto"><strong>${carro.nome}</strong></p>
          <p class="preco"><strong> ${carro.preco}</strong></p>
        `;
        
        // Adiciona o card na lista de carros
        listaCarros.appendChild(card);
      });
    })
    .catch(error => {
      // Se der erro na requisição, exibe mensagem de erro
      console.error('Erro ao buscar carros:', error);
      document.getElementById('lista-carros').innerHTML = 
        '<p style="grid-column: 1/-1; text-align: center; color: red;">Erro ao carregar carros. Verifique se a API está rodando.</p>';
    });
}

/* ----------------------------------------
   FUNÇÃO PARA BUSCAR E EXIBIR MOTOS
   ---------------------------------------- */
function buscarMotos() {
  // Faz requisição para a API de motos
  fetch(`${API_URL}/motos`)
    .then((res) => res.json()) // Converte resposta para JSON
    .then((data) => {
      
      // Seleciona a div onde as motos serão exibidas
      let listaMotos = document.getElementById('lista-motos');
      
      // Limpa o conteúdo anterior (remove "Carregando...")
      listaMotos.innerHTML = '';

      // Verifica se existem motos para exibir
      if (data.length === 0) {
        listaMotos.innerHTML = '<p class="loading">Nenhuma moto disponível no momento.</p>';
        return;
      }

      // Loop: para cada moto retornada pela API
      data.forEach(moto => {
        
        // Cria uma div para o card da moto
        let card = document.createElement('div');
        card.className = 'produto'; // Adiciona classe CSS
        
        // Monta o HTML do card com os dados da moto
        card.innerHTML = `
          <div class="img" style="background-image: url('${moto.imagem}'); background-size: cover; background-position: center;"></div>
          <p class="nome-produto"><strong>${moto.nome}</strong></p>
          <p class="preco"><strong> ${moto.preco}</strong></p>
        
        `;
        
        // Adiciona o card na lista de motos
        listaMotos.appendChild(card);
      });
    })
    .catch(error => {
      // Se der erro na requisição, exibe mensagem de erro
      console.error('Erro ao buscar motos:', error);
      document.getElementById('lista-motos').innerHTML = 
        '<p style="grid-column: 1/-1; text-align: center; color: red;">Erro ao carregar motos. Verifique se a API está rodando.</p>';
    });
}

/* ----------------------------------------
   FUNÇÃO PARA BUSCAR E EXIBIR VENDEDORES
   ---------------------------------------- */
function buscarVendedores() {
  // Faz requisição para a API de vendedores
  fetch(`${API_URL}/vendedores`)
    .then((res) => res.json()) // Converte resposta para JSON
    .then((data) => {
      
      // Seleciona a div onde os vendedores serão exibidos
      let listaVendedores = document.getElementById('lista-vendedores');
      
      // Limpa o conteúdo anterior (remove "Carregando...")
      listaVendedores.innerHTML = '';

      // Verifica se existem vendedores para exibir
      if (data.length === 0) {
        listaVendedores.innerHTML = '<p class="loading">Nenhum vendedor disponível no momento.</p>';
        return;
      }

      // Loop: para cada vendedor retornado pela API
      data.forEach(vendedor => {
        
        // Cria uma div para o card do vendedor
        let card = document.createElement('div');
        card.className = 'vendedor'; // Adiciona classe CSS
        
        // Monta o HTML do card com os dados do vendedor
        card.innerHTML = `
          <div class="img" style="background-image: url('${vendedor.imagem}'); background-size: cover; background-position: center;"></div>
          <p class="nome-vendedor"><strong>${vendedor.nome}</strong></p>
          <p class="cargo">${vendedor.cargo || 'Vendedor'}</p>
          ${vendedor.email ? `<p class="contato">${vendedor.email}</p>` : ''}
        `;
        
        // Adiciona o card na lista de vendedores
        listaVendedores.appendChild(card);
      });
    })
    .catch(error => {
      // Se der erro na requisição, exibe mensagem de erro
      console.error('Erro ao buscar vendedores:', error);
      document.getElementById('lista-vendedores').innerHTML = 
        '<p style="grid-column: 1/-1; text-align: center; color: red;">Erro ao carregar vendedores. Verifique se a API está rodando.</p>';
    });
}

/* ----------------------------------------
   FUNÇÃO AUXILIAR - FORMATAR PREÇO
   ---------------------------------------- */
// Formata o preço no padrão brasileiro (R$ 50.000,00)
function formatarPreco(preco) {
  return parseFloat(preco).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/* ----------------------------------------
   FUNÇÃO AUXILIAR - COMPRAR VEÍCULO
   ---------------------------------------- */
// Função chamada quando o usuário clica em "Comprar"
function comprarVeiculo(nomeVeiculo) {
  alert(`Você iniciou a compra de: ${nomeVeiculo}\n\nEm breve um vendedor entrará em contato!`);
  // Aqui você pode adicionar lógica de carrinho, redirect, etc.
}

/* ========================================
   INICIALIZAÇÃO - Carrega dados ao abrir a página
   ======================================== */
// Quando a página terminar de carregar, busca todos os dados
window.addEventListener('DOMContentLoaded', function() {
  buscarCarros();      // Busca os carros
  buscarMotos();       // Busca as motos
  buscarVendedores();  // Busca os vendedores
});