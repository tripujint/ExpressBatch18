import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()

router.get('/', indexCtrl.JobHistoryCtrl.findAll)
router.get('/:id', indexCtrl.JobHistoryCtrl.findOne)
router.post('/add', indexCtrl.JobHistoryCtrl.create)
router.put('/ed/:id', indexCtrl.JobHistoryCtrl.update)
router.get('/del/:id', indexCtrl.JobHistoryCtrl.deleted)
router.get('/sql/:id', indexCtrl.JobHistoryCtrl.querySQL)
export default router