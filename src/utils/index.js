export function confirmarAsistencia() {
    const mensaje = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia al Baby Shower.");
    const telefono = "+525587260776"; 
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
}

export function verUbicacion() {
    window.open("https://maps.app.goo.gl/JMPfMoyeEt4rnpkHA", "_blank");
}


