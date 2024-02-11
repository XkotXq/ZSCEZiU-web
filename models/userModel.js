import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Must provide a username."],
        unique: [true, "Must be unique."]
    },
    email: {
        type: String,
        required: [true, "Email musi być unikalny"]
    },
    password: {
        type: String,
        required: [true, "Must provide a password"]
    },
    permissions: {
        createPosts: {
            type: Boolean,
            default: false
        },
        editPosts: {
            type: Boolean,
            default: false
        },
        removePosts: {
            type: Boolean,
            default: false
        },
        managePosts: {
            type: Boolean,
            default: false
        },
        administrator: {
            type: Boolean,
            default: false
        }
    }
},
{
    timestamps: true
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;