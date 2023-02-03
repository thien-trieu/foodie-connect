require('dotenv').config();
const app = require('./server');
const port = process.env.PORT || 3001;

// ----------------------- LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}`));