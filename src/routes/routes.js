import {Router} from 'express';
import{home} from '../controllers/controllers.js'
const router = Router();

//definir rutas
router.get('/',home);   //es el index. No lleva ruta. Solo '/'
export default router;

