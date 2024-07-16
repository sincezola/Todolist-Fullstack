import app from './app.js';
import config from 'dotenv';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
