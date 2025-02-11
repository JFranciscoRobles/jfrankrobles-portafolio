---
title: "2. Instalación y Configuración Inicial de Meilisearch"
description: "En un mundo donde la información crece exponencialmente y los usuarios exigen respuestas inmediatas, la búsqueda instantánea se ha convertido en un pilar fundamental para cualquier aplicación moderna."
pubDate: "Jan 02 2024"
heroImage: "/blog-placeholder-3.jpg"
before: "busqueda-elastica-guia-meilisearch-reactjs"
after: ""
---

En este capítulo, te guiaremos a través de dos métodos para instalar y configurar Meilisearch: **instalación manual mediante binarios** y **despliegue en Railway**. Estas opciones son ideales si buscas control total sobre tu entorno o una solución en la nube sin complicaciones.

---

## 📌 1. Instalación Manual (Binarios)

La instalación manual es ideal si deseas ejecutar Meilisearch directamente en tu servidor o máquina local. Sigue estos pasos:

### 🔹 Paso 1: Descargar el Binario

1. Visita la página de [releases de Meilisearch en GitHub](https://github.com/meilisearch/meilisearch/releases).
2. Descarga el binario adecuado para tu sistema operativo (Linux, macOS o Windows).

### 🔹 Paso 2: Ejecutar Meilisearch

1. Descomprime el archivo descargado.
2. Abre una terminal y navega hasta la carpeta donde descomprimiste el binario.
3. Ejecuta el siguiente comando:

   ```bash
   ./meilisearch
   ```

Esto iniciará Meilisearch en tu máquina local, accesible en [http://localhost:7700](http://localhost:7700).

### 🔹 Paso 3: Verificar la Instalación

Abre tu navegador y visita [http://localhost:7700](http://localhost:7700). Si todo está correcto, verás un mensaje de bienvenida de Meilisearch.

---

## ☁️ 2. Instalación en Railway

Railway es una plataforma en la nube que permite desplegar aplicaciones y servicios fácilmente. Es una excelente opción si no quieres manejar la infraestructura por tu cuenta.

### 🔹 Paso 1: Crear una Cuenta en Railway

1. Visita [Railway](https://railway.app/) y crea una cuenta si aún no tienes una.

### 🔹 Paso 2: Desplegar Meilisearch

1. Accede a tu panel de Railway y haz clic en **New Project**.
2. Selecciona **Deploy from GitHub** si tienes un repositorio con Meilisearch o elige **Deploy a Template**.
3. Busca y selecciona la plantilla de Meilisearch.

### 🔹 Paso 3: Configurar Variables de Entorno

1. En el panel de Railway, ve a la sección **Variables**.
2. Configura las variables de entorno necesarias, como `MEILI_MASTER_KEY` para la autenticación.

### 🔹 Paso 4: Acceder a Meilisearch

Una vez que el despliegue esté completo, Railway te proporcionará una URL para acceder a tu instancia de Meilisearch. Visítala en tu navegador para verificar que todo funciona correctamente.

---

## ⚙️ Configuración Básica

Una vez que Meilisearch esté funcionando, es importante realizar algunas configuraciones básicas.

### 🔹 1. Crear un Índice

Un índice organiza los datos para facilitar la búsqueda. Puedes crear uno mediante la API:

```bash
curl -X POST 'http://localhost:7700/indexes' \
 -H 'Content-Type: application/json' \
 --data-binary '{
   "uid": "products",
   "primaryKey": "id"
 }'
```

Este comando crea un índice llamado `products` con `id` como clave primaria.

### 🔹 2. Indexar Datos

Para agregar datos al índice, usa el siguiente comando:

```bash
curl -X POST 'http://localhost:7700/indexes/products/documents' \
 -H 'Content-Type: application/json' \
 --data-binary '[
   {
     "id": 1,
     "name": "Running Shoes",
     "description": "Lightweight shoes for running",
     "price": 120
   },
   {
     "id": 2,
     "name": "Casual Sneakers",
     "description": "Comfortable sneakers for everyday use",
     "price": 80
   }
 ]'
```

### 🔹 3. Realizar una Búsqueda

Una vez que los datos están indexados, puedes realizar búsquedas:

```bash
curl -X GET 'http://localhost:7700/indexes/products/search' \
  -H 'Content-Type: application/json' \
  --data-binary '{"q": "shoes"}'
```

Este comando devolverá todos los documentos que coincidan con la consulta **"shoes"**.

---

## 🎯 Conclusión

Con Meilisearch instalado y configurado, ya sea localmente o en Railway, tienes una base sólida para implementar **búsqueda elástica** en tu proyecto. En los siguientes capítulos, exploraremos cómo integrarlo en una aplicación real, personalizar la búsqueda y optimizar el rendimiento.

---

## 📚 Recursos Adicionales

- 📖 [Documentación Oficial de Meilisearch](https://docs.meilisearch.com)
- 🔗 [Repositorio de GitHub](https://github.com/meilisearch/meilisearch)
- 🚀 [Guía de Instalación en Railway](https://docs.railway.app/)

---

¡Con estos pasos, ya tienes Meilisearch en funcionamiento! En el próximo capítulo, veremos cómo integrarlo en una aplicación web. **¡Sigue leyendo! 🚀**
