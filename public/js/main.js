import loadHeader from '../../src/utils/loadHeader.js';
import loadFooter from '../../src/utils/loadFooter.js';
import { initFilters } from '../../src/utils/initFilters.js';
import { loadPostContent } from '../../src/utils/loadPost.js';
import { renderPosts } from '../../src/utils/renderPosts.js';

console.log('main.js carregado com sucesso!');

loadHeader();
loadFooter();

if (document.querySelector('.filter-btn')) initFilters();

if (document.querySelector('.post-article')) loadPostContent();

export { initFilters, loadPostContent, renderPosts };
