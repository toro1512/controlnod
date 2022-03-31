import { Router } from "express";
import { getQuestions, getQuestion, postQuestion, putQuestion, deleteQuestion } from "../controllers/questions";

const router = Router();

router.get('/', getQuestions);
router.get('/:id', getQuestion);
router.post('/', postQuestion);
router.put('/:id',putQuestion);
router.delete('/:id',deleteQuestion);


export default router;