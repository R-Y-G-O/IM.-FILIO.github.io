const propiedades = [
    {
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Residencial: Casa Familiar en Ciudad Jardín",
        tipo:"residencial",
        descripcion: "Amplia casa de 3 habitaciones con jardín privado, cerca de parques y centros comerciales. Ideal para familias.",
        precio: 300000,
        ubicacion: "Ciudad Jardín",
        tamano: 150,
        link: "#"
    },
    {
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Comercial: Oficina Moderna en Distrito Empresarial",
        tipo:"comercial",
        descripcion: "Oficina totalmente equipada en edificio corporativo. Espacio ideal para empresas en crecimiento.",
        precio: 30000,
        ubicacion: "Distrito Empresarial",
        tamano: 100,
        link: "#"
    },
    {
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Departamento en el Centro Histórico",
        tipo:"residencial",
        descripcion: "Lujoso departamento de 2 habitaciones con vista panorámica y acceso a todos los servicios.",
        precio: 250000,
        ubicacion: "Centro Histórico",
        tamano: 90,
        link: "#"
    },
    {
        imagen: "img/carrusel/carrucel_in_3.webp",
        titulo: "Comercial: Local Comercial en Avenida Principal",
        tipo:"comercial",
        descripcion: "Local ideal para retail, en una ubicación estratégica con gran afluencia de clientes.",
        precio: 120000,
        ubicacion: "Avenida Principal",
        tamano: 80,
        link: "#"
    },
    {
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Industrial: Bodega en Parque Industrial",
        tipo:"industrial",
        descripcion: "Amplia bodega con fácil acceso a carreteras y equipada con sistemas de seguridad.",
        precio: 50000,
        ubicacion: "Parque Industrial",
        tamano: 300,
        link: "#"
    },
    {
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Casa de Campo con Piscina",
        tipo:"recidencial",
        descripcion: "Hermosa casa de campo de 4 habitaciones con piscina privada, ideal para escapadas de fin de semana.",
        precio: 400000,
        ubicacion: "Campo Verde",
        tamano: 200,
        link: "#"
    }
];


// Función para crear las tarjetas
function crearTarjetas() {
    const contenedor = document.getElementById('tarjetas-container');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar tarjetas

    propiedades.forEach(propiedad => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.dataset.precio = propiedad.precio;
        tarjeta.dataset.ubicacion = propiedad.ubicacion;
        tarjeta.dataset.tipo = propiedad.tipo || 'residencial'; // Asume un tipo por defecto si no se proporciona
        tarjeta.dataset.tamano = propiedad.tamano;

        tarjeta.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
            <div class="contenido">
                <h3>${propiedad.titulo}</h3>
                <p>${propiedad.descripcion}</p>
                <a href="${propiedad.link}">Ver más detalles</a>
            </div>
            <div class="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.748678842572!2d-122.08424948490524!3d37.42199997982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5f500c17%3A0x5b02910719db8c3a!2sGoogleplex!5e0!3m2!1ses!2s!4v1635946085203!5m2!1ses!2s" allowfullscreen=""></iframe>
            </div>
        `;

        contenedor.appendChild(tarjeta); 
    });
}

crearTarjetas();

