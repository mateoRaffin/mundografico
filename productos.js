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
        imageUrl: "../multimedia/img/productos/agendas-publi01.jpeg",
        imageAlt: "Agendas día de la madre",
        padding: '1px',
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
window.onload = function(){
    showFirstBanner(); //Lo mostraría al cargar la página
};
