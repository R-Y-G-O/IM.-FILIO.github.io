//contenido de navbar
const navbarHTML = `
<!-- Navbar normal -->
<div class="navbar-container">
    <nav class="navbar">
        <div class="navbar-left">
            <img src="img/logo/Logo_Verde_sin_fondo.png" alt="Logo Principal" class="logo">
        </div>
        <ul class="navbar-center">
            <li><a href="index.html">INICIO</a></li>
            <li><a href="nosotros.html">NOSOTROS</a></li>
            <li><a href="servicios.html">SERVICIOS</a></li>
            <li><a href="venta.html">COMPRAR</a></li>
            <li><a href="contacto.html">CONTÁCTANOS</a></li>
        </ul>
        <div class="navbar-right">
            <div class="social-icons">
                <a href="https://www.facebook.com/gmnorteconstructora/"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/gmnorteconstructora/"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </nav>
</div>

<div class="mobile-navbar">
    <span class="menu-icon" onclick="toggleMobileMenu()">&#9776;</span>
    <img src="img/logo/Logo_Verde_sin_fondo.png" alt="Logo Móvil" class="mobile-logo-collapsed">
    <ul class="mobile-menu">
        <li class="mobile-menu-item"><a href="index.html">INICIO</a></li>
        <li class="mobile-menu-item"><a href="nosotros.html">NOSOTROS</a></li>
        <li class="mobile-menu-item"><a href="servicios.html">SERVICIOS</a></li>
        <li class="mobile-menu-item"><a href="venta.html">COMPRAR</a></li>
        <li class="mobile-menu-item"><a href="contacto.html">CONTÁCTANOS</a></li>
    </ul>
    <img src="img/logo/Logo_Verde_sin_fondo.png" alt="Logo Móvil" class="mobile-logo">
</div>


`;

function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
}
document.addEventListener('DOMContentLoaded', loadNavbar);


function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLogo = document.querySelector('.mobile-logo');
    const mobileLogoCollapsed = document.querySelector('.mobile-logo-collapsed');

    if (!mobileMenu || !mobileLogo || !mobileLogoCollapsed) {
        console.error("Uno o más elementos no existen en el DOM.");
        return; 
    }

    const isMenuOpen = mobileMenu.style.display === 'block';

    mobileMenu.style.display = isMenuOpen ? 'none' : 'block';
    mobileLogo.style.display = isMenuOpen ? 'none' : 'block';
    mobileLogoCollapsed.style.display = isMenuOpen ? 'block' : 'none';
    mobileMenu.classList.toggle('open', !isMenuOpen);
}



window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    } else {
        console.error('El elemento .navbar no existe en el DOM.');
    }
});




//contenido del pie de pagina
const pieHTML = `
<div class="footer-container">
    <div class="footer-logo">
        <img src="img/logo/Logo_Verde_sin_fondo.png" alt="Logo de la Inmobiliaria">
    </div>
    <div class="footer-info">
        <div class="footer-column">
            <h4>Sobre Nosotros</h4>
            <p>"La armonia de vivir"</p>
            <p>Somos una empresa especializada en el diseño y construcción de edificaciones residenciales y comerciales. Contamos con amplia experiencia en el sector inmobiliario, garantizando calidad y excelencia en cada proyecto que emprendemos.</p>
        </div>
        <div class="footer-column">
            <h4>Contacto</h4>
            <ul>
                <li><i class="fas fa-map-marker-alt"></i>Avenida Vice N°282 - Urb. Santa Ana - Piura</li>
                <li><i class="fas fa-phone-alt"></i>981092552 / 073-613737</li>
                <li><i class="fas fa-envelope"></i>administracion@gmnorte.com</li>
                <li><i class="fas fa-envelope"></i>proyectos@gmnorte.com</li>
            </ul>
        </div>
        <div class="footer-column">
            <h4>Síguenos</h4>
            <div class="footer-social">
                <a href="https://www.facebook.com/gmnorteconstructora/"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/gmnorteconstructora/"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="footer-ruc">
                RUC: 12345678901
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="divider"></div>
        <p class="marca">&copy; 2024 R.Y.G.O Todos los derechos reservados.</p>
        <meta name="author" content="[R.Y.G.O]">
        <meta name="copyright" content="© 2024 [R.Y.G.O]. Todos los derechos reservados.">

    </div>
</div>

`;

function loadpie() {
    const pieContainer = document.getElementById('pie-container');
    if (pieContainer) {
        pieContainer.innerHTML = pieHTML;
    }
}

document.addEventListener('DOMContentLoaded', loadpie);





//BOTON SCROLL
// boton subir arriba de la pagina 
document.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) { 
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
  }, { passive: true });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    const scrollDuration = 2000; 
    const scrollStep = -window.scrollY / (scrollDuration / 20);
    
    function step() {
        if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
  }
 
  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollToTopButton) {
        document.addEventListener('scroll', function() {
            if (window.scrollY > 200) { 
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        }, { passive: true });

        scrollToTopButton.addEventListener('click', function() {
            scrollToTop();
        });
    }
});

function scrollToTop() {
    const scrollDuration = 2000; 
    const scrollStep = -window.scrollY / (scrollDuration / 20);
    
    function step() {
        if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}
