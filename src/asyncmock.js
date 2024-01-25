const productos = [
    {id: "1", idCat: 4,nombre: "correa",descripcion: "Correa de paseo", precio: 600, img: "../src/imagenes/correa.webp"},
    {id: "2", idCat: 2,nombre: "pelota",descripcion: "Mordisco pelota", precio: 300, img: "../src/imagenes/pelota.png"},
    {id: "3", idCat: 4,nombre: "collar",descripcion: "Collar rojo", precio: 500, img: "../src/imagenes/collar.png"},
    {id: "4", idCat: 2,nombre: "cuerda",descripcion: "Cuerda para morder", precio: 1000, img: "../src/imagenes/cuerda.png"},
    {id: "5", idCat: 1,nombre: "alimento",descripcion: "Alimento balanceado Eukanuba adulto", precio: 1000, img: "../src/imagenes/eukanuba.png"},
    {id: "6", idCat: 1,nombre: "alimento",descripcion: "Alimento balanceado Nutribon adulto", precio: 9000, img: "../src/imagenes/nutribon.png"},
    {id: "7", idCat: 3,nombre: "ropa",descripcion: "Ropa perro pequeño con orejas", precio: 5000, img: "../src/imagenes/ropaperrito.png"},
    {id: "8", idCat: 3,nombre: "ropa",descripcion: "Ropa perro pequeño Lana ", precio: 8000, img: "../src/imagenes/ropaperrito2.png"},
    {id: "9", idCat: 3,nombre: "ropa",descripcion: "Ropa perro cuadrille azul ", precio: 10000, img: "../src/imagenes/disfrazperrito.png"}
]

export const getProductos = () => {
return new Promise( (resolve) => {
    setTimeout( ()=>{
        resolve(productos);
    }, 2000)
})
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        const producto = productos.find(prod => prod.id === id);
        resolve(producto);
    }, 2000)
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout( ()=>{
            const productosCategoria = productos.filter(prod => prod.idCat == idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}