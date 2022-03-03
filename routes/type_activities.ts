import { Router } from "express";
import { getTypeActivities, getTypeActivitie, postTypeActivitie, putTypeActivitie, deleteTypeActivitie } from "../controllers/type_activities";

const router = Router();

router.get('/', getTypeActivities);
router.get('/:id', getTypeActivitie);
router.post('/', postTypeActivitie);
router.put('/:id',putTypeActivitie);
router.delete('/:id',deleteTypeActivitie);


export default router;