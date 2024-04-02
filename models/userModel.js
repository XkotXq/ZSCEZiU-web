import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Musisz podac nazwe uzytkownika."],
        unique: [true, "Nazwa uzytkownika musi byc unikalna"]
    },
    email: {
        type: String,
        required: [true, "Email musi być unikalny"]
    },
    password: {
        type: String,
        required: [true, "Musisz podac haslo"]
    },
    permission: {
        type: String,
        required: [true, "Musisz podać uprawnienia"]
    },
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