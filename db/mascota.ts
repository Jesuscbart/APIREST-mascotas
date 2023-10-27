import mongoose from "npm:mongoose@7.6.3";
import { Mascota } from "../types.ts";

const Schema = mongoose.Schema; // Se crea un esquema de mongoose

const mascotaSchema = new Schema(  // Se crea el esquema de mongoose
  {
    //Todos los datos son obligatorios
    nombre: { type: String, required: true }, // Se define el campo nombre de tipo String
    descripcion: { type: String, required: true},  // Se define el campo descripción de tipo String
    tipo: { type: String, required: true },  // Se define el campo tipo de tipo String
  },
  { timestamps: true }  
);

export type MascotaModelType = mongoose.Document & Omit<Mascota, "id">;

export default mongoose.model<MascotaModelType>("Mascota", mascotaSchema);
