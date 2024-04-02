const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: String,
    description: String,
    serviceType: String,
    tags: [String],
    images: [String],
    state: String,
    author: String
});
serviceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

module.exports = Service;
