document.addEventListener('DOMContentLoaded', function() {
    const spanishButton = document.getElementById('spanish');
    const englishButton = document.getElementById('english');

    spanishButton.addEventListener('click', function() {
        translatePage('es');
        spanishButton.classList.add('active');
        englishButton.classList.remove('active');
    });

    englishButton.addEventListener('click', function() {
        translatePage('en');
        spanishButton.classList.remove('active');
        englishButton.classList.add('active');
    });

    function translatePage(language) {
        const elementsToTranslate = {
            es: {
                'Bienvenidos a Zaña': 'Bienvenidos a Zaña',
                'Descubre la historia y patrimonio cultural de Zaña a través de nuestra plataforma digital interactiva.': 'Descubre la historia y patrimonio cultural de Zaña a través de nuestra plataforma digital interactiva.',
                'Sobre Zaña': 'Sobre Zaña',
                'Zaña es una localidad rica en historia y cultura, ubicada en la región de Lambayeque, Perú. Este proyecto busca documentar, preservar y difundir su valioso patrimonio cultural.': 'Zaña es una localidad rica en historia y cultura, ubicada en la región de Lambayeque, Perú. Este proyecto busca documentar, preservar y difundir su valioso patrimonio cultural.',
                'Galería': 'Galería',
                'Testimonios': 'Testimonios',
                'La plataforma nos ha permitido redescubrir nuestra historia y conectarnos con nuestras raíces culturales.': 'La plataforma nos ha permitido redescubrir nuestra historia y conectarnos con nuestras raíces culturales.',
                'Un recurso invaluable para la preservación de nuestro patrimonio.': 'Un recurso invaluable para la preservación de nuestro patrimonio.',
                'Contacto': 'Contacto',
                'Nombre:': 'Nombre:',
                'Correo electrónico:': 'Correo electrónico:',
                'Mensaje:': 'Mensaje:',
                'Enviar': 'Enviar',
                'Historia y Patrimonio Cultural de Zaña': 'Historia y Patrimonio Cultural de Zaña',
                'Todos los derechos reservados.': 'Todos los derechos reservados.',
                'Inicio': 'Inicio',
                'Sobre Zaña': 'Sobre Zaña',
                'Galería': 'Galería',
                'Testimonios': 'Testimonios',
                'Contacto': 'Contacto'
            },
            en: {
                'Bienvenidos a Zaña': 'Welcome to Zaña',
                'Descubre la historia y patrimonio cultural de Zaña a través de nuestra plataforma digital interactiva.': 'Discover the history and cultural heritage of Zaña through our interactive digital platform.',
                'Sobre Zaña': 'About Zaña',
                'Zaña es una localidad rica en historia y cultura, ubicada en la región de Lambayeque, Perú. Este proyecto busca documentar, preservar y difundir su valioso patrimonio cultural.': 'Zaña is a locality rich in history and culture, located in the Lambayeque region of Peru. This project aims to document, preserve, and disseminate its valuable cultural heritage.',
                'Galería': 'Gallery',
                'Testimonios': 'Testimonials