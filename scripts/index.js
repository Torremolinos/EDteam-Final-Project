import { productos } from "./productos.js";

console.log(productos);

const mostrarMenu = () => {
  console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`)
    productos.forEach(producto => {
       console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}$`); 
    });
 /*aqui abajo declaro que cada uno de mis productos vendran de la array productos. 
 Funciona de la misma manera que el foreach, este bucle es el FOR OF*/
 console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`) 
    for(let producto of productos){
      console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}$`); 
    }
   
};
mostrarMenu();
