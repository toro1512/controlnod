import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id/:tipo', getUsuario);
router.post('/', postUsuario);
router.put('/:id/:tipo',putUsuario);
router.delete('/:id/:tipo',deleteUsuario);


export default router;