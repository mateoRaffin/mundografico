//Publicidad agendas día de la madre
Swal.fire({
    title: "¡Agendas Día de la Madre!",
    text: "¡Aprovechá la Oferta y reservá tu agenda!",
    showCancelButton: true,
    confirmButtonText: "Pedir Ahora",
    confirmButtonColor: "#3085d6",
    imageUrl: "./multimedia/img/productos/agendas-publi01.jpeg",
    imageAlt: "Agendas día de la madre"
  }).then((result) => {
    if (result.isConfirmed) {
        // Reemplaza el número de teléfono con el de tu empresa
        window.location.href = "https://wa.me/+5493644520797";
    }
});