import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getPhysicalMeasures= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const physical_measures = await conn.query('SELECT * FROM physical_measures');
        return res.json({
            'PhysicalMeasure': physical_measures[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getPhysicalMeasure = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const physical_measures = await conn.query('SELECT * FROM physical_measures WHERE id=?', [id]);
        return res.json({
            'PhysicalMeasure': physical_measures[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay PhysicalMeasure con ee dato'
        })
    }
}
export const postPhysicalMeasure = async (req: Request, res: Response) =>{
    
    const newPhysicalMeasure:Basica= req.body;
    try {
        const conn = await connect();
        const physical_measures = await conn.query('INSERT INTO physical_measures SET ?',[newPhysicalMeasure]);
        return res.json({
            'mes':'PhysicalMeasure creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putPhysicalMeasure = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updatePhysicalMeasure:Basica= req.body;
    try {
        const conn = await connect();
        const physical_measures = await conn.query('UPDATE physical_measures set ? WHERE id=?', [updatePhysicalMeasure,id]);
        return res.json({
            'PhysicalMeasure':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el PhysicalMeasure',
            'cuerpo':req.body

        })
    }
}
export const deletePhysicalMeasure =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const physical_measures = await conn.query('DELETE FROM physical_measures WHERE id=?', [id]);
        return res.json({
            'PhysicalMeasure':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el PhysicalMeasure'
        })
    }

} 