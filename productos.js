// Variable para controlar si los anuncios ya fueron mostrados
let firstBannerShown = false;
let secondBannerShown = false;

// Función para mostrar el primer banner
function showFirstBanner() {
    return Swal.fire({
        title: "<strong>La Mejor Calidad</strong>",
        text: "¡Al mejor Precio!",
        showCancelButton: true,
        confirmButtonText: "Pedir Ahora",
        confirmButtonColor: "#0f9ac0",
        imageUrl: "../multimedia/img/productos/agenda2025.jpg",
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
window.onload = function(){
    showFirstBanner(); //Lo mostraría al cargar la página
};
