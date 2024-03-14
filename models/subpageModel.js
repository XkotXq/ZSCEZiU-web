import mongoose, { Schema } from "mongoose";


const subpageSchema= new mongoose.Schema({
        title: String,
        path: String,
        share: Boolean,
        content: [Schema.Types.Mixed],
    },
    {
        timestamps: true
    })
subpageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Subpage = mongoose.models.Subpage || mongoose.model('Subpage', subpageSchema)

export default Subpage;