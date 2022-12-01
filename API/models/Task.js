const mongoose = require('mongoose');
const { Schema } = mongoose


const taskSchema =new Schema ({
    title: {type: String, require: true},
    description: { type: String, require: true},
    date_create: {type: Date, default: Date.now, require: true },
    priority: {type: String, require: true },
})
taskSchema.set('toJSON', {
    transform : (document, returnedObject) => {
        delete returnedObject.__v
    }
})
module.exports = mongoose.model('Task', taskSchema)