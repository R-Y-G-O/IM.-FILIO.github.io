const propiedades = [
    {
        id: '1',
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Residencial: Casa Familiar en Ciudad Jardín",
        tipo: "residencial",
        descripcion: "Amplia casa de 3 habitaciones con jardín privado, cerca de parques y centros comerciales. Ideal para familias.",
        precio: 300000,
        ciudad: "Barranco",
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
        ciudad: "Miraflores",
        ubicacion: "Distrito Empresarial",
        area: 100,
        coordenadas: { lat: -34.603, lng: -58.385 } 
    },
    {
        id: '3',
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Departamento en el Centro Histórico",
        tipo: "residencial",
        descripcion: "Lujoso departamento de 2 habitaciones con vista panorámica y acceso a todos los servicios.",
        precio: 250000,
        ciudad: "Surco",
        ubicacion: "Centro Histórico",
        area: 90,
        coordenadas: { lat: -34.604, lng: -58.386 } 
    },
    {
        id: '4',
        imagen: "img/carrusel/carrucel_in_3.webp",
        titulo: "Comercial: Local Comercial en Avenida Principal",
        tipo: "comercial",
        descripcion: "Local ideal para retail, en una ubicación estratégica con gran afluencia de clientes.",
        precio: 120000,
        ciudad: "Miraflores",
        ubicacion: "Avenida Principal",
        area: 80,
        coordenadas: { lat: -34.605, lng: -58.387 } 
    },
    {
        id: '5',
        imagen: "img/carrusel/carrucel_in_1.webp",
        titulo: "Industrial: Bodega en Parque Industrial",
        tipo: "industrial",
        descripcion: "Amplia bodega con fácil acceso a carreteras y equipada con sistemas de seguridad.",
        precio: 50000,
        ciudad: "San Isidro",
        ubicacion: "Parque Industrial",
        area: 300,
        coordenadas: { lat: -34.606, lng: -58.388 } 
    },
    {
        id: '6',
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Residencial: Casa de Campo con Piscina",
        tipo: "industrial",
        descripcion: "Hermosa casa de campo de 4 habitaciones con piscina privada, ideal para escapadas de fin de semana.",
        precio: 400000,
        ubicacion: "Campo Verde",
        ciudad: "San Isidro",
        area: 200,
        coordenadas: { lat: -34.607, lng: -58.389 }
    },
    {
        id: '7',
        imagen: "img/carrusel/carrucel_in_2.webp",
        titulo: "Casa Moderna con Vista al Mar",
        tipo: "residencial",
        descripcion: "Casa de lujo con vistas panorámicas al mar, 5 habitaciones, piscina infinita y terraza.",
        precio: 850000,
        ubicacion: "Playa Azul",
        ciudad: "Mar del Plata",
        area: 350,
        coordenadas: { lat: -38.000, lng: -57.550 }
    },
    {
        id: '8',
        imagen: "img/carrusel/carrucel_in_3.webp",
        titulo: "Oficina Corporativa en el Centro",
        tipo: "comercial",
        descripcion: "Oficina moderna de 500m² en el centro de la ciudad, ideal para empresas grandes.",
        precio: 1200000,
        ubicacion: "Centro",
        ciudad: "Buenos Aires",
        area: 500,
        coordenadas: { lat: -34.603, lng: -58.381 }
    },
    {
        id: '9',
        imagen: "img/carrusel/carrucel_in_4.webp",
        titulo: "Terreno Agrícola en Zona Rural",
        tipo: "terreno",
        descripcion: "Extenso terreno agrícola de 50 hectáreas, perfecto para proyectos agropecuarios.",
        precio: 600000,
        ubicacion: "La Pampa",
        ciudad: "Santa Rosa",
        area: 500000,
        coordenadas: { lat: -36.620, lng: -64.290 }
    },
    {
        id: '10',
        imagen: "img/carrusel/carrucel_in_5.webp",
        titulo: "Departamento en Edificio Moderno",
        tipo: "residencial",
        descripcion: "Departamento de 3 habitaciones en edificio moderno con gimnasio y piscina.",
        precio: 300000,
        ubicacion: "Palermo",
        ciudad: "Buenos Aires",
        area: 120,
        coordenadas: { lat: -34.570, lng: -58.430 }
    },
    {
        id: '11',
        imagen: "img/carrusel/carrucel_in_6.webp",
        titulo: "Nave Industrial con Almacén",
        tipo: "industrial",
        descripcion: "Nave industrial de 2000m² con área de almacenamiento y oficinas.",
        precio: 1500000,
        ubicacion: "Parque Industrial",
        ciudad: "Rosario",
        area: 2000,
        coordenadas: { lat: -32.950, lng: -60.640 }
    },
    {
        id: '12',
        imagen: "img/carrusel/carrucel_in_7.webp",
        titulo: "Penthouse en Zona Exclusiva",
        tipo: "residencial",
        descripcion: "Lujoso penthouse de 4 habitaciones con jacuzzi y vistas a la ciudad.",
        precio: 950000,
        ubicacion: "Recoleta",
        ciudad: "Buenos Aires",
        area: 280,
        coordenadas: { lat: -34.588, lng: -58.397 }
    },
    {
        id: '13',
        imagen: "img/carrusel/carrucel_in_8.webp",
        titulo: "Local Comercial en Esquina Céntrica",
        tipo: "comercial",
        descripcion: "Amplio local comercial en esquina con gran visibilidad, ideal para franquicias.",
        precio: 400000,
        ubicacion: "Centro Histórico",
        ciudad: "Córdoba",
        area: 180,
        coordenadas: { lat: -31.420, lng: -64.188 }
    },
    {
        id: '14',
        imagen: "img/carrusel/carrucel_in_9.webp",
        titulo: "Casa de Montaña con Chimenea",
        tipo: "residencial",
        descripcion: "Acogedora casa de montaña de 3 habitaciones, ideal para retiros vacacionales.",
        precio: 550000,
        ubicacion: "Valle de las Leñas",
        ciudad: "Mendoza",
        area: 150,
        coordenadas: { lat: -35.130, lng: -70.020 }
    },
    {
        id: '15',
        imagen: "img/carrusel/carrucel_in_10.webp",
        titulo: "Estación de Servicio en Ruta Nacional",
        tipo: "comercial",
        descripcion: "Estación de servicio con tienda y amplio espacio de carga en una ruta nacional transitada.",
        precio: 2200000,
        ubicacion: "Ruta 9",
        ciudad: "Rosario",
        area: 3000,
        coordenadas: { lat: -32.950, lng: -60.670 }
    },
    {
        id: '16',
        imagen: "img/carrusel/carrucel_in_11.webp",
        titulo: "Cabaña Rústica en Zona Turística",
        tipo: "residencial",
        descripcion: "Encantadora cabaña de madera, perfecta para disfrutar de la naturaleza en un entorno turístico.",
        precio: 270000,
        ubicacion: "Villa La Angostura",
        ciudad: "Neuquén",
        area: 100,
        coordenadas: { lat: -40.760, lng: -71.640 }
    },
    {
        id: '17',
        imagen: "img/carrusel/carrucel_in_12.webp",
        titulo: "Galpón Industrial con Oficina",
        tipo: "industrial",
        descripcion: "Amplio galpón de 3000m² con oficina administrativa en zona industrial.",
        precio: 1800000,
        ubicacion: "Avellaneda",
        ciudad: "Buenos Aires",
        area: 3000,
        coordenadas: { lat: -34.670, lng: -58.370 }
    },
    {
        id: '18',
        imagen: "img/carrusel/carrucel_in_13.webp",
        titulo: "Terreno para Desarrollo Inmobiliario",
        tipo: "terreno",
        descripcion: "Terreno de 10 hectáreas, ideal para desarrollar un barrio cerrado.",
        precio: 2000000,
        ubicacion: "Pilar",
        ciudad: "Buenos Aires",
        area: 100000,
        coordenadas: { lat: -34.450, lng: -58.910 }
    },
    {
        id: '19',
        imagen: "img/carrusel/carrucel_in_14.webp",
        titulo: "Hotel Boutique en Zona Turística",
        tipo: "comercial",
        descripcion: "Hotel boutique con 15 habitaciones y spa en una zona turística de alta demanda.",
        precio: 3500000,
        ubicacion: "Bariloche",
        ciudad: "Río Negro",
        area: 800,
        coordenadas: { lat: -41.135, lng: -71.310 }
    },
    {
        id: '20',
        imagen: "img/carrusel/carrucel_in_15.webp",
        titulo: "Casa de Campo con Huerto",
        tipo: "residencial",
        descripcion: "Casa de campo con huerto ecológico y vista a las montañas, perfecta para amantes de la naturaleza.",
        precio: 450000,
        ubicacion: "Luján de Cuyo",
        ciudad: "Mendoza",
        area: 250,
        coordenadas: { lat: -33.016, lng: -68.880 }
    }
    
    
];



// Función para crear las tarjetas INDEX
function crearTarjetas() {
    const contenedor = document.getElementById('tarjetas_container');
    contenedor.innerHTML = ''; 

    propiedades.forEach(propiedad => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta_filtro';
        tarjeta.dataset.precio = propiedad.precio;
        tarjeta.dataset.ciudad = propiedad.ciudad;
        tarjeta.dataset.ubicacion = propiedad.ubicacion;
        tarjeta.dataset.tipo = propiedad.tipo; 
        tarjeta.dataset.area = propiedad.area;

        const mapaSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.748678842572!2d${propiedad.coordenadas.lng}!3d${propiedad.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5f500c17%3A0x5b02910719db8c3a!2sGoogleplex!5e0!3m2!1ses!2s!4v1635946085203!5m2!1ses!2s`;

        tarjeta.innerHTML = `
            <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
            <div class="contenido">
                <h3>${propiedad.titulo}</h3>
                <p>LIMA: ${propiedad.ciudad}, ${propiedad.ubicacion}</p>
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







function contactar(titulo) {
    const propiedad = propiedades.find(prop => prop.titulo === titulo);
    document.getElementById('titulo-propiedad-info').innerText = propiedad.titulo;
    document.getElementById('descripcion-propiedad-info').innerText = propiedad.descripcion;
    document.getElementById('precio-propiedad-info').innerText = `$${propiedad.precio}`;
    document.getElementById('ciudad-propiedad-info').innerText = propiedad.ciudad;
    document.getElementById('ubicacion-propiedad-info').innerText = propiedad.ubicacion;
    document.getElementById('area-propiedad-info').innerText = propiedad.area;

      // Asignar valores a los campos ocultos del formulario emailJS
      document.getElementById('titulo-propiedad').value = propiedad.titulo; 
      document.getElementById('descripcion-propiedad').value = propiedad.descripcion;
      document.getElementById('precio-propiedad').value = propiedad.precio;
      document.getElementById('ciudad-propiedad-info').innerText = propiedad.ciudad;
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




function mostrarPropiedadFiltrada_Index(idPropiedad) {
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
                <p>Ubicación: ${propiedadSeleccionada.ciudad},${propiedadSeleccionada.ubicacion}</p>
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

