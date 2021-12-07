let express = require('express');
let mongoose = require('mongoose');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let authRoutes = require('./routes/authRoutes');
let apiRoutes = require('./routes/apiRoutes');
let { requireAuth } = require('./middleware/authMiddleware');

require('dotenv').config();
var corsOptions = {
  origin: 'https://proyectociclo4frontend.herokuapp.com/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const app = express();

mongoose
  .connect(
    //online
    process.env.DB_online,
    //local
    //process.env.DB_local,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Conected to Mongo at: ' + process.env.DB_HOST);
    app.listen(process.env.PORT || 8080);
    console.log('Listening on PORT: ' + process.env.PORT);
  })
  .catch((err) => console.log(err));

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/auth', authRoutes);
app.use('/api', requireAuth, apiRoutes);
