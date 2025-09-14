export default function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        
            if(!document.querySelector('#footer-css')){
                const linkEl = document.createElement('link');
                linkEl.id = 'footer.css';
                linkEl.rel = 'stylesheet';
                linkEl.href = 'src/styles/footer/footer.css';
                document.head.appendChild(linkEl);
            }
        })
        .catch(err => console.log('Erro ao carregar footer:', err));
    }