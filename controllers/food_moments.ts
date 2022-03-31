import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getFoodMoments= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const food_moments = await conn.query('SELECT * FROM food_moments');
        return res.json({
            'FoodMoment': food_moments[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getFoodMoment = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const food_moments = await conn.query('SELECT * FROM food_moments WHERE id=?', [id]);
        return res.json({
            'FoodMoment': food_moments[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay FoodMoment con ee dato'
        })
    }
}
export const postFoodMoment = async (req: Request, res: Response) =>{
    
    const newFoodMoment:Basica= req.body;
    try {
        const conn = await connect();
        const food_moments = await conn.query('INSERT INTO food_moments SET ?',[newFoodMoment]);
        return res.json({
            'mes':'FoodMoment creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putFoodMoment = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateFoodMoment:Basica= req.body;
    try {
        const conn = await connect();
        const food_moments = await conn.query('UPDATE food_moments set ? WHERE id=?', [updateFoodMoment,id]);
        return res.json({
            'FoodMoment':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el FoodMoment',
            'cuerpo':req.body

        })
    }
}
export const deleteFoodMoment =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const food_moments = await conn.query('DELETE FROM food_moments WHERE id=?', [id]);
        return res.json({
            'FoodMoment':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el FoodMoment'
        })
    }

} 