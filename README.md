# Gocuotas tiendanube

Cada vez que una cuenta de Tiendanube se vincula con Gocuotas, enviamos los scripts que deben cargar en su tienda.

La guia y reglas de cada script podemos verla en:

https://github.com/tiendanube/api-docs/blob/master/resources/script.md#put-scriptsid

Por pedido de Tiendanube, siempre tiene que estar detras de un CDN. Nosotros utilizamos el cdn: https://www.jsdelivr.com/?docs=gh

Al subir un nuevo archivo debemos cambiarle el nombre para saltear el cache del CDN y que la actualización del script sea inmediata.