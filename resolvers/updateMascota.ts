import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const updateMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, tipo } = req.body;
    if (!nombre || !descripcion || !tipo) {
      res.status(400).send("Nombre, tipo y descripción son requeridos");  //Nombre, tipo y descripción son requeridos -> Error 400
      return;
    }
    if(tipo !== 'perro' && tipo !== 'gato' && tipo !== 'serpiente'){
      res.status(400).send("Tipo debe ser perro o gato");   //Tipo debe ser perro, gato o serpiente-> Error 400
      return;
    }

    const updatedMascota = await MascotaModel.findByIdAndUpdate(
      { id },
      { nombre, descripcion, tipo },
      { new: true }
    ).exec();

    if (!updatedMascota) {
      res.status(404).send("Mascota no encontrada");
      return;
    }

    res.status(200).send({
      name: updatedMascota.nombre,
      age: updatedMascota.descripcion,
      dni: updatedMascota.tipo,
      id: updatedMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updateMascota;
