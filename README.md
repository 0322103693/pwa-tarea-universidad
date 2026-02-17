```markdown
# PWA Tarea Universidad

## Descripción

Este proyecto es una **Aplicación Web Progresiva (PWA)** desarrollada como parte de una tarea universitaria.

La aplicación es **instalable** y funciona en **modo offline** gracias al uso de:

- Web App Manifest (`manifest.json`)
- Service Worker (`sw.js`)
- Cache Storage (App Shell)

---

## Enlace del Proyecto Publicado

La aplicación está disponible en:

👉 https://0322103693.github.io/pwa-tarea-universidad/

Este enlace permite instalar la aplicación directamente desde cualquier dispositivo compatible.

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

El archivo `manifest.json` permite que la aplicación web sea **instalable**.

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
Almacena en caché los recursos principales del proyecto.

### activate
Elimina versiones antiguas del caché para evitar conflictos.

### fetch
Intercepta las solicitudes de red y responde desde el caché cuando es posible, permitiendo el funcionamiento offline.

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

## Cómo verificar que es instalable (Desktop)

En Chrome o Edge:

1. Abrir la aplicación en localhost o en el enlace de GitHub Pages.
2. Hacer clic en el menú ⋮.
3. Seleccionar **Install** o **Install app**.
4. También puede verificarse en DevTools → Application → Manifest.

---

## Instalación en Android

1. Abrir el enlace del proyecto en **Google Chrome**:
   [https://0322103693.github.io/pwa-tarea-universidad/](https://0322103693.github.io/pwa-tarea-universidad/)
2. Esperar unos segundos para que cargue completamente.
3. Tocar el menú ⋮ (arriba a la derecha).
4. Seleccionar **Install app** o **Add to Home screen**.
5. Confirmar instalación.

La aplicación aparecerá en la pantalla de inicio y funcionará como una app independiente.

---

## Instalación en iOS (iPhone)

⚠️ En iPhone debe usarse **Safari** (no Chrome).

1. Abrir el enlace en **Safari**:
   [https://0322103693.github.io/pwa-tarea-universidad/](https://0322103693.github.io/pwa-tarea-universidad/)
2. Tocar el botón de **Compartir** (cuadrado con flecha hacia arriba).
3. Seleccionar **Add to Home Screen** / **Agregar a inicio**.
4. Confirmar.

La aplicación se agregará a la pantalla principal como acceso directo.

---

## Cómo probar el modo offline

1. Abrir DevTools.
2. Ir a la pestaña **Network**.
3. Activar la opción **Offline**.
4. Recargar la página.

La aplicación continuará funcionando gracias al caché del Service Worker.

---

## Conclusión

Este proyecto demuestra la implementación básica de una Aplicación Web Progresiva (PWA), integrando instalación, funcionamiento offline y manejo de caché mediante Service Workers, cumpliendo con los requisitos solicitados en la tarea.

````

