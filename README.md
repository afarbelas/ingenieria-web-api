# API REST de Productos

API REST desarrollada con Node.js y Express como proyecto de la asignatura Ingeniería Web.

## Tecnologías

- Node.js
- Express
- JavaScript
- Git
- GitHub
- Render

## Descripción

La API permite consultar un conjunto de productos y realizar diferentes operaciones sobre ellos mediante endpoints HTTP.

Las operaciones implementadas son:

- Obtener todos los productos.
- Filtrar productos por precio.
- Calcular el valor total del inventario.
- Encontrar el producto con mayor stock.
- Obtener productos de la categoría Tecnología.
- Buscar un producto por ID.
- Contar productos agrupados por categoría.

## Instalación

Clonar el repositorio:

    git clone https://github.com/afarbelas/ingenieria-web-api.git

Ingresar al directorio:

    cd ingenieria-web-api

Instalar las dependencias:

    npm install

## Ejecución

Para ejecutar el servidor en modo desarrollo:

    npm run dev

Para ejecutar el servidor normalmente:

    npm start

La API estará disponible localmente en:

    http://localhost:3000

## API desplegada

La API está disponible públicamente en Render:

    https://ingenieria-web-api.onrender.com

## Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/` | Verificar estado de la API |
| GET | `/api/productos` | Obtener todos los productos |
| GET | `/api/productos/precio-mayor` | Filtrar productos por precio |
| GET | `/api/productos/inventario` | Calcular valor total del inventario |
| GET | `/api/productos/mayor-stock` | Obtener producto con mayor stock |
| GET | `/api/productos/tecnologia` | Obtener productos de Tecnología |
| GET | `/api/productos/por-categoria` | Contar productos por categoría |
| GET | `/api/productos/:id` | Buscar producto por ID |

## Ejemplo de filtro por precio

La ruta permite establecer un precio mínimo mediante el parámetro `precioMinimo`.

    GET /api/productos/precio-mayor?precioMinimo=1000000

## Resultados esperados

### Valor total del inventario

    {
      "valorTotalInventario": 59850000
    }

### Producto con mayor stock

    {
      "id": 2,
      "nombre": "Mouse Logitech",
      "precio": 120000,
      "stock": 25,
      "categoria": "Tecnología"
    }

### Productos por categoría

    {
      "Tecnología": 4,
      "Muebles": 2,
      "Audio": 2
    }

## Autor
ANDRES ARBELAEZ
Proyecto académico - Ingeniería Web