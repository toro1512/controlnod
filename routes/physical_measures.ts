import { Router } from "express";
import { getPhysicalMeasures, getPhysicalMeasure, postPhysicalMeasure, putPhysicalMeasure, deletePhysicalMeasure } from "../controllers/physical_measures";

const router = Router();

router.get('/', getPhysicalMeasures);
router.get('/:id', getPhysicalMeasure);
router.post('/', postPhysicalMeasure);
router.put('/:id',putPhysicalMeasure);
router.delete('/:id',deletePhysicalMeasure);


export default router;