// SCRIPT FORMULARIO LOGIN- VALIDACION

   function validarFormulario(event) {
       // Prevenir el envío del formulario si hay errores
       event.preventDefault();
   
       // Recupero los valores del formulario y los pongo en 3 constantes
       const nombreUsuario = document.getElementById('usuario').value;
       const contrasena = document.getElementById('contrasena').value;
       const checkbox = document.getElementById('aceptar').checked;
   
       // Valido el nombre de usuario
       if (nombreUsuario.length > 30) {
           alert('El nombre de usuario debe tener hasta 30 caracteres.');
           return false;
       }
   
       // Valido la contraseña
       if (contrasena.length <= 5) {
           alert('La contraseña debe tener más de 5 caracteres.');
           return false;
       }
   
       // Valido el checkbox
       if (!checkbox) {
           alert('Debes aceptar los términos.');
           return false;
       }
   
   // Redirigir según el valor del usuario
   if (nombreUsuario === 'danila') {
                   window.location.href = 'admin.html'; // Redirige al HTML de administrador
               } else if (nombreUsuario === 'zaiart') {
                   window.location.href = 'https://www.youtube.com/@zaiartt'; // Redirige al HTML de creador de contenido
               } else {
                   window.location.href = 'index.html'; // Redirige al HTML de landing page
               }
   
               return true;
           }



// SCRIPT DE LA PAGINA DEL HOME

// DIV DE CARGA1
document.addEventListener('DOMContentLoaded', function() {
    const cargaDiv = document.getElementById('carga');
    
                // Mostrar el contenido real después de 1 segundo
                setTimeout(function() {
                    cargaDiv.style.display = 'none'; // Ocultar el div de carga
                    mensajeBienvenidaDiv.style.display = 'block'; // Mostrar el mensaje de bienvenida
                }, 1800); // 1.8 segundo
            })

// DIV DE CARGA2
document.addEventListener('DOMContentLoaded', function() {
    const cargaDiv = document.getElementById('carga2');
    
                // Mostrar el contenido real después de 1 segundo
                setTimeout(function() {
                    cargaDiv.style.display = 'none'; // Ocultar el div de carga
                    mensajeBienvenidaDiv.style.display = 'block'; // Mostrar el mensaje de bienvenida
                }, 1800); // 1.8 segundo
            })


// MENSAJE COOKIES

document.addEventListener('DOMContentLoaded', () => {
    const mensajeCookies = document.getElementById('mensajeCookies');
    const aceptarCookiesBtn = document.getElementById('aceptarCookies');
    let cookiesAceptadas = false;
            
        function mostrarMensajeCookies() {
            if (!cookiesAceptadas) {
                 mensajeCookies.style.display = 'block';
                        // Bloquear el scroll
                        document.body.style.overflow = 'hidden';
            }
        }
            
        function aceptarCookies() {
            cookiesAceptadas = true;
            mensajeCookies.style.display = 'none';
            // Permitir el scroll de nuevo
            document.body.style.overflow = '';
        }
            
        window.addEventListener('scroll', () => {
            // Obtener la altura total del documento
            const alturaTotal = document.documentElement.scrollHeight;
            // Obtener la altura de la ventana del navegador
            const alturaVentana = window.innerHeight;
            // Obtener la distancia desde el top del scroll
            const distanciaScroll = window.scrollY;
            
            // Si el usuario ha scrolleado más allá de la mitad de la página
            if (distanciaScroll + alturaVentana >= alturaTotal / 2) {
                mostrarMensajeCookies();
            }
        });
            
        aceptarCookiesBtn.addEventListener('click', aceptarCookies);
    });
                       
  


// SCRIPT DEL NAV
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', () => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});


// TRANSICION FADE IN EN TITULOS DEL CONTENEDOR2

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor2 #titulos');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.4 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});

// TRANSICION FADE IN EN TEXTO DEL CONTENEDOR3

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor2 #textos');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.4 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});


// TRANSICION FADE IN EN TITULOS DEL CONTENEDOR3

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#contenedor3 #textos2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Cambia el umbral si quieres ajustar cuándo se activa el efecto

    sections.forEach(section => {
        observer.observe(section);
    });
});




// CARRUSEL CONTENEDOR 3

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Opcional: Automatizar el cambio de diapositivas
setInterval(nextSlide, 5000);

// Mostrar la primera diapositiva al cargar
showSlide(currentIndex);



//INSERTANDO COMPONENTES 
//PRENAV
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/prenav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('prenavPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


// NAV 
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('navPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

// FOOTER
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footerPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


// SCRIPT DE LA PAGINA DE LOS PRODUCTOS
// FUNCION FETCH DE JSON- PRODUCTOS- MERCHANDISING


document.addEventListener('DOMContentLoaded', function() {
fetch('productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(productos => {
        const contenedor = document.getElementById('productosContainer');
        productos.forEach(producto => {
            // Verifica el stock antes de crear la card
            if (producto.stock > 0) {
                // Crear la card
                const card = document.createElement('div');
                card.className = 'cartasProductos';

                // Agregar la imagen
                const imagen = document.createElement('img');
                imagen.src = producto.imagen;
                imagen.alt = producto.nombre;
                card.appendChild(imagen);

                // Agregar el nombre
                const nombre = document.createElement('h3');
                nombre.textContent = producto.nombre;
                card.appendChild(nombre);

                // Agregar el precio
                const precio = document.createElement('p');
                precio.className = 'precio';
                precio.textContent = `$${producto.precio}`;
                card.appendChild(precio);

                // Agregar el stock
                const stock = document.createElement('p');
                stock.className = 'stock';
                stock.textContent = `Stock: ${producto.stock}`;
                card.appendChild(stock);

                // Agregar el boton
                const boton = document.createElement('button');
                boton.className = 'boton';
                boton.textContent = producto.boton;
                card.appendChild(boton);

                // Agregar la card al contenedor
                contenedor.appendChild(card);
            }
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la petición Fetch:', error);
    });
});

// SCRIPT DE LA PAGINA DE LOS COMICS
// FUNCION FETCH DE JSON- PRODUCTOS- COMICS


document.addEventListener('DOMContentLoaded', function() {
    fetch('comics.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(productos => {
            const contenedor = document.getElementById('comicsContainer');
            productos.forEach(producto => {
                // Verifica el stock antes de crear la card
                if (producto.stock > 0) {
                    // Crear la card
                    const card = document.createElement('div');
                    card.className = 'cartasProductos';
    
                    // Agregar la imagen
                    const imagen = document.createElement('img');
                    imagen.src = producto.imagen;
                    imagen.alt = producto.nombre;
                    card.appendChild(imagen);
    
                    // Agregar el nombre
                    const nombre = document.createElement('h3');
                    nombre.textContent = producto.nombre;
                    card.appendChild(nombre);
    
                    // Agregar el precio
                    const precio = document.createElement('p');
                    precio.className = 'precio';
                    precio.textContent = `$${producto.precio}`;
                    card.appendChild(precio);
    
                    // Agregar el stock
                    const stock = document.createElement('p');
                    stock.className = 'stock';
                    stock.textContent = `Stock: ${producto.stock}`;
                    card.appendChild(stock);

                    // Agregar la saga
                    const saga = document.createElement('p');
                    saga.className = 'saga';
                    saga.textContent = `Saga: ` + producto.saga;
                    card.appendChild(saga);
    
                    // Agregar el boton
                    const boton = document.createElement('button');
                    boton.className = 'boton';
                    boton.textContent = producto.boton;
                    card.appendChild(boton);
    
                    // Agregar la card al contenedor
                    contenedor.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
    });



/* SCRIPT DE FORMULARIO DE CONTACTO (VALIDACION DE FORMULARIO+ API Y MAGIC LOOPS)*/


// Función que envía el correo usando la API
function enviarMail(email, nombre, apellido, mensaje) {
    // Codificar los valores para la URL
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);
    
    // URL de la API con los parámetros codificados
    const url = `https://magicloops.dev/api/loop/run/c92fb25f-07a1-4346-aed5-353e44f6290d?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}`;
   
    // Enviar la solicitud a la API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); // Respuesta esperada
            window.location.href = "mensajeEnviado.html"; // Redirigir a página de éxito
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            alert("Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.");
        });
}

// Función que se ejecuta cuando se envía el formulario
function enviarCorreo() {
    // Obtener los valores de los campos del formulario
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario").value;

    // Verificar que todos los campos estén completos
    if (!email || !usuario || !apellido || !mensaje) {
        // Si algún campo está vacío, mostrar una alerta y no enviar el formulario
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Si todo está completo, enviar el correo
    console.log("Datos a enviar:", email, usuario, apellido, mensaje);
    enviarMail(email, usuario, apellido, mensaje);

    // Retornar false para evitar que el formulario se envíe de forma tradicional
    return false;
}



// HAMBURGUESA


function abrirHamburguesa() {
    const mainNav = document.getElementById('main-nav');
    if (mainNav.style.display === 'none' || mainNav.style.display === '') {
        mainNav.style.display = 'block'; // Mostrar el div
    } else {
        mainNav.style.display = 'none'; // Ocultar el div
    }




}


 



