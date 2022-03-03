import { Router } from "express";
import { getFoodUnits, getFoodUnit, postFoodUnit, deleteFoodUnit, putFoodUnit } from "../controllers/food_units";

const router = Router();

router.get('/', getFoodUnits);
router.get('/:id', getFoodUnit);
router.post('/', postFoodUnit);
router.put('/:id',putFoodUnit);
router.delete('/:id',deleteFoodUnit);


export default router;