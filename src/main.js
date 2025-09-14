import loadHeader from './utils/loadHeader.js';
import { posts } from './data/posts.js'; 
import { renderPosts } from './utils/renderPosts.js';

loadHeader();

renderPosts(posts, 'featured-posts');
renderPosts(posts, 'posts');
