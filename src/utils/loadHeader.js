function loadHeader() {
    fetch('src/components/header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        })
        .catch(err => console.log('Erro ao carregar header:', err));
}