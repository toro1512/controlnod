import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getTypeActivities= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const type_activities = await conn.query('SELECT * FROM type_activities');
        return res.json({
            'TypeActivities': type_activities[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getTypeActivitie = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const type_activities = await conn.query('SELECT * FROM type_activities WHERE id=?', [id]);
        return res.json({
            'TypeActivitie': type_activities[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay TypeActivitie con ee dato'
        })
    }
}
export const postTypeActivitie = async (req: Request, res: Response) =>{
    
    const newTypeActivitie:Basica= req.body;
    try {
        const conn = await connect();
        const type_activities = await conn.query('INSERT INTO type_activities SET ?',[newTypeActivitie]);
        return res.json({
            'mes':'TypeActivitie creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putTypeActivitie = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateTypeActivitie:Basica= req.body;
    try {
        const conn = await connect();
        const type_activities = await conn.query('UPDATE type_activities set ? WHERE id=?', [updateTypeActivitie,id]);
        return res.json({
            'TypeActivitie':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el TypeActivitie',
            'cuerpo':req.body

        })
    }
}
export const deleteTypeActivitie =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const type_activities = await conn.query('DELETE FROM type_activities WHERE id=?', [id]);
        return res.json({
            'TypeActivitie':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el TypeActivitie'
        })
    }

}  