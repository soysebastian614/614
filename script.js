// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Botón CTA del hero
document.getElementById('ctaBtn').addEventListener('click', () => {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Simulación de envío de formulario (solo muestra mensaje)
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = '✅ Mensaje enviado (simulado). ¡Gracias!';
    setTimeout(() => msg.textContent = '', 3000);
});
