# E-commerce & Admin Dashboard

E-commerce de moda tipo B2C (Business To Consumer) 
**Lenguaje**: ```Typescript```

---
### Backend: 
* **Endpoints**: ```Next.js API Routes```
* **Testing**: Jest + Supertest
* **Lógica de Negocio**:
    * Gestión de productos:
        * _Catálogo de productos_ 
        * _Inventario en tiempo real_ 
        * _Búsqueda y filtros_ 
    * Carrito y Checkout:
        * _Carrito persistente_
        * _Checkout rápido_ 
    * Pagos:
        * _Pasarela de pagos_
        * _Confirmación automática_ 
    * Gestión de clientes:
        * _Registro y Logic_
        * _Perfil de usuario_
    * Pedidos:
        * _Gestión de estados_
    * Soporte al cliente:
        * _Sección de FAQ_
        * _Formulario de contacto_ 
---
### Bases de datos:
* PostgreSQL + Prisma ORM
* Tablas y Relaciones
* Migraciones 
* Seeders
---
### Seguridad
* **Autenticación (AuthN)**: JWT (JSON Web Tokens)
* **Autorización (AuthZ)**: roles y permisos (user, admin), Middleware
* **Prácticas**: password encriptada con bycript, emails privados, HTTPs, heladeras de seguridad…
---
### DevOps:
* **Docker (desarrollo)**:
    1. **Simple**: contenedor PostgreSQL
    2. **Complejo**: docker compose

* **Deploy (en producción)**:
    1. **Simple**: Vercel (Frontend) + Railway / Render (Backend)
    2. **Complejo**: Azure
---
### Frontend:
 * Next.js
 * React + Redux
 * TailwindCSS
 * Framer Motion 
 * Testing