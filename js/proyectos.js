// Datos de los proyectos
const proyectos = {
    1: {
        nombre: "SALA DE VENTAS INMOVILARIA EDIFICA",
        cliente: "EDIFICA",
        año: 2019,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    2: {
        nombre: "CONSTRUCCION DE ESTRUCTURA DE ASCENSOR Y DATA",
        cliente: "AUNA",
        año: 2021,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    3: {
        nombre: "REMODELACION DEL ÁREA DE HOSPITALIZACIÓN 1°, 2° Y 3° PISO",
        cliente: "AUNA",
        año: 2021,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    4: {
        nombre: "ACONDICIONAMIENTO DE LA NUEVA SEDE - SENATI",
        cliente: "SENATI",
        año: 2023,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    5: {
        nombre: "CONSTRUCCIÓN DE FABRICACION Y HABILITACION DE 02 CASETAS DEL PEAJE",
        cliente: "COVISOL",
        año: 2024,
        lugar: "BAYOVAR, SULLANA, PACANGUILLA Y CHICAMA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    6: {
        nombre: "CONSTRUCCIÓN DEL CERCO PERIMETRAL - SENATI SECHURA",
        cliente: "SENATI",
        año: 2024,
        lugar: "SECHURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    7: {
        nombre: "2019 - SALA DE VENTAS DE BESCO Y 2022",
        cliente: "BESCO",
        año: 2022,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    8: {
        nombre: "SALA DE SOLDADURA VIRTUAL - TALARA ",
        cliente: "SENATI",
        año: 2024,
        lugar: "TALARA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    9: {
        nombre: "REMODELACION DE LA SALA DE OPERACIONES SOP - AUNA",
        cliente: "AUNA",
        año: 2024,
        lugar: "PIURA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    10: {
        nombre: "QUIMIOTERAPIA, CONSULTORIOS MEJORAS Y MAMOGRAFIA",
        cliente: "GSP - AUNA",
        año: 2024,
        lugar: "TRUJILLO",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    11: {
        nombre: "COBERTURA METALICA - OHLA",
        cliente: "OHLA",
        año: 2024,
        lugar: "SULLANA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    12: {
        nombre: "CLINICA DE PAITA - HABILITACION DE RAYOS X",
        cliente: "CENTRO MEDICO GYOECOMEDIC EIRL",
        año: 2023,
        lugar: "PAITA",
        area: "",
        alcance: "",
        imagenes: [
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP",
            "img/obras-de-construccion-corporacion-.WebP"
        ]
    },
    

    // Agrega más proyectos aquí
};

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (proyectos[projectId]) {
    const proyecto = proyectos[projectId];

    document.title = proyecto.nombre;

    const projectInfoElement = document.getElementById('project-info');
    projectInfoElement.innerHTML = `
        <p><strong><i class="fa-solid fa-building"></i> NOMBRE DEL PROYECTO:</strong> ${proyecto.nombre}</p>
        <p><strong><i class="fa-solid fa-user"></i> CLIENTE:</strong> ${proyecto.cliente}</p>
        <p><strong><i class="fa-solid fa-calendar"></i> AÑO:</strong> ${proyecto.año}</p>
        <p><strong><i class="fas fa-map-marker-alt"></i> LUGAR:</strong> ${proyecto.lugar}</p>
        <p><strong><i class="fa-solid fa-ruler-combined"></i> AREA DE INTERVENCION:</strong> ${proyecto.area}</p>
        <p><strong><i class="fa-solid fa-chart-line"></i> ALCANCE:</strong> ${proyecto.alcance}</p>
    `;
    const projectPhotosElement = document.getElementById('project-photos');
    projectPhotosElement.innerHTML = `
        <img src="${proyecto.imagenes[0]}" alt="${proyecto.nombre}" class="project-image-large">
        <div class="project-photos-2">
            <img src="${proyecto.imagenes[1]}" alt="${proyecto.nombre}" class="project-image-small">
            <img src="${proyecto.imagenes[2]}" alt="${proyecto.nombre}" class="project-image-small">
        </div>
    `;
} else {
    document.querySelector('.section-title').innerText = "Proyecto no encontrado";
    document.getElementById('project-info').innerHTML = "<p>Lo sentimos, no se ha encontrado información sobre el proyecto solicitado.</p>";
}

