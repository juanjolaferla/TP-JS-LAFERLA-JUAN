let productosEnBag = (localStorage.getItem("zapatos-en-bag"));
productosEnBag = JSON.parse(productosEnBag);

const contenedorBagVacio = document.querySelector("#bag-vacio");
const contenedorBagProductos = document.querySelector("#bag-productos");
const contenedorBagAcciones = document.querySelector("#bag-acciones");
const contenedorBagComprado = document.querySelector("#bag-comprado");
let botonTrash = document.querySelectorAll(".bag-producto-eliminar");

function cargarProductosEnBag() {
    if (productosEnBag) {
    

    contenedorBagVacio.classList.add("disabled");
    contenedorBagProductos.classList.remove("disabled");
    contenedorBagAcciones.classList.remove("disabled");
    contenedorBagComprado.classList.add("disabled");

    contenedorBagProductos.innerHTML ="";

    productosEnBag.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("bag-producto");
        div.innerHTML = `
        <img class= "bag-producto-imagen"src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="bag-producto-titulo">
                          <small></small>
                          <h3>${producto.titulo}</h3>
                        </div>
                        <div class="bag-producto-cantidad">
                          <small>Cantidad</small>
                          <p>${producto.cantidad}</p>
                        </div>
                        <div class="bag-producto-precio">
                          <small>Precio</small>
                          <p>${producto.precio}</p>
                        </div>
                        <div class="bag-producto-subtotal">
                          <small>Subtotal</small>
                          <p>${producto.precio * producto.cantidad}</p>
                        </div>
                        <button class="bag-producto-eliminar" id="${producto.id}"><i class=" bi bi-trash-fill"></i></button>
                        `
                        contenedorBagProductos.append(div);

    });
} else {

    contenedorBagVacio.classList.remove("disabled");
    contenedorBagProductos.classList.add("disabled");
    contenedorBagAcciones.classList.add("disabled");
    contenedorBagComprado.classList.add("disabled");
}
  actualizarEliminar();
}
cargarProductosEnBag();


function actualizarEliminar() {
    botonTrash = document.querySelectorAll(".bag-producto-eliminar");

    botonTrash.forEach(boton => {
        boton.addEventListener("click", eliminarDeBag);

    });
}

function eliminarDeBag(e) {
   const idBoton =  e.currentTarget.id;
   const index = productosEnBag.findIndex(producto => producto.id === idBoton);
   productosEnBag.splice(index, 1);
   
   cargarProductosEnBag();

   localStorage.setItem("productos-en-bag", JSON.stringify(productosEnBag));
  
}