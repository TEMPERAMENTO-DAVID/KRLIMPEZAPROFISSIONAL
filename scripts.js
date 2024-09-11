document.addEventListener('DOMContentLoaded', function() { 
    // Lida com o envio do formulário de orçamento
    var form = document.getElementById('orcamentoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio do formulário padrão

            // Captura os valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('celular').value; // Corrigido para 'celular'
            const mensagem = document.getElementById('mensagem').value;

            // Formata a mensagem para o WhatsApp
            const textoMensagem = `Olá, meu nome é *${nome}*,\n\nMeu e-mail é *${email}*,\n\nMeu telefone é *${telefone}*.\n\nPreciso de um orçamento para o seguinte serviço:\n*${mensagem}*`;

            // Codifica a mensagem para uso na URL
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Número de WhatsApp de destino (inclua o código do país)
            const numeroWhatsApp = '5511933364357';

            // Cria o link de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

            // Redireciona o usuário para o WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Lida com a mudança de seleção (se aplicável)
    function handleSelectChange(event) {
        const url = event.target.value;
        if (url) {
            if (url.startsWith('http')) {
                // Se o link for externo, abre em nova aba
                window.open(url, '_blank');
            } else {
                // Se for um link interno, navega na mesma aba
                window.location.href = url;
            }
        }
    }

    // Função para mostrar o lightbox
    function showLightbox(lightboxId) {
        var lightbox = document.getElementById(lightboxId);
        if (lightbox) {
            lightbox.classList.add('visible'); // Adiciona classe para mostrar o lightbox
        }
    }

    // Função para esconder o lightbox
    function hideLightbox() {
        var lightboxes = document.querySelectorAll('.lightbox.visible');
        lightboxes.forEach(function(lightbox) {
            lightbox.classList.remove('visible'); // Remove classe para esconder o lightbox
        });
    }

    // Adiciona eventos de clique para mostrar o lightbox
    var serviceLinks = document.querySelectorAll('.service-item a');
    serviceLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            var targetId = link.getAttribute('href').substring(1);
            showLightbox(targetId);
        });
    });

    // Adiciona eventos de clique para fechar o lightbox
    var closeButtons = document.querySelectorAll('.lightbox-close');
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            hideLightbox();
        });
    });

    // Fecha o lightbox ao clicar fora da imagem
    var lightboxes = document.querySelectorAll('.lightbox');
    lightboxes.forEach(function(lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                hideLightbox();
            }
        });
    });
});