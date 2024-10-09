
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
