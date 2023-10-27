import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const getAllMascotas = async (req: Request, res: Response) => {

    /*
    try {
        const mascotas = await Mascota.find({}).exec();
        res.status(200).json(mascotas);
    } catch (error) {
        res.status(500).json(error);


    }
    */
};

export default getAllMascotas;
