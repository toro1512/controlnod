import { Router } from "express";
import { getFoods, getFood, postFood, putFood, deleteFood, getFoodLike } from "../controllers/food";

const router = Router();

router.get('/', getFoods);
router.get('/:id', getFood);
router.get('/like/:id', getFoodLike);
router.post('/', postFood);
router.put('/:id',putFood);
router.delete('/:id',deleteFood);


export default router;