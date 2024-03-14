import mongoose, { Schema } from "mongoose";


    const postSchema= new mongoose.Schema({
        title: String,
        tags: [String],
        date: String,
        img: String,
        desc: String,
        share: Boolean,
        content: [Schema.Types.Mixed],
    },
    {
        timestamps: true
    })
postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Post;