document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    // Abrir a imagem em tela cheia
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Fechar lightbox ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fechar lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

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
