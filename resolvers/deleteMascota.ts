import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const deleteMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mascota = await MascotaModel.findByIdAndDelete({ id }).exec();
    if (!mascota) {
      res.status(404).send("Mascota no existe");    //Mascota no existe -> Error 404
      return;
    }
    res.status(200).send("Mascota eliminada");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteMascota;
