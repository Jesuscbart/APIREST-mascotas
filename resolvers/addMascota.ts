import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const addMascota = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, tipo } = req.body;
    if (!nombre || !descripcion || !tipo) {
      res.status(400).send("Nombre, descripción y tipo son requeridos");  //Nombre, descripción y tipo son requeridos -> Error 400
      return;
    }

    if(tipo !== 'perro' && tipo !== 'gato' && tipo !== 'serpiente'){    //Tipo debe ser perro, serpiente o gato -> Error 400
      res.status(400).send("Tipo debe ser perro o gato");
      return;
    }

    const newMascota = new MascotaModel({ nombre, descripcion, tipo });
    await newMascota.save();

    res.status(200).send({
      nombre: newMascota.nombre,
      descripcion: newMascota.descripcion,
      tipo: newMascota.tipo,
      id: newMascota._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addMascota;
