import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL:{
        type: String,
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    }

},    {
    timestamps: true
})

export default mongoose.model('New', newsSchema)