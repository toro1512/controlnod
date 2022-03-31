import { Router } from "express";
import { getPhysicalUnits, getPhysicalUnit, postPhysicalUnit, putPhysicalUnit, deletePhysicalUnit } from "../controllers/physical_units";

const router = Router();

router.get('/', getPhysicalUnits);
router.get('/:id', getPhysicalUnit);
router.post('/', postPhysicalUnit);
router.put('/:id',putPhysicalUnit);
router.delete('/:id',deletePhysicalUnit);


export default router;