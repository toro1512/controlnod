import { Router } from "express";
import { getFoodMoments, getFoodMoment, postFoodMoment, deleteFoodMoment, putFoodMoment } from "../controllers/food_moments";

const router = Router();

router.get('/', getFoodMoments);
router.get('/:id', getFoodMoment);
router.post('/', postFoodMoment);
router.put('/:id',putFoodMoment);
router.delete('/:id',deleteFoodMoment);


export default router;