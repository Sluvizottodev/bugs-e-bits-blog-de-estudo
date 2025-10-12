import loadHeader from './utils/loadHeader.js';
import loadFooter from './utils/loadFooter.js';
import loadFavicon from './utils/loadFavicon.js';
import { initFilters } from './utils/initFilters.js';
import { loadPostContent } from './utils/loadPost.js';
import { renderPosts } from './utils/renderPosts.js';

console.log('main.js carregado com sucesso!');

loadFavicon();
loadHeader();
loadFooter();

if (document.querySelector('.filter-btn')) initFilters();

if (document.querySelector('.post-article')) loadPostContent();

export { initFilters, loadPostContent, renderPosts };
