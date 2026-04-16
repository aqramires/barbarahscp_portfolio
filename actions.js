document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica Dark / Light Mode
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // O botão mostra o que vai acontecer no PRÓXIMO clique.
            if (newTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggle.title = 'Mudar para modo claro';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggle.title = 'Mudar para modo escuro';
            }
        });
    }

    // 2. Acordeão da Experiência Profissional
    const expTriggers = document.querySelectorAll('.exp-header, .timeline-dot');
    expTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.getAttribute('data-target');
            if (targetId) {
                const content = document.getElementById(targetId);
                if (content) {
                    content.classList.toggle('collapsed');
                }
            }
        });
    });

    // 3. Nova Sticky Bar Horizontal (Contatos e CV)
    const toggleBarBtn = document.getElementById('toggle-bar-btn');
    const stickyBar = document.getElementById('sticky-bar');

    if (toggleBarBtn && stickyBar) {
        toggleBarBtn.addEventListener('click', () => {
            stickyBar.classList.toggle('minimized');
            const icon = toggleBarBtn.querySelector('i');
            
            if (stickyBar.classList.contains('minimized')) {
                // Se está minimizado, a seta aponta para a esquerda para "abrir"
                icon.className = 'fas fa-chevron-left';
                toggleBarBtn.title = 'Expandir contatos';
            } else {
                // Se está aberto, a seta aponta para a direita para "recolher"
                icon.className = 'fas fa-chevron-right';
                toggleBarBtn.title = 'Minimizar contatos';
            }
        });
    }

    // 4. Efeito de carregamento em cascata dos Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease, border 0.5s ease';
            }, 600);
            
        }, 150 * index); 
    });

});