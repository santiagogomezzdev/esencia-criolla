document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Recolectar datos
    const nombre = document.getElementById('nombre').value;
    
    const productoElement = document.querySelector('input[name="producto"]:checked');
    const producto = productoElement ? productoElement.value : 'No especificado';
    
    const cantidad = document.getElementById('cantidad').value;
    
    const aderezosElements = document.querySelectorAll('input[name="aderezos"]:checked');
    let aderezos = Array.from(aderezosElements).map(el => el.value).join(', ');
    if (!aderezos) aderezos = 'Sin aderezos';

    const extrasElements = document.querySelectorAll('input[name="extras"]:checked');
    let extras = Array.from(extrasElements).map(el => el.value).join(', ');
    if (!extras) extras = 'Sin extras';

    const modalidadElement = document.querySelector('input[name="modalidad"]:checked');
    const modalidad = modalidadElement ? modalidadElement.value : 'No especificada';
    
    const observaciones = document.getElementById('observaciones').value || 'Ninguna';

    // 2. Construir el mensaje formateado para la API de WhatsApp
    const numero = '5493751335955';
    let mensaje = `¡Hola! Soy ${nombre} y quiero hacer un pedido en Esencia Criolla.%0A%0A`;
    mensaje += `*Detalle del pedido:*%0A`;
    mensaje += `- Producto: ${producto}%0A`;
    mensaje += `- Cantidad: ${cantidad}%0A`;
    
    // Si el producto es brocheta, quizás no apliquen aderezos/extras, pero lo mandamos igual para que quede registrado
    mensaje += `- Aderezos: ${aderezos}%0A`;
    mensaje += `- Extras: ${extras}%0A`;
    mensaje += `- Modalidad: ${modalidad}%0A`;
    
    if(observaciones !== 'Ninguna') {
        mensaje += `%0A*Observaciones:* ${observaciones}`;
    }

    // 3. Redirigir
    const url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, '_blank');
});