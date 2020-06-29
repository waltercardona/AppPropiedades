const mongoose = require('mongoose')

const { ALQUILER_APP_MONGODB_HOST, ALQUILER_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${ALQUILER_APP_MONGODB_HOST}/${ALQUILER_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));