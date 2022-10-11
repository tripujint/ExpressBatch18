import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()

router.get('/', indexCtrl.EmployeeCtrl.findAll)
router.get('/:id', indexCtrl.EmployeeCtrl.findOne)
router.post('/add', indexCtrl.EmployeeCtrl.create)
// router.post('/next/',uploadDownload.upload, indexCtrl.CtsCtrl.createnext, indexCtrl.RegCtrl.createnext)
router.put('/ed/:id', indexCtrl.EmployeeCtrl.update)
router.get('/del/:id', indexCtrl.EmployeeCtrl.deleted)
router.get('/sql/:id', indexCtrl.EmployeeCtrl.querySQL)
export default router