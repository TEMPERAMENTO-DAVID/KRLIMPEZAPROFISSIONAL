document.addEventListener('DOMContentLoaded', function() { 
    // Lida com o envio do formulário de orçamento
    var form = document.getElementById('orcamentoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio do formulário padrão

            // Captura os valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const cidadeSelect = document.getElementById('cidade');
            const cidade = cidadeSelect.value === "Outra" 
                           ? document.getElementById('outraCidade').value 
                           : cidadeSelect.value; // Verifica se "outra" foi selecionado
            const mensagem = document.getElementById('mensagem').value;

            // Formata a mensagem para o WhatsApp
            const textoMensagem = `Olá, meu nome é *${nome}* ,\n\n*Vim pelo Site!* \n\nMeu e-mail é *${email}*,\n\nMeu telefone é *${telefone}*,\n\nEu moro em *${cidade}*.\n\nPreciso agendar uma avaliação para o seguinte serviço:\n\n\n${mensagem}`;

            // Codifica a mensagem para uso na URL
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Número de WhatsApp de destino (inclua o código do país)
            const numeroWhatsApp = '5511978745070';

            // Cria o link de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

            // Redireciona o usuário para o WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Função para mostrar o campo "outra cidade"
    window.mostrarCampoOutro = function() {
        var select = document.getElementById("cidade");
        var input = document.getElementById("outraCidade");

        if (select.value === "Outra") {
            input.style.display = "block"; // Mostra o campo de texto
        } else {
            input.style.display = "none"; // Oculta o campo de texto
            input.value = ""; // Limpa o campo se "Outra" não estiver selecionado
        }
    }
});