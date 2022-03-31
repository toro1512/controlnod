import { Router } from "express";
import { getActivitie, getActivities, postActivitie, deleteActivitie, putActivitie } from "../controllers/activities";

const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivitie);
router.post('/', postActivitie);
router.put('/:id',putActivitie);
router.delete('/:id',deleteActivitie);


export default router;