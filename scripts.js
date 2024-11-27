document.addEventListener('DOMContentLoaded', function() { 
    // Lida com o envio do formulário de orçamento
    var form = document.getElementById('orcamentoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio do formulário padrão

            // Captura os valores do formulário
            const nome = document.getElementById('nome')?.value || "";
            const email = document.getElementById('email')?.value || "";
            const telefone = document.getElementById('telefone')?.value || "";
            const cidade = document.getElementById('cidade')?.value || "";
            const mensagem = document.getElementById('mensagem')?.value || "";

            // Formata a mensagem para o WhatsApp
            const textoMensagem = `Olá, meu nome é *${nome}* ,\n\n*Vim pelo Site!* \n\nMeu e-mail é *${email}*,\n\nMeu telefone é *${telefone}*,\n\nEu moro em *${cidade}*.\n\nPreciso de um orçamento para o seguinte serviço:\n\n\n${mensagem}`;
            const textoCodificado = encodeURIComponent(textoMensagem);

            // Número de WhatsApp de destino
            const numeroWhatsApp = '5511978745070';
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

            // Redireciona o usuário para o WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }

    // Lida com a mudança de seleção
    function handleSelectChange(event) {
        const url = event.target.value;
        if (url) {
            if (url.startsWith('http')) {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
        }
    }

    // Função para mostrar o lightbox
    function showLightbox(lightboxId) {
        var lightbox = document.getElementById(lightboxId);
        if (lightbox) {
            lightbox.classList.add('visible');
        }
    }

    // Função para esconder o lightbox
    function hideLightbox() {
        var lightboxes = document.querySelectorAll('.lightbox.visible');
        lightboxes.forEach(function(lightbox) {
            lightbox.classList.remove('visible');
        });
    }

    var serviceLinks = document.querySelectorAll('.service-item a');
    serviceLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            showLightbox(targetId);
        });
    });

    var closeButtons = document.querySelectorAll('.lightbox-close');
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hideLightbox();
        });
    });

    var lightboxes = document.querySelectorAll('.lightbox');
    lightboxes.forEach(function(lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                hideLightbox();
            }
        });
    });

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => nav.classList.toggle("active"));
    } else {
        console.warn("Botão '.hamburger' ou '.nav' não encontrados.");
    }

    window.onscroll = function() { 
        scrollFunction();
        handleScroll(); // Função para o menu hambúrguer
    };

    // Função para mostrar o botão de retorno
    function scrollFunction() {
        var returnButton = document.querySelector(".return");
        if (returnButton) {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 170) {
                returnButton.classList.add("show");
            } else {
                returnButton.classList.remove("show");
            }
        } else {
            console.warn("O elemento '.return' não foi encontrado no DOM.");
        }
    }

    // Função para ajustar a posição do menu hambúrguer após 100vh
    function handleScroll() {
        if (window.scrollY >= window.innerHeight) { // Verifica se rolou mais de 100vh
            if (hamburger) {
                hamburger.style.position = 'fixed';
                hamburger.style.bottom = '15px';
                hamburger.style.right = '15px';
            }
        } else {
            if (hamburger) {
                hamburger.style.position = ''; // Reseta a posição
                hamburger.style.bottom = '';
                hamburger.style.right = '';
            }
        }
    }
});
