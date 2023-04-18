
import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        unique: [true, "email is unique"]
    },
    password: {
        type:String,
        required: [true,'password is required']
    },
    role: {
        type: String,
        default: "user",
        required: [true, 'role is required']
    },
    gender: { type: String, enum: ['Male', 'Female'], default: 'Male' },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    jobTitle: {
        type: String,
        required: [true, 'jobTitle is required']
    },
    hireDate: {
        type: String,
        required: [true, 'hireDate is required']
    },
    branch: {
        type: String,
        required: [true, 'branch is required']
    },
    confirmEmail: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    code: { type: String, default: "" },
    allFiles: [String],
    publicId: [String],
    files: [String]
}, {
    timestamps: true
})

const userModel = mongoose.model('user', userSchema)
export default userModel