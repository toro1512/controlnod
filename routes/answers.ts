import { Router } from "express";
import { getAnswers, getAnswer, postAnswer, putAnswer, deleteAnswer } from "../controllers/answers";

const router = Router();

router.get('/', getAnswers);
router.get('/:id', getAnswer);
router.post('/', postAnswer);
router.put('/:id',putAnswer);
router.delete('/:id',deleteAnswer);


export default router;