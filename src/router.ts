import {Router} from 'express';

const router = Router();

//Routing 
router.get('/', (req,res) => {
    res.send("Hola pépito como estas?")
})
export default router;