import { Router } from 'express'
import puCriticalityHandler from '@/handler/puCriticalityHandler'

import techDataHandler from '@/handler/techDataHandler'
import eqCriticalityHandler from '@/handler/eqCriticalityHandler'
import puStatusHandler from '@/handler/puStatusHandler'
import eqStatusHandler from '@/handler/eqStatusHandler'
import woPriorityHandler from '@handler/woPriorityHandler'
import meUnitHandler from '@handler/pmMeterUnitHandler'
import pmIntervalUnitHandler from '@handler/pmIntervalUnitHandler'
import pmGroupHandler from '@/handler/pmGroupHandler'
import costCenterHandler from '@/handler/costCenterHandler'
import vendorHandler from '@/handler/vendorHandler'
import woTypeHandler from '@handler/woTypeHandler'
import departmentHandler from '@/handler/departmentHandler'
import standardJobHandler from '@handler/standardJobHandler'
import contractHandler from '@/handler/contractHandler'
import storeHandler from '@/handler/storeHandler'
import ExpenseTypeHandler from '@/handler/expenseTypeHandler'
import ivUnitHandler from '@/handler/ivUnitHandler'
import urgentHandler from '@/handler/urgentHandler'
import eqTypeHandler from '@/handler/eqTypeHandler'
import moveTypeHandler from'@/handler/moveTypeHandler'
import manhourTypeHandler from '@/handler/manhourTypeHandler'
import failureModesHandler from '@/handler/failureModesHandler'
import failureEffectsHandler from '@/handler/failureEffectsHandler'
import failureCauseHandler from '@/handler/failureCauseHandler'

const routes = (router: Router) => {
    const adminRouter = Router()
    
    //Tech Data  
    adminRouter.get('/tech_data', techDataHandler.listTechData)
    adminRouter.get('/tech_data/:id',techDataHandler.getTechData)
    adminRouter.post('/tech_data', techDataHandler.createTechData)
    adminRouter.put('/tech_data/:id', techDataHandler.updateTechData)
    adminRouter.delete('/tech_data/:id', techDataHandler.deleteTechData)
    
    //EQ Critical  
    adminRouter.get('/eq_critical', eqCriticalityHandler.listEQCritical)
    adminRouter.get('/eq_critical/:id', eqCriticalityHandler.getEQCritical)
    adminRouter.post('/eq_critical', eqCriticalityHandler.createEQCritical)
    adminRouter.put('/eq_critical/:id', eqCriticalityHandler.updateEQCritical)
    adminRouter.delete('/eq_critical/:id', eqCriticalityHandler.deleteEQCritical)

    //EQ Status  
    adminRouter.get('/eq_status', eqStatusHandler.eqStatusList)
    adminRouter.get('/eq_status/:id', eqStatusHandler.eqStatusGet)
    adminRouter.post('/eq_status', eqStatusHandler.eqStatusCreate)
    adminRouter.put('/eq_status/:id', eqStatusHandler.eqStatusUpdate)
    adminRouter.delete('/eq_status/:id', eqStatusHandler.eqStatusDelete)

    // PU Status
    adminRouter.get('/pu_status/:id', puStatusHandler.getPUStatus)
    adminRouter.get('/pu_status', puStatusHandler.listPUStatus)
    adminRouter.post('/pu_status', puStatusHandler.createPUStatus)
    adminRouter.put('/pu_status/:id', puStatusHandler.updatePUStatus)
    adminRouter.delete('/pu_status/:id', puStatusHandler.deletePUStatus)
    
    // PU Critical
    adminRouter.get('/pu_critical/:id', puCriticalityHandler.getPUCritical)
    adminRouter.get('/pu_critical', puCriticalityHandler.listPUCritical)
    adminRouter.post('/pu_critical', puCriticalityHandler.createPUCritical)
    adminRouter.put('/pu_critical/:id', puCriticalityHandler.updatePUCritical)
    adminRouter.delete('/pu_critical/:id', puCriticalityHandler.deletePUCritical)

    // WO Priority
    adminRouter.get('/wo_priority', woPriorityHandler.listWOPriority)
    adminRouter.get('/wo_priority/:id', woPriorityHandler.getWOPriority)
    adminRouter.post('/wo_priority', woPriorityHandler.createWOPriority)
    adminRouter.put('/wo_priority/:id', woPriorityHandler.updateWOPriority)
    adminRouter.delete('/wo_priority/:id', woPriorityHandler.deleteWOPriority)
    
    //PM Group
    adminRouter.get('/pm_group', pmGroupHandler.listPMGroup)
    adminRouter.get('/pm_group/:id', pmGroupHandler.getPMGroup)
    adminRouter.post('/pm_group', pmGroupHandler.createPMGroup)
    adminRouter.put('/pm_group/:id', pmGroupHandler.updatePMGroup)
    adminRouter.delete('/pm_group/:id', pmGroupHandler.deletePMGroup)

    //PM Interval Unit
    adminRouter.get('/pm_interval_unit/:id' ,pmIntervalUnitHandler.getFreqUnit )
    adminRouter.get('/pm_interval_unit',pmIntervalUnitHandler.listFreqUnit )
    adminRouter.post('/pm_interval_unit' , pmIntervalUnitHandler.createFreqUnit)
    adminRouter.put('/pm_interval_unit/:id' , pmIntervalUnitHandler.updateFreqUnit)
    adminRouter.delete('/pm_interval_unit/:id' ,pmIntervalUnitHandler.deleteFreqUnit )
    
    //PM Meter Unit
    adminRouter.get('/pm_meter_unit/:id',meUnitHandler.getPMMeterUnit)
    adminRouter.get('/pm_meter_unit',meUnitHandler.listPMMeterUnit)
    adminRouter.post('/pm_meter_unit',meUnitHandler.createPMMeterUnit)
    adminRouter.put('/pm_meter_unit/:id',meUnitHandler.updatePMMeterUnit )
    adminRouter.delete('/pm_meter_unit/:id',meUnitHandler.deletePMMeterUnit )

    //Cost Center
    adminRouter.get('/costcenters', costCenterHandler.listCostCenter)
    adminRouter.get('/costcenters/:id', costCenterHandler.getCostCenter)
    adminRouter.post('/costcenters', costCenterHandler.createCostCenter)
    adminRouter.put('/costcenters/:id', costCenterHandler.updateCostCenter)
    adminRouter.delete('/costcenters/:id', costCenterHandler.deleteCostCenter)

    //Vendor
    adminRouter.get('/vendor', vendorHandler.listVendor)
    adminRouter.get('/vendor/:id', vendorHandler.getVendor)
    adminRouter.get('/vendor/:id/eq_products', vendorHandler.listEQProductVendor)
    adminRouter.get('/vendor/:id/spare_part_products',vendorHandler.ListSparePartProductUseCase)
    adminRouter.post('/vendor', vendorHandler.createVendor)
    adminRouter.put('/vendor/:id', vendorHandler.updateVendor)
    adminRouter.delete('/vendor/:id', vendorHandler.deleteVendor)
    
    // WO Type 
    adminRouter.get('/wo_type', woTypeHandler.listWOType)
    adminRouter.get('/wo_type/:id', woTypeHandler.getWOType)
    adminRouter.post('/wo_type', woTypeHandler.createWOType)
    adminRouter.put('/wo_type/:id', woTypeHandler.updateWOType)
    adminRouter.delete('/wo_type/:id', woTypeHandler.deleteWOType)

    // Departments
    adminRouter.get('/departments', departmentHandler.listDepartment)
    adminRouter.get('/departments/:id', departmentHandler.getDepartment)
    adminRouter.post('/departments', departmentHandler.createDepartment)
    adminRouter.put('/departments/:id', departmentHandler.updateDepartment)
    adminRouter.delete('/departments/:id', departmentHandler.deleteDepartment)

    // Standard Job
    adminRouter.get('/standard_jobs' ,standardJobHandler.listSJ )
    adminRouter.get('/standard_jobs/:id' ,standardJobHandler.getSJ )
    adminRouter.post('/standard_jobs' ,standardJobHandler.creatSJ )
    adminRouter.put('/standard_jobs/:id' ,standardJobHandler.updateSJ )
    adminRouter.delete('/standard_jobs/:id' ,standardJobHandler.deleteSJ )

    // Contract
    adminRouter.get('/contract', contractHandler.listContract)
    adminRouter.get('/contract/:id', contractHandler.getContract)
    adminRouter.post('/contract', contractHandler.createContract)
    adminRouter.put('/contract/:id', contractHandler.updateContract)
    adminRouter.delete('/contract/:id', contractHandler.deleteContract)

    //Store
    adminRouter.get('/store',storeHandler.listStore)
    adminRouter.get('/store/:id',storeHandler.getStore)
    adminRouter.post('/store',storeHandler.createStore)
    adminRouter.put('/store/:id',storeHandler.updateStore)
    adminRouter.delete('/store/:id',storeHandler.deleteStore)
    // Expense Type
    adminRouter.get('/expense_type', ExpenseTypeHandler.listExpenseType)
    adminRouter.get('/expense_type/:id', ExpenseTypeHandler.getExpenseType)
    adminRouter.post('/expense_type', ExpenseTypeHandler.createExpenseType)
    adminRouter.put('/expense_type/:id', ExpenseTypeHandler.updateExpenseType)  
    adminRouter.delete('/expense_type/:id', ExpenseTypeHandler.deleteExpenseType)
    // IVUnit 
    adminRouter.get('/iv_unit', ivUnitHandler.listIVUnit)
    adminRouter.get('/iv_unit/:id', ivUnitHandler.getIVUnit)
    adminRouter.post('/iv_unit', ivUnitHandler.createIVUnit)
    adminRouter.put('/iv_unit/:id', ivUnitHandler.updateIVUnit)
    adminRouter.delete('/iv_unit/:id', ivUnitHandler.deleteIVUnit)

    //Urgent
    adminRouter.get('/urgent', urgentHandler.listUrgent)
    adminRouter.get('/urgent/:id', urgentHandler.getUrgent)
    adminRouter.post('/urgent', urgentHandler.createUrgent)
    adminRouter.put('/urgent/:id', urgentHandler.updateUrgent)
    adminRouter.delete('/urgent/:id', urgentHandler.deleteUrgent)
    
    
    adminRouter.get('/eq_type', eqTypeHandler.listEQType)
    adminRouter.get('/eq_type/:id', eqTypeHandler.getEQType)
    adminRouter.post('/eq_type', eqTypeHandler.createEQType)
    adminRouter.put('/eq_type/:id', eqTypeHandler.updateEQType)
    adminRouter.delete('/eq_type/:id', eqTypeHandler.deleteEQType)

    //Move Type
    adminRouter.get('/move_type',moveTypeHandler.listMoveType)
    adminRouter.get('/move_type/:id',moveTypeHandler.getMoveType)
    adminRouter.post('/move_type', moveTypeHandler.createMoveTpe)
    adminRouter.put('/move_type/:id', moveTypeHandler.updateMoveType)
    adminRouter.delete('/move_type/:id', moveTypeHandler.deleteMoveType)

    //ManHour Type
    adminRouter.get('/mh_type',manhourTypeHandler.listMHType)
    adminRouter.get('/mh_type/:id',manhourTypeHandler.getMHType)
    adminRouter.post('/mh_type', manhourTypeHandler.createMHType)
    adminRouter.put('/mh_type/:id', manhourTypeHandler.updateMHType)
    adminRouter.delete('/mh_type/:id', manhourTypeHandler.deleteMHType)

    adminRouter.get('/failure_modes',failureModesHandler.listFailureModes)

    //FailureEffects
    adminRouter.get('/failure_effects', failureEffectsHandler.listfailureEffects)
    adminRouter.get('/failure_effects/:id', failureEffectsHandler.getfailureEffects)
    adminRouter.post('/failure_effects', failureEffectsHandler.createfailureEffects)
    adminRouter.put('/failure_effects/:id', failureEffectsHandler.updatefailureEffects)
    adminRouter.delete('/failure_effects/:id', failureEffectsHandler.deletefailureEffects)

    
    //Failure Cause
    adminRouter.get('/failure_causes',failureCauseHandler.listFailureCause)
    adminRouter.get('/failure_causes/:id',failureCauseHandler.getFailureCause)
    adminRouter.post('/failure_causes', failureCauseHandler.createFailureCause)
    adminRouter.put('/failure_causes/:id', failureCauseHandler.updateFailureCause)
    adminRouter.delete('/failure_causes/:id', failureCauseHandler.deleteFailureCause)


    router.use('/admin', adminRouter)
}

export default routes