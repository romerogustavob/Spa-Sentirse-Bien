import mongoose from "mongoose";

//datos de la BD
// user astrid
// password DB123

//Agrega tu cadena de conexión al código de tu aplicación
const uri = "mongodb+srv://astrid:DB123@spabd.8phrv.mongodb.net/?retryWrites=true&w=majority&appName=SpaBD";

/* hace lo mismo sin tener que importar la funcion y llamarla en el index

// Conectar a MongoDB usando Mongoose
mongoose.connect(uri)
.then(() => {
    console.log("Conectado a MongoDB con éxito!");
})
.catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1); // Salir con código 1 si hay un error
});
*/

export const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log(">> Conectado a MongoDB con éxito!")
    }catch(error) {
        console.log(">> Error: " + error)
    }
}