import loadHeader from './utils/loadHeader.js';
import { posts } from './data/posts';
import { renderPosts } from './components/renderPosts.js';

loadHeader();

renderPosts(posts, 'posts');
