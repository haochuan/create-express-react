/**
 *
 * Example route for page
 *
 */

import { Router } from 'express';
import models from '../models';

const router = Router();
router.route('/').get(get);
router.route('/').post(create);

function create(req, res) {
  models.User
    .create({
      name: req.body.username
    })
    .then(function() {
      res.status(200);
    });
}
function get(req, res) {
  models.User.findAll().then(function(users) {
    res.status(200).send(users);
  });
}

export default router;
