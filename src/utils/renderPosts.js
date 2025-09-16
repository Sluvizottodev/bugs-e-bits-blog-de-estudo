import { formatDateTime } from './formatDateTime.js';

function getCategoryLabel(categoria) {
    const labels = { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile', career: 'Carreira' };
    return labels[categoria] || categoria;
}

export function renderPosts(posts, containerId, isFeatured = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = posts.map(post => `
        <article class="post-card ${isFeatured ? 'featured' : ''}" data-category="${post.categoria}">
            ${post.imagem ? `<img src="${post.imagem}" alt="${post.titulo}" class="post-image">` : ''}
            <div class="post-content">
                <h3 class="post-title">${post.titulo}</h3>
                <p class="post-excerpt">${post.resumo}</p>
                <div class="post-meta">
                    <span class="post-date">${formatDateTime(post.dataCriacao)}</span>
                    <span class="post-category">${getCategoryLabel(post.categoria)}</span>
                    <span class="post-reading-time">${post.tempoLeitura}</span>
                </div>
                <a href="post.html?id=${post.id}" class="post-link">Ler mais</a>
            </div>
        </article>
    `).join('');
}
