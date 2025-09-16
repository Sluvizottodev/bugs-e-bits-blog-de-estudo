import loadHeader from './utils/loadHeader.js';
import loadFooter from './utils/loadFooter.js';
import { initFilters } from './utils/initFilters.js';
import { loadPostContent } from './utils/renderPosts.js';

console.log('main.js carregado com sucesso!');

loadHeader();
loadFooter();

if (document.querySelector('.filter-btn')) {
    initFilters();
}

if (document.querySelector('.post-article')) {
    loadPostContent();
}

export { initFilters, loadPostContent };
