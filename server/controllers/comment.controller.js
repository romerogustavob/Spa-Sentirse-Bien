import Comment from '../models/comment_model.js'

export const createComment = async (req, res) => {
    try{
        const {author, content, date = Date.now() } = req.body

        const newComment = new Comment({
            author,
            content,
            date
        })
    
        const savedComment = await newComment.save()
        res.status(201).json(savedComment)
    }
    catch(error) {
        res.status(500).json({ message: 'Error al crear el comentario.', error });
    }
}

export const deleteComment = async (req, res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id)

        if (!comment) return res.status(404).json({message:"Cometntario no encontrado."})

        return res.status(204)
    }
    catch(error) {
        res.status(500).json({ message: 'Error al eliminar el comentario.', error });
    }
}