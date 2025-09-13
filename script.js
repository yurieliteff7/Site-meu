document.addEventListener('DOMContentLoaded', function() {
    // Navegação de seções
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            contentSections.forEach(section => section.classList.remove('active'));
            const category = this.dataset.category || 'inicio';
            const targetSection = document.getElementById(category);
            if (targetSection) targetSection.classList.add('active');
        });
    });
    // Tool buttons animação e loading
    const toolButtons = document.querySelectorAll('.tool-btn');
    function addLoadingState(button) {
        const originalText = button.textContent;
        button.textContent = 'Carregando...';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1200);
    }
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            addLoadingState(this);
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 150);
            setTimeout(() => {
                alert(`Abrindo ferramenta: ${this.previousElementSibling.previousElementSibling.textContent}`);
            }, 200);
        });
    });
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.nav-button.active');
        const buttons = Array.from(navButtons);
        const currentIndex = buttons.indexOf(activeButton);
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) buttons[currentIndex - 1].click();
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < buttons.length - 1) buttons[currentIndex + 1].click();
                break;
        }
    });
});