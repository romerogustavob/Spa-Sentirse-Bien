import mongoose from "mongoose";
import dotenv from "dotenv";

// cada que importemos dotenv debemos colocar esta línea, carga las variables de entorno
dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log(">> Conectado a MongoDB con éxito!")
    }catch(error) {
        console.log(">> Error: " + error)
    }
}