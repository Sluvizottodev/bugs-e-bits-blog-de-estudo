export default function loadHeader() {
    fetch('./components/header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);

            const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
            const navLinks = document.querySelectorAll('.nav-link');
            const menuToggle = document.getElementById('menuToggle');
            const navLinksContainer = document.getElementById('navLinks');

            navLinks.forEach(link => {
                const page = link.dataset.page;
                if (page === currentPage || (page === 'index' && currentPage === '')) {
                    link.classList.add('active');
                }
            });

            if (menuToggle && navLinksContainer) {
                menuToggle.addEventListener('click', () => {
                    menuToggle.classList.toggle('active');
                    navLinksContainer.classList.toggle('active');
                    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
                });

                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        menuToggle.classList.remove('active');
                        navLinksContainer.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                });

                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.nav-container') && navLinksContainer.classList.contains('active')) {
                        menuToggle.classList.remove('active');
                        navLinksContainer.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }

            if (!document.querySelector('#header-css')) {
                const linkEl = document.createElement('link');
                linkEl.id = 'header-css';
                linkEl.rel = 'stylesheet';
                linkEl.href = './styles/header/header.css';
                document.head.appendChild(linkEl);
            }
        })
        .catch(err => console.log('Erro ao carregar header:', err));
}
