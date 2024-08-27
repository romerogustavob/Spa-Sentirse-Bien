import app from "./app.js"
import {connectDB} from "./DB/connection.js";

// Ejecuta la conexión a la base de datos
connectDB()

app.listen(3000)
console.log("Server en puerto", 3000)