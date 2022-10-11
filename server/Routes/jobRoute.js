import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/', indexCtrl.JobCtrl.findAll)
router.get('/:id', indexCtrl.JobCtrl.findOne)
router.post('/add', indexCtrl.JobCtrl.create)
// router.post('/next/',uploadDownload.upload, indexCtrl.CtsCtrl.createnext, indexCtrl.RegCtrl.createnext)
router.put('/ed/:id', indexCtrl.JobCtrl.update)
router.get('/del/:id', indexCtrl.JobCtrl.deleted)
router.get('/sql/:id', indexCtrl.JobCtrl.querySQL)
export default router