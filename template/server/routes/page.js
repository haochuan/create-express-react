/**
 *
 * Example route for page
 *
 */

import { Router } from 'express';

const router = Router();
router.route('/getPageData').get(getPageData);

function getPageData(req, res) {
  res.status(200).json('Page Data');
}

export default router;
