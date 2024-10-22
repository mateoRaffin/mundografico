// Variable para controlar si los anuncios ya fueron mostrados
let firstBannerShown = false;
let secondBannerShown = false;

// Función para mostrar el primer banner
function showFirstBanner() {
    return Swal.fire({
        title: "¡<strong>Regalos fin de Año</strong>!",
        text: "¡Aprovechá nuestras Ofertas!",
        showCancelButton: true,
        confirmButtonText: "Pedir Ahora",
        confirmButtonColor: "#0f9ac0",
        imageUrl: "../multimedia/img/productos/regalosfindeaño.jpeg",
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
window.onload = function(){
    showFirstBanner(); //Lo mostraría al cargar la página
};
