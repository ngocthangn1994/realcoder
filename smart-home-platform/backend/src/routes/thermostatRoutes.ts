import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { decreaseThermostat, getCurrentThermostat, increaseThermostat, setThermostat } from '../controllers/thermostatController';

const router = Router();
router.get('/current', asyncHandler(getCurrentThermostat));
router.post('/set', asyncHandler(setThermostat));
router.post('/increase', asyncHandler(increaseThermostat));
router.post('/decrease', asyncHandler(decreaseThermostat));

export default router;
