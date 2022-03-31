import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getIntensities= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const intensities = await conn.query('SELECT * FROM intensities');
        return res.json({
            'Intensitiess': intensities[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getIntensitie = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const intensities = await conn.query('SELECT * FROM intensities WHERE id=?', [id]);
        return res.json({
            'Intensities': intensities[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Intensities con ee dato'
        })
    }
}
export const postIntensitie = async (req: Request, res: Response) =>{
    
    const newIntensities:Basica= req.body;
    try {
        const conn = await connect();
        const intensities = await conn.query('INSERT INTO intensities SET ?',[newIntensities]);
        return res.json({
            'mes':'Intensities creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putIntensitie = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateIntensities:Basica= req.body;
    try {
        const conn = await connect();
        const intensities = await conn.query('UPDATE intensities set ? WHERE id=?', [updateIntensities,id]);
        return res.json({
            'Intensities':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Intensities',
            'cuerpo':req.body

        })
    }
}
export const deleteIntensitie =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const intensities = await conn.query('DELETE FROM intensities WHERE id=?', [id]);
        return res.json({
            'Intensities':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Intensities'
        })
    }

}  