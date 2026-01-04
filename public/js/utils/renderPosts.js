import { formatDateTime } from './formatDateTime.js';
import { getCategoryLabel } from './getCategoryLabel.js';

export function renderPosts(posts, containerId, isFeatured = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = posts.map(post => `
        <article class="post-card ${isFeatured ? 'featured' : ''}" data-category="${post.categoria}" style="max-width: 100%; overflow: hidden;">
            ${post.imagem ? `<img src="${post.imagem}" alt="${post.titulo}" class="post-image" style="max-width: 100%; height: auto;">` : ''}
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
