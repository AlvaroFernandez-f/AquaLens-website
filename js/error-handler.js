// Función para manejar errores 404
function handle404() {
    // Verificar si la página actual no es la página 404
    if (!window.location.pathname.includes('404.html')) {
        // Lista de páginas válidas
        const validPages = [
            '/',
            '/index.html',
            '/descubrelo.html',
            '/equipo.html',
            '/concurso.html',
            '/solucion.html',
            '/contacto.html',
            '/dispositivos/enterprise.html',
            '/dispositivos/particulares.html',
            '/404.html'
        ];

        // Verificar si la página actual está en la lista de páginas válidas
        const currentPath = window.location.pathname;
        const isValidPage = validPages.some(page => 
            currentPath === page || 
            currentPath === page + '/' || 
            currentPath.endsWith(page)
        );

        // Si la página no es válida, redirigir a 404
        if (!isValidPage) {
            window.location.href = '/404.html';
        }
    }
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', handle404);

// También manejar errores de recursos
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK') {
        console.error('Error cargando recurso:', e.target.src || e.target.href);
    }
}, true); 