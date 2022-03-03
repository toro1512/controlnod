import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Usuarios } from "../models/Usuarios";

export const getUsuarios= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users');
        return res.json({
            'usuarios': users[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getUsuario = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'usuario': users[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay usuario con ee dato'
        })
    }
}
export const postUsuario = async (req: Request, res: Response) =>{
    
    const newUsuario:Usuarios= req.body;
    console.log (newUsuario);
    try {
        const conn = await connect();
        const users = await conn.query('INSERT INTO USERS SET ?',[newUsuario]);
        return res.json({
            'mes':'usuario creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putUsuario = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateUsuario:Usuarios= req.body;
    try {
        const conn = await connect();
        const users = await conn.query('UPDATE users set ? WHERE id=? and tipo =?', [updateUsuario,id,tipo]);
        return res.json({
            'usuario':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el usuario',
            'cuerpo':req.body

        })
    }
}
export const deleteUsuario =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const users = await conn.query('DELETE FROM users WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'usuario':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el usuario'
        })
    }

}  