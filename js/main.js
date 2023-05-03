const productos = [
    {
        id: "zapato-1",
        titulo: "Zapato-1",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapato.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000

    },
    {
        id: "zapato-2",
        titulo: "Zapato-2",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapatomarrones.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-3",
        titulo: "Zapato-3",
        imagen: "../multimedia1/imagenes/zapatoshombre/zapatonegro.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-4",
        titulo: "Zapato-4",
        imagen: "../multimedia1/imagenes/zapatoshombre/botamarron.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-5",
        titulo: "Zapato-5",
        imagen: "../multimedia1/imagenes/zapatoshombre/botabase.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    },
    {
        id: "zapato-6",
        titulo: "Zapato-6",
        imagen: "../multimedia1/imagenes/zapatoshombre/botanegra.jpg",
        categoria: {
            nombre: "Mens shoes",
            id: "zapato"
        },
        precio: 35000
    }
];
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}" class= "shoe-zap1">
      <p>${producto.titulo}</p>
      <p>${producto.precio}</p>
      <button>Comprar</button> 
        `;
        contenedorProductos.append(div);

    })

}

cargarProductos()