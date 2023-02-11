import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	return res.send('Bom dia, senhor');
});

router.post('/teste', (req, res) => {
  return res.json(req.body);
});

export { router };

