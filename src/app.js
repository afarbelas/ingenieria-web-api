const express = require("express");
const productosRoutes = require("./routes/productos.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de productos - Ingeniería Web",
        estado: "operativa"
    });
});

app.use("/api/productos", productosRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});