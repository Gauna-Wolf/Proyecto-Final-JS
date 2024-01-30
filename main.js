const productos = document.querySelector("btn")
fetch("productos.json")
    .then(Response => Response.json())
    .then(data => {
        mostrarProductos(data);
    })

let carrito = [];                                               // [] significa que esta vacio
let boton = document.getElementById("btn");

const agregarAlCarrito = (id) => {
const producto = productos.find((item) => item.id === id);

    if (producto) {
    carrito.push(producto);
    actualizarCarrito();
    } else {
    console.error("Producto no encontrado");
    }
};

const actualizarCarrito = () => {
                                                                // se guarda los datos del carrito en localStorage
localStorage.setItem("carrito", JSON.stringify(carrito));
console.log(carrito);
};

function mostrarProductos(productos){
    productos.forEach((item) => {
        let div = document.createElement("div");
        
                                                                        //Se Agrega HTML
        div.innerHTML = `
        <h4>Id: ${item.id}</h4>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
        <button id="boton${item.id}">Seleccionar</button>
        `;
        
        document.body.append(div);
        
        
        let botonProducto = document.getElementById(`boton${item.id}`);
        
        botonProducto.addEventListener("click", () => agregarAlCarrito(item.id));
        });   
}


boton.addEventListener("click", () => {
    Swal.fire({                                           //Agregue Libreria
        icon: "success",
        title: "Gracias",
        text: "Ve al Final de la Pagina",
        footer: '<a href="https://www.instagram.com/leo_gauna_/">Contactame</a>'
      });

carrito.forEach((item) => {
let div = document.createElement("div");

div.innerHTML = `
<h4>Id: ${item.id}</h4>
<p>Nombre: ${item.nombre}</p>
<b>$${item.precio}</b>
`;
document.body.append(div);
});
});