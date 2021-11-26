### Backend

Para el backend use Express, TS, Typeorm y Sqlite. La distribucion de archivos y carpetas lo hice parecido a como estaba en el proyecto que trabaje por conveniencia.

Tiene estos endpoints:
- /product/:id GET
- /products GET
- /product POST
- /product PUT
- /product/:id DELETE

Si tuviese mas tiempo / notas:
- Se podria separar los controllers en actions y controllers o hacer todo en un solo controller.
- Mejorar manejo de errores
    - Catch erroes en typeorm
    - Sheckear si se pasan parametros null o invalidos en el body de post request (typeguard o similar)
    - Mensajes de errores en response
- Se puede hacer una abstraccion de los response de express que los controllers hereden para no repetir status codes por ejemplo 
- Separar la logica en modulos

### Frontend
Usa Nextjs, React, TS, y Chakra ui.