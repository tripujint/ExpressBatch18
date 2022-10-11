import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()

router.get('/', indexCtrl.LocationCtrl.findAll)
router.get('/:id', indexCtrl.LocationCtrl.findOne)
router.post('/add', indexCtrl.LocationCtrl.create)
// router.post('/next/',uploadDownload.upload, indexCtrl.CtsCtrl.createnext, indexCtrl.RegCtrl.createnext)
router.put('/ed/:id', indexCtrl.LocationCtrl.update)
router.get('/del/:id', indexCtrl.LocationCtrl.deleted)
router.get('/sql/:id', indexCtrl.LocationCtrl.querySQL)
export default router