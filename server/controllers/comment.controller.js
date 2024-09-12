import Comment from '../models/comment_model.js'

export const createComment = async (req, res) => {
    const {author, content, date } = req.body

    const newComment = new Comment({
        author,
        content,
        date
    })

    const savedComment = await newComment.save()
    res.json(savedComment)
}

export const deleteComment = async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id)

    if (!comment) return res.status(404).json({message:"Cometntario no encontrado."})

    return res.status(204)
}