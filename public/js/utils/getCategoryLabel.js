export function getCategoryLabel(categoria) {
    const labels = {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        career: 'Carreira',
        software: 'Práticas de Software'
    };
    return labels[categoria] || categoria;
}
