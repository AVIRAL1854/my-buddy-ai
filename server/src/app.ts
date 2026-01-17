import express from 'express';

import processAudioRoutes from './modules/processAudio/processAudio.routes';
import userRoutes from './modules/user/user.routes';

const app = express();

app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/process-audio', processAudioRoutes);

export default app;
