import { Router } from "express";
import { getIntensities, getIntensitie, postIntensitie, putIntensitie, deleteIntensitie } from "../controllers/intensities";

const router = Router();

router.get('/', getIntensities);
router.get('/:id', getIntensitie);
router.post('/', postIntensitie);
router.put('/:id',putIntensitie);
router.delete('/:id',deleteIntensitie);


export default router;