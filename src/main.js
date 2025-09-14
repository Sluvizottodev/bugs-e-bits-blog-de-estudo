import loadHeader from './utils/loadHeader.js';
import loadFooter from './utils/loadFooter.js';
import { posts } from './data/posts.js'; 
import { renderPosts } from './utils/renderPosts.js';
import loadFooter from './utils/loadFooter.js';

loadHeader();
loadFooter();

renderPosts(posts, 'featured-posts');
renderPosts(posts, 'posts');
