

```markdown
# PWA Tarea Universidad

## Descripción

Este proyecto es una **Aplicación Web Progresiva (PWA)** desarrollada como parte de una tarea universitaria.

La aplicación es **instalable** y funciona en **modo offline** gracias al uso de:

- Web App Manifest (`manifest.json`)
- Service Worker (`sw.js`)
- Cache Storage (App Shell)

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Web App Manifest
- Service Worker API

---

## Estructura del proyecto

```

PWA-TAREA/
├── index.html
├── styles.css
├── app.js
├── sw.js
├── manifest.json
└── Icons/
├── icon-192.png
└── icon-512.png

````

La carpeta `Icons` contiene los iconos necesarios para que la aplicación pueda instalarse correctamente.

---

## 1. Web App Manifest (manifest.json)

El archivo `manifest.json` es el elemento principal que permite que la aplicación web sea **instalable**.

Proporciona información que el sistema operativo utiliza para mostrar la aplicación como si fuera nativa.

Incluye:

- `name`: Nombre completo de la aplicación.
- `short_name`: Nombre corto que aparece debajo del icono.
- `start_url`: Página inicial al abrir la app.
- `display: "standalone"`: Permite que se vea como aplicación independiente.
- `background_color` y `theme_color`: Colores del entorno visual.
- `icons`: Iconos en tamaño 192x192 y 512x512 requeridos para la instalación.

---

## 2. Service Worker (sw.js)

El Service Worker es un script que se ejecuta en segundo plano y actúa como intermediario entre la aplicación y la red.

Funciones principales:

- Cachear los archivos esenciales (App Shell).
- Interceptar peticiones de red.
- Permitir que la aplicación funcione sin conexión.

Eventos implementados:

### install
Se encarga de almacenar en caché los recursos principales del proyecto.

### activate
Elimina versiones antiguas del caché para evitar conflictos.

### fetch
Intercepta las solicitudes de red y responde desde el caché si es posible, permitiendo el funcionamiento offline.

---

## Cómo ejecutar el proyecto localmente

⚠️ No funciona abriendo el archivo con doble clic (`file://`).  
Debe ejecutarse con un servidor local.

### Opción 1: Python

En la carpeta del proyecto ejecutar:

```bash
python -m http.server 8000
````

Luego abrir en el navegador:

```
http://localhost:8000
```

### Opción 2: VS Code (Live Server)

1. Instalar la extensión **Live Server**.
2. Click derecho sobre `index.html`.
3. Seleccionar **Open with Live Server**.

---

## Cómo verificar que es instalable

En Chrome o Edge:

1. Abrir la aplicación en `localhost` o en HTTPS.
2. Hacer clic en el menú ⋮.
3. Seleccionar **Install**.

También puede verificarse en:

DevTools → Application → Manifest

---

## Cómo probar el modo offline

1. Abrir DevTools.
2. Ir a la pestaña **Network**.
3. Activar la opción **Offline**.
4. Recargar la página.

La aplicación continuará funcionando gracias al caché del Service Worker.

---

## Conclusión

Este proyecto demuestra el funcionamiento básico de una Aplicación Web Progresiva, implementando instalación, funcionamiento offline y manejo de caché mediante Service Workers.

````
