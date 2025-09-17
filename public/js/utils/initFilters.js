import { getPostsByCategory, getFeaturedPosts } from '../../../data/posts.js';
import { renderPosts } from './renderPosts.js';

let currentPosts = [];
let visibleCount = 3; 

export function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    renderPosts(getFeaturedPosts(), 'featured-posts', true);
    
    currentPosts = getPostsByCategory('all');
    renderPosts(currentPosts.slice(0, visibleCount), 'posts');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            applyFilter(filter);
        });
    });

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }
}

function applyFilter(filter) {
    currentPosts = getPostsByCategory(filter);
    visibleCount = 3;
    renderPosts(currentPosts.slice(0, visibleCount), 'posts');
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = currentPosts.length > visibleCount ? 'block' : 'none';
    }
}

function loadMorePosts() {
    visibleCount += 3;
    renderPosts(currentPosts.slice(0, visibleCount), 'posts');
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn && visibleCount >= currentPosts.length) {
        loadMoreBtn.style.display = 'none';
    }
}