# Ansiedark — Pre-entrega 3

Tercera pre-entrega del curso de React JS de Coderhouse.

Ansiedark es una propuesta de suscripción mensual de joyas orientada a personas que buscan incorporar accesorios a su identidad y estilo personal.

## Funcionalidades incorporadas

- Catálogo de joyas generado dinámicamente.
- Simulación de una petición asincrónica mediante una promesa.
- Demora de dos segundos con `setTimeout`.
- Manejo del estado con `useState`.
- Ejecución de la petición con `useEffect`.
- Renderizado de productos mediante `map`.
- Componentes separados para el catálogo y cada producto.
- Indicador visual durante la carga.
- Mensaje visual ante un posible error.
- Diseño adaptable a dispositivos móviles.

## Componentes principales

- `Navbar`: representa la navegación principal.
- `CartWidget`: muestra visualmente el acceso al carrito.
- `ItemListContainer`: obtiene los productos y administra los estados de carga y error.
- `ItemList`: recorre la colección y genera el listado de productos.
- `Item`: representa individualmente cada joya del catálogo.

## Simulación asincrónica

Los productos se encuentran en `src/mock/asyncMock.js`.

La función `getProducts()` devuelve una promesa que se resuelve después de dos segundos. Esto permite simular el comportamiento de una petición a una API antes de incorporar una base de datos real.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Icons
- Git y GitHub

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Alop03/ansiedark-preentrega3.git
```

Ingresar al proyecto:

```bash
cd ansiedark-preentrega3
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Autor

Álvaro Sigüertt — Proyecto desarrollado para el curso de React JS de Coderhouse.
