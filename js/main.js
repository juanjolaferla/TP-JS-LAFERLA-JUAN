const productos = [
    {
        id: "zapato-1",
        titulo: "Augustus",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapato.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000

    },
    {
        id: "zapato-2",
        titulo: "Basil",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapatomarrones.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-3",
        titulo: "Bernard",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapatonegro.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-4",
        titulo: "Charles",
        imagen: "../multimedia1/imagenes/zapatoshombre/botamarron.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-5",
        titulo: "Caesar",
        imagen: "../multimedia1/imagenes/zapatoshombre/botabase.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-6",
        titulo: "Darius",
        imagen: "../multimedia1/imagenes/zapatoshombre/botanegra.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },

];
/*elementos del DOM*/
const contenedorProductos = document.querySelector("#contenedor-productos");
let comprar = document.querySelectorAll(".comprar");


function cargarProductos(poductosElegidos) {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class= "shoe-zap1">
      <p>${producto.titulo}</p>
      <p>${producto.precio}</p>
      <button class="comprar" id="${producto.id}">Comprar</button> 
        `;
        contenedorProductos.append(div);

    });
    actualizarComprar();
    

}

cargarProductos(productos);


function actualizarComprar() {
    comprar = document.querySelectorAll(".comprar");

    comprar.forEach(boton => {
        boton.addEventListener("click", agregarABag);

    });
}
const productosEnBag = [];
function agregarABag(e) {
    const id = e.currentTarget.id;
    console.log(id);
}