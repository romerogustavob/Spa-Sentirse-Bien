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
    },
    author: {
        type: String,
    },

},    {
    timestamps: true
})

export default mongoose.model('New', newsSchema)

// export class News {
    //private id: number;
    //private title: string
    //private description: string
    //private imageUrl?: string
    //private publishedAt: Date
    //private author: string }