export default function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);

            const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
            const navLinks = document.querySelectorAll('.nav-links a');

            navLinks.forEach(link => {
                const page = link.dataset.page;
                if (page === currentPage || (page === 'index' && page === 'home')) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => console.log('Erro ao carregar header:', err));
}
