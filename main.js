// Variable para controlar si los anuncios ya fueron mostrados
let firstBannerShown = false;
let secondBannerShown = false;

// Función para mostrar el primer banner
function showFirstBanner() {
    return Swal.fire({
        title: "¡Agendas <strong>Día de la Madre</strong>!",
        text: "¡Aprovechá la Oferta y reservá tu agenda!",
        showCancelButton: true,
        confirmButtonText: "Pedir Ahora",
        confirmButtonColor: "#0f9ac0",
        imageUrl: "./multimedia/img/productos/agendas-publi01.jpeg",
        imageAlt: "Agendas día de la madre",
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

// Función para mostrar el segundo banner en la parte inferior izquierda
function showSecondBanner() {
    return Swal.fire({
        title: "¡Oferta Especial!",
        text: "¡Agendas Día de la Madre!",
        imageUrl: "./multimedia/img/productos/agendas-publi02.jpeg",
        imageAlt: "Agendas día de la madre",
        showConfirmButton: true,
        confirmButtonText: "Pedir",
        confirmButtonColor: "#0f9ac0",
        position: 'bottom-start',
        width: '15%',
        padding: '1px',
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
window.onload = function(){
    showFirstBanner(); //Lo mostraría al cargar la página
};
//Evento scroll - segundo banner
window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;
    if(scrollPosition > 400 && !secondBannerShown){
        secondBannerShown = true;
        showSecondBanner();
    }
});