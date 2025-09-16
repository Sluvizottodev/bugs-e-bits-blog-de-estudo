import { getPostById, getPostsByCategory } from '../../data/posts.js';
import { formatDateTime } from './formatDateTime.js';

export function loadPostContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const postArticle = document.querySelector('.post-article');
    const relatedContainer = document.getElementById('related-posts');

    if (!postId || !postArticle) return;

    const post = getPostById(postId);

    if (post) {
        postArticle.innerHTML = `
            <header class="post-header">
                <h1>${post.titulo}</h1>
                <div class="post-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDateTime(post.dataCriacao)}</span>
                    <span><i class="fas fa-tag"></i> ${getCategoryLabel(post.categoria)}</span>
                    <span><i class="fas fa-clock"></i> ${post.tempoLeitura}</span>
                </div>
            </header>
            <div class="post-content">
                ${formatPostContent(post.conteudo)}
            </div>
            <footer class="post-footer">
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </footer>
        `;
        loadRelatedPosts(post, relatedContainer);
    } else {
        showError('Post não encontrado');
    }
}

function formatPostContent(content) {
    return content
        .replace(/\n/g, '<br>')
        .replace(/```([^```]+)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function loadRelatedPosts(currentPost, container) {
    if (!container) return;
    const relatedPosts = getPostsByCategory(currentPost.categoria)
        .filter(post => post.id !== currentPost.id)
        .slice(0, 3);

    if (relatedPosts.length > 0) {
        container.innerHTML = relatedPosts.map(post => `
            <article class="related-card">
                <h3>${post.titulo}</h3>
                <p>${post.resumo}</p>
                <div class="post-meta">
                    <span><i class="fas fa-clock"></i> ${post.tempoLeitura}</span>
                    <span><i class="fas fa-tag"></i> ${getCategoryLabel(post.categoria)}</span>
                </div>
                <a href="post.html?id=${post.id}" class="post-link">Ler post →</a>
            </article>
        `).join('');
    } else {
        container.innerHTML = '<p>Nenhum post relacionado encontrado.</p>';
    }
}

function getCategoryLabel(categoria) {
    const labels = { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile', career: 'Carreira' };
    return labels[categoria] || categoria;
}

function showError(message) {
    const postArticle = document.querySelector('.post-article');
    postArticle.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-circle"></i>
            <h2>${message}</h2>
            <a href="../index.html" class="btn-primary">Voltar para o Blog</a>
        </div>
    `;
}
