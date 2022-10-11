import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/', indexCtrl.CtsCtrl.findAll)
router.get('/:id', indexCtrl.CtsCtrl.findOne)
router.post('/add', indexCtrl.CtsCtrl.create)
// router.post('/next/',uploadDownload.upload, indexCtrl.CtsCtrl.createnext, indexCtrl.RegCtrl.createnext)
router.put('/ed/:id', indexCtrl.CtsCtrl.update)
router.get('/del/:id', indexCtrl.CtsCtrl.deleted)
router.get('/sql/:id', indexCtrl.CtsCtrl.querySQL)
export default router