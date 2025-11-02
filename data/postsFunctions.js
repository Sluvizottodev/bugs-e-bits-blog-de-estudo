import { posts } from './posts.js';

export function getPostsByCategory(category) {
    if (category === 'all') return posts;
    return posts.filter(post => post.categoria === category);
}

export function getFeaturedPosts() {
    return posts.filter(post => post.destaque);
}

export function getPostById(id) {
    return posts.find(post => post.id === Number.parseInt(id));
}
