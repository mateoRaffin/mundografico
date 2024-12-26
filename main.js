//Variable para controlar si los anuncios ya fueron mostrados
let firstBannerShown = false;
let secondBannerShown = false;

//Función para mostrar el primer banner
function showFirstBanner() {
    return Swal.fire({
        title: "<strong>La Mejor Calidad</strong>",
        text: "¡Al mejor Precio!",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
        },
        showCancelButton: true,
        confirmButtonText: "Pedir Ahora",
        confirmButtonColor: "#0f9ac0",
        imageUrl: "./multimedia/img/productos/agenda2025.jpg",
        imageAlt: "Agendas Personalizadas 2025",
        padding: '1px',
        width: "500px",
        height: "450px",
        backdrop: false,
        customClass: {
            popup: 'first-banner-swal',
            image: 'banner-image'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://wa.me/+5493644520797";
        }
    });
}

//Función para mostrar el segundo banner en la parte inferior izquierda
function showSecondBanner() {
    return Swal.fire({
        title: "¡Agendas 2025!",
        text: "¡Escribinos ahora por Whatsapp!",
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__slow
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
        },
        imageUrl: "./multimedia/img/productos/agenda2025.jpg",
        imageAlt: "Agendas Personalizadas 2025",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Pedir",
        confirmButtonColor: "#0f9ac0",
        position: 'bottom-start',
        width: "299px",
        height: "300px",
        backdrop: false,
        customClass: {
            popup: 'second-banner-swal',
            image: 'banner-image'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "https://wa.me/+5493644520797";
        }
    });
}
//Mostrar primer banner
window.onload = function () {
    showFirstBanner(); //Lo mostraría al cargar la página
};
//Evento scroll - segundo banner
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 400 && !secondBannerShown) {
        secondBannerShown = true;
        showSecondBanner();
    }
});
