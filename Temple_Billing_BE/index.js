require('dotenv').config();

const express = require('express')
const app = express()
const mongoos = require('mongoose')
app.use(express.json()) // Middleware
const port = process.env.PORT
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001',  // Allow requests from your local frontend
  // origin: 'https://main.ds136pue90r52.amplifyapp.com'
}));


// var admin = require("firebase-admin");
// var serviceAccount = require('./firebase/creds.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://test-clofas-default-rtdb.firebaseio.com"
// });

const uri = process.env.CONNECTION_URL;

// const Category = require('./models/membersModel');
// const Item = require('./models/notusing_itemModel');

mongoos.connect(uri).then((res) => {
    console.log('Data base connected ☺️')
    app.listen(port, () => {
        console.log('server is running in '+ process.env.PORT+' port')
    })
}).catch(error => console.log('error:', error))



// const membersController = require('./controllers/membersController');
// const paymentHistoryController = require('./controllers/paymentHistoryController');
// const planController = require('./controllers/planController');
// const renewPlanController = require('./controllers/renewPlanController');
// const dietPlanController = require('./controllers/dietPlanController');

// const usersController = require('./controllers/usersController');

// // const paymentRepotyChartController = require('./controllers/not-using-paymentReportChartController');

// // const itemController = require('./controllers/notusing_itemController');
// app.use('/members', membersController);
// app.use('/plan', planController);
// app.use('/paymentHistory', paymentHistoryController);
// app.use('/renewplan',renewPlanController );
// app.use('/dietPlan',dietPlanController );
// app.use('/users',usersController );

const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const templeController = require('./controllers/templeController');
const billsController = require('./controllers/billsController');
const dashboardController = require('./controllers/dashboardController');
const addressController = require('./controllers/addressController');

app.use('/login',loginController );
app.use('/users',userController );
app.use('/temple', templeController);
app.use('/bills', billsController);
app.use('/dashboard', dashboardController);
app.use('/address', addressController);


