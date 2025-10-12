async function loadFavicon() {
    try {
        const response = await fetch('components/favicon.html');
        const faviconHTML = await response.text();
        
        document.head.insertAdjacentHTML('beforeend', faviconHTML);
        
        console.log('Favicon carregado com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar favicon:', error);
    }
}

export default loadFavicon;