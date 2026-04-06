const express = require('express');
require('dotenv').config();
require('./config/db'); 

const app = express();

app.use(express.json());
const userRoutes = require('./modules/users/user.routes');
const financeRoutes = require('./modules/finance/finance.routes');
const { attachUser } = require('./middleware/auth.middleware');
const dashboardRoutes = require('./modules/dashboard/dashboard.routes');

app.use('/api/dashboard', dashboardRoutes);
app.use(attachUser); // applies to all routes
app.use('/api/records', financeRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Finance Backend Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
