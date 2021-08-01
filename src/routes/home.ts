import express from 'express';

const router = express.Router();

router.get('/healthcheck', (_req, res) => {
  res.status(200).json({ success: true, msg: 'all good' });
});

export default router;
