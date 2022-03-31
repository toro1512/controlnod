import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getPhysicalUnits= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const physical_units = await conn.query('SELECT * FROM physical_units');
        return res.json({
            'PhysicalUnit': physical_units[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getPhysicalUnit = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const physical_units = await conn.query('SELECT * FROM physical_units WHERE id=?', [id]);
        return res.json({
            'PhysicalUnit': physical_units[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay PhysicalUnit con ee dato'
        })
    }
}
export const postPhysicalUnit = async (req: Request, res: Response) =>{
    
    const newPhysicalUnit:Basica= req.body;
    try {
        const conn = await connect();
        const physical_units = await conn.query('INSERT INTO physical_units SET ?',[newPhysicalUnit]);
        return res.json({
            'mes':'PhysicalUnit creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putPhysicalUnit = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updatePhysicalUnit:Basica= req.body;
    try {
        const conn = await connect();
        const physical_units = await conn.query('UPDATE physical_units set ? WHERE id=?', [updatePhysicalUnit,id]);
        return res.json({
            'PhysicalUnit':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el PhysicalUnit',
            'cuerpo':req.body

        })
    }
}
export const deletePhysicalUnit =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const physical_units = await conn.query('DELETE FROM physical_units WHERE id=?', [id]);
        return res.json({
            'PhysicalUnit':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el PhysicalUnit'
        })
    }

} 