
import mongoose from "mongoose";


const fileSchema = mongoose.Schema({
    file:String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
}, {
    timestamps: true
})

const fileModel =  mongoose.model('file', fileSchema)
export default fileModel