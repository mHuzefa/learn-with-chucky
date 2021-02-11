const mongoose = require('mongoose')
const URI = "mongodb+srv://admin:admin@chucky.o1nbe.mongodb.net/chucky?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.connection