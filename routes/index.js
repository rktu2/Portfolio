import express from 'express';
import { homeController , contactController} from '../controllers/homeController.js';
const router= express.Router();


router.get('/', homeController);
router.post('/', contactController);




export default router;