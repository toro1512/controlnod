import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { ConFore } from "../models/ConFore";

export const getActivities= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const activities = await conn.query('SELECT * FROM activities');
        return res.json({
            'Activities': activities[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getActivitie = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const activities = await conn.query('SELECT * FROM activities WHERE id=?', [id]);
        return res.json({
            'Activitie': activities[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Activitie con ee dato'
        })
    }
}
export const postActivitie = async (req: Request, res: Response) =>{
    
    const newActivitie:ConFore= req.body;
    try {
        const conn = await connect();
        const activities = await conn.query('INSERT INTO activities SET ?',[newActivitie]);
        return res.json({
            'mes':'Activitie creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putActivitie = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateActivitie:ConFore= req.body;
    try {
        const conn = await connect();
        const activities = await conn.query('UPDATE activities set ? WHERE id=?', [updateActivitie,id]);
        return res.json({
            'Activitie':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Activitie',
            'cuerpo':req.body

        })
    }
}
export const deleteActivitie =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const activities = await conn.query('DELETE FROM activities WHERE id=?', [id]);
        return res.json({
            'Activitie':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Activitie'
        })
    }

}  