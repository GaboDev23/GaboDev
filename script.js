// Constantes
const backToTop = document.getElementById("backToTop");
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const projectsGrid = document.getElementById('projects-grid');
const loadMoreBtn = document.getElementById('load-more');

// Variables
let projectCount = 3; // Proyectos iniciales
const totalProjects = 9; // Total de proyectos que vas a mostrar

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Botón hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Botón de cargar más
loadMoreBtn.addEventListener('click', () => {
    const remaining = totalProjects - projectCount;
    const toLoad = remaining >= 3 ? 3 : remaining;

    // Bucle que carga cada tarjeta
    for (let i = 1; i <= toLoad; i++) {
        projectCount++;
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
        <img src="https://via.placeholder.com/300x180" alt="Proyecto ${projectCount}" />
        <h3>Proyecto ${projectCount}</h3>
        <p>Breve descripción del proyecto ${projectCount}.</p>
        <a href="#" class="btn btn-secondary">Ver más</a>`;
        projectsGrid.appendChild(card);
    }

    if (projectCount >= totalProjects) {
        loadMoreBtn.style.display = 'none'; // Oculta el botón si ya no hay más proyectos
    }
});
