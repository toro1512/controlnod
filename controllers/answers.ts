import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getAnswers= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const answers = await conn.query('SELECT * FROM answers');
        return res.json({
            'Answers': answers[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getAnswer = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const answers = await conn.query('SELECT * FROM answers WHERE id=?', [id]);
        return res.json({
            'Answer': answers[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Answer con ee dato'
        })
    }
}
export const postAnswer = async (req: Request, res: Response) =>{
    
    const newAnswer:Basica= req.body;
    try {
        const conn = await connect();
        const answers = await conn.query('INSERT INTO answers SET ?',[newAnswer]);
        return res.json({
            'mes':'Answer creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putAnswer = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateAnswer:Basica= req.body;
    try {
        const conn = await connect();
        const answers = await conn.query('UPDATE answers set ? WHERE id=?', [updateAnswer,id]);
        return res.json({
            'Answer':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Answer',
            'cuerpo':req.body

        })
    }
}
export const deleteAnswer =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const answers = await conn.query('DELETE FROM answers WHERE id=?', [id]);
        return res.json({
            'Answer':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Answer'
        })
    }

}  