import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getGroups= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM groups');
        return res.json({
            'Groups': users[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getGroup = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM groups WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'Group': users[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Group con ee dato'
        })
    }
}
export const postGroup = async (req: Request, res: Response) =>{
    
    const newGroup:Basica= req.body;
    try {
        const conn = await connect();
        const users = await conn.query('INSERT INTO groups SET ?',[newGroup]);
        return res.json({
            'mes':'Group creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putGroup = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateGroup:Basica= req.body;
    try {
        const conn = await connect();
        const users = await conn.query('UPDATE groups set ? WHERE id=? and tipo =?', [updateGroup,id,tipo]);
        return res.json({
            'Group':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Group',
            'cuerpo':req.body

        })
    }
}
export const deleteGroup =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const users = await conn.query('DELETE FROM groups WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'Group':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Group'
        })
    }

}  