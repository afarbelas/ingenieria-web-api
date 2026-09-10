const express = require("express");
const productos = require("../data/productos");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(productos);
});

router.get("/precio-mayor", (req, res) => {
    const precioMinimo = Number(req.query.precioMinimo) || 100000;

    const resultado = productos.filter(
        producto => producto.precio > precioMinimo
    );

    res.json(resultado);
});

router.get("/inventario", (req, res) => {
    const totalInventario = productos.reduce(
        (total, producto) => total + (producto.precio * producto.stock),
        0
    );

    res.json({
        valorTotalInventario: totalInventario
    });
});

router.get("/mayor-stock", (req, res) => {
    const productoMayorStock = productos.reduce(
        (mayor, producto) =>
            producto.stock > mayor.stock ? producto : mayor
    );

    res.json(productoMayorStock);
});

router.get("/tecnologia", (req, res) => {
    const productosTecnologia = productos.filter(
        producto => producto.categoria === "Tecnología"
    );

    res.json(productosTecnologia);
});

router.get("/por-categoria", (req, res) => {
    const cantidadPorCategoria = productos.reduce((resultado, producto) => {
        const categoria = producto.categoria;

        resultado[categoria] = (resultado[categoria] || 0) + 1;

        return resultado;
    }, {});

    res.json(cantidadPorCategoria);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.json(producto);
});

module.exports = router;