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

},    {
    timestamps: true
})

export default mongoose.model('New', newsSchema)