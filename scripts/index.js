//vamos a crear al usuario que interactuara con nuestro programa.
const usuario = {
  nombre: "Adrian",
  edad: 34,
  deuda: 0,
};

let pedido = [];
let costoPedido = 0;
const mostrarMenu = () => {
  console.log(`CODIGO - NOMBRE PRODUCTO - COSTO`);
  productos.forEach((producto) => {
    console.log(`${producto.codigo} - ${producto.nombre} - ${producto.costo}$`);
  });
};

const pedirProducto = (cod) => {
  //este es el metdo de if de una linea.
  //bueno este condicional seria para saber si el codigo no es correcto darle ese mensaje en return
  if (!cod) return "Ingrese un código valido";
  //ahora hacemos una variable para almacenar los productos encontrados por ese codigo
  //ojo! usamos el metodo FIND un metodo para encontrar cosas en arrays.
  const productoEncontrado = productos.find(
    (productos) => productos.codigo === cod
  );
  if (!productoEncontrado) return "El producto no existe";
  //Si no encuentra el producto ocurre lo de arriba
  //Pero si lo encuentra ocurre lo de abajo,
  //Que basicamente lo que hacemos es usar el metodo PUSH
  //Para introducir en nuestro array PEDIDO el productoEncontrado
  pedido.push(productoEncontrado);
  console.log("Su producto ha sido agregado a su pedido Su pedido es:");
  //porque puedes poner aqui verPedido() es porque pedirProducto se ejecuta despues de tood.
  return verPedido();
  //podemos ponerle mas if dependiendo de que queramos filtar.
};

//crearemos la funcionalidad para que el cliente vea el pedido o pueda cobrarlo
//e increiblemente corta es esta, basicamente estoy imprimiendo la array
//sin formato alguno.
const verPedido = () => pedido;

const calcularCosto = () => {
  let costo = 0;
  for (productos of pedido) {
    //cada uno de mis pedidos son productos (objetos) todos tienen costo
    //asi que si de ese pedido pido productos.costo pillare el precio y lo sumare.
    costo += productos.costo;
  }
  costoPedido = costo;
  return costoPedido;
};

//ahora tenemos que finalizar el pedido.
//la empleada le da un tikect y el va a caja y tiene que dar el pedido para pagarlo.
//Asi que ahora ira a pagarlo y aqui empieza nuestra funcion.

//no va a necesitar datos de entrada.
//Pero por si las moscas como siempre debemos ver que pidio algo.
const finalizarPedido = () => {
calcularCosto();

pedido = [];
costoPedido = 0;
};
