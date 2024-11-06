//Variable para controlar si los anuncios ya fueron mostrados
let firstBannerShown = false;
let secondBannerShown = false;

//Función para mostrar el primer banner
function showFirstBanner() {
    return Swal.fire({
        title: "¡<strong>Regalos fin de Año</strong>!",
        text: "¡Aprovechá nuestras Ofertas!",
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
        imageUrl: "./multimedia/img/productos/regalosfindeaño.jpeg",
        imageAlt: "Regalos fin de Año",
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
        title: "¡Oferta Especial!",
        text: "¡Agendas!",
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
        imageUrl: "./multimedia/img/productos/agendas2025-bgblue.jpeg",
        imageAlt: "Agendas",
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
