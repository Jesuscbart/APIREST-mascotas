import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";


import getMascota from "./resolvers/getMascota.ts";  
import getAllMascotas from "./resolvers/getAllMascotas.ts"; 
import addMascota from "./resolvers/addMascota.ts";
import updateMascota from "./resolvers/updateMascota.ts";
import deleteMascota from "./resolvers/deleteMascota.ts";


import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load(); //Carga las variables de entorno del archivo .env

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); // Obtiene la variable de entorno MONGO_URL

if (!MONGO_URL) {
  console.log("No mongo URL found");  // Si no se encuentra la variable de entorno MONGO_URL, se cierra el programa
  Deno.exit(1);
}

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conexión exitosa a MongoDB");
} catch (error) {
  console.error("Error al conectar a MongoDB:", error);
}

const app = express();  // Se crea la aplicación express
app.use(express.json());  // Se usa el middleware express.json() para poder recibir datos en formato JSON

app

  .get("/getMascota/:id", getMascota) 
  .get("/getallmascotas", getAllMascotas)
  .post("/addMascota", addMascota)
  .put("/updateMascota/:id", updateMascota)
  .delete("/deleteMascota/:id", deleteMascota);
  

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
