export function renderPosts(posts, containerId) {
    const postsContainer = document.getElementById(containerId);
    if (!postsContainer) return;

    postsContainer.innerHTML = ""; 

    posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("card", "post-card");
        card.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.resumo}</p>
            <a href="post.html?id=${post.id}" class="btn-link">Ler Post →</a>
            `;
        postsContainer.appendChild(card);
    });
}
