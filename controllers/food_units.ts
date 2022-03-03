import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Basica } from "../models/Basica";

export const getFoodUnits= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const food_units = await conn.query('SELECT * FROM food_units');
        return res.json({
            'FoodUnits': food_units[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getFoodUnit = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const tipo =req.params.tipo;

    try {
        const conn = await connect();
        const food_units = await conn.query('SELECT * FROM food_units WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'FoodUnit': food_units[0],
            'id': id,
            'tipo': tipo
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay FoodUnit con ee dato'
        })
    }
}
export const postFoodUnit = async (req: Request, res: Response) =>{
    
    const newFoodUnit:Basica= req.body;
    try {
        const conn = await connect();
        const food_units = await conn.query('INSERT INTO food_units SET ?',[newFoodUnit]);
        return res.json({
            'mes':'FoodUnit creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putFoodUnit = async (req:Request, res:Response) =>{
    
    const {id, tipo}=req.params;
    const updateFoodUnit:Basica= req.body;
    try {
        const conn = await connect();
        const food_units = await conn.query('UPDATE food_units set ? WHERE id=? and tipo =?', [updateFoodUnit,id,tipo]);
        return res.json({
            'FoodUnit':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el FoodUnit',
            'cuerpo':req.body

        })
    }
}
export const deleteFoodUnit =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const food_units = await conn.query('DELETE FROM food_units WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'FoodUnit':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el FoodUnit'
        })
    }

} 