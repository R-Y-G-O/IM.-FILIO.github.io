const propiedades = [
    {
        id: '1',
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Residencial: Casa Familiar en Ciudad Jardín",
        tipo: "residencial",
        descripcion: "Amplia casa de 3 habitaciones con jardín privado, cerca de parques y centros comerciales. Ideal para familias.",
        precio: 300000,
        ubicacion: "Ciudad Jardín",
        area: 150,
        coordenadas: { lat: -34.601, lng: -58.383 } 
    },
    {
        id: '2',
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Comercial: Oficina Moderna en Distrito Empresarial",
        tipo: "comercial",
        descripcion: "Oficina totalmente equipada en edificio corporativo. Espacio ideal para empresas en crecimiento.",
        precio: 30000,
        ubicacion: "Distrito Empresarial",
        area: 100,
        coordenadas: { lat: -34.603, lng: -58.385 } // Ejemplo de coordenadas
    },
    {
        id: '3',
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Departamento en el Centro Histórico",
        tipo: "residencial",
        descripcion: "Lujoso departamento de 2 habitaciones con vista panorámica y acceso a todos los servicios.",
        precio: 250000,
        ubicacion: "Centro Histórico",
        area: 90,
        coordenadas: { lat: -34.604, lng: -58.386 } // Ejemplo de coordenadas
    },
    {
        id: '4',
        imagen: "img/carrusel/carrucel_in_3.webp",
        titulo: "Comercial: Local Comercial en Avenida Principal",
        tipo: "comercial",
        descripcion: "Local ideal para retail, en una ubicación estratégica con gran afluencia de clientes.",
        precio: 120000,
        ubicacion: "Avenida Principal",
        area: 80,
        coordenadas: { lat: -34.605, lng: -58.387 } // Ejemplo de coordenadas
    },
    {
        id: '5',
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Industrial: Bodega en Parque Industrial",
        tipo: "industrial",
        descripcion: "Amplia bodega con fácil acceso a carreteras y equipada con sistemas de seguridad.",
        precio: 50000,
        ubicacion: "Parque Industrial",
        area: 300,
        coordenadas: { lat: -34.606, lng: -58.388 } // Ejemplo de coordenadas
    },
    {
        id: '6',
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Casa de Campo con Piscina",
        tipo: "residencial",
        descripcion: "Hermosa casa de campo de 4 habitaciones con piscina privada, ideal para escapadas de fin de semana.",
        precio: 400000,
        ubicacion: "Campo Verde",
        area: 200,
        coordenadas: { lat: -34.607, lng: -58.389 } // Ejemplo de coordenadas
    }
];

// Función para crear las tarjetas
function crearTarjetas() {
    const contenedor = document.getElementById('tarjetas-container');
    contenedor.innerHTML = ''; 

    propiedades.forEach(propiedad => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.dataset.precio = propiedad.precio;
        tarjeta.dataset.ubicacion = propiedad.ubicacion;
        tarjeta.dataset.tipo = propiedad.tipo; 
        tarjeta.dataset.area = propiedad.area;

        const mapaSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.748678842572!2d${propiedad.coordenadas.lng}!3d${propiedad.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5f500c17%3A0x5b02910719db8c3a!2sGoogleplex!5e0!3m2!1ses!2s!4v1635946085203!5m2!1ses!2s`;

        tarjeta.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
            <div class="contenido">
                <h3>${propiedad.titulo}</h3>
                <p>${propiedad.descripcion}</p>
                <button onclick="redirigirADetalle(${propiedad.id})">Ver más...</button> 
            </div>
        `;

        contenedor.appendChild(tarjeta); 
    });
}

// Función para redirigir a la página de detalles con el ID de la propiedad
function redirigirADetalle(idPropiedad) {
    window.location.href = `venta.html?id=${idPropiedad}`;
}

crearTarjetas();



function aplicarFiltros() {
    const distritosSeleccionados = Array.from(document.querySelectorAll('.filtro-distrito:checked')).map(input => input.value);
    const tiposSeleccionados = Array.from(document.querySelectorAll('.filtro-tipo:checked')).map(input => input.value);
    const precioMin = parseFloat(document.getElementById('precio-min').value) || 0;
    const precioMax = parseFloat(document.getElementById('precio-max').value) || Infinity;
    const superficieMin = parseFloat(document.getElementById('superficie-min').value) || 0;
    const superficieMax = parseFloat(document.getElementById('superficie-max').value) || Infinity;

    const propiedadesFiltradas = propiedades.filter(propiedad => {
        const precioValido = propiedad.precio >= precioMin && propiedad.precio <= precioMax;
        const superficieValida = propiedad.area >= superficieMin && propiedad.area <= superficieMax;
        const distritoValido = distritosSeleccionados.length === 0 || distritosSeleccionados.includes(propiedad.ubicacion);
        const tipoValido = tiposSeleccionados.length === 0 || tiposSeleccionados.includes(propiedad.tipo);

        return precioValido && superficieValida && distritoValido && tipoValido;
    });

    const contenedor = document.getElementById('tarjetas-container-filtrado');
    contenedor.innerHTML = '';

    if (propiedadesFiltradas.length === 0) {
        const mensajeError = document.createElement('div');
        mensajeError.className = 'mensaje-error';
        mensajeError.textContent = 'No se encontraron propiedades con esos criterios.';
        contenedor.appendChild(mensajeError);
    } else {
        propiedadesFiltradas.forEach(propiedad => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'property-card';

            const mapaSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.748678842572!2d${propiedad.coordenadas.lng}!3d${propiedad.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5f500c17%3A0x5b02910719db8c3a!2sGoogleplex!5e0!3m2!1ses!2s!4v1635946085203!5m2!1ses!2s`;

            tarjeta.innerHTML = `
                <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
                <div class="property-details">
                    <h3>${propiedad.titulo}</h3>
                    <p>${propiedad.descripcion}</p>
                    <p>Ubicación: ${propiedad.ubicacion}</p>
                    <p>Precio: $${propiedad.precio}, Tamaño: ${propiedad.area}m²</p>
                </div>
                <div class="mapa">
                    <iframe src="${mapaSrc}" allowfullscreen=""></iframe>
                </div>
                <div class="property-actions">
                    <button onclick="contactar('${propiedad.titulo}')"><i class="fas fa-envelope"></i> Contactar</button>
                    <button onclick="llamar('${propiedad.titulo}')"><i class="fas fa-phone-alt"></i> Llamar</button>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        });
    }
}



function contactar(titulo) {
    const propiedad = propiedades.find(prop => prop.titulo === titulo);
    document.getElementById('titulo-propiedad-info').innerText = propiedad.titulo;
    document.getElementById('descripcion-propiedad-info').innerText = propiedad.descripcion;
    document.getElementById('precio-propiedad-info').innerText = `$${propiedad.precio}`;
    document.getElementById('ubicacion-propiedad-info').innerText = propiedad.ubicacion;
    document.getElementById('area-propiedad-info').innerText = propiedad.area;

      // Asignar valores a los campos ocultos del formulario
      document.getElementById('titulo-propiedad').value = propiedad.titulo; 
      document.getElementById('descripcion-propiedad').value = propiedad.descripcion;
      document.getElementById('precio-propiedad').value = propiedad.precio;
      document.getElementById('ubicacion-propiedad').value = propiedad.ubicacion;
      document.getElementById('area-propiedad').value = propiedad.area;

    document.getElementById('titulo-propiedad').value = titulo; 
    document.getElementById('overlay').style.display = 'block'; 
    document.getElementById('formulario-contacto').style.display = 'block'; 
}
function cerrarFormulario() {
    document.getElementById('overlay').style.display = 'none'; 
    document.getElementById('formulario-contacto').style.display = 'none'; 
}




function mostrarPropiedadFiltrada(idPropiedad) {
    const propiedadSeleccionada = propiedades.find(propiedad => propiedad.id === idPropiedad);

    if (propiedadSeleccionada) {
        const contenedor = document.getElementById('tarjetas-container-filtrado');
        contenedor.innerHTML = ''; 

        const tarjeta = document.createElement('div');
        tarjeta.className = 'property-card';

        const mapaSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.748678842572!2d${propiedadSeleccionada.coordenadas.lng}!3d${propiedadSeleccionada.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5f500c17%3A0x5b02910719db8c3a!2sGoogleplex!5e0!3m2!1ses!2s!4v1635946085203!5m2!1ses!2s`;

        tarjeta.innerHTML = `
            <img src="${propiedadSeleccionada.imagen}" alt="${propiedadSeleccionada.titulo}">
            <div class="property-details">
                <h3>${propiedadSeleccionada.titulo}</h3>
                <p>${propiedadSeleccionada.descripcion}</p>
                <p>Ubicación: ${propiedadSeleccionada.ubicacion}</p>
                <p>Precio: $${propiedadSeleccionada.precio}, Tamaño: ${propiedadSeleccionada.area}m²</p>
            </div>
            <div class="mapa">
                <iframe src="${mapaSrc}" allowfullscreen=""></iframe>
            </div>
            <div class="property-actions">
                <button onclick="contactar('${propiedadSeleccionada.titulo}')"><i class="fas fa-envelope"></i> Contactar</button>
                <button onclick="llamar('${propiedadSeleccionada.titulo}')"><i class="fas fa-phone-alt"></i> Llamar</button>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    } else {
        const contenedor = document.getElementById('tarjetas-container-filtrado');
        contenedor.innerHTML = '<p>No se encontró la propiedad seleccionada.</p>';
    }
}

