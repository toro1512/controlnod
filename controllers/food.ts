import { Request, Response } from "express"
import { connect } from "../db/conexion";
import { Foods } from "../models/Foods";

export const getFoods= async (req: Request, res: Response): Promise<Response> => {
    try {
        const conn = await connect();
        const foods = await conn.query('SELECT * FROM foods');
        return res.json({
            'Foods': foods[0]
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no conecto'
        })
    }
}

export const getFood = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    try {
        const conn = await connect();
        const foods = await conn.query('SELECT * FROM foods WHERE id=? and tipo =?', [id]);
        return res.json({
            'Food': foods[0],
            'id': id,
           
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no hay Food con ee dato'
        })
    }
}
export const postFood = async (req: Request, res: Response) =>{
    
    const newFood:Foods= req.body;
    try {
        const conn = await connect();
        const foods = await conn.query('INSERT INTO foods SET ?',[newFood]);
        return res.json({
            'mes':'Food creado'
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no creado'
        })
    }
} 

export const putFood = async (req:Request, res:Response) =>{
    
    const id=req.params;
    const updateFood:Foods= req.body;
    try {
        const conn = await connect();
        const foods = await conn.query('UPDATE foods set ? WHERE id=? and tipo =?', [updateFood,id]);
        return res.json({
            'Food':'update' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no actualizo el Food',
            'cuerpo':req.body

        })
    }
}
export const deleteFood =async (req:Request, res:Response) =>{

    const {id, tipo}=req.params;
    try {
        const conn = await connect();
        const foods = await conn.query('DELETE FROM foods WHERE id=? and tipo =?', [id,tipo]);
        return res.json({
            'Foods':'eliminado' 
        });
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'mensaje':' no elimino el Foods'
        })
    }

} 
export const getFoodLike = async (req:Request, res:Response): Promise <Response> => {
    
    const id=req.params.id;
    const _consultaSelect='SELECT F.ID, G.NAME GRUPO, F.NAME NOMBRE, F.PROTEIN PROTEINA, F.CARBOHYDRATE CARBOHIDRATO, F.KCAL CALORIAS, LIGHT SEMAFORO FROM foods F, groups G WHERE F.ID_GROUP=G.ID AND UPPER(F.NAME) LIKE '+'\'%'+id+'%\'';
   
    try {
        const conn = await connect();
        const food_units = await conn.query(_consultaSelect);
        return res.json({
            'page':1,
            'result':food_units[0]});
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            'page':1,
            'mensaje':' no hay FoodUnit con ee dato',
            
        })
    }
} 