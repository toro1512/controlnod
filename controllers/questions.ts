import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getQuestions= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const questions = await conn.query('SELECT * FROM questions');
        return res.json({
            'Questions': questions[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getQuestion = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const questions = await conn.query('SELECT * FROM questions WHERE id=?', [id]);
        return res.json({
            'Question': questions[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Question con ee dato'
        })
    }
}
export const postQuestion = async (req: Request, res: Response) =>{
    
    const newQuestion:Basica= req.body;
    try {
        const conn = await connect();
        const questions = await conn.query('INSERT INTO questions SET ?',[newQuestion]);
        return res.json({
            'mes':'Question creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putQuestion = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateQuestion:Basica= req.body;
    try {
        const conn = await connect();
        const questions = await conn.query('UPDATE questions set ? WHERE id=?', [updateQuestion,id]);
        return res.json({
            'Question':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Question',
            'cuerpo':req.body

        })
    }
}
export const deleteQuestion =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const questions = await conn.query('DELETE FROM questions WHERE id=?', [id]);
        return res.json({
            'Question':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Question'
        })
    }

}  