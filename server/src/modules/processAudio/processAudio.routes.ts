import { Router } from 'express';

import { processTextToAI } from './processAudio.controller';

const processAudioRoutes = Router();

processAudioRoutes.post('/getTextResponse', processTextToAI);

export default processAudioRoutes;
