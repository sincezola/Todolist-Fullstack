import app from './app.js';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
