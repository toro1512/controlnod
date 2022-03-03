import { Router } from "express";
import { getFoods, getFood, postFood, putFood, deleteFood } from "../controllers/food";

const router = Router();

router.get('/', getFoods);
router.get('/:id', getFood);
router.post('/', postFood);
router.put('/:id',putFood);
router.delete('/:id',deleteFood);


export default router;