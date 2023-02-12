import { Router } from 'express';
import { CidadeController } from '../controllers';
const router = Router();

router.get('/', (req, res) => {
  return res.send('Olá, DEV!')
});

router.post('/teste', (req, res) => {
  return res.json(req.body);
});

router.post('/cidades', CidadeController.create);

export { router };

